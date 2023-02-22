/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

'use strict'
const Connection = require('../Connection')
const Transport = require('../Transport')
const aws4 = require('aws4')
const AwsSigv4SignerError = require('./errors')
const crypto = require('crypto')

const getAwsSDKCredentialsProvider = async () => {
  // First try V3
  try {
    const awsV3 = await import('@aws-sdk/credential-provider-node')
    if (typeof awsV3.defaultProvider === 'function') {
      return awsV3.defaultProvider()
    }
  } catch (err) {
    // Ignore
  }
  try {
    const awsV2 = await import('aws-sdk')
    if (awsV2.default && typeof awsV2.default.config.getCredentials === 'function') {
      return () =>
        new Promise((resolve, reject) => {
          awsV2.default.config.getCredentials((err, credentials) => {
            if (err) {
              reject(err)
            } else {
              resolve(credentials)
            }
          })
        })
    }
  } catch (err) {
    // Ignore
  }

  throw new AwsSigv4SignerError(
    'Unable to find a valid AWS SDK, please provide a valid getCredentials function to AwsSigv4Signer options.'
  )
}

const awsDefaultCredentialsProvider = () =>
  new Promise((resolve, reject) => {
    getAwsSDKCredentialsProvider()
      .then((provider) => {
        provider().then(resolve).catch(reject)
      })
      .catch((err) => {
        reject(err)
      })
  })

function AwsSigv4Signer (opts = {}) {
  const credentialsState = {
    credentials: null
  }
  if (!opts.region) {
    throw new AwsSigv4SignerError('Region cannot be empty')
  }
  if (!opts.service) {
    opts.service = 'es'
  }
  if (typeof opts.getCredentials !== 'function') {
    opts.getCredentials = awsDefaultCredentialsProvider
  }

  function buildSignedRequestObject (request = {}) {
    request.service = opts.service
    request.region = opts.region
    request.headers = request.headers || {}
    request.headers.host = request.hostname
    const signed = aws4.sign(request, credentialsState.credentials)
    signed.headers['x-amz-content-sha256'] = crypto
      .createHash('sha256')
      .update(request.body || '', 'utf8')
      .digest('hex')
    return signed
  }

  class AwsSigv4SignerConnection extends Connection {
    buildRequestObject (params) {
      const request = super.buildRequestObject(params)
      return buildSignedRequestObject(request)
    }
  }

  class AwsSigv4SignerTransport extends Transport {
    request (params, options = {}, callback = undefined) {
      // options is optional so if options is a function, it's the callback.
      if (typeof options === 'function') {
        callback = options
        options = {}
      }

      const currentCredentials = credentialsState.credentials
      let expired = false
      if (!currentCredentials) {
        // Credentials haven't been acquired yet.
        expired = true
      } else if (typeof currentCredentials.needsRefresh === 'function') {
        // AWS SDK V2, needsRefresh should be available.
        expired = currentCredentials.needsRefresh()
      } else if (currentCredentials.expired === true) {
      // AWS SDK V2, alternative to needsRefresh.
        expired = true
      } else if (currentCredentials.expireTime && currentCredentials.expireTime < new Date()) {
        // AWS SDK V2, alternative to needsRefresh and expired.
        expired = true
      } else if (currentCredentials.expiration && currentCredentials.expiration < new Date()) {
        // AWS SDK V3, Credentials.expiration is a Date object
        expired = true
      }

      if (!expired) {
        if (typeof callback === 'undefined') {
          return super.request(params, options)
        }
        super.request(params, options, callback)
        return
      }

      // In AWS SDK V2 Credentials.refreshPromise should be available.
      if (currentCredentials && typeof currentCredentials.refreshPromise === 'function') {
        if (typeof callback === 'undefined') {
          return currentCredentials.refreshPromise().then(() => {
            return super.request(params, options)
          })
        } else {
          currentCredentials
            .refreshPromise()
            .then(() => {
              super.request(params, options, callback)
            })
            .catch(callback)
          return
        }
      }

      // For AWS SDK V3 or when the client has not acquired credentials yet.
      if (typeof callback === 'undefined') {
        return opts.getCredentials().then((credentials) => {
          credentialsState.credentials = credentials
          return super.request(params, options)
        })
      } else {
        opts
          .getCredentials()
          .then((credentials) => {
            credentialsState.credentials = credentials
            super.request(params, options, callback)
          })
          .catch(callback)
      }
    }
  }

  return {
    Transport: AwsSigv4SignerTransport,
    Connection: AwsSigv4SignerConnection,
    buildSignedRequestObject
  }
}
module.exports = AwsSigv4Signer

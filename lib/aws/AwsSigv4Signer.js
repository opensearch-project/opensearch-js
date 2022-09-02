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

'use strict';
const Connection = require('../Connection');
const Transport = require('../Transport');
const aws4 = require('aws4');
const AwsSigv4SignerError = require('./errors');

async function AwsSigv4Signer(opts) {
  const credentialsState = {
    credentials: null,
  };
  if (opts && (!opts.region || opts.region === null || opts.region === '')) {
    throw new AwsSigv4SignerError('Region cannot be empty');
  }
  if (opts && typeof opts.getCredentials !== 'function') {
    throw new AwsSigv4SignerError('getCredentials function is required');
  }

  try {
    credentialsState.credentials = await opts.getCredentials();
  } catch (error) {
    throw new AwsSigv4SignerError('fetching credentials failed', error);
  }

  function buildSignedRequestObject(request = {}) {
    request.service = 'es';
    request.region = opts.region;
    request.headers = request.headers || {};
    request.headers['host'] = request.hostname;
    return aws4.sign(request, credentialsState.credentials);
  }
  class AwsSigv4SignerConnection extends Connection {
    buildRequestObject(params) {
      const request = super.buildRequestObject(params);
      return buildSignedRequestObject(request);
    }
  }

  class AwsSigv4SignerTransport extends Transport {
    request(params, options = {}, callback = undefined) {
      // options is optional,
      // so if it is omitted, options will be the callback
      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      /** @type {import('aws-sdk').Credentials} */
      const currentCredentials = credentialsState.credentials;

      const expired =
        (typeof currentCredentials.expired !== 'undefined' && currentCredentials.expired) ||
        (typeof currentCredentials.expiration !== 'undefined' &&
          currentCredentials.expiration < new Date()) ||
        (typeof currentCredentials.expired === 'undefined' &&
          typeof currentCredentials.expiration === 'undefined');

      if (expired) {
        // Promise support
        if (typeof callback === 'undefined') {
          return opts.getCredentials().then((newCredentials) => {
            credentialsState.credentials = newCredentials;
            return super.request(params, options);
          });
        }

        // Callback support
        opts
          .getCredentials()
          .then((newCredentials) => {
            credentialsState.credentials = newCredentials;
            return super.request(params, options, callback);
          })
          .catch(callback);
      } else if (typeof callback === 'undefined') {
        return super.request(params, options);
      } else {
        super.request(params, options, callback);
      }
    }
  }

  return {
    Transport: AwsSigv4SignerTransport,
    Connection: AwsSigv4SignerConnection,
    buildSignedRequestObject,
    credentialsState,
  };
}
module.exports = AwsSigv4Signer;

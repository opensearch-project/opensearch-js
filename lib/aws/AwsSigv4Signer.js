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
const aws4 = require('aws4');
const AwsSigv4SignerError = require('./errors');

const DEFAULT_REFRESH_INTERVAL = 1000 * 60 * 14; // 14 minutes.

async function AwsSigv4Signer(opts) {
  const credentialsState = {
    credentials: null,
    refreshInterval: null,
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

  if (opts && opts.refresh === true && !credentialsState.refreshInterval) {
    credentialsState.refreshInterval = setInterval(
      async () => {
        try {
          credentialsState.credentials = await opts.getCredentials();
        } catch (error) {
          throw new AwsSigv4SignerError('fetching credentials failed', error);
        }
      },
      typeof opts.refreshInterval === 'number'
        ? Math.max(opts.refreshInterval, DEFAULT_REFRESH_INTERVAL)
        : DEFAULT_REFRESH_INTERVAL
    );
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

  return {
    Connection: AwsSigv4SignerConnection,
    buildSignedRequestObject,
  };
}
module.exports = AwsSigv4Signer;

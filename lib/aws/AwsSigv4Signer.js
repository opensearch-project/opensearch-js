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

function AwsSigv4Signer(opts) {
  if (opts && (!opts.region || opts.region === null || opts.region === '')) {
    throw new AwsSigv4SignerError('Region cannot be empty');
  }
  if (opts && (!opts.credentials || opts.credentials === null || opts.credentials === '')) {
    throw new AwsSigv4SignerError('Credentials cannot be empty');
  }

  function buildSignedRequestObject(request = {}) {
    request.service = 'es';
    request.region = opts.region;
    request.headers = request.headers || {};
    request.headers['host'] = request.hostname;
    return aws4.sign(request, opts.credentials);
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

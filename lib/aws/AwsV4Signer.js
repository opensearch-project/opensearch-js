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
const { AwsV4SignerError } = require('./errors');

function AwsV4Signer(opts) {
  if (opts && (!opts.region || opts.region === null || opts.region === '')) {
    throw new AwsV4SignerError('Region cannot be empty');
  }
  if (opts && (!opts.credentials || opts.credentials === null || opts.credentials === '')) {
    throw new AwsV4SignerError('Credentials cannot be empty');
  }

  function buildSignedRequestObject(request = {}) {
    request.service = 'es';
    request.region = opts.region;
    request.headers = request.headers || {};
    request.headers['host'] = request.hostname;
    return aws4.sign(request, opts.credentials);
  }
  class AwsV4SignedConnection extends Connection {
    buildRequestObject(params) {
      const request = super.buildRequestObject(params);
      return buildSignedRequestObject(request);
    }
  }
  return {
    Connection: AwsV4SignedConnection,
    buildSignedRequestObject,
  };
}
module.exports = AwsV4Signer;

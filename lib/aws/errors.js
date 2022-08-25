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
const { OpenSearchClientError } = require('../errors');

class AwsV4SignerError extends OpenSearchClientError {
  constructor(message, data) {
    super(message, data);
    Error.captureStackTrace(this, AwsV4SignerError);
    this.name = 'AwsV4SignerError';
    this.message = message || 'AwsV4Signer Error';
    this.data = data;
  }
}

module.exports = {
  AwsV4SignerError,
};

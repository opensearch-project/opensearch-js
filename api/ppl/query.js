/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

/*
 * This file was generated from the OpenSearch API Spec. Do NOT edit it
 * manually. If you want to make changes, either update the spec or
 * modify the API generator.
 */

'use strict';

const { normalizeArguments, handleMissingParam } = require('../utils');

/**
 * Executes a PPL query against OpenSearch indexes.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/search-plugins/sql/sql-ppl-api/ - ppl.query}
 *
 * @memberOf API-Ppl
 *
 * @param {object} params
 * @param {string} [params.format] - Specifies the response format (JSON OR YAML).
 * @param {boolean} [params.sanitize=true] - Whether to sanitize special characters in the results.
 * @param {object} params.body - Contains the PPL query to execute.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function queryFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, ...querystring } = params;

  const path = '/_plugins/_ppl';
  const method = 'POST';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = queryFunc;

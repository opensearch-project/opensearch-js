/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

'use strict'

const { normalizeArguments, parsePathParam, handleMissingParam } = require('../utils');

/**
 * Create or update index rollup.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-rollups/rollup-api/#create-or-update-an-index-rollup-job - rollups.put}
 *
 * @memberOf API-Rollups
 *
 * @param {object} params
 * @param {number} [params.if_primary_term] - Only perform the operation if the document has this primary term.
 * @param {number} [params.if_seq_no] - Only perform the operation if the document has this sequence number.
 * @param {string} params.id - Rollup to access
 * @param {object} [params.body] 
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function putFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.id == null) return handleMissingParam('id', this, callback);

  let { body, id, ...querystring } = params;
  id = parsePathParam(id);

  const path = '/_plugins/_rollup/jobs/' + id;
  const method = 'PUT';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = putFunc;

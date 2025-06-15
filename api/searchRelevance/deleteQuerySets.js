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

const { normalizeArguments, parsePathParam, handleMissingParam } = require('../utils');

/**
 * Deletes a query set.
 * <br/> See Also: {@link undefined - search_relevance.delete_query_sets}
 *
 * @memberOf API-Search-Relevance
 *
 * @param {object} params
 * @param {string} params.query_set_id - The query set id
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function deleteQuerySetsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.query_set_id == null) return handleMissingParam('query_set_id', this, callback);

  let { body, query_set_id, ...querystring } = params;
  query_set_id = parsePathParam(query_set_id);

  const path = '/_plugins/search_relevance/query_sets/' + query_set_id;
  const method = 'DELETE';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = deleteQuerySetsFunc;

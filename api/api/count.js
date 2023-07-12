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
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

'use strict';

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

/** @namespace API-Count */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = [
  'ignore_unavailable',
  'ignore_throttled',
  'allow_no_indices',
  'expand_wildcards',
  'min_score',
  'preference',
  'routing',
  'q',
  'analyzer',
  'analyze_wildcard',
  'default_operator',
  'df',
  'lenient',
  'terminate_after',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
];
const snakeCase = {
  ignoreUnavailable: 'ignore_unavailable',
  ignoreThrottled: 'ignore_throttled',
  allowNoIndices: 'allow_no_indices',
  expandWildcards: 'expand_wildcards',
  minScore: 'min_score',
  analyzeWildcard: 'analyze_wildcard',
  defaultOperator: 'default_operator',
  terminateAfter: 'terminate_after',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

/**
 * The count API gives you quick access to the number of documents that match a query. You can also use it to check the document count of an index, data stream, or cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/count/ OpenSearch - Bulk}
 *
 * @memberOf API-Count
 *
 * @param {Object} params
 * @param {boolean} [params.allow_no_indices=false] - If false, the request returns an error if any wildcard expression or index alias targets any closed or missing indices.
 * @param {string} [params.analyzer] - The analyzer to use in the query string.
 * @param {boolean} [params.analyze_wildcard=false] - Specifies whether to analyze wildcard and prefix queries.
 * @param {string} [params.default_operator='OR'] - Indicates whether the default operator for a string query should be 'AND' or 'OR'.
 * @param {string} [params.df] - The default field in case a field prefix is not provided in the query string.
 * @param {string} [params.expand_wildcards=open] - Expands wildcard expressions to concrete indices. Combine multiple values with commas. Supported values are 'all', 'open', 'closed', 'hidden', and 'none'.
 * @param {boolean} [params.ignore_unavailable=false] - Specifies whether to include missing or closed indices in the response.
 * @param {boolean} [params.lenient=false] - Specifies whether OpenSearch should accept requests if queries have format errors (for example, querying a text field for an integer).
 * @param {number} [params.min_score] - Include only documents with a minimum '_score' value in the result.
 * @param {string} [params.routing] - Value used to route the operation to a specific shard.
 * @param {string} [params.preference] - Specifies which shard or node OpenSearch should perform the count operation on.
 * @param {number} [params.terminate_after] - The maximum number of documents OpenSearch should process before terminating the request.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/count/#response Count Response}
 */

function countApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required url components
  if (params.type != null && params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index');
    return handleError(err, callback);
  }

  let { method, body, index, type, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null && type != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_count';
  } else if (index != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_count';
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + '_count';
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
}

module.exports = countApi;

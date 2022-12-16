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

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = [
  'search_type',
  'typed_keys',
  'max_concurrent_searches',
  'rest_total_hits_as_int',
  'ccs_minimize_roundtrips',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
];
const snakeCase = {
  searchType: 'search_type',
  typedKeys: 'typed_keys',
  maxConcurrentSearches: 'max_concurrent_searches',
  restTotalHitsAsInt: 'rest_total_hits_as_int',
  ccsMinimizeRoundtrips: 'ccs_minimize_roundtrips',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

/**
 * Allows to execute several search template operations in one request.
 *
 * @memberOf API-Search
 *
 * @param {Object} params
 * @param {string} params.index - A comma-separated list of index names to use as default
 * @param {Object} params.body - The request definitions (metadata-search request definition pairs), separated by newlines
 * @param {string} [params.search_type] - Search operation type (options: query_then_fetch, dfs_query_then_fetch)
 * @param {boolean} [params.typed_keys] - Specify whether aggregation and suggester names should be prefixed by their respective types in the response
 * @param {number} [params.max_concurrent_searches] - Controls the maximum number of concurrent searches the multi search api will execute
 * @param {boolean} [params.rest_total_hits_as_int] - Indicates whether hits.total should be rendered as an integer or an object in the rest search response
 * @param {boolean} [params.ccs_minimize_roundtrips] - Indicates whether network round-trips should be minimized as part of cross-cluster search requests execution
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function msearchTemplateApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

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
    path =
      '/' +
      encodeURIComponent(index) +
      '/' +
      encodeURIComponent(type) +
      '/' +
      '_msearch' +
      '/' +
      'template';
  } else if (index != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_msearch' + '/' + 'template';
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + '_msearch' + '/' + 'template';
  }

  // build request object
  const request = {
    method,
    path,
    bulkBody: body,
    querystring,
  };

  return this.transport.request(request, options, callback);
}

module.exports = msearchTemplateApi;

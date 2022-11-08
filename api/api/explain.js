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
  'analyze_wildcard',
  'analyzer',
  'default_operator',
  'df',
  'stored_fields',
  'lenient',
  'preference',
  'q',
  'routing',
  '_source',
  '_source_excludes',
  '_source_exclude',
  '_source_includes',
  '_source_include',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
];
const snakeCase = {
  analyzeWildcard: 'analyze_wildcard',
  defaultOperator: 'default_operator',
  storedFields: 'stored_fields',
  _sourceExcludes: '_source_excludes',
  _sourceExclude: '_source_exclude',
  _sourceIncludes: '_source_includes',
  _sourceInclude: '_source_include',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

/**
 * Returns information about why a specific matches (or doesn't match) a query.
 * <br/> See also: {@link https://opensearch.org/docs/latest/api-reference/explain/ OpenSearch - Explain}
 * @memberOf API-Search
 *
 * @param {Object} params
 * @param {string} [params.id] - The document ID
 * @param {string} [params.index] - The name of the index
 * @param {Object} [params.body] - The query definition using the Query DSL
 * @param {string} [params.analyzer] - The analyzer to use for the query string
 * @param {boolean} [params.analyze_wildcard=false] - Specify whether wildcard and prefix queries should be analyzed
 * @param {string} [params.default_operator=OR] - The default operator for query string query (options: AND, OR)
 * @param {string} [params.df] - The default field for query string query (default: _all)
 * @param {string} [params.stored_fields] - A comma-separated list of stored fields to return in the response
 * @param {boolean} [params.lenient] - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
 * @param {string} [params.preference] - Specify the node or shard the operation should be performed on (default: random)
 * @param {string} [params.q] - Query in the Lucene query string syntax
 * @param {string} [params.routing] - Specific routing value
 * @param {string} [params._source=true] - Whether to include the '_source' field in the response body.
 * @param {string} [params._source_excludes] - A comma-separated list of source fields to exclude in the query response.
 * @param {string} [params._source_includes] - A comma-separated list of source fields to include in the query response.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function explainApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }

  let { method, body, id, index, type, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null && type != null && id != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path =
      '/' +
      encodeURIComponent(index) +
      '/' +
      encodeURIComponent(type) +
      '/' +
      encodeURIComponent(id) +
      '/' +
      '_explain';
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_explain' + '/' + encodeURIComponent(id);
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

module.exports = explainApi;

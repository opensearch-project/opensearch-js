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
  'stored_fields',
  'preference',
  'realtime',
  'refresh',
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
  storedFields: 'stored_fields',
  _sourceExcludes: '_source_excludes',
  _sourceExclude: '_source_exclude',
  _sourceIncludes: '_source_includes',
  _sourceInclude: '_source_include',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

/**
 * Retrieve multiple documents
 * <br/> See Also: {@link https://opensearch.org/docs/2.4/api-reference/document-apis/multi-get/ OpenSearch - Multi-get Document}
 *
 * @memberOf API-Document
 *
 * @param {Object} params
 * @param {string} params.index - Name of the index.
 * @param {string} params.id - Document ID.
 * @param {string} params.body - {@link https://opensearch.org/docs/2.4/api-reference/document-apis/multi-get/#request-body Multi-get Request Body}
 * @param {string} [params.preference] - Specifies a preference of which shard to retrieve results from. Available options are '_local', which tells the operation to retrieve results from a locally allocated shard replica, and a custom string value assigned to a specific shard replica. By default, OpenSearch executes get document operations on random shards.
 * @param {boolean} [params.realtime=true] - Specifies whether the operation should run in realtime. If false, the operation waits for the index to refresh to analyze the source to retrieve data, which makes the operation near-realtime.
 * @param {boolean} [params.refresh=false] - If true, OpenSearch refreshes shards to make the get operation available to search results. Valid options are 'true', 'false', and 'wait_for', which tells OpenSearch to wait for a refresh before executing the operation.
 * @param {string} [params.routing] - A value used to route the operation to a specific shard.
 * @param {boolean} [params.stored_fields=false] - Whether the get operation should retrieve fields stored in the index.
 * @param {string} [params._source=true] - Whether to include the '_source' field in the response body.
 * @param {string} [params._source_excludes] - A comma-separated list of source fields to exclude in the query response.
 * @param {string} [params._source_includes] - A comma-separated list of source fields to include in the query response.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/2.4/api-reference/document-apis/multi-get/#response Multi-get Response}
 */
function mgetApi(params, options, callback) {
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
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_mget';
  } else if (index != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_mget';
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + '_mget';
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

module.exports = mgetApi;

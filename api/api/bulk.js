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
  'wait_for_active_shards',
  'refresh',
  'routing',
  'timeout',
  'type',
  '_source',
  '_source_excludes',
  '_source_exclude',
  '_source_includes',
  '_source_include',
  'pipeline',
  'require_alias',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
];
const snakeCase = {
  waitForActiveShards: 'wait_for_active_shards',
  _sourceExcludes: '_source_excludes',
  _sourceExclude: '_source_exclude',
  _sourceIncludes: '_source_includes',
  _sourceInclude: '_source_include',
  requireAlias: 'require_alias',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

/**
 * The bulk operation lets you add, update, or delete many documents in a single request.
 * Compared to individual OpenSearch indexing requests, the bulk operation has significant performance benefits.
 * Whenever practical, we recommend batching indexing operations into bulk requests.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/document-apis/bulk/|OpenSearch - Bulk}
 *
 * @memberOf API-Document
 *
 * @param {Object} params
 * @param {Object[]} params.body - {@link https://opensearch.org/docs/latest/api-reference/document-apis/bulk/#request-body|Request Body}
 * @param {string} [params.index] - Specifying the index means you don’t need to include it in the request body.
 * @param {string} [params.pipeline] - The pipeline ID for preprocessing documents.
 * @param {string} [params.routing] - Routes the request to the specified shard.
 * @param {string} [params.refresh=false] - If true, OpenSearch refreshes shards to make the operation visible to searching. Valid options are 'true', 'false', and 'wait_for', which tells OpenSearch to wait for a refresh before executing the operation.
 * @param {string} [params.timeout=1m] - How long to wait for a response from the cluster.
 * @param {string} [params.wait_for_active_shards] - The number of active shards that must be available before OpenSearch processes the request. Default is 1 (only the primary shard). Set to all or a positive integer. Values greater than 1 require replicas. For example, if you specify a value of 3, the index must have two replicas distributed across two additional nodes for the operation to succeed.
 * @param {boolean} [params.require_alias=false] - Specifies whether the target index must be an index alias.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/document-apis/bulk/#response|Bulk Response}
 */
function bulkApi(params, options, callback) {
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
    if (method == null) method = 'POST';
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_bulk';
  } else if (index != null) {
    if (method == null) method = 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_bulk';
  } else {
    if (method == null) method = 'POST';
    path = '/' + '_bulk';
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

module.exports = bulkApi;

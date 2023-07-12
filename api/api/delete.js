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
  'if_seq_no',
  'if_primary_term',
  'version',
  'version_type',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
];
const snakeCase = {
  waitForActiveShards: 'wait_for_active_shards',
  ifSeqNo: 'if_seq_no',
  ifPrimaryTerm: 'if_primary_term',
  versionType: 'version_type',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

/**
 * Delete a document
 * <br/> See Also: {@link https://opensearch.org/docs/2.4/api-reference/document-apis/update-document/ OpenSearch - Update Document}
 *
 * @memberOf API-Document
 *
 * @param {Object} params
 * @param {string} params.index - Name of the index.
 * @param {string} params.id - A unique identifier to attach to the document.
 * @param {number} [params.if_seq_no] - Only perform the delete operation if the document has the specified sequence number.
 * @param {number} [params.if_primary_term] - Only perform the delete operation if the document has the specified primary term.
 * @param {string} [params.routing] - Value used to assign the index operation to a specific shard.
 * @param {string} [params.refresh=false] - If true, OpenSearch refreshes shards to make the operation visible to searching. Valid options are 'true', 'false', and 'wait_for', which tells OpenSearch to wait for a refresh before executing the operation.
 * @param {string} [params.timeout=1m] - How long to wait for a response from the cluster.
 * @param {string} [params.wait_for_active_shards] - The number of active shards that must be available before OpenSearch processes the request. Default is 1 (only the primary shard). Set to all or a positive integer. Values greater than 1 require replicas. For example, if you specify a value of 3, the index must have two replicas distributed across two additional nodes for the operation to succeed.
 * @param {number} [params.version] - The document’s version number.
 * @param {number} [params.version_type] - Specific version type (options: 'external' and 'external_gte')
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/2.4/api-reference/document-apis/update-document/#response Update Response}
 */
function deleteApi(params, options, callback) {
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
    if (method == null) method = 'DELETE';
    path =
      '/' +
      encodeURIComponent(index) +
      '/' +
      encodeURIComponent(type) +
      '/' +
      encodeURIComponent(id);
  } else {
    if (method == null) method = 'DELETE';
    path = '/' + encodeURIComponent(index) + '/' + '_doc' + '/' + encodeURIComponent(id);
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

module.exports = deleteApi;

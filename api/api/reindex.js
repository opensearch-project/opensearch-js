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
  'refresh',
  'timeout',
  'wait_for_active_shards',
  'wait_for_completion',
  'requests_per_second',
  'scroll',
  'slices',
  'max_docs',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
];
const snakeCase = {
  waitForActiveShards: 'wait_for_active_shards',
  waitForCompletion: 'wait_for_completion',
  requestsPerSecond: 'requests_per_second',
  maxDocs: 'max_docs',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

/**
 * Copy all or a subset of your data from a source index into a destination index.
 * <br/> See Also: {@link https://opensearch.org/docs/2.4/api-reference/document-apis/reindex/ OpenSearch - Reindex Document}
 *
 * @memberOf API-Document
 *
 * @param {Object} params
 * @param {Object} params.body The search definition using the Query DSL and the prototype for the index request.
 * @param {boolean} [params.refresh=false] Should the affected indexes be refreshed?
 * @param {string} [params.timeout=30s] Time each individual bulk request should wait for shards that are unavailable.
 * @param {string} [params.wait_for_active_shards] Sets the number of shard copies that must be active before proceeding with the reindex operation. Defaults to 1, meaning the primary shard only. Set to `all` for all shard copies, otherwise set to any non-negative value less than or equal to the total number of copies for the shard (number of replicas + 1)
 * @param {boolean} [params.wait_for_completion=false] Should the request should block until the reindex is complete.
 * @param {number} [params.requests_per_second=-1] The throttle to set on this request in sub-requests per second. -1 means no throttle.
 * @param {string} [params.scroll=5m] Control how long to keep the search context alive
 * @param {number|string} [params.slices=1] The number of slices this task should be divided into. 1 means the task isn't sliced into subtasks. Can be set to `auto`.
 * @param {number} [params.max_docs] Maximum number of documents to process (default: all documents)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/2.4/api-reference/document-apis/reindex/#response Reindex Document Response}
 */
function reindexApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path = '/' + '_reindex';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
}

module.exports = reindexApi;

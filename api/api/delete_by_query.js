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
  'analyzer',
  'analyze_wildcard',
  'default_operator',
  'df',
  'from',
  'ignore_unavailable',
  'allow_no_indices',
  'conflicts',
  'expand_wildcards',
  'lenient',
  'preference',
  'q',
  'routing',
  'scroll',
  'search_type',
  'search_timeout',
  'size',
  'max_docs',
  'sort',
  '_source',
  '_source_excludes',
  '_source_exclude',
  '_source_includes',
  '_source_include',
  'terminate_after',
  'stats',
  'version',
  'request_cache',
  'refresh',
  'timeout',
  'wait_for_active_shards',
  'scroll_size',
  'wait_for_completion',
  'requests_per_second',
  'slices',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
];
const snakeCase = {
  analyzeWildcard: 'analyze_wildcard',
  defaultOperator: 'default_operator',
  ignoreUnavailable: 'ignore_unavailable',
  allowNoIndices: 'allow_no_indices',
  expandWildcards: 'expand_wildcards',
  searchType: 'search_type',
  searchTimeout: 'search_timeout',
  maxDocs: 'max_docs',
  _sourceExcludes: '_source_excludes',
  _sourceExclude: '_source_exclude',
  _sourceIncludes: '_source_includes',
  _sourceInclude: '_source_include',
  terminateAfter: 'terminate_after',
  requestCache: 'request_cache',
  waitForActiveShards: 'wait_for_active_shards',
  scrollSize: 'scroll_size',
  waitForCompletion: 'wait_for_completion',
  requestsPerSecond: 'requests_per_second',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

/**
 * Deletes documents matching the provided query.
 * <br/> See Also: {@link https://opensearch.org/docs/2.4/api-reference/document-apis/delete-by-query/ OpenSearch - Delete by query}
 *
 * @memberOf API-Document
 *
 * @param {Object} params
 * @param {string} params.index - A comma-separated list of index names to search; use '_all' or empty string to perform the operation on all indices
 * @param {Object} params.body - The search definition using the Query DSL
 * @param {string} [params.analyzer] - The analyzer to use for the query string
 * @param {boolean} [params.analyze_wildcard=false] - Specify whether wildcard and prefix queries should be analyzed
 * @param {string} [params.default_operator=OR] - The default operator for query string query (options: AND, OR)
 * @param {string} [params.df] - The field to use as default where no field prefix is given in the query string
 * @param {number} [params.from=0] - Starting offset
 * @param {boolean} [params.ignore_unavailable=false] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices=true] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes '_all' string or when no indices have been specified)
 * @param {string} [params.conflicts] - What to do when the delete-by-query hits version conflicts? (options: abort, proceed)
 * @param {string} [params.expand_wildcards=open] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.lenient=false] - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
 * @param {string} [params.preference] - Specify the node or shard the operation should be performed on (default: random)
 * @param {string} [params.q] - Query in the Lucene query string syntax
 * @param {string} [params.routing] - A comma-separated list of specific routing values
 * @param {string} [params.scroll] - Specify how long a consistent view of the index should be maintained for scrolled search
 * @param {string} [params.search_type] - Search operation type (options: query_then_fetch, dfs_query_then_fetch)
 * @param {string} [params.search_timeout] - Explicit timeout for each search request. Defaults to no timeout.
 * @param {number} [params.size] - Deprecated, please use 'max_docs' instead
 * @param {number} [params.max_docs] - Maximum number of documents to process (default: all documents)
 * @param {string} [params.sort] - A comma-separated list of <field>:<direction> pairs
 * @param {string} [params._source] - True or false to return the _source field or not, or a list of fields to return
 * @param {string} [params._source_excludes] - A list of fields to exclude from the returned _source field
 * @param {string} [params._source_includes] - A list of fields to extract and return from the _source field
 * @param {number} [params.terminate_after] - The maximum number of documents to collect for each shard, upon reaching which the query execution will terminate early.
 * @param {string} [params.stats] - Specific 'tag' of the request for logging and statistical purposes
 * @param {boolean} [params.version] - Specify whether to return document version as part of a hit
 * @param {boolean} [params.request_cache] - Specify if request cache should be used for this request or not, defaults to index level setting
 * @param {boolean} [params.refresh=false] - Should the effected indexes be refreshed?
 * @param {string} [params.timeout=1m] - time each individual bulk request should wait for shards that are unavailable.
 * @param {string} [params.wait_for_active_shards=1] - Sets the number of shard copies that must be active before proceeding with the delete-by-query operation. 1 means the primary shard only. Set to 'all' for all shard copies, otherwise set to any non-negative value less than or equal to the total number of copies for the shard (number of replicas + 1)
 * @param {number} [params.scroll_size=1000] - Size on the scroll request powering the delete-by-query
 * @param {boolean} [params.wait_for_completion] - Should the request should block until the delete-by-query is complete.
 * @param {number} [params.requests_per_second=-1] - The throttle for this request in sub-requests per second. -1 means no throttle.
 * @param {string} [params.slices=1] - The number of slices this task should be divided into. 1 means the task isn't sliced into subtasks. Can be set to 'auto'.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/2.4/api-reference/document-apis/delete-by-query/#response Delete by query Response}
 */
function deleteByQueryApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }
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
    path =
      '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_delete_by_query';
  } else {
    if (method == null) method = 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_delete_by_query';
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

module.exports = deleteByQueryApi;

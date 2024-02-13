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

/** @namespace API-Search */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = [
  'analyzer',
  'analyze_wildcard',
  'ccs_minimize_roundtrips',
  'default_operator',
  'df',
  'explain',
  'stored_fields',
  'docvalue_fields',
  'from',
  'ignore_unavailable',
  'ignore_throttled',
  'allow_no_indices',
  'expand_wildcards',
  'lenient',
  'preference',
  'q',
  'routing',
  'scroll',
  'search_pipeline',
  'search_type',
  'size',
  'sort',
  '_source',
  '_source_excludes',
  '_source_exclude',
  '_source_includes',
  '_source_include',
  'terminate_after',
  'stats',
  'suggest_field',
  'suggest_mode',
  'suggest_size',
  'suggest_text',
  'timeout',
  'track_scores',
  'track_total_hits',
  'allow_partial_search_results',
  'typed_keys',
  'version',
  'seq_no_primary_term',
  'request_cache',
  'batched_reduce_size',
  'max_concurrent_shard_requests',
  'pre_filter_shard_size',
  'rest_total_hits_as_int',
  'min_compatible_shard_node',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
];
const snakeCase = {
  analyzeWildcard: 'analyze_wildcard',
  ccsMinimizeRoundtrips: 'ccs_minimize_roundtrips',
  defaultOperator: 'default_operator',
  storedFields: 'stored_fields',
  docvalueFields: 'docvalue_fields',
  ignoreUnavailable: 'ignore_unavailable',
  ignoreThrottled: 'ignore_throttled',
  allowNoIndices: 'allow_no_indices',
  expandWildcards: 'expand_wildcards',
  searchPipeline: 'search_pipeline',
  searchType: 'search_type',
  _sourceExcludes: '_source_excludes',
  _sourceExclude: '_source_exclude',
  _sourceIncludes: '_source_includes',
  _sourceInclude: '_source_include',
  terminateAfter: 'terminate_after',
  suggestField: 'suggest_field',
  suggestMode: 'suggest_mode',
  suggestSize: 'suggest_size',
  suggestText: 'suggest_text',
  trackScores: 'track_scores',
  trackTotalHits: 'track_total_hits',
  allowPartialSearchResults: 'allow_partial_search_results',
  typedKeys: 'typed_keys',
  seqNoPrimaryTerm: 'seq_no_primary_term',
  requestCache: 'request_cache',
  batchedReduceSize: 'batched_reduce_size',
  maxConcurrentShardRequests: 'max_concurrent_shard_requests',
  preFilterShardSize: 'pre_filter_shard_size',
  restTotalHitsAsInt: 'rest_total_hits_as_int',
  minCompatibleShardNode: 'min_compatible_shard_node',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

/**
 * Allows to execute several search operations in one request.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/search/ OpenSearch - Search}
 *
 * @memberOf API-Search
 *
 * @param {Object} params
 * @param {string} params.index - A comma-separated list of index names to search; use `_all` or empty string to perform the operation on all indices
 * @param {string} [params.analyzer] - The analyzer to use for the query string
 * @param {boolean} [params.analyze_wildcard] - Specify whether wildcard and prefix queries should be analyzed (default: false)
 * @param {boolean} [params.ccs_minimize_roundtrips] - Indicates whether network round-trips should be minimized as part of cross-cluster search requests execution
 * @param {string} [params.default_operator] - The default operator for query string query (AND or OR) (options: AND, OR)
 * @param {string} [params.df] - The field to use as default where no field prefix is given in the query string
 * @param {boolean} [params.explain] - Specify whether to return detailed information about score computation as part of a hit
 * @param {string} [params.stored_fields] - A comma-separated list of stored fields to return as part of a hit
 * @param {string} [params.docvalue_fields] - A comma-separated list of fields to return as the docvalue representation of a field for each hit
 * @param {number} [params.from] - Starting offset (default: 0)
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.ignore_throttled] - Whether specified concrete, expanded or aliased indices should be ignored when throttled
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.lenient] - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
 * @param {string} [params.preference] - Specify the node or shard the operation should be performed on (default: random)
 * @param {string} [params.q] - Query in the Lucene query string syntax
 * @param {string} [params.routing] - A comma-separated list of specific routing values
 * @param {string} [params.scroll] - Specify how long a consistent view of the index should be maintained for scrolled search
 * @param {string} [params.search_pipeline] - Customizable sequence of processing stages applied to search queries.
 * @param {string} [params.search_type] - Search operation type (options: query_then_fetch, dfs_query_then_fetch)
 * @param {number} [params.size] - Number of hits to return (default: 10)
 * @param {string} [params.sort] - A comma-separated list of <field>:<direction> pairs
 * @param {string} [params._source] - True or false to return the _source field or not, or a list of fields to return
 * @param {string} [params._source_excludes] - A list of fields to exclude from the returned _source field
 * @param {string} [params._source_includes] - A list of fields to extract and return from the _source field
 * @param {number} [params.terminate_after] - The maximum number of documents to collect for each shard, upon reaching which the query execution will terminate early.
 * @param {string} [params.stats] - Specific 'tag' of the request for logging and statistical purposes
 * @param {string} [params.suggest_field] - Specify which field to use for suggestions
 * @param {string} [params.suggest_mode] - Specify suggest mode (options: missing, popular, always)
 * @param {number} [params.suggest_size] - How many suggestions to return in response
 * @param {string} [params.suggest_text] - The source text for which the suggestions should be returned
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {boolean} [params.track_scores] - Whether to calculate and return scores even if they are not used for sorting
 * @param {boolean} [params.track_total_hits] - Indicate if the number of documents that match the query should be tracked
 * @param {boolean} [params.allow_partial_search_results] - Indicate if an error should be returned if there is a partial search failure or timeout
 * @param {boolean} [params.typed_keys] - Specify whether aggregation and suggester names should be prefixed by their respective types in the response
 * @param {boolean} [params.version] - Specify whether to return document version as part of a hit
 * @param {boolean} [params.seq_no_primary_term] - Specify whether to return sequence number and primary term of the last modification of each hit
 * @param {boolean} [params.request_cache] - Specify if request cache should be used for this request or not, defaults to index level setting
 * @param {number} [params.batched_reduce_size] - The number of shard results that should be reduced at once on the coordinating node. This value should be used as a protection mechanism to reduce the memory overhead per search request if the potential number of shards in the request can be large.
 * @param {number} [params.max_concurrent_shard_requests] - The number of concurrent shard requests per node this search executes concurrently. This value should be used to limit the impact of the search on the cluster in order to limit the number of concurrent shard requests
 * @param {number} [params.pre_filter_shard_size] - A threshold that enforces a pre-filter roundtrip to prefilter search shards based on query rewriting if the number of shards the search request expands to exceeds the threshold. This filter roundtrip can limit the number of shards significantly if for instance a shard can not match any documents based on its rewrite method ie. if date filters are mandatory to match but the shard bounds and the query are disjoint.
 * @param {boolean} [params.rest_total_hits_as_int] - Indicates whether hits.total should be rendered as an integer or an object in the rest search response
 * @param {string} [params.min_compatible_shard_node] - The minimum compatible version that all shards involved in search should have for this request to be successful
 * @param {Object} [params.body] - The search definition using the Query DSL
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/search/#response-body Search Response}
 */
function searchApi(params, options, callback) {
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
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_search';
  } else if (index != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_search';
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + '_search';
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

module.exports = searchApi;

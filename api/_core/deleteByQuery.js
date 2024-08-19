/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

'use strict'

const { normalizeArguments, parsePathParam, handleMissingParam } = require('../utils');

/**
 * Deletes documents matching the provided query.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/document-apis/delete-by-query/ - delete_by_query}
 *
 * @memberOf API-Core
 *
 * @param {object} params
 * @param {array} [params._source] - True or false to return the _source field or not, or a list of fields to return.
 * @param {array} [params._source_excludes] - List of fields to exclude from the returned _source field.
 * @param {array} [params._source_includes] - List of fields to extract and return from the _source field.
 * @param {boolean} [params.allow_no_indices] - If `false`, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices. This behavior applies even if the request targets other open indices. For example, a request targeting `foo*,bar*` returns an error if an index starts with `foo` but no index starts with `bar`.
 * @param {boolean} [params.analyze_wildcard=false] - If `true`, wildcard and prefix queries are analyzed.
 * @param {string} [params.analyzer] - Analyzer to use for the query string.
 * @param {string} [params.conflicts] - What to do if delete by query hits version conflicts: `abort` or `proceed`.
 * @param {string} [params.default_operator] - The default operator for query string query: `AND` or `OR`.
 * @param {string} [params.df] - Field to use as default where no field prefix is given in the query string.
 * @param {string} [params.expand_wildcards] - Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`. Valid values are: `all`, `open`, `closed`, `hidden`, `none`.
 * @param {number} [params.from=0] - Starting offset.
 * @param {boolean} [params.ignore_unavailable] - If `false`, the request returns an error if it targets a missing or closed index.
 * @param {boolean} [params.lenient] - If `true`, format-based query failures (such as providing text to a numeric field) in the query string will be ignored.
 * @param {number} [params.max_docs] - Maximum number of documents to process. Defaults to all documents.
 * @param {string} [params.preference=random] - Specifies the node or shard the operation should be performed on. Random by default.
 * @param {string} [params.q] - Query in the Lucene query string syntax.
 * @param {boolean} [params.refresh] - If `true`, OpenSearch refreshes all shards involved in the delete by query after the request completes.
 * @param {boolean} [params.request_cache] - If `true`, the request cache is used for this request. Defaults to the index-level setting.
 * @param {number} [params.requests_per_second=0] - The throttle for this request in sub-requests per second.
 * @param {string} [params.routing] - Custom value used to route operations to a specific shard.
 * @param {string} [params.scroll] - Period to retain the search context for scrolling.
 * @param {number} [params.scroll_size=100] - Size of the scroll request that powers the operation.
 * @param {string} [params.search_timeout] - Explicit timeout for each search request. Defaults to no timeout.
 * @param {string} [params.search_type] - The type of the search operation. Available options: `query_then_fetch`, `dfs_query_then_fetch`.
 * @param {integer} [params.size] - Deprecated, please use `max_docs` instead.
 * @param {string} [params.slices] - The number of slices this task should be divided into.
 * @param {array} [params.sort] - A comma-separated list of <field>:<direction> pairs.
 * @param {array} [params.stats] - Specific `tag` of the request for logging and statistical purposes.
 * @param {number} [params.terminate_after] - Maximum number of documents to collect for each shard. If a query reaches this limit, OpenSearch terminates the query early. OpenSearch collects documents before sorting. Use with caution. OpenSearch applies this parameter to each shard handling the request. When possible, let OpenSearch perform early termination automatically. Avoid specifying this parameter for requests that target data streams with backing indices across multiple data tiers.
 * @param {string} [params.timeout] - Period each deletion request waits for active shards.
 * @param {boolean} [params.version] - If `true`, returns the document version as part of a hit.
 * @param {string} [params.wait_for_active_shards] - The number of shard copies that must be active before proceeding with the operation. Set to all or any positive integer up to the total number of shards in the index (`number_of_replicas+1`).
 * @param {boolean} [params.wait_for_completion=true] - If `true`, the request blocks until the operation is complete.
 * @param {string} params.index - Comma-separated list of data streams, indices, and aliases to search. Supports wildcards (`*`). To search all data streams or indices, omit this parameter or use `*` or `_all`.
 * @param {object} params.body - The search definition using the Query DSL
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function deleteByQueryFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.index == null) return handleMissingParam('index', this, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, index, ...querystring } = params;
  index = parsePathParam(index);

  const path = '/' + index + '/_delete_by_query';
  const method = 'POST';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = deleteByQueryFunc;

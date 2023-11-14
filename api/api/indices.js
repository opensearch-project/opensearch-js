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

/** @namespace API-Index */

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = [
  'cluster_manager_timeout',
  'timeout',
  'master_timeout',
  'ignore_unavailable',
  'allow_no_indices',
  'expand_wildcards',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
  'index',
  'fielddata',
  'fields',
  'query',
  'request',
  'wait_for_active_shards',
  'run_expensive_tasks',
  'flush',
  'local',
  'flat_settings',
  'include_defaults',
  'force',
  'wait_if_ongoing',
  'max_num_segments',
  'only_expunge_deletes',
  'create',
  'cause',
  'write_index_only',
  'preserve_existing',
  'order',
  'detailed',
  'active_only',
  'dry_run',
  'verbose',
  'status',
  'copy_settings',
  'completion_fields',
  'fielddata_fields',
  'groups',
  'level',
  'types',
  'include_segment_file_sizes',
  'include_unloaded_segments',
  'forbid_closed_indices',
  'wait_for_completion',
  'only_ancient_segments',
  'explain',
  'q',
  'analyzer',
  'analyze_wildcard',
  'default_operator',
  'df',
  'lenient',
  'rewrite',
  'all_shards',
];
const snakeCase = {
  clusterManagerTimeout: 'cluster_manager_timeout',
  masterTimeout: 'master_timeout',
  ignoreUnavailable: 'ignore_unavailable',
  allowNoIndices: 'allow_no_indices',
  expandWildcards: 'expand_wildcards',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
  waitForActiveShards: 'wait_for_active_shards',
  runExpensiveTasks: 'run_expensive_tasks',
  flatSettings: 'flat_settings',
  includeDefaults: 'include_defaults',
  waitIfOngoing: 'wait_if_ongoing',
  maxNumSegments: 'max_num_segments',
  onlyExpungeDeletes: 'only_expunge_deletes',
  writeIndexOnly: 'write_index_only',
  preserveExisting: 'preserve_existing',
  activeOnly: 'active_only',
  dryRun: 'dry_run',
  copySettings: 'copy_settings',
  completionFields: 'completion_fields',
  fielddataFields: 'fielddata_fields',
  includeSegmentFileSizes: 'include_segment_file_sizes',
  includeUnloadedSegments: 'include_unloaded_segments',
  forbidClosedIndices: 'forbid_closed_indices',
  waitForCompletion: 'wait_for_completion',
  onlyAncientSegments: 'only_ancient_segments',
  analyzeWildcard: 'analyze_wildcard',
  defaultOperator: 'default_operator',
  allShards: 'all_shards',
};

function IndicesApi(transport, ConfigurationError) {
  this.transport = transport;
  this[kConfigurationError] = ConfigurationError;
}

/**
 * Adds a block to an index.
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - A comma separated list of indices to add a block to
 * @param {string} params.block - The block to add (one of read, write, read_only or metadata)
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.addBlock = function indicesAddBlockApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }
  if (params.block == null) {
    const err = new this[kConfigurationError]('Missing required parameter: block');
    return handleError(err, callback);
  }

  // check required url components
  if (params.block != null && params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index');
    return handleError(err, callback);
  }

  let { method, body, index, block, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'PUT';
  path = '/' + encodeURIComponent(index) + '/' + '_block' + '/' + encodeURIComponent(block);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Performs the analysis process on a text and return the tokens breakdown of the text.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/analyze-apis/perform-text-analysis/ OpenSearch - Perform text analysis}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.index] - The name of the index to scope the operation
 * @param {Object} [params.body] - Define analyzer/tokenizer parameters and the text on which the analysis should be performed
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.analyze = function indicesAnalyzeApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_analyze';
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + '_analyze';
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Clears all or specific caches for one or more indices.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/clear-index-cache/ OpenSearch - Clear index or data stream cache}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.index] - A comma-separated list of index name to limit the operation
 * @param {boolean} [params.fielddata] - Clear field data
 * @param {string} [params.fields] - A comma-separated list of fields to clear when using the `fielddata` parameter (default: all)
 * @param {boolean} [params.query] - Clear query caches
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.request] - Clear request cache
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.clearCache = function indicesClearCacheApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_cache' + '/' + 'clear';
  } else {
    if (method == null) method = 'POST';
    path = '/' + '_cache' + '/' + 'clear';
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Clones an index
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/clone/ OpenSearch - Clone Index}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - The name of the source index to clone
 * @param {string} params.target - The name of the target index to clone into
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {string} [params.wait_for_active_shards] - Set the number of active shards to wait for on the cloned index before the operation returns.
 * @param {Object} [params.body] - The configuration for the target index (`settings` and `aliases`)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.clone = function indicesCloneApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }
  if (params.target == null) {
    const err = new this[kConfigurationError]('Missing required parameter: target');
    return handleError(err, callback);
  }

  // check required url components
  if (params.target != null && params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index');
    return handleError(err, callback);
  }

  let { method, body, index, target, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'PUT';
  path = '/' + encodeURIComponent(index) + '/' + '_clone' + '/' + encodeURIComponent(target);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Closes an index.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/close-index/ OpenSearch - Close Index}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - A comma separated list of indices to close
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {string} [params.wait_for_active_shards] - Sets the number of active shards to wait for before the operation returns. Set to `index-setting` to wait according to the index setting `index.write.wait_for_active_shards`, or `all` to wait for all shards, or an integer. Defaults to `0`.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.close = function indicesCloseApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path = '/' + encodeURIComponent(index) + '/' + '_close';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Creates an index
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/create-index/ OpenSearch - Create Index}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - Name of the index.
 * @param {Object} [params.body] - The configuration for the index (`settings` and `mappings`)
 * @param {string} [params.wait_for_active_shards] - Set the number of active shards to wait for before the operation returns.
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.create = function indicesCreateApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'PUT';
  path = '/' + encodeURIComponent(index);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Deletes an index.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/delete-index/ OpenSearch - Delete Index}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - A comma-separated list of indices to delete; use `_all` or `*` string to delete all indices
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {boolean} [params.ignore_unavailable=false] - Ignore unavailable indexes
 * @param {boolean} [params.allow_no_indices=false] - Ignore if a wildcard expression resolves to no concrete indices
 * @param {string} [params.expand_wildcards=open] - Whether wildcard expressions should get expanded to open or closed indices (options: open, closed, hidden, none, all)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.delete = function indicesDeleteApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'DELETE';
  path = '/' + encodeURIComponent(index);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Deletes an alias.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/index-alias/ OpenSearch - Index Aliases}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - A comma-separated list of index names (supports wildcards); use `_all` for all indices
 * @param {string} params.name - A comma-separated list of aliases to delete (supports wildcards); use `_all` to delete all aliases for the specified indices.
 * @param {string} [params.timeout] - Explicit timestamp for the document
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.deleteAlias = function indicesDeleteAliasApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }
  if (params.name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name');
    return handleError(err, callback);
  }

  // check required url components
  if (params.name != null && params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index');
    return handleError(err, callback);
  }

  let { method, body, index, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null && name != null) {
    if (method == null) method = 'DELETE';
    path = '/' + encodeURIComponent(index) + '/' + '_alias' + '/' + encodeURIComponent(name);
  } else {
    if (method == null) method = 'DELETE';
    path = '/' + encodeURIComponent(index) + '/' + '_aliases' + '/' + encodeURIComponent(name);
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Deletes an index template.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/index-templates/ OpenSearch - Index Templates}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.name - The name of the template
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.deleteIndexTemplate = function indicesDeleteIndexTemplateApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name');
    return handleError(err, callback);
  }

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'DELETE';
  path = '/' + '_index_template' + '/' + encodeURIComponent(name);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Deletes an index template (Deprecated. Use IndicesApi#deleteIndexTemplate instead)
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.name - The name of the template
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.deleteTemplate = function indicesDeleteTemplateApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name');
    return handleError(err, callback);
  }

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'DELETE';
  path = '/' + '_template' + '/' + encodeURIComponent(name);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

// TODO: Remove. Experimental feature added in ES 7.15
IndicesApi.prototype.diskUsage = function indicesDiskUsageApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path = '/' + encodeURIComponent(index) + '/' + '_disk_usage';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns information about whether a particular index exists.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/exists/ OpenSearch - Index Exists}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - A comma-separated list of index names
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster_manager node
 * @param {boolean} [params.ignore_unavailable=false] - Ignore unavailable indexes
 * @param {boolean} [params.allow_no_indices=false] - Ignore if a wildcard expression resolves to no concrete indices
 * @param {string} [params.expand_wildcards=open] - Whether wildcard expressions should get expanded to open or closed indices (options: open, closed, hidden, none, all)
 * @param {boolean} [params.flat_settings=false] - Return settings in flat format
 * @param {boolean} [params.include_defaults] - Whether to return all default setting for each of the indices.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.exists = function indicesExistsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'HEAD';
  path = '/' + encodeURIComponent(index);

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns information about whether a particular alias exists.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/index-alias/ OpenSearch - Index Aliases}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.name - A comma-separated list of alias names to return
 * @param {string} [params.index] - A comma-separated list of index names to filter aliases
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster_manager node
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.existsAlias = function indicesExistsAliasApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name');
    return handleError(err, callback);
  }

  let { method, body, name, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null && name != null) {
    if (method == null) method = 'HEAD';
    path = '/' + encodeURIComponent(index) + '/' + '_alias' + '/' + encodeURIComponent(name);
  } else {
    if (method == null) method = 'HEAD';
    path = '/' + '_alias' + '/' + encodeURIComponent(name);
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns information about whether a particular index template exists.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/index-templates/ OpenSearch - Index Templates}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.name - The name of the template
 * @param {boolean} [params.flat_settings=false] - Return settings in flat format
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster_manager node
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.existsIndexTemplate = function indicesExistsIndexTemplateApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name');
    return handleError(err, callback);
  }

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'HEAD';
  path = '/' + '_index_template' + '/' + encodeURIComponent(name);

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns information about whether a particular index template exists. (Deprecated. Use IndicesApi#existsIndexTemplate instead)
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.name - The comma separated names of the index templates
 * @param {boolean} [params.flat_settings=false] - Return settings in flat format
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster_manager node
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.existsTemplate = function indicesExistsTemplateApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name');
    return handleError(err, callback);
  }

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'HEAD';
  path = '/' + '_template' + '/' + encodeURIComponent(name);

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

// TODO: Remove. Experimental feature added in ES 7.15
IndicesApi.prototype.fieldUsageStats = function indicesFieldUsageStatsApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + encodeURIComponent(index) + '/' + '_field_usage_stats';

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Performs the flush operation on one or more indices.
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.index] - A comma-separated list of index names; use `_all` or empty string for all indices
 * @param {boolean} [params.force] - Whether a flush should be forced even if it is not necessarily needed ie. if no changes will be committed to the index. This is useful if transaction log IDs should be incremented even if no uncommitted changes are present. (This setting can be considered as internal)
 * @param {boolean} [params.wait_if_ongoing=true] - If set to true the flush operation will block until the flush can be executed if another flush operation is already executing. If set to false the flush will be skipped iff if another flush operation is already running.
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.flush = function indicesFlushApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_flush';
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + '_flush';
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Performs the force merge operation on one or more indices.
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.index] - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {boolean} [params.flush=true] - Specify whether the index should be flushed after performing the operation
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {number} [params.max_num_segments] - The number of segments the index should be merged into (default: dynamic)
 * @param {boolean} [params.only_expunge_deletes] - Specify whether the operation should only expunge deleted documents
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.forcemerge = function indicesForcemergeApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_forcemerge';
  } else {
    if (method == null) method = 'POST';
    path = '/' + '_forcemerge';
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns information about one or more indices.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/get-index/ OpenSearch - Get Index}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - A comma-separated list of index names
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster_manager node
 * @param {boolean} [params.ignore_unavailable=false] - Ignore unavailable indexes
 * @param {boolean} [params.allow_no_indices=false] - Ignore if a wildcard expression resolves to no concrete indices
 * @param {string} [params.expand_wildcards=open] - Whether wildcard expressions should get expanded to open or closed indices (options: open, closed, hidden, none, all)
 * @param {boolean} [params.flat_settings=false] - Return settings in flat format
 * @param {boolean} [params.include_defaults] - Whether to return all default setting for each of the indices.
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.get = function indicesGetApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + encodeURIComponent(index);

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns an alias.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/index-alias/ OpenSearch - Index Aliases}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.name] - A comma-separated list of alias names to return
 * @param {string} [params.index] - A comma-separated list of index names to filter aliases
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster_manager node
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.getAlias = function indicesGetAliasApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, name, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null && name != null) {
    if (method == null) method = 'GET';
    path = '/' + encodeURIComponent(index) + '/' + '_alias' + '/' + encodeURIComponent(name);
  } else if (name != null) {
    if (method == null) method = 'GET';
    path = '/' + '_alias' + '/' + encodeURIComponent(name);
  } else if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + encodeURIComponent(index) + '/' + '_alias';
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_alias';
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns mapping for one or more fields.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/mappings/ OpenSearch - Mapping}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.fields - A comma-separated list of fields
 * @param {string} [params.index] - A comma-separated list of index names
 * @param {boolean} [params.include_defaults] - Whether the default mapping values should be returned as well
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster_manager node
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.getFieldMapping = function indicesGetFieldMappingApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.fields == null) {
    const err = new this[kConfigurationError]('Missing required parameter: fields');
    return handleError(err, callback);
  }

  let { method, body, fields, index, type, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null && type != null && fields != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      encodeURIComponent(index) +
      '/' +
      '_mapping' +
      '/' +
      encodeURIComponent(type) +
      '/' +
      'field' +
      '/' +
      encodeURIComponent(fields);
  } else if (index != null && fields != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      encodeURIComponent(index) +
      '/' +
      '_mapping' +
      '/' +
      'field' +
      '/' +
      encodeURIComponent(fields);
  } else if (type != null && fields != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      '_mapping' +
      '/' +
      encodeURIComponent(type) +
      '/' +
      'field' +
      '/' +
      encodeURIComponent(fields);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_mapping' + '/' + 'field' + '/' + encodeURIComponent(fields);
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns an index template.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/index-templates/ OpenSearch - Index Templates}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.name] - The comma separated names of the index templates
 * @param {boolean} [params.flat_setting=false] - Return settings in flat format
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster_manager node
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.getIndexTemplate = function indicesGetIndexTemplateApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (name != null) {
    if (method == null) method = 'GET';
    path = '/' + '_index_template' + '/' + encodeURIComponent(name);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_index_template';
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns mappings for one or more indices.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/mappings/ OpenSearch - Mapping}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.index] - A comma-separated list of index names
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster_manager node (Deprecated)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.getMapping = function indicesGetMappingApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, type, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null && type != null) {
    if (method == null) method = 'GET';
    path = '/' + encodeURIComponent(index) + '/' + '_mapping' + '/' + encodeURIComponent(type);
  } else if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + encodeURIComponent(index) + '/' + '_mapping';
  } else if (type != null) {
    if (method == null) method = 'GET';
    path = '/' + '_mapping' + '/' + encodeURIComponent(type);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_mapping';
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns settings for one or more indices.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/get-settings/ OpenSearch - Get Settings}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.index] - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {string} [params.name] - The name of the settings that should be included
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.flat_settings=false] - Return settings in flat format
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster_manager node
 * @param {boolean} [params.include_defaults] - Whether to return all default setting for each of the indices.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.getSettings = function indicesGetSettingsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null && name != null) {
    if (method == null) method = 'GET';
    path = '/' + encodeURIComponent(index) + '/' + '_settings' + '/' + encodeURIComponent(name);
  } else if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + encodeURIComponent(index) + '/' + '_settings';
  } else if (name != null) {
    if (method == null) method = 'GET';
    path = '/' + '_settings' + '/' + encodeURIComponent(name);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_settings';
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns an index template. (Deprecated. Use IndicesApi#getIndexTemplate instead)
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.name] - The comma separated names of the index templates
 * @param {boolean} [params.flat_settings=false] - Return settings in flat format
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster_manager node
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.getTemplate = function indicesGetTemplateApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (name != null) {
    if (method == null) method = 'GET';
    path = '/' + '_template' + '/' + encodeURIComponent(name);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_template';
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns a progress status of current upgrade.
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.getUpgrade = function indicesGetUpgradeApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + encodeURIComponent(index) + '/' + '_upgrade';

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * ROpens an index.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/open-index/ OpenSearch - Open Index}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - A comma separated list of indices to open
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {string} [params.wait_for_active_shards] - Sets the number of active shards to wait for before the operation returns.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.open = function indicesOpenApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path = '/' + encodeURIComponent(index) + '/' + '_open';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Creates or updates an alias.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/index-alias/ OpenSearch - Index Aliases}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - A comma-separated list of index names the alias should point to (supports wildcards); use `_all` to perform the operation on all indices.
 * @param {string} params.name - The name of the alias to be created or updated
 * @param {string} [params.timeout] - Explicit timestamp for the document
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {Object} [params.body] - The settings for the alias, such as `routing` or `filter`
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.putAlias = function indicesPutAliasApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }
  if (params.name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name');
    return handleError(err, callback);
  }

  // check required url components
  if (params.name != null && params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index');
    return handleError(err, callback);
  }

  let { method, body, index, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null && name != null) {
    if (method == null) method = 'PUT';
    path = '/' + encodeURIComponent(index) + '/' + '_alias' + '/' + encodeURIComponent(name);
  } else {
    if (method == null) method = 'PUT';
    path = '/' + encodeURIComponent(index) + '/' + '_aliases' + '/' + encodeURIComponent(name);
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Creates or updates an index template.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/index-templates/ OpenSearch - Index Templates}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.name - The name of the template
 * @param {Object} params.body - The template definition
 * @param {boolean} [params.create] - Whether the index template should only be added if new or can also replace an existing one
 * @param {string} [params.cause] - User defined reason for creating/updating the index template
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.putIndexTemplate = function indicesPutIndexTemplateApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'PUT';
  path = '/' + '_index_template' + '/' + encodeURIComponent(name);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Updates index mappings.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/put-mapping/ OpenSearch - Create or Update Mapping}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - A comma-separated list of index names the mapping should be added to (supports wildcards); use `_all` or omit to add the mapping on all indices.
 * @param {Object} params.body - The mapping definition
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.write_index_only] - When true, applies mappings only to the write index of an alias or data stream
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.putMapping = function indicesPutMappingApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, index, type, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null && type != null) {
    if (method == null) method = 'PUT';
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_mapping';
  } else if (index != null && type != null) {
    if (method == null) method = 'PUT';
    path = '/' + encodeURIComponent(index) + '/' + '_mapping' + '/' + encodeURIComponent(type);
  } else if (index != null && type != null) {
    if (method == null) method = 'PUT';
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_mappings';
  } else if (index != null && type != null) {
    if (method == null) method = 'PUT';
    path = '/' + encodeURIComponent(index) + '/' + '_mappings' + '/' + encodeURIComponent(type);
  } else if (index != null) {
    if (method == null) method = 'PUT';
    path = '/' + encodeURIComponent(index) + '/' + '_mapping';
  } else if (type != null) {
    if (method == null) method = 'PUT';
    path = '/' + '_mappings' + '/' + encodeURIComponent(type);
  } else if (index != null) {
    if (method == null) method = 'PUT';
    path = '/' + encodeURIComponent(index) + '/' + '_mappings';
  } else {
    if (method == null) method = 'PUT';
    path = '/' + '_mapping' + '/' + encodeURIComponent(type);
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Updates the index settings.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/update-settings/ OpenSearch - Update Settings}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {Object} params.body - The index settings to be updated
 * @param {string} [params.index] - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {boolean} [params.preserve_existing=false] - Whether to update existing settings. If set to `true` existing settings on an index remain unchanged
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.flat_settings=false] - Return settings in flat format
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.putSettings = function indicesPutSettingsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = 'PUT';
    path = '/' + encodeURIComponent(index) + '/' + '_settings';
  } else {
    if (method == null) method = 'PUT';
    path = '/' + '_settings';
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Creates or updates an index template. (Deprecated. Use IndicesApi#putIndexTemplate instead)
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.name - The name of the template
 * @param {Object} params.body - The template definition
 * @param {number} [params.order] - The order for this template when merging multiple matching ones (higher numbers are merged later, overriding the lower numbers)
 * @param {boolean} [params.create] - Whether the index template should only be added if new or can also replace an existing one
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.putTemplate = function indicesPutTemplateApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'PUT';
  path = '/' + '_template' + '/' + encodeURIComponent(name);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns information about ongoing index shard recoveries.
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.index] - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {boolean} [params.detailed] - Whether to display detailed information about shard recovery
 * @param {boolean} [params.active_only] - Display only those recoveries that are currently on-going
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.recovery = function indicesRecoveryApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + encodeURIComponent(index) + '/' + '_recovery';
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_recovery';
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Performs the refresh operation in one or more indices.
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.index] - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.refresh = function indicesRefreshApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_refresh';
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + '_refresh';
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns information about any matching indices, aliases, and data streams
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.name] - A comma-separated list of names or wildcard expressions
 * @param {string} [params.expand_wildcards=open] - Whether wildcard expressions should get expanded to open or closed indices (options: open, closed, hidden, none, all)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.resolveIndex = function indicesResolveIndexApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name');
    return handleError(err, callback);
  }

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_resolve' + '/' + 'index' + '/' + encodeURIComponent(name);

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Updates an alias to point to a new index when the existing index is considered to be too large or too old.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/data-streams/#step-5-rollover-a-data-stream OpenSearch - Rollover a data stream}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.alias - The name of the alias to rollover
 * @param {string} [params.new_index] - The name of the rollover index
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {boolean} [params.dry_run=false] - If set to true the rollover action will only be validated but not actually performed even if a condition matches.
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {string} [params.wait_for_active_shards] - Set the number of active shards to wait for on the newly created rollover index before the operation returns.
 * @param {Object} [params.body] - The conditions that needs to be met for executing rollover
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.rollover = function indicesRolloverApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.alias == null) {
    const err = new this[kConfigurationError]('Missing required parameter: alias');
    return handleError(err, callback);
  }

  // check required url components
  if ((params.new_index != null || params.newIndex != null) && params.alias == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: alias');
    return handleError(err, callback);
  }

  let { method, body, alias, newIndex, new_index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (alias != null && (new_index || newIndex) != null) {
    if (method == null) method = 'POST';
    path =
      '/' +
      encodeURIComponent(alias) +
      '/' +
      '_rollover' +
      '/' +
      encodeURIComponent(new_index || newIndex);
  } else {
    if (method == null) method = 'POST';
    path = '/' + encodeURIComponent(alias) + '/' + '_rollover';
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Provides low-level information about segments in a Lucene index.
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.index] - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.verbose] - Includes detailed memory usage by Lucene.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.segments = function indicesSegmentsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + encodeURIComponent(index) + '/' + '_segments';
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_segments';
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Provides store information for shard copies of indices.
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.index] - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {string} [params.status] - A comma-separated list of statuses used to filter on shards to get store information for (options: green, yellow, red, all)
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.shardStores = function indicesShardStoresApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + encodeURIComponent(index) + '/' + '_shard_stores';
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_shard_stores';
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Allow to shrink an existing index into a new index with fewer primary shards.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/shrink-index/ OpenSearch - Shrink Index}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - The name of the source index to shrink
 * @param {string} params.target - The name of the target index to shrink into
 * @param {boolean} [params.copy_settings] - whether or not to copy settings from the source index (defaults to false)
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {string} [params.wait_for_active_shards] - Set the number of active shards to wait for on the shrunken index before the operation returns.
 * @param {Object} [params.body] - The configuration for the target index (`settings` and `aliases`)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.shrink = function indicesShrinkApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }
  if (params.target == null) {
    const err = new this[kConfigurationError]('Missing required parameter: target');
    return handleError(err, callback);
  }

  // check required url components
  if (params.target != null && params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index');
    return handleError(err, callback);
  }

  let { method, body, index, target, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'PUT';
  path = '/' + encodeURIComponent(index) + '/' + '_shrink' + '/' + encodeURIComponent(target);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Simulate matching the given index name against the index templates in the system
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.name - The name of the index (it must be a concrete index name)
 * @param {Object} [params.body] - New index template definition, which will be included in the simulation, as if it already exists in the system
 * @param {boolean} [params.create] - Whether the index template we optionally defined in the body should only be dry-run added if new or can also replace an existing one
 * @param {string} [params.cause] - User defined reason for dry-run creating the new template for simulation purposes
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.simulateIndexTemplate = function indicesSimulateIndexTemplateApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.name == null) {
    const err = new this[kConfigurationError]('Missing required parameter: name');
    return handleError(err, callback);
  }

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path = '/' + '_index_template' + '/' + '_simulate_index' + '/' + encodeURIComponent(name);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Simulate resolving the given template name or body (Deprecated. Use IndicesApi#simulateIndexTemplate instead)
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.name] - The name of the index template
 * @param {boolean} [params.create] - Whether the index template we optionally defined in the body should only be dry-run added if new or can also replace an existing one
 * @param {string} [params.cause] - User defined reason for dry-run creating the new template for simulation purposes
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {Object} [params.body] - New index template definition to be simulated, if no index template name is specified
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.simulateTemplate = function indicesSimulateTemplateApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (name != null) {
    if (method == null) method = 'POST';
    path = '/' + '_index_template' + '/' + '_simulate' + '/' + encodeURIComponent(name);
  } else {
    if (method == null) method = 'POST';
    path = '/' + '_index_template' + '/' + '_simulate';
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Allows you to split an existing index into a new index with more primary shards.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/index-apis/split/ OpenSearch - Split Index}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - The name of the source index to split
 * @param {string} params.target - The name of the target index to split into
 * @param {boolean} [params.copy_settings] - whether or not to copy settings from the source index (defaults to false)
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 * @param {string} [params.wait_for_active_shards] - Set the number of active shards to wait for on the shrunken index before the operation returns.
 * @param {Object} [params.body] - The configuration for the target index (`settings` and `aliases`)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.split = function indicesSplitApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }
  if (params.target == null) {
    const err = new this[kConfigurationError]('Missing required parameter: target');
    return handleError(err, callback);
  }

  // check required url components
  if (params.target != null && params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: index');
    return handleError(err, callback);
  }

  let { method, body, index, target, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'PUT';
  path = '/' + encodeURIComponent(index) + '/' + '_split' + '/' + encodeURIComponent(target);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Provides statistics on operations happening in an index.
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.metric] - Limit the information returned the specific metrics. (options: _all, completion, docs, fielddata, query_cache, flush, get, indexing, merge, request_cache, refresh, search, segments, store, warmer, suggest)
 * @param {string} [params.index] - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {string} [params.completion_fields] - A comma-separated list of fields for `fielddata` and `suggest` index metric (supports wildcards)
 * @param {string} [params.fielddata_fields] - A comma-separated list of fields for `fielddata` index metric (supports wildcards)
 * @param {string} [params.fields] - A comma-separated list of fields for `fielddata` and `completion` index metric (supports wildcards)
 * @param {string} [params.groups] - A comma-separated list of search groups for `search` index metric
 * @param {string} [params.level] - Return stats aggregated at cluster, index or shard level (options: cluster, indices, shards)
 * @param {string} [params.types] - A comma-separated list of document types for the `indexing` index metric
 * @param {boolean} [params.include_segment_file_sizes] - Whether to report the aggregated disk usage of each one of the Lucene index files (only applies if segment stats are requested)
 * @param {boolean} [params.include_unloaded_segments] - If set to true segment stats will include stats for segments that are not currently loaded into memory
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.forbid_closed_indices] - If set to false stats will also collected from closed indices if explicitly specified or if expand_wildcards expands to closed indices
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.stats = function indicesStatsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, metric, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null && metric != null) {
    if (method == null) method = 'GET';
    path = '/' + encodeURIComponent(index) + '/' + '_stats' + '/' + encodeURIComponent(metric);
  } else if (metric != null) {
    if (method == null) method = 'GET';
    path = '/' + '_stats' + '/' + encodeURIComponent(metric);
  } else if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + encodeURIComponent(index) + '/' + '_stats';
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_stats';
  }

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Update an alias.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/index-alias/ OpenSearch - Index Aliases}
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {Object} params.body - The definition of `actions` to perform
 * @param {string} [params.timeout] - Request timeout
 * @param {string} [params.cluster_manager_timeout] - Specify timeout for connection to cluster_manager
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.updateAliases = function indicesUpdateAliasesApi(params, options, callback) {
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
  path = '/' + '_aliases';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Upgrades to the current version of Lucene.
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.index] - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.wait_for_completion=false] - Specify whether the request should block until the all segments are upgraded
 * @param {boolean} [params.only_ancient_segments] - If true, only ancient (an older Lucene major release) segments will be upgraded
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.upgrade = function indicesUpgradeApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path = '/' + encodeURIComponent(index) + '/' + '_upgrade';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Allows a user to validate a potentially expensive query without executing it.
 *
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} params.index - A comma-separated list of index names to restrict the operation; use `_all` or empty string to perform the operation on all indices
 * @param {boolean} [params.explain] - Return detailed information about the error
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {string} [params.q] - Query in the Lucene query string syntax
 * @param {string} [params.analyzer] - The analyzer to use for the query string
 * @param {boolean} [params.analyze_wildcard=false] - Specify whether wildcard and prefix queries should be analyzed
 * @param {string} [params.default_operator=OR] - The default operator for query string query (options: AND, OR)
 * @param {string} [params.df] - The field to use as default where no field prefix is given in the query string
 * @param {boolean} [params.lenient] - Specify whether format-based query failures (such as providing text to a numeric field) should be ignored
 * @param {boolean} [params.rewrite] - Provide a more detailed explanation showing the actual Lucene query that will be executed.
 * @param {boolean} [params.all_shards] - Execute validation on all shards instead of one random shard per index
 * @param {Object} [params.body] - The query definition specified with the Query DSL
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IndicesApi.prototype.validateQuery = function indicesValidateQueryApi(params, options, callback) {
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
    path =
      '/' +
      encodeURIComponent(index) +
      '/' +
      encodeURIComponent(type) +
      '/' +
      '_validate' +
      '/' +
      'query';
  } else if (index != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_validate' + '/' + 'query';
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + '_validate' + '/' + 'query';
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

Object.defineProperties(IndicesApi.prototype, {
  add_block: {
    get() {
      return this.addBlock;
    },
  },
  clear_cache: {
    get() {
      return this.clearCache;
    },
  },
  delete_alias: {
    get() {
      return this.deleteAlias;
    },
  },
  delete_index_template: {
    get() {
      return this.deleteIndexTemplate;
    },
  },
  delete_template: {
    get() {
      return this.deleteTemplate;
    },
  },
  disk_usage: {
    get() {
      return this.diskUsage;
    },
  },
  exists_alias: {
    get() {
      return this.existsAlias;
    },
  },
  exists_index_template: {
    get() {
      return this.existsIndexTemplate;
    },
  },
  exists_template: {
    get() {
      return this.existsTemplate;
    },
  },
  field_usage_stats: {
    get() {
      return this.fieldUsageStats;
    },
  },
  get_alias: {
    get() {
      return this.getAlias;
    },
  },
  get_field_mapping: {
    get() {
      return this.getFieldMapping;
    },
  },
  get_index_template: {
    get() {
      return this.getIndexTemplate;
    },
  },
  get_mapping: {
    get() {
      return this.getMapping;
    },
  },
  get_settings: {
    get() {
      return this.getSettings;
    },
  },
  get_template: {
    get() {
      return this.getTemplate;
    },
  },
  get_upgrade: {
    get() {
      return this.getUpgrade;
    },
  },
  put_alias: {
    get() {
      return this.putAlias;
    },
  },
  put_index_template: {
    get() {
      return this.putIndexTemplate;
    },
  },
  put_mapping: {
    get() {
      return this.putMapping;
    },
  },
  put_settings: {
    get() {
      return this.putSettings;
    },
  },
  put_template: {
    get() {
      return this.putTemplate;
    },
  },
  resolve_index: {
    get() {
      return this.resolveIndex;
    },
  },
  shard_stores: {
    get() {
      return this.shardStores;
    },
  },
  simulate_index_template: {
    get() {
      return this.simulateIndexTemplate;
    },
  },
  simulate_template: {
    get() {
      return this.simulateTemplate;
    },
  },
  update_aliases: {
    get() {
      return this.updateAliases;
    },
  },
  validate_query: {
    get() {
      return this.validateQuery;
    },
  },
});

module.exports = IndicesApi;

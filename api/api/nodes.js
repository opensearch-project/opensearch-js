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

/** @namespace API-Nodes */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = [
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
  'interval',
  'snapshots',
  'threads',
  'ignore_idle_threads',
  'type',
  'timeout',
  'flat_settings',
  'completion_fields',
  'fielddata_fields',
  'fields',
  'groups',
  'level',
  'types',
  'include_segment_file_sizes',
  'include_unloaded_segments',
];
const snakeCase = {
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
  ignoreIdleThreads: 'ignore_idle_threads',
  flatSettings: 'flat_settings',
  completionFields: 'completion_fields',
  fielddataFields: 'fielddata_fields',
  includeSegmentFileSizes: 'include_segment_file_sizes',
  includeUnloadedSegments: 'include_unloaded_segments',
};

function NodesApi(transport, ConfigurationError) {
  this.transport = transport;
  this[kConfigurationError] = ConfigurationError;
}

NodesApi.prototype.clearMeteringArchive = function nodesClearMeteringArchiveApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.node_id == null && params.nodeId == null) {
    const err = new this[kConfigurationError]('Missing required parameter: node_id or nodeId');
    return handleError(err, callback);
  }
  if (params.max_archive_version == null && params.maxArchiveVersion == null) {
    const err = new this[kConfigurationError](
      'Missing required parameter: max_archive_version or maxArchiveVersion'
    );
    return handleError(err, callback);
  }

  // check required url components
  if (
    (params.max_archive_version != null || params.maxArchiveVersion != null) &&
    params.node_id == null &&
    params.nodeId == null
  ) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: node_id');
    return handleError(err, callback);
  }

  let { method, body, nodeId, node_id, maxArchiveVersion, max_archive_version, ...querystring } =
    params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'DELETE';
  path =
    '/' +
    '_nodes' +
    '/' +
    encodeURIComponent(node_id || nodeId) +
    '/' +
    '_repositories_metering' +
    '/' +
    encodeURIComponent(max_archive_version || maxArchiveVersion);

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

NodesApi.prototype.getMeteringInfo = function nodesGetMeteringInfoApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.node_id == null && params.nodeId == null) {
    const err = new this[kConfigurationError]('Missing required parameter: node_id or nodeId');
    return handleError(err, callback);
  }

  let { method, body, nodeId, node_id, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path =
    '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + '_repositories_metering';

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
 * Returns information about hot threads on each node in the cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/nodes-apis/nodes-hot-threads/ OpenSearch - Nodes Hot Threads}
 * @memberOf API-Nodes
 *
 * @param {Object} params
 * @param {string} [params.node_id] - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 * @param {string} [params.interval] - The interval for the second sampling of threads
 * @param {number} [params.snapshots] - Number of samples of thread stacktrace (default: 10)
 * @param {number} [params.threads] - Specify the number of threads to provide information for (default: 3)
 * @param {boolean} [params.ignore_idle_threads] - Don't show threads that are in known-idle places, such as waiting on a socket select or pulling from an empty task queue (default: true)
 * @param {string} [params.type] - The type to sample (default: cpu) (options: cpu, wait, block)
 * @param {string} [params.timeout] - Explicit operation timeout
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
NodesApi.prototype.hotThreads = function nodesHotThreadsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, nodeId, node_id, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET';
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'hot_threads';
  } else if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      '_cluster' +
      '/' +
      'nodes' +
      '/' +
      encodeURIComponent(node_id || nodeId) +
      '/' +
      'hotthreads';
  } else if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET';
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'hotthreads';
  } else if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      '_cluster' +
      '/' +
      'nodes' +
      '/' +
      encodeURIComponent(node_id || nodeId) +
      '/' +
      'hot_threads';
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_nodes' + '/' + 'hot_threads';
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
 * Returns information about hot threads on each node in the cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/nodes-apis/nodes-info/ OpenSearch - Nodes Info}
 * @memberOf API-Nodes
 *
 * @param {Object} params
 * @param {string} [params.node_id] - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 * @param {string} [params.metric] - A comma-separated list of metrics you wish returned. Leave empty to return all. (options: settings, os, process, jvm, thread_pool, transport, http, plugins, ingest)
 * @param {boolean} [params.flat_settings] - Return settings in flat format (default: false)
 * @param {string} [params.timeout] - Explicit operation timeout
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
NodesApi.prototype.info = function nodesInfoApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, nodeId, node_id, metric, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if ((node_id || nodeId) != null && metric != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      '_nodes' +
      '/' +
      encodeURIComponent(node_id || nodeId) +
      '/' +
      encodeURIComponent(metric);
  } else if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET';
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId);
  } else if (metric != null) {
    if (method == null) method = 'GET';
    path = '/' + '_nodes' + '/' + encodeURIComponent(metric);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_nodes';
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
 * Reloads secure settings.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/nodes-apis/nodes-reload-secure/ OpenSearch - Nodes Reload Security Settings}
 * @memberOf API-Nodes
 *
 * @param {Object} params
 * @param {string} [params.node_id] - A comma-separated list of node IDs to span the reload/reinit call. Should stay empty because reloading usually involves all cluster nodes.
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {Object} [params.body] - An object containing the password for the opensearch keystore
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
NodesApi.prototype.reloadSecureSettings = function nodesReloadSecureSettingsApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, nodeId, node_id, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if ((node_id || nodeId) != null) {
    if (method == null) method = 'POST';
    path =
      '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'reload_secure_settings';
  } else {
    if (method == null) method = 'POST';
    path = '/' + '_nodes' + '/' + 'reload_secure_settings';
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
 * Returns statistical information about nodes in the cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/nodes-apis/nodes-stats/ OpenSearch - Nodes Stats}
 * @memberOf API-Nodes
 *
 * @param {Object} params
 * @param {string} [params.node_id] - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 * @param {string} [params.metric] - Limit the information returned to the specified metrics (options: _all, breaker, fs, http, indices, jvm, os, process, thread_pool, transport, discovery, indexing_pressure)
 * @param {string} [params.index_metric] - Limit the information returned for `indices` metric to the specific index metrics. Isn't used if `indices` (or `all`) metric isn't specified. (options: _all, completion, docs, fielddata, query_cache, flush, get, indexing, merge, request_cache, refresh, search, segments, store, warmer, suggest)
 * @param {string} [params.completion_fields] - A comma-separated list of fields for `fielddata` and `suggest` index metric (supports wildcards)
 * @param {string} [params.fielddata_fields] - A comma-separated list of fields for `fielddata` index metric (supports wildcards)
 * @param {string} [params.fields] - A comma-separated list of fields for `fielddata` and `completion` index metric (supports wildcards)
 * @param {boolean} [params.groups] - A comma-separated list of search groups for `search` index metric
 * @param {string} [params.level] - Return indices stats aggregated at index, node or shard level (options: indices, node, shards)
 * @param {string} [params.types] - A comma-separated list of document types for the `indexing` index metric
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {boolean} [params.include_segment_file_sizes] - Whether to report the aggregated disk usage of each one of the Lucene index files (only applies if segment stats are requested)
 * @param {boolean} [params.include_unloaded_segments] - If set to true segment stats will include stats for segments that are not currently loaded into memory
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
NodesApi.prototype.stats = function nodesStatsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, nodeId, node_id, metric, indexMetric, index_metric, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if ((node_id || nodeId) != null && metric != null && (index_metric || indexMetric) != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      '_nodes' +
      '/' +
      encodeURIComponent(node_id || nodeId) +
      '/' +
      'stats' +
      '/' +
      encodeURIComponent(metric) +
      '/' +
      encodeURIComponent(index_metric || indexMetric);
  } else if ((node_id || nodeId) != null && metric != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      '_nodes' +
      '/' +
      encodeURIComponent(node_id || nodeId) +
      '/' +
      'stats' +
      '/' +
      encodeURIComponent(metric);
  } else if (metric != null && (index_metric || indexMetric) != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      '_nodes' +
      '/' +
      'stats' +
      '/' +
      encodeURIComponent(metric) +
      '/' +
      encodeURIComponent(index_metric || indexMetric);
  } else if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET';
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'stats';
  } else if (metric != null) {
    if (method == null) method = 'GET';
    path = '/' + '_nodes' + '/' + 'stats' + '/' + encodeURIComponent(metric);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_nodes' + '/' + 'stats';
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
 * Returns low-level information about REST actions usage on nodes.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/nodes-apis/nodes-usage/ OpenSearch - Nodes Usage}
 * @memberOf API-Nodes
 *
 * @param {Object} params
 * @param {string} [params.node_id] - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 * @param {string} [params.metric] - Limit the information returned to the specified metrics (options: _all, rest_actions)
 * @param {string} [params.timeout] - Explicit operation timeout
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
NodesApi.prototype.usage = function nodesUsageApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, nodeId, node_id, metric, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if ((node_id || nodeId) != null && metric != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      '_nodes' +
      '/' +
      encodeURIComponent(node_id || nodeId) +
      '/' +
      'usage' +
      '/' +
      encodeURIComponent(metric);
  } else if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET';
    path = '/' + '_nodes' + '/' + encodeURIComponent(node_id || nodeId) + '/' + 'usage';
  } else if (metric != null) {
    if (method == null) method = 'GET';
    path = '/' + '_nodes' + '/' + 'usage' + '/' + encodeURIComponent(metric);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_nodes' + '/' + 'usage';
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

Object.defineProperties(NodesApi.prototype, {
  clear_metering_archive: {
    get() {
      return this.clearMeteringArchive;
    },
  },
  get_metering_info: {
    get() {
      return this.getMeteringInfo;
    },
  },
  hot_threads: {
    get() {
      return this.hotThreads;
    },
  },
  reload_secure_settings: {
    get() {
      return this.reloadSecureSettings;
    },
  },
});

module.exports = NodesApi;

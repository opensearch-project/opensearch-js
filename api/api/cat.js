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

/** @namespace API-CAT */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = [
  'format',
  'local',
  'h',
  'help',
  's',
  'v',
  'expand_wildcards',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
  'bytes',
  'cluster_manager_timeout',
  'master_timeout',
  'fields',
  'time',
  'ts',
  'health',
  'pri',
  'include_unloaded_segments',
  'allow_no_match',
  'allow_no_datafeeds',
  'allow_no_jobs',
  'from',
  'size',
  'full_id',
  'include_bootstrap',
  'active_only',
  'detailed',
  'index',
  'ignore_unavailable',
  'nodes',
  'actions',
  'parent_task_id',
  'pri',
];
const snakeCase = {
  expandWildcards: 'expand_wildcards',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
  clusterManagerTimeout: 'cluster_manager_timeout',
  masterTimeout: 'master_timeout',
  includeUnloadedSegments: 'include_unloaded_segments',
  allowNoMatch: 'allow_no_match',
  allowNoDatafeeds: 'allow_no_datafeeds',
  allowNoJobs: 'allow_no_jobs',
  fullId: 'full_id',
  includeBootstrap: 'include_bootstrap',
  activeOnly: 'active_only',
  ignoreUnavailable: 'ignore_unavailable',
  parentTaskId: 'parent_task_id',
};

function CatApi(transport, ConfigurationError) {
  this.transport = transport;
  this[kConfigurationError] = ConfigurationError;
}

/**
 * The CAT aliases operation lists the mapping of aliases to indices, plus routing and filtering information.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-aliases/ OpenSearch - CAT aliases}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {string} [params.name] - To limit the information to specific aliases, provide the alias names seperated by commas.
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster manager node.
 * @param {string} [params.expand_wildcards=open] - Expands wildcard expressions to concrete indices. Combine multiple values with commas. Supported values are 'all', 'open', 'closed', 'hidden', and 'none'. Default is 'open'.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-aliases/#response CAT aliases Response}
 */
CatApi.prototype.aliases = function catAliasesApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (name != null) {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'aliases' + '/' + encodeURIComponent(name);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'aliases';
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
 * The CAT allocation operation lists the allocation of disk space for indices and the number of shards on each node.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-allocation/ OpenSearch - CAT allocation}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {string} [params.node_id] - To limit the information to specific nodes, provide the node names seperated by commas.
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster manager node.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 * @param {string} [params.bytes] - Specify the units for byte size. For example, '7kb' or '6gb'.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-allocation/#response CAT allocation Response}
 */
CatApi.prototype.allocation = function catAllocationApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, nodeId, node_id, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'allocation' + '/' + encodeURIComponent(node_id || nodeId);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'allocation';
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
 * The CAT count operation lists the number of documents in your cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-count/ OpenSearch - CAT count}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {string} [params.index] - To see the number of documents in specific indices or aliases, provide the index/alias names seperated by commas.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-count/#response CAT count Response}
 */
CatApi.prototype.count = function catCountApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'count' + '/' + encodeURIComponent(index);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'count';
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
 * The CAT fielddata operation lists the memory size used by each field per node.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-field-data/ OpenSearch - CAT fielddata}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {string} [params.fields] - To limit the information to specific fields, provide the field names seperated by commas.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-field-data/#response CAT fielddata Response}
 */
CatApi.prototype.fielddata = function catFielddataApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, fields, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (fields != null) {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'fielddata' + '/' + encodeURIComponent(fields);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'fielddata';
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
 * The CAT health operation lists the status of the cluster, how long the cluster has been up, the number of nodes,
 * and other useful information that helps you analyze the health of your cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-health/ OpenSearch - CAT health}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {string} [params.time] - Specify the units for time. For example, '5d' or '7h'.
 * @param {boolean} [params.ts=true] - If true, returns HH:MM:SS and Unix epoch timestamps.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-health/#response CAT health Response}
 */
CatApi.prototype.health = function catHealthApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_cat' + '/' + 'health';

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
 * See the available operations in the CAT API
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/index OpenSearch - CAT}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - (ignored)
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
CatApi.prototype.help = function catHelpApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_cat';

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
 * The CAT indices operation lists information related to indices—how much disk space they are using, how many shards they have, their health status, and so on.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-indices/ OpenSearch - CAT indices}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {string} [params.index] - To limit the information to specific indices, provide the index names seperated by commas.
 * @param {string} [params.bytes] - Specify the units for byte size. For example, '7kb' or '6gb'.
 * @param {string} [params.health] - Limit indices based on their health status. Supported values are 'green', 'yellow', and 'red'.
 * @param {boolean} [params.include_unloaded_segments=false] - Whether to include information from segments not loaded into memory.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 * @param {boolean} [params.pri=false] - Whether to return information only from the primary shards.
 * @param {string} [params.time] - Specify the units for time. For example, '5d' or '7h'.
 * @param {string} [params.expand_wildcards=open] - Expands wildcard expressions to concrete indices. Combine multiple values with commas. Supported values are 'all', 'open', 'closed', 'hidden', and 'none'.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-indices/#response CAT indices Response}
 */
CatApi.prototype.indices = function catIndicesApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'indices' + '/' + encodeURIComponent(index);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'indices';
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
 * The CAT cluster manager operation lists information that helps identify the elected cluster manager node.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-cluster_manager/ OpenSearch - CAT cluster manager}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters}
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-cluster_manager/#response CAT cluster manager Response}
 */
CatApi.prototype.cluster_manager = function catClusterManagerApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_cat' + '/' + 'cluster_manager';

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
 * // TODO: delete CatApi.prototype.master when it is removed from OpenSearch
 * @deprecated use CatApi.prototype.cluster_manager instead
 */
CatApi.prototype.master = function catMasterApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_cat' + '/' + 'master';

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
 * The CAT nodeattrs operation lists the attributes of custom nodes.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-nodeattrs/ OpenSearch - CAT aliases}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster manager node.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-nodeattrs/#response CAT nodeattrs Response}
 */
CatApi.prototype.nodeattrs = function catNodeattrsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_cat' + '/' + 'nodeattrs';

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
 * The CAT nodes operation lists node-level information, including node roles and load metrics.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-nodes/ OpenSearch - CAT nodes}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {string} [params.bytes] - Specify the units for byte size. For example, '7kb' or '6gb'.
 * @param {boolean} [params.full_id=false] - If true, return the full node ID. If false, return the shortened node ID.
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster_manager node.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 * @param {string} [params.time] - Specify the units for time. For example, '5d' or '7h'.
 * @param {boolean} [params.include_unloaded_segments=false] - Whether to include information from segments not loaded into memory.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-nodes/#response CAT nodes Response}
 */
CatApi.prototype.nodes = function catNodesApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_cat' + '/' + 'nodes';

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
 * The CAT pending tasks operation lists the progress of all pending tasks, including task priority and time in queue.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-pending-tasks/ OpenSearch - CAT pending tasks}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster_manager node.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 * @param {string} [params.time] - Specify the units for time. For example, '5d' or '7h'.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-pending-tasks/#response CAT pending tasks Response}
 */
CatApi.prototype.pendingTasks = function catPendingTasksApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_cat' + '/' + 'pending_tasks';

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
 * The CAT plugins operation lists the names, components, and versions of the installed plugins.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-plugins/ OpenSearch - CAT plugins}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster_manager node.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-plugins/#response CAT plugins Response}
 */
CatApi.prototype.plugins = function catPluginsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_cat' + '/' + 'plugins';

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
 * The CAT recovery operation lists all completed and ongoing index and shard recoveries.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-recovery/ OpenSearch - CAT recovery}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {string} [params.bytes] - Specify the units for byte size. For example, '7kb' or '6gb'.
 * @param {string} [params.time] - Specify the units for time. For example, '5d' or '7h'.
 * @param {boolean} [params.active_only=false] - Whether to only include ongoing shard recoveries.
 * @param {boolean} [params.detailed=false] - Whether to only include ongoing shard recoveries.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-recovery/#response CAT recovery Response}
 */
CatApi.prototype.recovery = function catRecoveryApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'recovery' + '/' + encodeURIComponent(index);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'recovery';
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
 * The CAT repositories operation lists all completed and ongoing index and shard recoveries.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-repositories/ OpenSearch - CAT repositories}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster_manager node.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-repositories/#response CAT repositories Response}
 */
CatApi.prototype.repositories = function catRepositoriesApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_cat' + '/' + 'repositories';

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
 * The cat segments operation lists Lucene segment-level information for each index.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-segments/ OpenSearch - CAT segments}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {string} [params.index] - To see only the information about segments of specific indices, provide the index names seperated by commas.
 * @param {string} [params.bytes] - Specify the units for byte size. For example, '7kb' or '6gb'.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-segments/#response CAT segments Response}
 */
CatApi.prototype.segments = function catSegmentsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'segments' + '/' + encodeURIComponent(index);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'segments';
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
 * The CAT shards operation lists the state of all primary and replica shards and how they are distributed.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-shards/ OpenSearch - CAT shards}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {string} [params.index] - To see only the information about shards of specific indices, provide the index names seperated by commas.
 * @param {string} [params.bytes] - Specify the units for byte size. For example, '7kb' or '6gb'.
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster_manager node.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 * @param {string} [params.time] - Specify the units for time. For example, '5d' or '7h'.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-shards/#response CAT shards Response}
 */
CatApi.prototype.shards = function catShardsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'shards' + '/' + encodeURIComponent(index);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'shards';
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
 * The CAT snapshots operation lists all snapshots for a repository.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-snapshots/ OpenSearch - CAT snapshots}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 * @param {string} [params.time] - Specify the units for time. For example, '5d' or '7h'.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-snapshots/#response CAT snapshots Response}
 */
CatApi.prototype.snapshots = function catSnapshotsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, repository, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (repository != null) {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'snapshots' + '/' + encodeURIComponent(repository);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'snapshots';
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
 * The CAT tasks operation lists the progress of all tasks currently running on your cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-tasks/ OpenSearch - CAT tasks}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {string} [params.nodes] - A comma-separated list of node IDs or names to limit the returned information. Use '_local' to return information from the node you’re connecting to, specify the node name to get information from specific nodes, or keep the parameter empty to get information from all nodes.
 * @param {string} [params.time] - Specify the units for time. For example, '5d' or '7h'.
 * @param {boolean} [params.detailed=false] - Returns detailed task information.
 * @param {string} [params.parent_task_id] - Returns tasks with a specified parent task ID (node_id:task_number). Keep empty or set to -1 to return all.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-tasks/#response CAT tasks Response}
 */
CatApi.prototype.tasks = function catTasksApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_cat' + '/' + 'tasks';

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
 * The CAT templates operation lists the names, patterns, order numbers, and version numbers of index templates.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-templates/ OpenSearch - CAT templates}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {boolean} [params.name] - If you want to limit it to a specific template or pattern, provide the template name or pattern.
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster manager node.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-templates/#response CAT templates Response}
 */
CatApi.prototype.templates = function catTemplatesApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, name, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (name != null) {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'templates' + '/' + encodeURIComponent(name);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'templates';
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
 * The CAT thread pool operation lists the active, queued, and rejected threads of different thread pools on each node.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-thread-pool/ OpenSearch - CAT thread pool}
 *
 * @memberOf API-CAT
 *
 * @param {Object} params - Accepts {@link https://opensearch.org/docs/latest/api-reference/cat/index#optional-query-parameters - common CAT parameters} along with the following unique parameters:
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster manager node.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cat/cat-thread-pool/#response CAT thread pool Response}
 */
CatApi.prototype.threadPool = function catThreadPoolApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, threadPoolPatterns, thread_pool_patterns, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if ((thread_pool_patterns || threadPoolPatterns) != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      '_cat' +
      '/' +
      'thread_pool' +
      '/' +
      encodeURIComponent(thread_pool_patterns || threadPoolPatterns);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cat' + '/' + 'thread_pool';
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

Object.defineProperties(CatApi.prototype, {
  pending_tasks: {
    get() {
      return this.pendingTasks;
    },
  },
  thread_pool: {
    get() {
      return this.threadPool;
    },
  },
});

module.exports = CatApi;

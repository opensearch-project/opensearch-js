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

/** @namespace API-Cluster */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = [
  'include_yes_decisions',
  'include_disk_info',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
  'timeout',
  'cluster_manager_timeout',
  'master_timeout',
  'wait_for_removal',
  'local',
  'flat_settings',
  'include_defaults',
  'expand_wildcards',
  'level',
  'wait_for_active_shards',
  'wait_for_nodes',
  'wait_for_events',
  'wait_for_no_relocating_shards',
  'wait_for_no_initializing_shards',
  'wait_for_status',
  'node_ids',
  'node_names',
  'create',
  'dry_run',
  'explain',
  'retry_failed',
  'metric',
  'wait_for_metadata_version',
  'wait_for_timeout',
  'ignore_unavailable',
  'allow_no_indices',
];
const snakeCase = {
  includeYesDecisions: 'include_yes_decisions',
  includeDiskInfo: 'include_disk_info',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
  clusterManagerTimeout: 'cluster_manager_timeout',
  masterTimeout: 'master_timeout',
  waitForRemoval: 'wait_for_removal',
  flatSettings: 'flat_settings',
  includeDefaults: 'include_defaults',
  expandWildcards: 'expand_wildcards',
  waitForActiveShards: 'wait_for_active_shards',
  waitForNodes: 'wait_for_nodes',
  waitForEvents: 'wait_for_events',
  waitForNoRelocatingShards: 'wait_for_no_relocating_shards',
  waitForNoInitializingShards: 'wait_for_no_initializing_shards',
  waitForStatus: 'wait_for_status',
  nodeIds: 'node_ids',
  nodeNames: 'node_names',
  dryRun: 'dry_run',
  retryFailed: 'retry_failed',
  waitForMetadataVersion: 'wait_for_metadata_version',
  waitForTimeout: 'wait_for_timeout',
  ignoreUnavailable: 'ignore_unavailable',
  allowNoIndices: 'allow_no_indices',
};

function ClusterApi(transport, ConfigurationError) {
  this.transport = transport;
  this[kConfigurationError] = ConfigurationError;
}

/**
 * The most basic cluster allocation explain request finds an unassigned shard and explains why it can’t be allocated to a node. If you add some options, you can instead get information on a specific shard, including why OpenSearch assigned it to its current node.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cluster-allocation/ OpenSearch - Cluster allocation explain}
 *
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {boolean} [params.include_yes_decisions=false] - OpenSearch makes a series of yes or no decisions when trying to allocate a shard to a node. If this parameter is true, OpenSearch includes the (generally more numerous) “yes” decisions in its response.
 * @param {boolean} [params.include_disk_info=false] - Whether to include information about disk usage in the response.
 * @param {Object} [params.body]
 * @param {string} [params.body.current_node] - If you only want an explanation if the shard happens to be on a particular node, specify that node name here.
 * @param {string} [params.body.index] - The name of the shard’s index.
 * @param {boolean} [params.body.primary] - Whether to provide an explanation for the primary shard (true) or its first replica (false), which share the same shard ID.
 * @param {number} [params.body.shard] - The shard ID that you want an explanation for.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cluster-allocation/#response Cluster allocation explain Response}
 */
ClusterApi.prototype.allocationExplain = function clusterAllocationExplainApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = body == null ? 'GET' : 'POST';
  path = '/' + '_cluster' + '/' + 'allocation' + '/' + 'explain';

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
 * Delete Component Template(s)
 *
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {string} [params.name] The name of the component template to be deleted.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
ClusterApi.prototype.deleteComponentTemplate = function clusterDeleteComponentTemplateApi(
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
  path = '/' + '_component_template' + '/' + encodeURIComponent(name);

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
 * Clears cluster voting config exclusions.
 *
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {boolean} [params.wait_for_removal] Specifies whether to wait for all excluded nodes to be removed from the cluster before clearing the voting configuration exclusions list.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
ClusterApi.prototype.deleteVotingConfigExclusions = function clusterDeleteVotingConfigExclusionsApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'DELETE';
  path = '/' + '_cluster' + '/' + 'voting_config_exclusions';

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
 * Information about whether a particular component template exist
 *
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {boolean} [params.name] Name of the template
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
ClusterApi.prototype.existsComponentTemplate = function clusterExistsComponentTemplateApi(
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
  path = '/' + '_component_template' + '/' + encodeURIComponent(name);

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
 * Returns one or more component templates
 *
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {string | string[]} [params.name] Name(s) of the template(s)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
ClusterApi.prototype.getComponentTemplate = function clusterGetComponentTemplateApi(
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
    path = '/' + '_component_template' + '/' + encodeURIComponent(name);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_component_template';
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
 * Get Cluster Settings
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cluster-settings/ OpenSearch - Cluster Settings}
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * ç
 * @param {boolean} [params.include_defaults] Whether to include default settings as part of the response. This parameter is useful for identifying the names and current values of settings you want to update.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
ClusterApi.prototype.getSettings = function clusterGetSettingsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_cluster' + '/' + 'settings';

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
 * The most basic cluster health request returns a simple status of the health of your cluster. OpenSearch expresses cluster health in three colors: green, yellow, and red. A green status means all primary shards and their replicas are allocated to nodes. A yellow status means all primary shards are allocated to nodes, but some replicas aren’t. A red status means at least one primary shard is not allocated to any node.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cluster-health/ OpenSearch - Cluster Health}
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {} [params.index] - To get the status of a specific index, provide the index name.
 * @param {string} [params.expand_wildcards=open] - Expands wildcard expressions to concrete indices. Combine multiple values with commas. Supported values are 'all', 'open', 'closed', 'hidden', and 'none'.
 * @param {string} [params.level=cluster] - The level of detail for returned health information. Supported values are 'cluster', 'indices', and 'shards'.
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster manager node.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 * @param {string} [params.timeout=30s] - The amount of time to wait for a response from the cluster.
 * @param {string} [params.wait_for_active_shards=0] - Wait until the specified number of shards is active before returning a response. 'all' for all shards
 * @param {string} [params.wait_for_nodes] - Wait for N number of nodes. Use 12 for exact match, >12 and <12 for range.
 * @param {string} [params.wait_for_events] - Wait until all currently queued events with the given priority are processed. Supported values are 'immediate', 'urgent', 'high', 'normal', 'low', and 'languid'.
 * @param {boolean} [params.wait_for_no_relocating_shards=false] - Whether to wait until there are no relocating shards in the cluster.
 * @param {boolean} [params.wait_for_no_initializing_shards=false] - Whether to wait until there are no initializing shards in the cluster.
 * @param {string} [params.wait_for_status] - Wait until the cluster health reaches the specified status or better. Supported values are 'green', 'yellow', and 'red'.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cluster-health/#response Cluster Health Response}
 */
ClusterApi.prototype.health = function clusterHealthApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = 'GET';
    path = '/' + '_cluster' + '/' + 'health' + '/' + encodeURIComponent(index);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cluster' + '/' + 'health';
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
 * Get a list of any cluster-level changes
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster manager node.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
ClusterApi.prototype.pendingTasks = function clusterPendingTasksApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_cluster' + '/' + 'pending_tasks';

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
 * Updates the cluster voting config exclusions by node ids or node names.
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {string} [params.node_names] - A comma-separated list of the persistent ids of the nodes to exclude from the voting configuration. If specified, you may not also specify node_names.
 * @param {string} [params.node_ids] - A comma-separated list of the names of the nodes to exclude from the voting configuration. If specified, you may not also specify node_ids.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
ClusterApi.prototype.postVotingConfigExclusions = function clusterPostVotingConfigExclusionsApi(
  params,
  options,
  callback
) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path = '/' + '_cluster' + '/' + 'voting_config_exclusions';

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
 * Creates or updates a component template
 *
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {string} params.name - The name of the component template.
 * @param {object} params.body - The template definition.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 * @param {boolean} [params.create=false] - Whether the index template should only be added if new or can also replace an existing one.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
ClusterApi.prototype.putComponentTemplate = function clusterPutComponentTemplateApi(
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
  path = '/' + '_component_template' + '/' + encodeURIComponent(name);

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
 * Updates the cluster settings.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cluster-settings/ OpenSearch - Cluster Settings}
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {boolean} [params.flat_settings] Whether to return settings in the flat form, which can improve readability, especially for heavily nested settings.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 * @param {string} [params.timeout=30s] - The amount of time to wait for a response from the cluster.
 * @param {object} params.body - The settings to be updated. Can be either 'transient' or 'persistent' (survives cluster restart).
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
ClusterApi.prototype.putSettings = function clusterPutSettingsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'PUT';
  path = '/' + '_cluster' + '/' + 'settings';

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
 * This operation provides connection information for any remote OpenSearch clusters that you’ve configured for the local cluster, such as the remote cluster alias, connection mode (sniff or proxy), IP addresses for seed nodes, and timeout settings.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/remote-info/ OpenSearch - Remote cluster information}
 * @memberOf API-Cluster
 *
 * @param {Object} params - (Unused)
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/remote-info/#response Remote cluster information }
 */
ClusterApi.prototype.remoteInfo = function clusterRemoteInfoApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_remote' + '/' + 'info';

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
 * Allows to manually change the allocation of individual shards in the cluster.
 *
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {object} [params.body] - The definition of 'commands' to perform ('move', 'cancel', 'allocate')
 * @param {boolean} [params.dry_run] - Simulate the operation only and return the resulting state
 * @param {boolean} [params.explain] - Return an explanation of why the commands can or cannot be executed
 * @param {boolean} [params.retry_failed] - Retries allocation of shards that are blocked due to too many subsequent allocation failures
 * @param {string | string[]} [params.metric] - Limit the information returned to the specified metrics. Defaults to all but metadata (options: _all, blocks, metadata, nodes, routing_table, cluster_manager_node, version)
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
ClusterApi.prototype.reroute = function clusterRerouteApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path = '/' + '_cluster' + '/' + 'reroute';

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
 * Get comprehensive information about the state of the cluster.
 *
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {string | string[]} [params.metric] - Limit the information returned to the specified metrics. Defaults to all but metadata (options: _all, blocks, metadata, nodes, routing_table, cluster_manager_node, version).
 * @param {string | string[]} [params.index] - List of index names; use '_all' or empty string to perform the operation on all indices.
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster manager node.
 * @param {string} [params.cluster_manager_timeout=30s] - The amount of time to wait for a connection to the cluster manager node.
 * @param {boolean} [params.flat_settings=false] - Whether to return settings in the flat form, which can improve readability, especially for heavily nested settings.
 * @param {number} [params.wait_for_metadata_version] - Wait for the metadata version to be equal or greater than the specified metadata version.
 * @param {string} [params.wait_for_timeout=30s] - The maximum time to wait for wait_for_metadata_version before timing out
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards=open] - Expands wildcard expressions to concrete indices. Combine multiple values with commas. Supported values are 'all', 'open', 'closed', 'hidden', and 'none'. Default is 'open'.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
ClusterApi.prototype.state = function clusterStateApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required url components
  if (params.index != null && params.metric == null) {
    const err = new this[kConfigurationError]('Missing required parameter of the url: metric');
    return handleError(err, callback);
  }

  let { method, body, metric, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (metric != null && index != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      '_cluster' +
      '/' +
      'state' +
      '/' +
      encodeURIComponent(metric) +
      '/' +
      encodeURIComponent(index);
  } else if (metric != null) {
    if (method == null) method = 'GET';
    path = '/' + '_cluster' + '/' + 'state' + '/' + encodeURIComponent(metric);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cluster' + '/' + 'state';
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
 * The CAT aliases operation lists the mapping of aliases to indices, plus routing and filtering information.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cluster-stats/ OpenSearch - Cluster stats}
 *
 * @memberOf API-Cluster
 *
 * @param {Object} params
 * @param {string | string[]} [params.node_id] - A comma-separated list of node IDs or names to limit the returned information; use '_local' to return information from the node you're connecting to, leave empty to get information from all nodes.
 *
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/cluster-stats/#response Cluster stats Response}
 */

ClusterApi.prototype.stats = function clusterStatsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, nodeId, node_id, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if ((node_id || nodeId) != null) {
    if (method == null) method = 'GET';
    path =
      '/' +
      '_cluster' +
      '/' +
      'stats' +
      '/' +
      'nodes' +
      '/' +
      encodeURIComponent(node_id || nodeId);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_cluster' + '/' + 'stats';
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

Object.defineProperties(ClusterApi.prototype, {
  allocation_explain: {
    get() {
      return this.allocationExplain;
    },
  },
  delete_component_template: {
    get() {
      return this.deleteComponentTemplate;
    },
  },
  delete_voting_config_exclusions: {
    get() {
      return this.deleteVotingConfigExclusions;
    },
  },
  exists_component_template: {
    get() {
      return this.existsComponentTemplate;
    },
  },
  get_component_template: {
    get() {
      return this.getComponentTemplate;
    },
  },
  get_settings: {
    get() {
      return this.getSettings;
    },
  },
  pending_tasks: {
    get() {
      return this.pendingTasks;
    },
  },
  post_voting_config_exclusions: {
    get() {
      return this.postVotingConfigExclusions;
    },
  },
  put_component_template: {
    get() {
      return this.putComponentTemplate;
    },
  },
  put_settings: {
    get() {
      return this.putSettings;
    },
  },
  remote_info: {
    get() {
      return this.remoteInfo;
    },
  },
});

module.exports = ClusterApi;

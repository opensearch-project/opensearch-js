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

const { normalizeArguments, parsePathParam } = require('../utils');

/**
 * Returns basic information about the health of the cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cluster-api/cluster-health/ - cluster.health}
 *
 * @memberOf API-Cluster
 *
 * @param {object} [params]
 * @param {string} [params.awareness_attribute] - The awareness attribute for which the health is required.
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {string} [params.level] - Can be one of cluster, indices or shards. Controls the details level of the health information returned.
 * @param {boolean} [params.local=false] - If true, the request retrieves information from the local node only. Defaults to false, which means information is retrieved from the master node.
 * @param {string} [params.master_timeout] DEPRECATED - Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
 * @param {string} [params.timeout] - Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
 * @param {string} [params.wait_for_active_shards] - A number controlling to how many active shards to wait for, all to wait for all shards in the cluster to be active, or 0 to not wait.
 * @param {string} [params.wait_for_events] - Can be one of immediate, urgent, high, normal, low, languid. Wait until all currently queued events with the given priority are processed.
 * @param {boolean} [params.wait_for_no_initializing_shards] - A boolean value which controls whether to wait (until the timeout provided) for the cluster to have no shard initializations. Defaults to false, which means it will not wait for initializing shards.
 * @param {boolean} [params.wait_for_no_relocating_shards] - A boolean value which controls whether to wait (until the timeout provided) for the cluster to have no shard relocations. Defaults to false, which means it will not wait for relocating shards.
 * @param {string} [params.wait_for_nodes] - The request waits until the specified number N of nodes is available. It also accepts >=N, <=N, >N and <N. Alternatively, it is possible to use ge(N), le(N), gt(N) and lt(N) notation.
 * @param {string} [params.wait_for_status] - One of green, yellow or red. Will wait (until the timeout provided) until the status of the cluster changes to the one provided or better, i.e. green > yellow > red. By default, will not wait for any status.
 * @param {string} [params.index] - Comma-separated list of data streams, indices, and index aliases used to limit the request. Wildcard expressions (*) are supported. To target all data streams and indices in a cluster, omit this parameter or use `_all` or `*`.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function healthFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, index, ...querystring } = params;
  index = parsePathParam(index);

  const path = ['/_cluster/health/', index].filter(c => c).join('').replace('//', '/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = healthFunc;

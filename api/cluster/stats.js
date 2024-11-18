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
 * This file was generated from the OpenSearch API Spec. Do NOT edit it
 * manually. If you want to make changes, either update the spec or
 * modify the API generator.
 */

'use strict';

const { normalizeArguments, parsePathParam } = require('../utils');

/**
 * Returns high-level overview of cluster statistics.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cluster-api/cluster-stats/ - cluster.stats}
 *
 * @memberOf API-Cluster
 *
 * @param {object} [params]
 * @param {boolean} [params.flat_settings=false] - If `true`, returns settings in flat format.
 * @param {string} [params.timeout] - Period to wait for each node to respond. If a node does not respond before its timeout expires, the response does not include its stats. However, timed out nodes are included in the response's `_nodes.failed` property. Defaults to no timeout.
 * @param {array} [params.index_metric] - Limit the information returned for indexes metric to the specific index metrics. It can be used only if indexes (or all) metric is specified.
 * @param {array} [params.metric] - Limit the information returned to the specified metrics
 * @param {string} [params.node_id] - Comma-separated list of node filters used to limit returned information. Defaults to all nodes in the cluster.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function statsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, index_metric, metric, node_id, ...querystring } = params;
  index_metric = parsePathParam(index_metric);
  metric = parsePathParam(metric);
  node_id = parsePathParam(node_id);

  let path;
  if (metric != null && index_metric != null && node_id != null) {
    path = '/_cluster/stats/' + metric + '/' + index_metric + '/nodes/' + node_id;
  } else if (metric != null && node_id != null) {
    path = '/_cluster/stats/' + metric + '/nodes/' + node_id;
  } else if (node_id != null) {
    path = '/_cluster/stats/nodes/' + node_id;
  } else {
    path = '/_cluster/stats';
  }
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = statsFunc;

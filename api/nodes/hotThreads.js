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
 * Returns information about hot threads on each node in the cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/nodes-apis/nodes-hot-threads/ - nodes.hot_threads}
 *
 * @memberOf API-Nodes
 *
 * @param {object} [params]
 * @param {boolean} [params.ignore_idle_threads=true] - Whether to show threads that are in known-idle places, such as waiting on a socket select or pulling from an empty task queue.
 * @param {string} [params.interval] - The time interval between thread stack trace samples.
 * @param {number} [params.snapshots=10] - The number of thread stack trace samples to collect.
 * @param {number} [params.threads=3] - The number of threads to provide information for.
 * @param {string} [params.timeout] - The amount of time to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
 * @param {string} [params.type] - The type to sample.
 * @param {array} [params.node_id] - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function hotThreadsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, node_id, ...querystring } = params;
  node_id = parsePathParam(node_id);

  const path = ['/_nodes', node_id, 'hot_threads'].filter(c => c != null).join('/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = hotThreadsFunc;

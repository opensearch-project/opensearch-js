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

const { normalizeArguments } = require('../utils');

/**
 * Allows to manually change the allocation of individual shards in the cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest - cluster.reroute}
 *
 * @memberOf API-Cluster
 *
 * @param {object} [params]
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {boolean} [params.dry_run] - If true, then the request simulates the operation only and returns the resulting state.
 * @param {boolean} [params.explain] - If true, then the response contains an explanation of why the commands can or cannot be executed.
 * @param {string} [params.master_timeout] DEPRECATED - Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
 * @param {string} [params.metric] - Limits the information returned to the specified metrics.
 * @param {boolean} [params.retry_failed] - If true, then retries allocation of shards that are blocked due to too many subsequent allocation failures.
 * @param {string} [params.timeout] - Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
 * @param {object} [params.body] - The definition of `commands` to perform (`move`, `cancel`, `allocate`)
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function rerouteFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, ...querystring } = params;

  const path = '/_cluster/reroute';
  const method = 'POST';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = rerouteFunc;

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
 * Provides explanations for shard allocations in the cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cluster-api/cluster-allocation/ - cluster.allocation_explain}
 *
 * @memberOf API-Cluster
 *
 * @param {object} [params]
 * @param {boolean} [params.include_disk_info=false] - If true, returns information about disk usage and shard sizes.
 * @param {boolean} [params.include_yes_decisions=false] - If true, returns YES decisions in explanation.
 * @param {object} [params.body] - The index, shard, and primary flag to explain. Empty means 'explain the first unassigned shard'
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function allocationExplainFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, ...querystring } = params;

  const path = '/_cluster/allocation/explain';
  const method = body ? 'POST' : 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = allocationExplainFunc;

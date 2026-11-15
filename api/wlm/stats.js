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
 * Retrieves workload management statistics for workload groups on one or more nodes.
 * <br/> See Also: {@link https://docs.opensearch.org/latest/tuning-your-cluster/availability-and-recovery/workload-management/wlm-feature-overview/ - wlm.stats}
 *
 * @memberOf API-Wlm
 *
 * @param {object} [params]
 * @param {boolean} [params.breach] - When `true`, returns only workload groups that have breached their resource limits.
 * @param {string} [params.node_id] - A comma-separated list of node IDs or names used to limit the returned statistics.
 * @param {string} [params.workload_group_id] - A comma-separated list of workload group IDs used to limit the returned statistics. Use `_all` to return statistics for every workload group.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function statsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, node_id, workload_group_id, ...querystring } = params;
  node_id = parsePathParam(node_id);
  workload_group_id = parsePathParam(workload_group_id);

  const path = ['/_wlm', node_id, 'stats', workload_group_id].filter(c => c != null).join('/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = statsFunc;

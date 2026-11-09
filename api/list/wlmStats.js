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
 * Returns paginated workload management statistics in tabular form.
 * <br/> See Also: {@link undefined - list.wlm_stats}
 *
 * @memberOf API-List
 *
 * @param {object} [params]
 * @param {boolean} [params.breach] - When `true`, returns only workload groups that have breached their resource limits.
 * @param {string} [params.format=text] - A short version of the Accept header, such as `JSON`, `YAML`.
 * @param {null | string} [params.next_token] - Token used to retrieve the next page of workload management statistics.
 * @param {string} [params.order] - The sort direction of the page. Allowed values are `asc` and `desc`. Defaults to `asc`.
 * @param {number} [params.size=10] - The maximum number of node and workload group combinations to return in a page. Allowed range is 1 to 100.
 * @param {string} [params.sort] - The field used to sort results. Allowed values are `node_id` and `workload_group`. Defaults to `node_id`.
 * @param {boolean} [params.v=false] - Verbose mode. Display column headers.
 * @param {string} [params.node_id] - A comma-separated list of node IDs or names used to limit the returned statistics.
 * @param {string} [params.workload_group_id] - A comma-separated list of workload group IDs used to limit the returned statistics. Use `_all` to return statistics for every workload group.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function wlmStatsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, node_id, workload_group_id, ...querystring } = params;
  node_id = parsePathParam(node_id);
  workload_group_id = parsePathParam(workload_group_id);

  let path;
  if (node_id != null && workload_group_id != null) {
    path = '/_list/wlm_stats/' + node_id + '/stats/' + workload_group_id;
  } else if (node_id != null) {
    path = '/_list/wlm_stats/' + node_id + '/stats';
  } else if (workload_group_id != null) {
    path = '/_list/wlm_stats/stats/' + workload_group_id;
  } else {
    path = '/_list/wlm_stats';
  }
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = wlmStatsFunc;

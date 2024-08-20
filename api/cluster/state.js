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
 * Returns a comprehensive information about the state of the cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest - cluster.state}
 *
 * @memberOf API-Cluster
 *
 * @param {object} [params]
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {boolean} [params.flat_settings=false] - Return settings in flat format.
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster-manager node.
 * @param {string} [params.master_timeout] DEPRECATED - Specify timeout for connection to master
 * @param {number} [params.wait_for_metadata_version] - Wait for the metadata version to be equal or greater than the specified metadata version
 * @param {string} [params.wait_for_timeout] - The maximum time to wait for wait_for_metadata_version before timing out
 * @param {array} [params.metric] - Limit the information returned to the specified metrics
 * @param {string} [params.index] - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function stateFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, metric, index, ...querystring } = params;
  metric = parsePathParam(metric);
  index = parsePathParam(index);

  const path = ['/_cluster/state/', metric, '/', index].filter(c => c).join('').replace('//', '/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = stateFunc;

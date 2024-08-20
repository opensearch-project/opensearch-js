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
 * Provides information about the current status of the k-NN plugin.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/search-plugins/knn/api/#stats - knn.stats}
 *
 * @memberOf API-Knn
 *
 * @param {object} [params]
 * @param {string} [params.timeout] - Operation timeout.
 * @param {array} [params.node_id] - Comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes.
 * @param {array} [params.stat] - Comma-separated list of stats to retrieve; use `_all` or empty string to retrieve all stats.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function statsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, node_id, stat, ...querystring } = params;
  node_id = parsePathParam(node_id);
  stat = parsePathParam(stat);

  const path = ['/_plugins/_knn/', node_id, '/stats/', stat].filter(c => c).join('').replace('//', '/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = statsFunc;

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
 * Gets stats.
 * <br/> See Also: {@link undefined - search_relevance.get_stats}
 *
 * @memberOf API-Search-Relevance
 *
 * @param {object} [params]
 * @param {string} [params.flat_stat_paths] - Requests flattened stat paths as keys
 * @param {string} [params.include_all_nodes] - Whether to include all nodes
 * @param {string} [params.include_individual_nodes] - Whether to include individual nodes
 * @param {string} [params.include_info] - Whether to include info
 * @param {string} [params.include_metadata] - Whether to include metadata
 * @param {string} [params.stat] - The statistic to return
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getStatsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, stat, ...querystring } = params;
  stat = parsePathParam(stat);

  const path = ['/_plugins/_search_relevance/stats', stat].filter(c => c != null).join('/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getStatsFunc;

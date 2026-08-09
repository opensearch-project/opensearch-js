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
 * Provides information about the current status of the neural-search plugin.
 * <br/> See Also: {@link undefined - neural.stats}
 *
 * @memberOf API-Neural
 *
 * @param {object} [params]
 * @param {boolean} [params.flat_stat_paths=false] - Whether to return stats in the flat form, which can improve readability, especially for heavily nested stats. For example, the flat form of `"processors": { "ingest": { "text_embedding_executions": 20181212 } }` is  `"processors.ingest.text_embedding_executions": "20181212"`.
 * @param {boolean} [params.include_all_nodes=true] - When `true` includes aggregated statistics across all nodes in the `all_nodes` category. When `false`, excludes the `all_nodes` category from the response.
 * @param {boolean} [params.include_individual_nodes=true] - When `true` includes statistics for individual nodes in the `nodes` category. When `false`, excludes the `nodes` category from the response.
 * @param {boolean} [params.include_info=true] - When `true` includes cluster-wide information in the `info` category. When `false`, excludes the `info` category from the response.
 * @param {boolean} [params.include_metadata=false] - Whether to return stat metadata instead of the raw stat value, includes additional information about the stat. These can include things like type hints, time since last stats being recorded, or recent rolling interval values
 * @param {string} [params.node_id] - A comma-separated list of node IDs or names to limit the returned information; leave empty to get information from all nodes.
 * @param {string} [params.stat] - A comma-separated list of stats to retrieve; use empty string to retrieve all stats.
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

  const path = ['/_plugins/_neural', node_id, 'stats', stat].filter(c => c != null).join('/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = statsFunc;

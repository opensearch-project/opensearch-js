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

const { normalizeArguments, parsePathParam, handleMissingParam } = require('../utils');

/**
 * Gets stats by node.
 * <br/> See Also: {@link undefined - search_relevance.get_node_stats}
 *
 * @memberOf API-Search-Relevance
 *
 * @param {object} params
 * @param {boolean} [params.flat_stat_paths] - Requests flattened stat paths as keys
 * @param {boolean} [params.include_all_nodes] - Whether to include all nodes
 * @param {boolean} [params.include_individual_nodes] - Whether to include individual nodes
 * @param {boolean} [params.include_info] - Whether to include info
 * @param {boolean} [params.include_metadata] - Whether to include metadata
 * @param {string} [params.timeout] - The amount of time to wait for a response.
 * @param {string} params.node_id - The node id
 * @param {string} [params.stat] - A comma-separated list of statistics to return. Valid values: `cluster_version`, `import_judgment_rating_generations`, `llm_judgment_rating_generations`, `ubi_judgment_rating_generations`, `experiment_executions`, `experiment_pairwise_comparison_executions`, `experiment_pointwise_evaluation_executions`, `experiment_hybrid_optimizer_executions`.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getNodeStatsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.node_id == null) return handleMissingParam('node_id', this, callback);

  let { body, node_id, stat, ...querystring } = params;
  node_id = parsePathParam(node_id);
  stat = parsePathParam(stat);

  const path = ['/_plugins/_search_relevance', node_id, 'stats', stat].filter(c => c != null).join('/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getNodeStatsFunc;

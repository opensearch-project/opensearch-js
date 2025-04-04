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

const { normalizeArguments, handleMissingParam } = require('../utils');

/**
 * Retrieves the top queries based on the given metric type (latency, CPU, or memory).
 * <br/> See Also: {@link undefined - insights.top_queries}
 *
 * @memberOf API-Insights
 *
 * @param {object} params
 * @param {string} params.type - Get top n queries by a specific metric.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function topQueriesFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.type == null) return handleMissingParam('type', this, callback);

  let { body, ...querystring } = params;

  const path = '/_insights/top_queries';
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = topQueriesFunc;

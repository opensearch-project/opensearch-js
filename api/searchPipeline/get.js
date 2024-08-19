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
 * Retrieves information about a specified search pipeline.
 * <br/> See Also: {@link undefined - search_pipeline.get}
 *
 * @memberOf API-Search-Pipeline
 *
 * @param {object} [params]
 * @param {string} [params.cluster_manager_timeout] - operation timeout for connection to cluster-manager node.
 * @param {string} [params.id] - Comma-separated list of search pipeline ids. Wildcards supported.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, id, ...querystring } = params;
  id = parsePathParam(id);

  const path = ['/_search/pipeline/', id].filter(c => c).join('').replace('//', '/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getFunc;

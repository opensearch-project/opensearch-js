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
 * Gets the search configurations.
 * <br/> See Also: {@link undefined - search_relevance.get_search_configurations}
 *
 * @memberOf API-Search-Relevance
 *
 * @param {object} [params]
 * @param {string} [params.search_configuration_id] - The search configuration id
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getSearchConfigurationsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, search_configuration_id, ...querystring } = params;
  search_configuration_id = parsePathParam(search_configuration_id);

  const path = ['/_plugins/search_relevance/search_configurations', search_configuration_id].filter(c => c != null).join('/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getSearchConfigurationsFunc;

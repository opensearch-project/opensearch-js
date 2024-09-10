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

const { normalizeArguments } = require('../utils');

/**
 * Perform an asynchronous search.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/search-plugins/async/index/#rest-api - asynchronous_search.search}
 *
 * @memberOf API-Asynchronous-Search
 *
 * @param {object} [params]
 * @param {string} [params.index] - The name of the index to be searched.
 * @param {string} [params.keep_alive] - The amount of time that the result is saved in the cluster.
 * @param {boolean} [params.keep_on_completion] - Whether you want to save the results in the cluster after the search is complete.
 * @param {string} [params.wait_for_completion_timeout] - The amount of time that you plan to wait for the results.
 * @param {object} [params.body] - The search definition using the Query DSL.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function searchFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, ...querystring } = params;

  const path = '/_plugins/_asynchronous_search';
  const method = 'POST';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = searchFunc;

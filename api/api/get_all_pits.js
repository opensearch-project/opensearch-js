/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

'use strict';

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path'];
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' };

/**
 * Returns all PITs in the OpenSearch cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/point-in-time-api#list-all-pits|Opensearch - List all PITs}
 * @memberOf API-PIT
 *
 * @param {Object} params
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/opensearch/point-in-time-api#sample-response-1|List all PITs Response}
 */
function getAllPitsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_search' + '/' + 'point_in_time' + '/' + '_all';

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
}

module.exports = getAllPitsApi;

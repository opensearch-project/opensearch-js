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

/** @namespace API-PIT */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = [
  'allow_partial_pit_creation',
  'keep_alive',
  'preference',
  'routing',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
];
const snakeCase = {
  allowPartialPitCreation: 'allow_partial_pit_creation',
  keepAlive: 'keep_alive',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

/**
 * Creates a point in time.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/point-in-time-api#create-a-pit|Opensearch - Create a PIT}
 * @memberOf API-PIT
 *
 * @param {Object} params
 * @param {string} params.index - The name(s) of the target index(es) for the PIT. May contain a comma-separated list or a wildcard index pattern.
 * @param {string} params.keep_alive - The amount of time to keep the PIT
 * @param {string} [params.preference=random] - The node or the shard used to perform the search.
 * @param {string} [params.routing] - Specifies to route search requests to a specific shard.
 * @param {string} [params.expand_wildcards=open] - The type of index that can match the wildcard pattern. Supports comma-separated values.
 * @param {string} [params.allow_partial_pit_creation=false] - Specifies whether to create a PIT with partial failures.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/opensearch/point-in-time-api#sample-response|Create PIT Response}
 */

function createPitApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params['index'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }

  if (params['keep_alive'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: keep_alive');
    return handleError(err, callback);
  }

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'POST';
  path = '/' + encodeURIComponent(index) + '/' + '_search' + '/' + 'point_in_time';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
}

module.exports = createPitApi;

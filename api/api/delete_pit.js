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
 * Deletes one or several PITs. PITs are automatically deleted when the keep_alive time period elapses. However, to deallocate resources, you can delete a PIT using the Delete PIT API.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/opensearch/point-in-time-api#delete-pits|Opensearch - Delete PITs}
 * @memberOf API-PIT
 *
 * @param {Object} params
 * @param {Object} params.body
 * @param {string[]} params.body.pit_id - The PIT IDs of the PITs to be deleted.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/opensearch/point-in-time-api#sample-response-2|Delete PIT Response}
 */
function deletePitApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params['body'] == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'DELETE';
  path = '/' + '_search' + '/' + 'point_in_time';

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
}

module.exports = deletePitApi;

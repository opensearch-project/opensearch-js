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

const { normalizeArguments, parsePathParam, handleMissingParam } = require('../utils');

/**
 * Changes the number of requests per second for a particular Update By Query operation.
 * <br/> See Also: {@link https://opensearch.org/docs/latest - update_by_query_rethrottle}
 *
 * @memberOf API-Core
 *
 * @param {object} params
 * @param {number} [params.requests_per_second] - The throttle for this request in sub-requests per second.
 * @param {string} params.task_id - The ID for the task.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function updateByQueryRethrottleFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.task_id == null) return handleMissingParam('task_id', this, callback);

  let { body, task_id, ...querystring } = params;
  task_id = parsePathParam(task_id);

  const path = '/_update_by_query/' + task_id + '/_rethrottle';
  const method = 'POST';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = updateByQueryRethrottleFunc;

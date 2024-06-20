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
 * Cancels a task, if it can be cancelled through an API.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/tasks/#task-canceling - tasks.cancel}
 *
 * @memberOf API-Tasks
 *
 * @param {object} [params]
 * @param {string} [params.actions] - Comma-separated list or wildcard expression of actions used to limit the request.
 * @param {array} [params.nodes] - Comma-separated list of node IDs or names used to limit the request.
 * @param {string} [params.parent_task_id] - Parent task ID used to limit the tasks.
 * @param {boolean} [params.wait_for_completion=false] - Should the request block until the cancellation of the task and its descendant tasks is completed. Defaults to false
 * @param {string} [params.task_id] - ID of the task.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function cancelFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, task_id, ...querystring } = params;
  task_id = parsePathParam(task_id);

  const path = ['/_tasks/', task_id, '/_cancel'].filter(c => c).join('').replace('//', '/');
  const method = 'POST';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = cancelFunc;

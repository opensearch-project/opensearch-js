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
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

'use strict';

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

/** @namespace API-Tasks */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = [
  'nodes',
  'actions',
  'parent_task_id',
  'wait_for_completion',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
  'timeout',
  'detailed',
  'group_by',
];
const snakeCase = {
  parentTaskId: 'parent_task_id',
  waitForCompletion: 'wait_for_completion',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
  groupBy: 'group_by',
};

function TasksApi(transport, ConfigurationError) {
  this.transport = transport;
  this[kConfigurationError] = ConfigurationError;
}

/**
 * Cancels a task, if it can be cancelled through an API.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/tasks/#task-canceling OpenSearch - Task Cancelling}
 *
 * @memberOf API-Tasks
 *
 * @param {Object} params
 * @param {string} [params.task_id] - Cancel the task with specified task id (node_id:task_number)
 * @param {string} [params.nodes] - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 * @param {string} [params.actions] - A comma-separated list of actions that should be cancelled. Leave empty to cancel all.
 * @param {string} [params.parent_task_id] - Cancel tasks with specified parent task id (node_id:task_number). Set to -1 to cancel all.
 * @param {boolean} [params.wait_for_completion] - Should the request block until the cancellation of the task and its descendant tasks is completed. Defaults to false
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
TasksApi.prototype.cancel = function tasksCancelApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, taskId, task_id, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if ((task_id || taskId) != null) {
    if (method == null) method = 'POST';
    path = '/' + '_tasks' + '/' + encodeURIComponent(task_id || taskId) + '/' + '_cancel';
  } else {
    if (method == null) method = 'POST';
    path = '/' + '_tasks' + '/' + '_cancel';
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns information about a task.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/tasks OpenSearch - Tasks}
 *
 * @memberOf API-Tasks
 *
 * @param {Object} params
 * @param {string} [params.task_id] - Return the task with specified id (node_id:task_number)
 * @param {boolean} [params.wait_for_completion] - Wait for the matching tasks to complete (default: false)
 * @param {string} [params.timeout] - Explicit operation timeoutompletion] - Should the request block until the cancellation of the task and its descendant tasks is completed. Defaults to false
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
TasksApi.prototype.get = function tasksGetApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.task_id == null && params.taskId == null) {
    const err = new this[kConfigurationError]('Missing required parameter: task_id or taskId');
    return handleError(err, callback);
  }

  let { method, body, taskId, task_id, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_tasks' + '/' + encodeURIComponent(task_id || taskId);

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

/**
 * Returns a list of tasks.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/tasks OpenSearch - Tasks}
 *
 * @memberOf API-Tasks
 *
 * @param {Object} params
 * @param {string} [params.nodes] - A comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes
 * @param {string} [params.actions] - A comma-separated list of actions that should be returned. Leave empty to return all.
 * @param {boolean} [params.detailed] - Return detailed task information (default: false)
 * @param {string} [params.parent_task_id] - Return tasks with specified parent task id (node_id:task_number). Set to -1 to return all.
 * @param {boolean} [params.wait_for_completion] - Wait for the matching tasks to complete (default: false)
 * @param {string} [params.group_by] - Group tasks by nodes or parent/child relationships (options: nodes, parents, none)
 * @param {string} [params.timeout] - Explicit operation timeout
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
TasksApi.prototype.list = function tasksListApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_tasks';

  // build request object
  const request = {
    method,
    path,
    body: null,
    querystring,
  };

  return this.transport.request(request, options, callback);
};

module.exports = TasksApi;

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
 * Returns information about the tasks currently executing on one or more nodes in the cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-tasks/ - cat.tasks}
 *
 * @memberOf API-Cat
 *
 * @param {object} [params]
 * @param {array} [params.actions] - The task action names, which are used to limit the response.
 * @param {boolean} [params.detailed=false] - If `true`, the response includes detailed information about shard recoveries.
 * @param {string} [params.format] - A short version of the Accept header (for example, `json`, `yaml`).
 * @param {array} [params.h] - Comma-separated list of column names to display.
 * @param {boolean} [params.help=false] - Return help information.
 * @param {array} [params.nodes] - Comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes.
 * @param {string} [params.parent_task_id] - The parent task identifier, which is used to limit the response.
 * @param {array} [params.s] - Comma-separated list of column names or column aliases to sort by.
 * @param {string} [params.time] - The unit in which to display time values.
 * @param {boolean} [params.v=false] - Verbose mode. Display column headers.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function tasksFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, ...querystring } = params;

  const path = '/_cat/tasks';
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = tasksFunc;

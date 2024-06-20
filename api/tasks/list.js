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

const { normalizeArguments } = require('../utils');

/**
 * Returns a list of tasks.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/tasks/ - tasks.list}
 *
 * @memberOf API-Tasks
 *
 * @param {object} [params]
 * @param {string} [params.actions] - Comma-separated list or wildcard expression of actions used to limit the request.
 * @param {boolean} [params.detailed=false] - If `true`, the response includes detailed information about shard recoveries.
 * @param {string} [params.group_by] - Key used to group tasks in the response.
 * @param {array} [params.nodes] - Comma-separated list of node IDs or names to limit the returned information; use `_local` to return information from the node you're connecting to, leave empty to get information from all nodes.
 * @param {string} [params.parent_task_id] - Parent task ID used to limit returned information. To return all tasks, omit this parameter or use a value of `-1`.
 * @param {string} [params.timeout] - Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
 * @param {boolean} [params.wait_for_completion=false] - If `true`, the request blocks until the operation is complete.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function listFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, ...querystring } = params;

  const path = '/_tasks';
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = listFunc;

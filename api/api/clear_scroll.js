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

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = ['pretty', 'human', 'error_trace', 'source', 'filter_path'];
const snakeCase = { errorTrace: 'error_trace', filterPath: 'filter_path' };

/**
 * Close the search context when you’re done scrolling, because the scroll operation continues to consume computing resources until the timeout.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/scroll/ OpenSearch - Scroll }
 *
 * @memberOf API-Search
 *
 * @param {Object} params
 * @param {string} [params.scroll_id] The ID of the scroll to be terminated. Use `_all` to close all open scroll contexts.
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function clearScrollApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, scrollId, scroll_id, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if ((scroll_id || scrollId) != null) {
    if (method == null) method = 'DELETE';
    path = '/' + '_search' + '/' + 'scroll' + '/' + encodeURIComponent(scroll_id || scrollId);
  } else {
    if (method == null) method = 'DELETE';
    path = '/' + '_search' + '/' + 'scroll';
  }

  // build request object
  const request = {
    method,
    path,
    body: body || '',
    querystring,
  };

  return this.transport.request(request, options, callback);
}

module.exports = clearScrollApi;

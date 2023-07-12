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
const acceptedQuerystring = [
  'fields',
  'ignore_unavailable',
  'allow_no_indices',
  'expand_wildcards',
  'include_unmapped',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
];
const snakeCase = {
  ignoreUnavailable: 'ignore_unavailable',
  allowNoIndices: 'allow_no_indices',
  expandWildcards: 'expand_wildcards',
  includeUnmapped: 'include_unmapped',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

/**
 * Returns the information about the capabilities of fields among multiple indices.
 * <br/> See also: {@link https://opensearch.org/docs/latest/opensearch/supported-field-types/alias/#using-aliases-in-field-capabilities-api-operations OpenSearch - Alias}
 * @memberOf API-Index
 *
 * @param {Object} params
 * @param {string} [params.index] - A comma-separated list of index names; use `_all` or empty string to perform the operation on all indices
 * @param {string} [params.fields] - A comma-separated list of field names
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed)
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified)
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both. (options: open, closed, hidden, none, all)
 * @param {boolean} [params.include_unmapped] - Indicates whether unmapped fields should be included in the response.
 * @param {Object} [params.body] - An index filter specified with the Query DSL
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function fieldCapsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, index, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_field_caps';
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + '_field_caps';
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

module.exports = fieldCapsApi;

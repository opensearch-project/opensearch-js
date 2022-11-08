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
  'term_statistics',
  'field_statistics',
  'fields',
  'offsets',
  'positions',
  'payloads',
  'preference',
  'routing',
  'realtime',
  'version',
  'version_type',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
];
const snakeCase = {
  termStatistics: 'term_statistics',
  fieldStatistics: 'field_statistics',
  versionType: 'version_type',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

/**
 * Returns information and statistics about terms in the fields of a particular document.
 *
 * @memberOf API-Document
 *
 * @param {Object} params
 * @param {string} params.index - The index in which the document resides.
 * @param {string} [params.id] - The id of the document, when not specified a doc param should be supplied.
 * @param {boolean} [params.term_statistics] - Specifies if total term frequency and document frequency should be returned.
 * @param {boolean} [params.field_statistics] - Specifies if document count, sum of document frequencies and sum of total term frequencies should be returned.
 * @param {string} [params.fields] - A comma-separated list of fields to return.
 * @param {boolean} [params.offsets] - Specifies if term offsets should be returned.
 * @param {boolean} [params.positions] - Specifies if term positions should be returned.
 * @param {boolean} [params.payloads] - Specifies if term payloads should be returned.
 * @param {string} [params.preference] - Specify the node or shard the operation should be performed on (default: random).
 * @param {string} [params.routing] - Specific routing value.
 * @param {boolean} [params.realtime] - Specifies if request is real-time as opposed to near-real-time (default: true).
 * @param {number} [params.version] - Explicit version number for concurrency control
 * @param {string} [params.version_type] - Specific version type (options: internal, external, external_gte, force)
 * @param {Object} [params.body] - Define parameters and or supply a document to get termvectors for. See documentation.
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function termvectorsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.index == null) {
    const err = new this[kConfigurationError]('Missing required parameter: index');
    return handleError(err, callback);
  }

  let { method, body, index, id, type, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (index != null && type != null && id != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path =
      '/' +
      encodeURIComponent(index) +
      '/' +
      encodeURIComponent(type) +
      '/' +
      encodeURIComponent(id) +
      '/' +
      '_termvectors';
  } else if (index != null && id != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_termvectors' + '/' + encodeURIComponent(id);
  } else if (index != null && type != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + encodeURIComponent(type) + '/' + '_termvectors';
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + encodeURIComponent(index) + '/' + '_termvectors';
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

module.exports = termvectorsApi;

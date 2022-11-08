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

/** @namespace API-Ingest */

const { handleError, snakeCaseKeys, normalizeArguments, kConfigurationError } = require('../utils');
const acceptedQuerystring = [
  'cluster_manager_timeout',
  'master_timeout',
  'timeout',
  'pretty',
  'human',
  'error_trace',
  'source',
  'filter_path',
  'summary',
  'verbose',
];
const snakeCase = {
  clusterManagerTimeout: 'cluster_manager_timeout',
  masterTimeout: 'master_timeout',
  errorTrace: 'error_trace',
  filterPath: 'filter_path',
};

function IngestApi(transport, ConfigurationError) {
  this.transport = transport;
  this[kConfigurationError] = ConfigurationError;
}

/**
 * Deletes a pipeline.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/ingest-apis/delete-ingest/ OpenSearch - Delete a pipeline}
 *
 * @memberOf API-Ingest
 *
 * @param {Object} params
 * @param {string} params.id - Pipeline ID
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {string} [params.timeout] - Explicit operation timeout
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/ingest-apis/delete-ingest/#response Delete Pipeline Response}
 */
IngestApi.prototype.deletePipeline = function ingestDeletePipelineApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'DELETE';
  path = '/' + '_ingest' + '/' + 'pipeline' + '/' + encodeURIComponent(id);

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
 * Returns statistical information about geoip databases
 *
 * @memberOf API-Ingest
 *
 * @param {Object} params - (Unused)
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IngestApi.prototype.geoIpStats = function ingestGeoIpStatsApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_ingest' + '/' + 'geoip' + '/' + 'stats';

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
 * Returns a pipeline.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/ingest-apis/get-ingest/ OpenSearch - Get pipeline}
 *
 * @memberOf API-Ingest
 *
 * @param {Object} params
 * @param {string} [params.id] - Comma separated list of pipeline ids. Wildcards supported
 * @param {boolean} [params.summary=false] - Return pipelines without their definitions
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/ingest-apis/get-ingest/#response Get Pipeline Response}
 */
IngestApi.prototype.getPipeline = function ingestGetPipelineApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, id, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (id != null) {
    if (method == null) method = 'GET';
    path = '/' + '_ingest' + '/' + 'pipeline' + '/' + encodeURIComponent(id);
  } else {
    if (method == null) method = 'GET';
    path = '/' + '_ingest' + '/' + 'pipeline';
  }

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
 * Returns a list of the built-in patterns.
 *
 * @memberOf API-Ingest
 *
 * @param {Object} params - (Unused)
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IngestApi.prototype.processorGrok = function ingestProcessorGrokApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'GET';
  path = '/' + '_ingest' + '/' + 'processor' + '/' + 'grok';

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
 * Creates or updates a pipeline.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/ingest-apis/create-update-ingest/ OpenSearch - Create/Update pipeline}
 *
 * @memberOf API-Ingest
 *
 * @param {Object} params
 * @param {string} params.id - Pipeline ID
 * @param {Object} params.body - Ingest definition
 * @param {string} [params.cluster_manager_timeout] - Explicit operation timeout for connection to cluster_manager node
 * @param {string} [params.timeout] - Explicit operation timeout
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*} {@link https://opensearch.org/docs/latest/api-reference/ingest-apis/create-update-ingest/#response Create/Update Pipeline Response}
 */
IngestApi.prototype.putPipeline = function ingestPutPipelineApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (method == null) method = 'PUT';
  path = '/' + '_ingest' + '/' + 'pipeline' + '/' + encodeURIComponent(id);

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
 * Allows to simulate a pipeline with example documents.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/ingest-apis/simulate-ingest/ OpenSearch - Simulate Pipeline}
 *
 * @memberOf API-Ingest
 *
 * @param {Object} params
 * @param {string} [params.id] - Pipeline ID
 * @param {boolean} [params.verbose] - Verbose mode. Display data output for each processor in executed pipeline
 * @param {Object} params.body - Simulate definition
 *
 * @param {Object} options - Options for {@link Transport#request}
 * @param {function} callback - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
IngestApi.prototype.simulate = function ingestSimulateApi(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  // check required parameters
  if (params.body == null) {
    const err = new this[kConfigurationError]('Missing required parameter: body');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  querystring = snakeCaseKeys(acceptedQuerystring, snakeCase, querystring);

  let path = '';
  if (id != null) {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + '_ingest' + '/' + 'pipeline' + '/' + encodeURIComponent(id) + '/' + '_simulate';
  } else {
    if (method == null) method = body == null ? 'GET' : 'POST';
    path = '/' + '_ingest' + '/' + 'pipeline' + '/' + '_simulate';
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

Object.defineProperties(IngestApi.prototype, {
  delete_pipeline: {
    get() {
      return this.deletePipeline;
    },
  },
  geo_ip_stats: {
    get() {
      return this.geoIpStats;
    },
  },
  get_pipeline: {
    get() {
      return this.getPipeline;
    },
  },
  processor_grok: {
    get() {
      return this.processorGrok;
    },
  },
  put_pipeline: {
    get() {
      return this.putPipeline;
    },
  },
});

module.exports = IngestApi;

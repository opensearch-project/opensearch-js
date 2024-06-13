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

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

'use strict';

/* eslint camelcase: 0 */
/* eslint no-unused-vars: 0 */

const {
  handleError,
  encodePathParam,
  normalizeArguments,
  kConfigurationError,
} = require('../utils');

/** @namespace API-Rollups */

function RollupsApi(transport, ConfigurationError) {
  this.transport = transport;
  this[kConfigurationError] = ConfigurationError;
}
/**
 * Delete index rollup.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-rollups/rollup-api/#delete-an-index-rollup-job - rollups.delete}
 *
 * @memberOf API-Rollups
 *
 * @param {object} params
 * @param {string} params.id - Rollup to access
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
RollupsApi.prototype.delete = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  id = encodePathParam(id);

  let path = ['_plugins', '_rollup', 'jobs', id].filter((c) => c != null).join('/');
  method = 'DELETE';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

/**
 * Get an index rollup.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-rollups/rollup-api/#get-an-index-rollup-job - rollups.get}
 *
 * @memberOf API-Rollups
 *
 * @param {object} params
 * @param {string} params.id - Rollup to access
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
RollupsApi.prototype.get = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  id = encodePathParam(id);

  let path = ['_plugins', '_rollup', 'jobs', id].filter((c) => c != null).join('/');
  method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

/**
 * Create or update index rollup.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-rollups/rollup-api/#create-or-update-an-index-rollup-job - rollups.put}
 *
 * @memberOf API-Rollups
 *
 * @param {object} params
 * @param {number} [params.if_seq_no] - Only perform the operation if the document has this sequence number.
 * @param {number} [params.if_primary_term] - Only perform the operation if the document has this primary term.
 * @param {string} params.id - Rollup to access
 * @param {object} [params.body]
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
RollupsApi.prototype.put = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  id = encodePathParam(id);

  let path = ['_plugins', '_rollup', 'jobs', id].filter((c) => c != null).join('/');
  method = 'PUT';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

/**
 * Get a rollup's current status.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-rollups/rollup-api/#explain-an-index-rollup-job - rollups.explain}
 *
 * @memberOf API-Rollups
 *
 * @param {object} params
 * @param {string} params.id - Rollup to access
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
RollupsApi.prototype.explain = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  id = encodePathParam(id);

  let path = ['_plugins', '_rollup', 'jobs', id, '_explain'].filter((c) => c != null).join('/');
  method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

/**
 * Start rollup.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-rollups/rollup-api/#start-or-stop-an-index-rollup-job - rollups.start}
 *
 * @memberOf API-Rollups
 *
 * @param {object} params
 * @param {string} params.id - Rollup to access
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
RollupsApi.prototype.start = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  id = encodePathParam(id);

  let path = ['_plugins', '_rollup', 'jobs', id, '_start'].filter((c) => c != null).join('/');
  method = 'POST';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

/**
 * Stop rollup.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-rollups/rollup-api/#start-or-stop-an-index-rollup-job - rollups.stop}
 *
 * @memberOf API-Rollups
 *
 * @param {object} params
 * @param {string} params.id - Rollup to access
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
RollupsApi.prototype.stop = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  id = encodePathParam(id);

  let path = ['_plugins', '_rollup', 'jobs', id, '_stop'].filter((c) => c != null).join('/');
  method = 'POST';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

module.exports = RollupsApi;

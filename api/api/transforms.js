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

/** @namespace API-Transforms */

function TransformsApi(transport, ConfigurationError) {
  this.transport = transport;
  this[kConfigurationError] = ConfigurationError;
}

/**
 * Returns the details of all transform jobs.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-transforms/transforms-apis/#get-a-transform-jobs-details - transforms.search}
 *
 * @memberOf API-Transforms
 *
 * @param {object} [params]
 * @param {number} [params.size] - Specifies the number of transforms to return. Default is 10.
 * @param {number} [params.from] - The starting transform to return. Default is 0.
 * @param {string} [params.search] - The search term to use to filter results.
 * @param {string} [params.sortField] - The field to sort results with.
 * @param {string} [params.sortDirection] - Specifies the direction to sort results in. Can be ASC or DESC. Default is ASC.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
TransformsApi.prototype.search = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['_plugins', '_transform'].filter((c) => c != null).join('/');
  method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

/**
 * Returns a preview of what a transformed index would look like.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-transforms/transforms-apis/#preview-a-transform-jobs-results - transforms.preview}
 *
 * @memberOf API-Transforms
 *
 * @param {object} [params] - (Unused)
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
TransformsApi.prototype.preview = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { method, body, ...querystring } = params;

  let path = ['_plugins', '_transform', '_preview'].filter((c) => c != null).join('/');
  method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

/**
 * Delete an index transform.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-transforms/transforms-apis/#delete-a-transform-job - transforms.delete}
 *
 * @memberOf API-Transforms
 *
 * @param {object} params
 * @param {string} params.id - Transform to delete
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
TransformsApi.prototype.delete = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  id = encodePathParam(id);

  let path = ['_plugins', '_transform', id].filter((c) => c != null).join('/');
  method = 'DELETE';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

/**
 * Returns the status and metadata of a transform job.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-transforms/transforms-apis/#get-a-transform-jobs-details - transforms.get}
 *
 * @memberOf API-Transforms
 *
 * @param {object} params
 * @param {string} params.id - Transform to access
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
TransformsApi.prototype.get = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  id = encodePathParam(id);

  let path = ['_plugins', '_transform', id].filter((c) => c != null).join('/');
  method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

/**
 * Create an index transform, or update a transform if if_seq_no and if_primary_term are provided.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-transforms/transforms-apis/#create-a-transform-job - transforms.put}
 *
 * @memberOf API-Transforms
 *
 * @param {object} params
 * @param {number} [params.if_seq_no] - Only perform the operation if the document has this sequence number.
 * @param {number} [params.if_primary_term] - Only perform the operation if the document has this primary term.
 * @param {string} params.id - Transform to create/update
 * @param {object} [params.body]
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
TransformsApi.prototype.put = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  id = encodePathParam(id);

  let path = ['_plugins', '_transform', id].filter((c) => c != null).join('/');
  method = 'PUT';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

/**
 * Returns the status and metadata of a transform job.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-transforms/transforms-apis/#get-the-status-of-a-transform-job - transforms.explain}
 *
 * @memberOf API-Transforms
 *
 * @param {object} params
 * @param {string} params.id - Transform to explain
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
TransformsApi.prototype.explain = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  id = encodePathParam(id);

  let path = ['_plugins', '_transform', id, '_explain'].filter((c) => c != null).join('/');
  method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

/**
 * Start transform.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-transforms/transforms-apis/#start-a-transform-job - transforms.start}
 *
 * @memberOf API-Transforms
 *
 * @param {object} params
 * @param {string} params.id - Transform to start
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
TransformsApi.prototype.start = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  id = encodePathParam(id);

  let path = ['_plugins', '_transform', id, '_start'].filter((c) => c != null).join('/');
  method = 'POST';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

/**
 * stop transform.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-transforms/transforms-apis/#stop-a-transform-job - transforms.stop}
 *
 * @memberOf API-Transforms
 *
 * @param {object} params
 * @param {string} params.id - Transform to stop
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
TransformsApi.prototype.stop = function (params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  if (params.id == null) {
    const err = new this[kConfigurationError]('Missing required parameter: id');
    return handleError(err, callback);
  }

  let { method, body, id, ...querystring } = params;
  id = encodePathParam(id);

  let path = ['_plugins', '_transform', id, '_stop'].filter((c) => c != null).join('/');
  method = 'POST';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
};

module.exports = TransformsApi;

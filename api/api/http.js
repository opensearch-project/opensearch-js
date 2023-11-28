/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

'use strict';

/** @namespace API-HTTP */

const { normalizeArguments, kConfigurationError } = require('../utils');

function HttpApi(transport, ConfigurationError) {
  this.transport = transport;
  this[kConfigurationError] = ConfigurationError;
}

HttpApi.prototype.request = function (method, params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (Array.isArray(params.body)) {
    const { path, querystring, headers, body } = params;
    params = { path, querystring, headers, bulkBody: body };
  }
  options = options || {};
  options.headers = params.headers || options.headers;
  return this.transport.request({ ...params, method }, options, callback);
};

/**
 * Make a customized CONNECT request.
 *
 * @memberOf API-HTTP
 *
 * @param {Object} params
 * @param {Object} params.path - The URL of the request
 * @param {Object} [params.querystring] - The querystring parameters
 * @param {Object} [params.headers] - The request headers
 * @param {Object} [params.body] - The request body
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
HttpApi.prototype.connect = function (params, options, callback) {
  return this.request('CONNECT', params, options, callback);
};

/**
 * Make a customized DELETE request.
 *
 * @memberOf API-HTTP
 *
 * @param {Object} params
 * @param {Object} params.path - The URL of the request
 * @param {Object} [params.querystring] - The querystring parameters
 * @param {Object} [params.headers] - The request headers
 * @param {Object} [params.body] - The request body
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
HttpApi.prototype.delete = function (params, options, callback) {
  return this.request('DELETE', params, options, callback);
};

/**
 * Make a customized GET request.
 *
 * @memberOf API-HTTP
 *
 * @param {Object} params
 * @param {Object} params.path - The URL of the request
 * @param {Object} [params.querystring] - The querystring parameters
 * @param {Object} [params.headers] - The request headers
 * @param {Object} [params.body] - The request body
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
HttpApi.prototype.get = function (params, options, callback) {
  return this.request('GET', params, options, callback);
};

/**
 * Make a customized HEAD request.
 *
 * @memberOf API-HTTP
 *
 * @param {Object} params
 * @param {Object} params.path - The URL of the request
 * @param {Object} [params.querystring] - The querystring parameters
 * @param {Object} [params.headers] - The request headers
 * @param {Object} [params.body] - The request body
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
HttpApi.prototype.head = function (params, options, callback) {
  return this.request('HEAD', params, options, callback);
};

/**
 * Make a customized OPTIONS request.
 *
 * @memberOf API-HTTP
 *
 * @param {Object} params
 * @param {Object} params.path - The URL of the request
 * @param {Object} [params.querystring] - The querystring parameters
 * @param {Object} [params.headers] - The request headers
 * @param {Object} [params.body] - The request body
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
HttpApi.prototype.options = function (params, options, callback) {
  return this.request('OPTIONS', params, options, callback);
};

/**
 * Make a customized PATCH request.
 *
 * @memberOf API-HTTP
 *
 * @param {Object} params
 * @param {Object} params.path - The URL of the request
 * @param {Object} [params.querystring] - The querystring parameters
 * @param {Object} [params.headers] - The request headers
 * @param {Object} [params.body] - The request body
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
HttpApi.prototype.patch = function (params, options, callback) {
  return this.request('PATCH', params, options, callback);
};

/**
 * Make a customized POST request.
 *
 * @memberOf API-HTTP
 *
 * @param {Object} params
 * @param {Object} params.path - The URL of the request
 * @param {Object} [params.querystring] - The querystring parameters
 * @param {Object} [params.headers] - The request headers
 * @param {Object} [params.body] - The request body
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
HttpApi.prototype.post = function (params, options, callback) {
  return this.request('POST', params, options, callback);
};

/**
 * Make a customized PUT request.
 *
 * @memberOf API-HTTP
 *
 * @param {Object} params
 * @param {Object} params.path - The URL of the request
 * @param {Object} [params.querystring] - The querystring parameters
 * @param {Object} [params.headers] - The request headers
 * @param {Object} [params.body] - The request body
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
HttpApi.prototype.put = function (params, options, callback) {
  return this.request('PUT', params, options, callback);
};

/**
 * Make a customized TRACE request.
 *
 * @memberOf API-HTTP
 *
 * @param {Object} params
 * @param {Object} params.path - The URL of the request
 * @param {Object} [params.querystring] - The querystring parameters
 * @param {Object} [params.headers] - The request headers
 * @param {Object} [params.body] - The request body
 *
 * @param {Object} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
HttpApi.prototype.trace = function (params, options, callback) {
  return this.request('TRACE', params, options, callback);
};

module.exports = HttpApi;

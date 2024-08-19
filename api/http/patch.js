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

const { normalizeArguments, handleMissingParam } = require('../utils');

/**
* Make a customized PATCH request.
*
* @memberOf API-Http
*
* @param {Object} params
* @param {string} params.path - URL of the request
* @param {Object} [params.querystring] - Querystring parameters
* @param {Object} [params.headers] - Request headers
* @param {Object | Object[] | string} [params.body] - Request body
*
* @param {Object} [options] - Options for {@link Transport#request}
* @param {function} [callback] - Callback that handles errors and response
*
* @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
*/
function patchFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.path == null) return handleMissingParam('path', this, callback);
  if (Array.isArray(params.body)) {
    const { path, querystring, headers, body } = params;
    params = { path, querystring, headers, bulkBody: body };
  }
  options = options || {};
  options.headers = params.headers || options.headers;
  return this.transport.request({ ...params, method: 'PATCH' }, options, callback);
}

module.exports = patchFunc;

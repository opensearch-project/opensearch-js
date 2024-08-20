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

const { normalizeArguments, parsePathParam, handleMissingParam } = require('../utils');

/**
 * Creates or replaces the specified user.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#create-user - security.create_user}
 *
 * @memberOf API-Security
 *
 * @param {object} params
 * @param {string} params.username 
 * @param {object} params.body 
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function createUserFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.username == null) return handleMissingParam('username', this, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, username, ...querystring } = params;
  username = parsePathParam(username);

  const path = '/_plugins/_security/api/internalusers/' + username;
  const method = 'PUT';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = createUserFunc;

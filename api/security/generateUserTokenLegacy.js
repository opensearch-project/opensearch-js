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
 * This file was generated from the OpenSearch API Spec. Do NOT edit it
 * manually. If you want to make changes, either update the spec or
 * modify the API generator.
 */

'use strict';

const { normalizeArguments, parsePathParam, handleMissingParam } = require('../utils');

/**
 * Generates authorization token for the given user. Legacy API.  Not Implemented.
 * <br/> See Also: {@link undefined - security.generate_user_token_legacy}
 *
 * @memberOf API-Security
 *
 * @param {object} params
 * @param {string} params.username - The name of the user for whom an auth token is to be vended.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function generateUserTokenLegacyFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.username == null) return handleMissingParam('username', this, callback);

  let { body, username, ...querystring } = params;
  username = parsePathParam(username);

  const path = '/_plugins/_security/api/user/' + username + '/authtoken';
  const method = 'POST';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = generateUserTokenLegacyFunc;

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
 * Updates individual attributes of a role mapping.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#patch-role-mapping - security.patch_role_mapping}
 *
 * @memberOf API-Security
 *
 * @param {object} params
 * @param {string} params.role 
 * @param {array} params.body 
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function patchRoleMappingFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.role == null) return handleMissingParam('role', this, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, role, ...querystring } = params;
  role = parsePathParam(role);

  const path = '/_plugins/_security/api/rolesmapping/' + role;
  const method = 'PATCH';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = patchRoleMappingFunc;

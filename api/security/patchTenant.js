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
 * Add, delete, or modify a single tenant.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#patch-tenant - security.patch_tenant}
 *
 * @memberOf API-Security
 *
 * @param {object} params
 * @param {string} params.tenant 
 * @param {array} params.body 
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function patchTenantFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.tenant == null) return handleMissingParam('tenant', this, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, tenant, ...querystring } = params;
  tenant = parsePathParam(tenant);

  const path = '/_plugins/_security/api/tenants/' + tenant;
  const method = 'PATCH';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = patchTenantFunc;

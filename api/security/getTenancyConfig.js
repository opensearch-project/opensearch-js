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

const { normalizeArguments } = require('../utils');

/**
 * Retrieves multi-tenancy configuration. Only accessible to admins and users with REST API permissions.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/multi-tenancy/dynamic-config/#configuring-multi-tenancy-with-the-rest-api - security.get_tenancy_config}
 *
 * @memberOf API-Security
 *
 * @param {object} [params] - (Unused)
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getTenancyConfigFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, ...querystring } = params;

  const path = '/_plugins/_security/api/tenancy/config';
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getTenancyConfigFunc;

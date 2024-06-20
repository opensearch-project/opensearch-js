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

const { normalizeArguments, parsePathParam } = require('../utils');

/**
 * Reloads secure settings.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/nodes-apis/nodes-reload-secure/ - nodes.reload_secure_settings}
 *
 * @memberOf API-Nodes
 *
 * @param {object} [params]
 * @param {string} [params.timeout] - Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
 * @param {string} [params.node_id] - The names of particular nodes in the cluster to target.
 * @param {object} [params.body] - An object containing the password for the opensearch keystore
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function reloadSecureSettingsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, node_id, ...querystring } = params;
  node_id = parsePathParam(node_id);

  const path = ['/_nodes/', node_id, '/reload_secure_settings'].filter(c => c).join('').replace('//', '/');
  const method = 'POST';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = reloadSecureSettingsFunc;

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
 * Deletes all distinguished names in the specified cluster or node allowlist. Requires super admin or REST API permissions.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/security/access-control/api/#delete-distinguished-names - security.delete_distinguished_name}
 *
 * @memberOf API-Security
 *
 * @param {object} params
 * @param {string} params.cluster_name - The cluster name to delete from list of distinguished names.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function deleteDistinguishedNameFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.cluster_name == null) return handleMissingParam('cluster_name', this, callback);

  let { body, cluster_name, ...querystring } = params;
  cluster_name = parsePathParam(cluster_name);

  const path = '/_plugins/_security/api/nodesdn/' + cluster_name;
  const method = 'DELETE';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = deleteDistinguishedNameFunc;

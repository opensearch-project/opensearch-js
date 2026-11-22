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

const { normalizeArguments, parsePathParam } = require('../utils');

/**
 * Retrieves the currently applied policy on the specified indexes.
 * <br/> See Also: {@link https://docs.opensearch.org/latest/im-plugin/ism/api/#explain-index - ism.explain_policy}
 *
 * @memberOf API-Ism
 *
 * @param {object} [params]
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {number} [params.from=0] - The starting index of the managed indexes to return.
 * @param {boolean} [params.local=false] - Whether to return information from the local node only instead of from the cluster manager node.
 * @param {string} [params.master_timeout] DEPRECATED - Operation timeout for connection to cluster-manager node.
 * @param {string} [params.queryString=*] - A query string that filters the managed indexes.
 * @param {boolean} [params.show_policy=false] - Whether to include the policy of each managed index in the response.
 * @param {number} [params.size=20] - The number of managed indexes to return.
 * @param {string} [params.sortField=managed_index.index] - The field to sort the managed indexes by.
 * @param {string} [params.sortOrder] - The sort order of the managed indexes.
 * @param {string} [params.type=_default] - The type of the index metadata provider.
 * @param {boolean} [params.validate_action=false] - Whether to include the validation result of the current action of each managed index in the response.
 * @param {string} [params.index] - A comma-separated list of data streams, indexes, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indexes, omit this parameter or use `*` or `_all`.
 * @param {object} [params.body] - The filter for the managed indexes. Only read by `POST` requests, which require a body.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function explainPolicyFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, index, ...querystring } = params;
  index = parsePathParam(index);

  const path = ['/_plugins/_ism/explain', index].filter(c => c != null).join('/');
  const method = body ? 'POST' : 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = explainPolicyFunc;

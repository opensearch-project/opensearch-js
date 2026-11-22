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
 * Adds a policy to an index.
 * <br/> See Also: {@link https://docs.opensearch.org/latest/im-plugin/ism/api/#add-policy - ism.add_policy}
 *
 * @memberOf API-Ism
 *
 * @param {object} params
 * @param {string} [params.index] - A comma-separated list of data streams, indexes, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indexes, omit this parameter or use `*` or `_all`.
 * @param {string} [params.type=_default] - The type of the index metadata provider.
 * @param {object} params.body 
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function addPolicyFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, index, ...querystring } = params;
  index = parsePathParam(index);

  const path = ['/_plugins/_ism/add', index].filter(c => c != null).join('/');
  const method = 'POST';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = addPolicyFunc;

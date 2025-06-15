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
 * Checks if a store exists.
 * <br/> See Also: {@link undefined - ltr.get_store}
 *
 * @memberOf API-Ltr
 *
 * @param {object} params
 * @param {string} params.store - The name of the feature store.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getStoreFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.store == null) return handleMissingParam('store', this, callback);

  let { body, store, ...querystring } = params;
  store = parsePathParam(store);

  const path = '/_ltr/' + store;
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getStoreFunc;

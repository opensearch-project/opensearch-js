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
 * Create or update a feature set in the default feature store.
 * <br/> See Also: {@link undefined - ltr.create_featureset}
 *
 * @memberOf API-Ltr
 *
 * @param {object} params
 * @param {string} [params.routing] - Specific routing value.
 * @param {string} params.id - The name of the feature set.
 * @param {string} [params.store] - The name of the feature store.
 * @param {object} params.body - The feature set definition.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function createFeaturesetFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.id == null) return handleMissingParam('id', this, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, id, store, ...querystring } = params;
  id = parsePathParam(id);
  store = parsePathParam(store);

  const path = ['/_ltr', store, '_featureset', id].filter(c => c != null).join('/');
  const method = 'PUT';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = createFeaturesetFunc;

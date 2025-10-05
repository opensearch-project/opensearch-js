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
 * Add features to an existing feature set in the default feature store.
 * <br/> See Also: {@link undefined - ltr.add_features_to_set}
 *
 * @memberOf API-Ltr
 *
 * @param {object} params
 * @param {boolean} [params.merge=false] - Whether to merge the feature list or append only.
 * @param {string} [params.routing] - Specific routing value.
 * @param {number} [params.version] - Version check to ensure feature set is modified with expected version.
 * @param {string} params.name - The name of the feature set to add features to.
 * @param {string} [params.store] - The name of the feature store.
 * @param {object} params.body - The features to add to the feature set.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function addFeaturesToSetFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.name == null) return handleMissingParam('name', this, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, name, store, ...querystring } = params;
  name = parsePathParam(name);
  store = parsePathParam(store);

  const path = ['/_ltr', store, '_featureset', name, '_addfeatures'].filter(c => c != null).join('/');
  const method = 'POST';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = addFeaturesToSetFunc;

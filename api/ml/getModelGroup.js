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
 * Retrieves a model group.
 * <br/> See Also: {@link undefined - ml.get_model_group}
 *
 * @memberOf API-Ml
 *
 * @param {object} params
 * @param {string} params.model_group_id 
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getModelGroupFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.model_group_id == null) return handleMissingParam('model_group_id', this, callback);

  let { body, model_group_id, ...querystring } = params;
  model_group_id = parsePathParam(model_group_id);

  const path = '/_plugins/_ml/model_groups/' + model_group_id;
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getModelGroupFunc;

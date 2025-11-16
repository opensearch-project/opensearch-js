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
 * Gets experiments.
 * <br/> See Also: {@link undefined - search_relevance.get_experiments}
 *
 * @memberOf API-Search-Relevance
 *
 * @param {object} [params]
 * @param {string} [params.experiment_id] - The experiment id
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getExperimentsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, experiment_id, ...querystring } = params;
  experiment_id = parsePathParam(experiment_id);

  const path = ['/_plugins/_search_relevance/experiments', experiment_id].filter(c => c != null).join('/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getExperimentsFunc;

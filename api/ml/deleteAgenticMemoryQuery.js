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
 * Delete multiple memories using a query to match specific criteria.
 * <br/> See Also: {@link undefined - ml.delete_agentic_memory_query}
 *
 * @memberOf API-Ml
 *
 * @param {object} params
 * @param {string} params.memory_container_id 
 * @param {string} params.type 
 * @param {object} [params.body] 
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function deleteAgenticMemoryQueryFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.memory_container_id == null) return handleMissingParam('memory_container_id', this, callback);
  if (params.type == null) return handleMissingParam('type', this, callback);

  let { body, memory_container_id, type, ...querystring } = params;
  memory_container_id = parsePathParam(memory_container_id);
  type = parsePathParam(type);

  const path = '/_plugins/_ml/memory_containers/' + memory_container_id + '/memories/' + type + '/_delete_by_query';
  const method = 'POST';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = deleteAgenticMemoryQueryFunc;

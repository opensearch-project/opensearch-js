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
 * Use this API to retrieve the ingestion state for a given index.
 * <br/> See Also: {@link https://docs.opensearch.org/docs/latest/api-reference/document-apis/pull-based-ingestion-management/ - ingestion.get_state}
 *
 * @memberOf API-Ingestion
 *
 * @param {object} params
 * @param {string} [params.next_token] - Token to retrieve the next page of results.
 * @param {number} [params.size] - Number of results to return per page.
 * @param {string} [params.timeout] - Timeout for the request.
 * @param {string} params.index - Index for which ingestion state should be retrieved.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getStateFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.index == null) return handleMissingParam('index', this, callback);

  let { body, index, ...querystring } = params;
  index = parsePathParam(index);

  const path = '/' + index + '/ingestion/_state';
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getStateFunc;

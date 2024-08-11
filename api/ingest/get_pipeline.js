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

const { normalizeArguments, parsePathParam } = require('../utils');

/**
 * Returns a pipeline.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/ingest-apis/get-ingest/ - ingest.get_pipeline}
 *
 * @memberOf API-Ingest
 *
 * @param {object} [params]
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {string} [params.master_timeout] DEPRECATED - Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
 * @param {string} [params.id] - Comma-separated list of pipeline IDs to retrieve. Wildcard (`*`) expressions are supported. To get all ingest pipelines, omit this parameter or use `*`.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getPipelineFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, id, ...querystring } = params;
  id = parsePathParam(id);

  const path = ['/_ingest/pipeline/', id].filter(c => c).join('').replace('//', '/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getPipelineFunc;

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

const { normalizeArguments, handleMissingParam } = require('../utils');

/**
 * Adds or removes backing indexes of a data stream with metadata-only actions.
This is an experimental API.
 * <br/> See Also: {@link https://docs.opensearch.org/latest/im-plugin/data-streams/ - indices.modify_data_stream}
 *
 * @memberOf API-Indices
 *
 * @param {object} params
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {string} [params.timeout] - Period to wait for a response. If no response is received before the timeout expires, the request fails and returns an error.
 * @param {object} params.body - The data stream modify actions.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function modifyDataStreamFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, ...querystring } = params;

  const path = '/_data_stream/_modify';
  const method = 'POST';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = modifyDataStreamFunc;

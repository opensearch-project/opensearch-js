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

const { normalizeArguments, handleMissingParam } = require('../utils');

/**
 * Updates the cluster settings.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cluster-settings/ - cluster.put_settings}
 *
 * @memberOf API-Cluster
 *
 * @param {object} params
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {boolean} [params.flat_settings=false] - Return settings in flat format.
 * @param {string} [params.master_timeout] DEPRECATED - Explicit operation timeout for connection to master node
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {object} params.body - The settings to be updated. Can be either `transient` or `persistent` (survives cluster restart).
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function putSettingsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, ...querystring } = params;

  const path = '/_cluster/settings';
  const method = 'PUT';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = putSettingsFunc;

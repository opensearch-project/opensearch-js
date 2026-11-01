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
 * Returns definition metadata for cluster settings, including whether each setting is dynamic. Does not return setting values or defaults.
 * <br/> See Also: {@link https://docs.opensearch.org/latest/api-reference/cluster-api/describe-cluster-settings/ - cluster.describe_settings}
 *
 * @memberOf API-Cluster
 *
 * @param {object} params
 * @param {string} [params.cluster_manager_timeout] - The amount of time to wait for a response from the cluster manager node. For more information about supported time units, see [Common parameters](https://docs.opensearch.org/latest/api-reference/common-parameters/#time-units).
 * @param {string} params.settings - A comma-separated list of exact setting names to describe. Wildcards are not supported; each name must be an exact, valid setting key. At least one name is required.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function describeSettingsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.settings == null) return handleMissingParam('settings', this, callback);

  let { body, ...querystring } = params;

  const path = '/_cluster/settings/_describe';
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = describeSettingsFunc;

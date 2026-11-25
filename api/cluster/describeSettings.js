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
 * Returns the definition of each requested cluster setting: whether it is dynamic, its declared default, its value type and bounds, and its description. Accepts exact setting names and prefixes ending in `.*`. Does not return configured values.
 * <br/> See Also: {@link https://docs.opensearch.org/latest/api-reference/cluster-api/describe-cluster-settings/ - cluster.describe_settings}
 *
 * @memberOf API-Cluster
 *
 * @param {object} params
 * @param {string} params.settings - A comma-separated list of setting names to describe. Each entry is either an exact setting name or a prefix ending in `.*`, such as `cluster.routing.allocation.*`, which expands to every registered setting under it at any depth. Exact names and prefixes can be mixed. Other wildcard forms are rejected. Affix and group setting templates and secure (keystore) settings are not listed under a prefix; their concrete names can still be requested exactly. At least one entry is required.
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

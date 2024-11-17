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
 * Creates or updates a component template.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/im-plugin/index-templates/#use-component-templates-to-create-an-index-template - cluster.put_component_template}
 *
 * @memberOf API-Cluster
 *
 * @param {object} params
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {boolean} [params.create=false] - If `true`, this request cannot replace or update existing component templates.
 * @param {string} [params.master_timeout] DEPRECATED - Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
 * @param {string} [params.timeout] - Operation timeout.
 * @param {string} params.name - Name of the component template to create. OpenSearch includes the following built-in component templates: `logs-mappings`; 'logs-settings`; `metrics-mappings`; `metrics-settings`;`synthetics-mapping`; `synthetics-settings`. OpenSearch Agent uses these templates to configure backing indexes for its data streams. If you use OpenSearch Agent and want to overwrite one of these templates, set the `version` for your replacement template higher than the current version. If you don't use OpenSearch Agent and want to disable all built-in component and index templates, set `stack.templates.enabled` to `false` using the cluster update settings API.
 * @param {object} params.body - The template definition
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function putComponentTemplateFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.name == null) return handleMissingParam('name', this, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, name, ...querystring } = params;
  name = parsePathParam(name);

  const path = '/_component_template/' + name;
  const method = 'POST';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = putComponentTemplateFunc;

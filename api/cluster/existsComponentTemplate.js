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
 * Returns information about whether a particular component template exist.
 * <br/> See Also: {@link https://opensearch.org/docs/latest - cluster.exists_component_template}
 *
 * @memberOf API-Cluster
 *
 * @param {object} params
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {boolean} [params.local=false] - If true, the request retrieves information from the local node only. Defaults to false, which means information is retrieved from the master node.
 * @param {string} [params.master_timeout] DEPRECATED - Period to wait for a connection to the master node. If no response is received before the timeout expires, the request fails and returns an error.
 * @param {string} params.name - Name of the component template to check existence of. Wildcard (*) expressions are supported.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function existsComponentTemplateFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.name == null) return handleMissingParam('name', this, callback);

  let { body, name, ...querystring } = params;
  name = parsePathParam(name);

  const path = '/_component_template/' + name;
  const method = 'HEAD';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = existsComponentTemplateFunc;
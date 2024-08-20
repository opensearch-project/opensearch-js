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

const { normalizeArguments } = require('../utils');

/**
 * Returns information about the cluster-manager node.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-cluster_manager/ - cat.cluster_manager}
 *
 * @memberOf API-Cat
 *
 * @param {object} [params]
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {string} [params.format] - A short version of the Accept header, e.g. json, yaml.
 * @param {array} [params.h] - Comma-separated list of column names to display.
 * @param {boolean} [params.help=false] - Return help information.
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster-manager node.
 * @param {string} [params.master_timeout] DEPRECATED - Operation timeout for connection to master node.
 * @param {array} [params.s] - Comma-separated list of column names or column aliases to sort by.
 * @param {boolean} [params.v=false] - Verbose mode. Display column headers.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function clusterManagerFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, ...querystring } = params;

  const path = '/_cat/cluster_manager';
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = clusterManagerFunc;

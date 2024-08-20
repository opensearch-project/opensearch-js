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
 * Returns all snapshots in a specific repository.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-snapshots/ - cat.snapshots}
 *
 * @memberOf API-Cat
 *
 * @param {object} [params]
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {string} [params.format] - A short version of the Accept header, e.g. json, yaml.
 * @param {array} [params.h] - Comma-separated list of column names to display.
 * @param {boolean} [params.help=false] - Return help information.
 * @param {boolean} [params.ignore_unavailable=false] - If `true`, the response does not include information from unavailable snapshots.
 * @param {string} [params.master_timeout] DEPRECATED - Operation timeout for connection to master node.
 * @param {array} [params.s] - Comma-separated list of column names or column aliases to sort by.
 * @param {string} [params.time] - The unit in which to display time values.
 * @param {boolean} [params.v=false] - Verbose mode. Display column headers.
 * @param {string} [params.repository] - A comma-separated list of snapshot repositories used to limit the request. Accepts wildcard expressions. `_all` returns all repositories. If any repository fails during the request, OpenSearch returns an error.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function snapshotsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, repository, ...querystring } = params;
  repository = parsePathParam(repository);

  const path = ['/_cat/snapshots/', repository].filter(c => c).join('').replace('//', '/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = snapshotsFunc;

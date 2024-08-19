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
 * Returns information about indices: number of primaries and replicas, document counts, disk size, ...
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-indices/ - cat.indices}
 *
 * @memberOf API-Cat
 *
 * @param {object} [params]
 * @param {string} [params.bytes] - The unit used to display byte values.
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {string} [params.expand_wildcards] - The type of index that wildcard patterns can match.
 * @param {string} [params.format] - A short version of the Accept header, e.g. json, yaml.
 * @param {array} [params.h] - Comma-separated list of column names to display.
 * @param {string} [params.health] - The health status used to limit returned indices. By default, the response includes indices of any health status.
 * @param {boolean} [params.help=false] - Return help information.
 * @param {boolean} [params.include_unloaded_segments=false] - If true, the response includes information from segments that are not loaded into memory.
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster-manager node.
 * @param {string} [params.master_timeout] DEPRECATED - Operation timeout for connection to master node.
 * @param {boolean} [params.pri=false] - If true, the response only includes information from primary shards.
 * @param {array} [params.s] - Comma-separated list of column names or column aliases to sort by.
 * @param {string} [params.time] - The unit used to display time values.
 * @param {boolean} [params.v=false] - Verbose mode. Display column headers.
 * @param {string} [params.index] - Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (`*`). To target all data streams and indices, omit this parameter or use `*` or `_all`.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function indicesFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, index, ...querystring } = params;
  index = parsePathParam(index);

  const path = ['/_cat/indices/', index].filter(c => c).join('').replace('//', '/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = indicesFunc;

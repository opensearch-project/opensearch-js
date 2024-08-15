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
 * Returns information about both on-going and latest completed Segment Replication events.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-segment-replication/ - cat.segment_replication}
 *
 * @memberOf API-Cat
 *
 * @param {object} [params]
 * @param {boolean} [params.active_only=false] - If `true`, the response only includes ongoing segment replication events.
 * @param {boolean} [params.allow_no_indices] - Whether to ignore if a wildcard indices expression resolves into no concrete indices. (This includes `_all` string or when no indices have been specified).
 * @param {string} [params.bytes] - The unit in which to display byte values.
 * @param {boolean} [params.completed_only=false] - If `true`, the response only includes latest completed segment replication events.
 * @param {boolean} [params.detailed=false] - If `true`, the response includes detailed information about segment replications.
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {string} [params.format] - A short version of the Accept header, e.g. json, yaml.
 * @param {array} [params.h] - Comma-separated list of column names to display.
 * @param {boolean} [params.help=false] - Return help information.
 * @param {boolean} [params.ignore_throttled] - Whether specified concrete, expanded or aliased indices should be ignored when throttled.
 * @param {boolean} [params.ignore_unavailable] - Whether specified concrete indices should be ignored when unavailable (missing or closed).
 * @param {array} [params.index] - Comma-separated list or wildcard expression of index names to limit the returned information.
 * @param {array} [params.s] - Comma-separated list of column names or column aliases to sort by.
 * @param {array} [params.shards] - Comma-separated list of shards to display.
 * @param {string} [params.time] - The unit in which to display time values.
 * @param {string} [params.timeout] - Operation timeout.
 * @param {boolean} [params.v=false] - Verbose mode. Display column headers.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function segmentReplicationFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, index, ...querystring } = params;
  index = parsePathParam(index);

  const path = ['/_cat/segment_replication/', index].filter(c => c).join('').replace('//', '/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = segmentReplicationFunc;

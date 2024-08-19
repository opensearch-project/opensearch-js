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
 * Returns the information about the capabilities of fields among multiple indices.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/field-types/supported-field-types/alias/#using-aliases-in-field-capabilities-api-operations - field_caps}
 *
 * @memberOf API-Core
 *
 * @param {object} [params]
 * @param {boolean} [params.allow_no_indices] - If false, the request returns an error if any wildcard expression, index alias, or `_all` value targets only missing or closed indices. This behavior applies even if the request targets other open indices. For example, a request targeting `foo*,bar*` returns an error if an index starts with foo but no index starts with bar.
 * @param {string} [params.expand_wildcards] - Type of index that wildcard patterns can match. If the request can target data streams, this argument determines whether wildcard expressions match hidden data streams. Supports comma-separated values, such as `open,hidden`.
 * @param {string} [params.fields] - Comma-separated list of fields to retrieve capabilities for. Wildcard (`*`) expressions are supported.
 * @param {boolean} [params.ignore_unavailable] - If `true`, missing or closed indices are not included in the response.
 * @param {boolean} [params.include_unmapped=false] - If true, unmapped fields are included in the response.
 * @param {string} [params.index] - Comma-separated list of data streams, indices, and aliases used to limit the request. Supports wildcards (*). To target all data streams and indices, omit this parameter or use * or _all.
 * @param {object} [params.body] - An index filter specified with the Query DSL
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function fieldCapsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, index, ...querystring } = params;
  index = parsePathParam(index);

  const path = ['/', index, '/_field_caps'].filter(c => c).join('').replace('//', '/');
  const method = body ? 'POST' : 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = fieldCapsFunc;

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
 * Shows information about currently configured aliases to indices including filter and routing infos.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-aliases/ - cat.aliases}
 *
 * @memberOf API-Cat
 *
 * @param {object} [params]
 * @param {string} [params.expand_wildcards] - Whether to expand wildcard expression to concrete indices that are open, closed or both.
 * @param {string} [params.format] - A short version of the Accept header, e.g. json, yaml.
 * @param {array} [params.h] - Comma-separated list of column names to display.
 * @param {boolean} [params.help=false] - Return help information.
 * @param {boolean} [params.local=false] - Return local information, do not retrieve the state from cluster-manager node.
 * @param {array} [params.s] - Comma-separated list of column names or column aliases to sort by.
 * @param {boolean} [params.v=false] - Verbose mode. Display column headers.
 * @param {string} [params.name] - A comma-separated list of aliases to retrieve. Supports wildcards (`*`).  To retrieve all aliases, omit this parameter or use `*` or `_all`.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function aliasesFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, name, ...querystring } = params;
  name = parsePathParam(name);

  const path = ['/_cat/aliases/', name].filter(c => c).join('').replace('//', '/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = aliasesFunc;

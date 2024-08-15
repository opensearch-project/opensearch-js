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
 * Shows how much heap memory is currently being used by fielddata on every data node in the cluster.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/cat/cat-field-data/ - cat.fielddata}
 *
 * @memberOf API-Cat
 *
 * @param {object} [params]
 * @param {string} [params.bytes] - The unit used to display byte values.
 * @param {string} [params.fields] - Comma-separated list of fields used to limit returned information. To retrieve all fields, omit this parameter.
 * @param {string} [params.format] - A short version of the Accept header, e.g. json, yaml.
 * @param {array} [params.h] - Comma-separated list of column names to display.
 * @param {boolean} [params.help=false] - Return help information.
 * @param {array} [params.s] - Comma-separated list of column names or column aliases to sort by.
 * @param {boolean} [params.v=false] - Verbose mode. Display column headers.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function fielddataFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, fields, ...querystring } = params;
  fields = parsePathParam(fields);

  const path = ['/_cat/fielddata/', fields].filter(c => c).join('').replace('//', '/');
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = fielddataFunc;

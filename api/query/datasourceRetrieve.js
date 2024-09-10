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
 * Retrieves specific datasource specified by name.
 * <br/> See Also: {@link undefined - query.datasource_retrieve}
 *
 * @memberOf API-Query
 *
 * @param {object} params
 * @param {string} params.datasource_name - The Name of the DataSource to retrieve.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function datasourceRetrieveFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.datasource_name == null) return handleMissingParam('datasource_name', this, callback);

  let { body, datasource_name, ...querystring } = params;
  datasource_name = parsePathParam(datasource_name);

  const path = '/_plugins/_query/_datasources/' + datasource_name;
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = datasourceRetrieveFunc;

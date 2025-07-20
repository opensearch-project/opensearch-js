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
 * Update a specific IP2Geo data source.
 * <br/> See Also: {@link https://docs.opensearch.org/docs/latest/ingest-pipelines/processors/ip2geo/#updating-an-ip2geo-data-source - geospatial.put_ip2geo_datasource_settings}
 *
 * @memberOf API-Geospatial
 *
 * @param {object} params
 * @param {string} params.name 
 * @param {object} params.body 
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function putIp2GeoDatasourceSettingsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.name == null) return handleMissingParam('name', this, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, name, ...querystring } = params;
  name = parsePathParam(name);

  const path = '/_plugins/geospatial/ip2geo/datasource/' + name + '/_settings';
  const method = 'PUT';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = putIp2GeoDatasourceSettingsFunc;

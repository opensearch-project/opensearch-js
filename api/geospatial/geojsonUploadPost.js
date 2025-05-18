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

const { normalizeArguments, handleMissingParam } = require('../utils');

/**
 * Use an OpenSearch query to upload `GeoJSON`, operation will fail if index exists.
- When type is `geo_point`, only Point geometry is allowed
- When type is `geo_shape`, all geometry types are allowed (Point, MultiPoint, LineString, MultiLineString, Polygon, MultiPolygon, GeometryCollection, Envelope).
 * <br/> See Also: {@link undefined - geospatial.geojson_upload_post}
 *
 * @memberOf API-Geospatial
 *
 * @param {object} params
 * @param {object} params.body 
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function geojsonUploadPostFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, ...querystring } = params;

  const path = '/_plugins/geospatial/geojson/_upload';
  const method = 'POST';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = geojsonUploadPostFunc;

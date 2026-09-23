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

/** @namespace API-Geospatial */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const deleteIp2GeoDatasourceFn = require('./deleteIp2GeoDatasource');
const geojsonUploadPostFn = require('./geojsonUploadPost');
const geojsonUploadPutFn = require('./geojsonUploadPut');
const getIp2GeoDatasourceFn = require('./getIp2GeoDatasource');
const getUploadStatsFn = require('./getUploadStats');
const putIp2GeoDatasourceFn = require('./putIp2GeoDatasource');
const putIp2GeoDatasourceSettingsFn = require('./putIp2GeoDatasourceSettings');

function GeospatialApi(bindObj) {
  this.deleteIp2GeoDatasource = deleteIp2GeoDatasourceFn.bind(bindObj);
  this.geojsonUploadPost = geojsonUploadPostFn.bind(bindObj);
  this.geojsonUploadPut = geojsonUploadPutFn.bind(bindObj);
  this.getIp2GeoDatasource = getIp2GeoDatasourceFn.bind(bindObj);
  this.getUploadStats = getUploadStatsFn.bind(bindObj);
  this.putIp2GeoDatasource = putIp2GeoDatasourceFn.bind(bindObj);
  this.putIp2GeoDatasourceSettings = putIp2GeoDatasourceSettingsFn.bind(bindObj);

  // Deprecated: Use deleteIp2GeoDatasource instead.
  this.delete_ip2geo_datasource = deleteIp2GeoDatasourceFn.bind(bindObj);
  // Deprecated: Use geojsonUploadPost instead.
  this.geojson_upload_post = geojsonUploadPostFn.bind(bindObj);
  // Deprecated: Use geojsonUploadPut instead.
  this.geojson_upload_put = geojsonUploadPutFn.bind(bindObj);
  // Deprecated: Use getIp2GeoDatasource instead.
  this.get_ip2geo_datasource = getIp2GeoDatasourceFn.bind(bindObj);
  // Deprecated: Use getUploadStats instead.
  this.get_upload_stats = getUploadStatsFn.bind(bindObj);
  // Deprecated: Use putIp2GeoDatasource instead.
  this.put_ip2geo_datasource = putIp2GeoDatasourceFn.bind(bindObj);
  // Deprecated: Use putIp2GeoDatasourceSettings instead.
  this.put_ip2geo_datasource_settings = putIp2GeoDatasourceSettingsFn.bind(bindObj);
}

module.exports = GeospatialApi;

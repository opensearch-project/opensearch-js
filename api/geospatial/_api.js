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

function GeospatialApi(bindObj) {
  this.deleteIp2GeoDatasource = require('./deleteIp2GeoDatasource').bind(bindObj);
  this.geojsonUploadPost = require('./geojsonUploadPost').bind(bindObj);
  this.geojsonUploadPut = require('./geojsonUploadPut').bind(bindObj);
  this.getIp2GeoDatasource = require('./getIp2GeoDatasource').bind(bindObj);
  this.getUploadStats = require('./getUploadStats').bind(bindObj);
  this.putIp2GeoDatasource = require('./putIp2GeoDatasource').bind(bindObj);
  this.putIp2GeoDatasourceSettings = require('./putIp2GeoDatasourceSettings').bind(bindObj);

  // Deprecated: Use deleteIp2GeoDatasource instead.
  this.delete_ip2geo_datasource = require('./deleteIp2GeoDatasource').bind(bindObj);
  // Deprecated: Use geojsonUploadPost instead.
  this.geojson_upload_post = require('./geojsonUploadPost').bind(bindObj);
  // Deprecated: Use geojsonUploadPut instead.
  this.geojson_upload_put = require('./geojsonUploadPut').bind(bindObj);
  // Deprecated: Use getIp2GeoDatasource instead.
  this.get_ip2geo_datasource = require('./getIp2GeoDatasource').bind(bindObj);
  // Deprecated: Use getUploadStats instead.
  this.get_upload_stats = require('./getUploadStats').bind(bindObj);
  // Deprecated: Use putIp2GeoDatasource instead.
  this.put_ip2geo_datasource = require('./putIp2GeoDatasource').bind(bindObj);
  // Deprecated: Use putIp2GeoDatasourceSettings instead.
  this.put_ip2geo_datasource_settings = require('./putIp2GeoDatasourceSettings').bind(bindObj);
}

module.exports = GeospatialApi;

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

/** @namespace API-Query */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const datasourceDeleteFn = require('./datasourceDelete');
const datasourceRetrieveFn = require('./datasourceRetrieve');
const datasourcesCreateFn = require('./datasourcesCreate');
const datasourcesListFn = require('./datasourcesList');
const datasourcesUpdateFn = require('./datasourcesUpdate');

function QueryApi(bindObj) {
  this.datasourceDelete = datasourceDeleteFn.bind(bindObj);
  this.datasourceRetrieve = datasourceRetrieveFn.bind(bindObj);
  this.datasourcesCreate = datasourcesCreateFn.bind(bindObj);
  this.datasourcesList = datasourcesListFn.bind(bindObj);
  this.datasourcesUpdate = datasourcesUpdateFn.bind(bindObj);

  // Deprecated: Use datasourceDelete instead.
  this.datasource_delete = datasourceDeleteFn.bind(bindObj);
  // Deprecated: Use datasourceRetrieve instead.
  this.datasource_retrieve = datasourceRetrieveFn.bind(bindObj);
  // Deprecated: Use datasourcesCreate instead.
  this.datasources_create = datasourcesCreateFn.bind(bindObj);
  // Deprecated: Use datasourcesList instead.
  this.datasources_list = datasourcesListFn.bind(bindObj);
  // Deprecated: Use datasourcesUpdate instead.
  this.datasources_update = datasourcesUpdateFn.bind(bindObj);
}

module.exports = QueryApi;

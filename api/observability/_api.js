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

/** @namespace API-Observability */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const createObjectFn = require('./createObject');
const deleteObjectFn = require('./deleteObject');
const deleteObjectsFn = require('./deleteObjects');
const getLocalstatsFn = require('./getLocalstats');
const getObjectFn = require('./getObject');
const listObjectsFn = require('./listObjects');
const updateObjectFn = require('./updateObject');

function ObservabilityApi(bindObj) {
  this.createObject = createObjectFn.bind(bindObj);
  this.deleteObject = deleteObjectFn.bind(bindObj);
  this.deleteObjects = deleteObjectsFn.bind(bindObj);
  this.getLocalstats = getLocalstatsFn.bind(bindObj);
  this.getObject = getObjectFn.bind(bindObj);
  this.listObjects = listObjectsFn.bind(bindObj);
  this.updateObject = updateObjectFn.bind(bindObj);

  // Deprecated: Use createObject instead.
  this.create_object = createObjectFn.bind(bindObj);
  // Deprecated: Use deleteObject instead.
  this.delete_object = deleteObjectFn.bind(bindObj);
  // Deprecated: Use deleteObjects instead.
  this.delete_objects = deleteObjectsFn.bind(bindObj);
  // Deprecated: Use getLocalstats instead.
  this.get_localstats = getLocalstatsFn.bind(bindObj);
  // Deprecated: Use getObject instead.
  this.get_object = getObjectFn.bind(bindObj);
  // Deprecated: Use listObjects instead.
  this.list_objects = listObjectsFn.bind(bindObj);
  // Deprecated: Use updateObject instead.
  this.update_object = updateObjectFn.bind(bindObj);
}

module.exports = ObservabilityApi;

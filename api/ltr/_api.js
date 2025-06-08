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

/** @namespace API-Ltr */

function LtrApi(bindObj) {
  this.cacheStats = require('./cacheStats').bind(bindObj);
  this.clearCache = require('./clearCache').bind(bindObj);
  this.createDefaultStore = require('./createDefaultStore').bind(bindObj);
  this.createStore = require('./createStore').bind(bindObj);
  this.deleteDefaultStore = require('./deleteDefaultStore').bind(bindObj);
  this.deleteStore = require('./deleteStore').bind(bindObj);
  this.getStore = require('./getStore').bind(bindObj);
  this.listStores = require('./listStores').bind(bindObj);
  this.stats = require('./stats').bind(bindObj);

  // Deprecated: Use cacheStats instead.
  this.cache_stats = require('./cacheStats').bind(bindObj);
  // Deprecated: Use clearCache instead.
  this.clear_cache = require('./clearCache').bind(bindObj);
  // Deprecated: Use createDefaultStore instead.
  this.create_default_store = require('./createDefaultStore').bind(bindObj);
  // Deprecated: Use createStore instead.
  this.create_store = require('./createStore').bind(bindObj);
  // Deprecated: Use deleteDefaultStore instead.
  this.delete_default_store = require('./deleteDefaultStore').bind(bindObj);
  // Deprecated: Use deleteStore instead.
  this.delete_store = require('./deleteStore').bind(bindObj);
  // Deprecated: Use getStore instead.
  this.get_store = require('./getStore').bind(bindObj);
  // Deprecated: Use listStores instead.
  this.list_stores = require('./listStores').bind(bindObj);
}

module.exports = LtrApi;

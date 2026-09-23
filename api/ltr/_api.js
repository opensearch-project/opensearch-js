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

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const addFeaturesToSetFn = require('./addFeaturesToSet');
const addFeaturesToSetByQueryFn = require('./addFeaturesToSetByQuery');
const cacheStatsFn = require('./cacheStats');
const clearCacheFn = require('./clearCache');
const createDefaultStoreFn = require('./createDefaultStore');
const createFeatureFn = require('./createFeature');
const createFeaturesetFn = require('./createFeatureset');
const createModelFn = require('./createModel');
const createModelFromSetFn = require('./createModelFromSet');
const createStoreFn = require('./createStore');
const deleteDefaultStoreFn = require('./deleteDefaultStore');
const deleteFeatureFn = require('./deleteFeature');
const deleteFeaturesetFn = require('./deleteFeatureset');
const deleteModelFn = require('./deleteModel');
const deleteStoreFn = require('./deleteStore');
const getFeatureFn = require('./getFeature');
const getFeaturesetFn = require('./getFeatureset');
const getModelFn = require('./getModel');
const getStoreFn = require('./getStore');
const listStoresFn = require('./listStores');
const searchFeaturesFn = require('./searchFeatures');
const searchFeaturesetsFn = require('./searchFeaturesets');
const searchModelsFn = require('./searchModels');
const statsFn = require('./stats');
const updateFeatureFn = require('./updateFeature');
const updateFeaturesetFn = require('./updateFeatureset');

function LtrApi(bindObj) {
  this.addFeaturesToSet = addFeaturesToSetFn.bind(bindObj);
  this.addFeaturesToSetByQuery = addFeaturesToSetByQueryFn.bind(bindObj);
  this.cacheStats = cacheStatsFn.bind(bindObj);
  this.clearCache = clearCacheFn.bind(bindObj);
  this.createDefaultStore = createDefaultStoreFn.bind(bindObj);
  this.createFeature = createFeatureFn.bind(bindObj);
  this.createFeatureset = createFeaturesetFn.bind(bindObj);
  this.createModel = createModelFn.bind(bindObj);
  this.createModelFromSet = createModelFromSetFn.bind(bindObj);
  this.createStore = createStoreFn.bind(bindObj);
  this.deleteDefaultStore = deleteDefaultStoreFn.bind(bindObj);
  this.deleteFeature = deleteFeatureFn.bind(bindObj);
  this.deleteFeatureset = deleteFeaturesetFn.bind(bindObj);
  this.deleteModel = deleteModelFn.bind(bindObj);
  this.deleteStore = deleteStoreFn.bind(bindObj);
  this.getFeature = getFeatureFn.bind(bindObj);
  this.getFeatureset = getFeaturesetFn.bind(bindObj);
  this.getModel = getModelFn.bind(bindObj);
  this.getStore = getStoreFn.bind(bindObj);
  this.listStores = listStoresFn.bind(bindObj);
  this.searchFeatures = searchFeaturesFn.bind(bindObj);
  this.searchFeaturesets = searchFeaturesetsFn.bind(bindObj);
  this.searchModels = searchModelsFn.bind(bindObj);
  this.stats = statsFn.bind(bindObj);
  this.updateFeature = updateFeatureFn.bind(bindObj);
  this.updateFeatureset = updateFeaturesetFn.bind(bindObj);

  // Deprecated: Use addFeaturesToSet instead.
  this.add_features_to_set = addFeaturesToSetFn.bind(bindObj);
  // Deprecated: Use addFeaturesToSetByQuery instead.
  this.add_features_to_set_by_query = addFeaturesToSetByQueryFn.bind(bindObj);
  // Deprecated: Use cacheStats instead.
  this.cache_stats = cacheStatsFn.bind(bindObj);
  // Deprecated: Use clearCache instead.
  this.clear_cache = clearCacheFn.bind(bindObj);
  // Deprecated: Use createDefaultStore instead.
  this.create_default_store = createDefaultStoreFn.bind(bindObj);
  // Deprecated: Use createFeature instead.
  this.create_feature = createFeatureFn.bind(bindObj);
  // Deprecated: Use createFeatureset instead.
  this.create_featureset = createFeaturesetFn.bind(bindObj);
  // Deprecated: Use createModel instead.
  this.create_model = createModelFn.bind(bindObj);
  // Deprecated: Use createModelFromSet instead.
  this.create_model_from_set = createModelFromSetFn.bind(bindObj);
  // Deprecated: Use createStore instead.
  this.create_store = createStoreFn.bind(bindObj);
  // Deprecated: Use deleteDefaultStore instead.
  this.delete_default_store = deleteDefaultStoreFn.bind(bindObj);
  // Deprecated: Use deleteFeature instead.
  this.delete_feature = deleteFeatureFn.bind(bindObj);
  // Deprecated: Use deleteFeatureset instead.
  this.delete_featureset = deleteFeaturesetFn.bind(bindObj);
  // Deprecated: Use deleteModel instead.
  this.delete_model = deleteModelFn.bind(bindObj);
  // Deprecated: Use deleteStore instead.
  this.delete_store = deleteStoreFn.bind(bindObj);
  // Deprecated: Use getFeature instead.
  this.get_feature = getFeatureFn.bind(bindObj);
  // Deprecated: Use getFeatureset instead.
  this.get_featureset = getFeaturesetFn.bind(bindObj);
  // Deprecated: Use getModel instead.
  this.get_model = getModelFn.bind(bindObj);
  // Deprecated: Use getStore instead.
  this.get_store = getStoreFn.bind(bindObj);
  // Deprecated: Use listStores instead.
  this.list_stores = listStoresFn.bind(bindObj);
  // Deprecated: Use searchFeatures instead.
  this.search_features = searchFeaturesFn.bind(bindObj);
  // Deprecated: Use searchFeaturesets instead.
  this.search_featuresets = searchFeaturesetsFn.bind(bindObj);
  // Deprecated: Use searchModels instead.
  this.search_models = searchModelsFn.bind(bindObj);
  // Deprecated: Use updateFeature instead.
  this.update_feature = updateFeatureFn.bind(bindObj);
  // Deprecated: Use updateFeatureset instead.
  this.update_featureset = updateFeaturesetFn.bind(bindObj);
}

module.exports = LtrApi;

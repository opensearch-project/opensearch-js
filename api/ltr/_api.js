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
  this.addFeaturesToSet = require('./addFeaturesToSet').bind(bindObj);
  this.addFeaturesToSetByQuery = require('./addFeaturesToSetByQuery').bind(bindObj);
  this.cacheStats = require('./cacheStats').bind(bindObj);
  this.clearCache = require('./clearCache').bind(bindObj);
  this.createDefaultStore = require('./createDefaultStore').bind(bindObj);
  this.createFeature = require('./createFeature').bind(bindObj);
  this.createFeatureset = require('./createFeatureset').bind(bindObj);
  this.createModel = require('./createModel').bind(bindObj);
  this.createModelFromSet = require('./createModelFromSet').bind(bindObj);
  this.createStore = require('./createStore').bind(bindObj);
  this.deleteDefaultStore = require('./deleteDefaultStore').bind(bindObj);
  this.deleteFeature = require('./deleteFeature').bind(bindObj);
  this.deleteFeatureset = require('./deleteFeatureset').bind(bindObj);
  this.deleteModel = require('./deleteModel').bind(bindObj);
  this.deleteStore = require('./deleteStore').bind(bindObj);
  this.getFeature = require('./getFeature').bind(bindObj);
  this.getFeatureset = require('./getFeatureset').bind(bindObj);
  this.getModel = require('./getModel').bind(bindObj);
  this.getStore = require('./getStore').bind(bindObj);
  this.listStores = require('./listStores').bind(bindObj);
  this.searchFeatures = require('./searchFeatures').bind(bindObj);
  this.searchFeaturesets = require('./searchFeaturesets').bind(bindObj);
  this.searchModels = require('./searchModels').bind(bindObj);
  this.stats = require('./stats').bind(bindObj);
  this.updateFeature = require('./updateFeature').bind(bindObj);
  this.updateFeatureset = require('./updateFeatureset').bind(bindObj);

  // Deprecated: Use addFeaturesToSet instead.
  this.add_features_to_set = require('./addFeaturesToSet').bind(bindObj);
  // Deprecated: Use addFeaturesToSetByQuery instead.
  this.add_features_to_set_by_query = require('./addFeaturesToSetByQuery').bind(bindObj);
  // Deprecated: Use cacheStats instead.
  this.cache_stats = require('./cacheStats').bind(bindObj);
  // Deprecated: Use clearCache instead.
  this.clear_cache = require('./clearCache').bind(bindObj);
  // Deprecated: Use createDefaultStore instead.
  this.create_default_store = require('./createDefaultStore').bind(bindObj);
  // Deprecated: Use createFeature instead.
  this.create_feature = require('./createFeature').bind(bindObj);
  // Deprecated: Use createFeatureset instead.
  this.create_featureset = require('./createFeatureset').bind(bindObj);
  // Deprecated: Use createModel instead.
  this.create_model = require('./createModel').bind(bindObj);
  // Deprecated: Use createModelFromSet instead.
  this.create_model_from_set = require('./createModelFromSet').bind(bindObj);
  // Deprecated: Use createStore instead.
  this.create_store = require('./createStore').bind(bindObj);
  // Deprecated: Use deleteDefaultStore instead.
  this.delete_default_store = require('./deleteDefaultStore').bind(bindObj);
  // Deprecated: Use deleteFeature instead.
  this.delete_feature = require('./deleteFeature').bind(bindObj);
  // Deprecated: Use deleteFeatureset instead.
  this.delete_featureset = require('./deleteFeatureset').bind(bindObj);
  // Deprecated: Use deleteModel instead.
  this.delete_model = require('./deleteModel').bind(bindObj);
  // Deprecated: Use deleteStore instead.
  this.delete_store = require('./deleteStore').bind(bindObj);
  // Deprecated: Use getFeature instead.
  this.get_feature = require('./getFeature').bind(bindObj);
  // Deprecated: Use getFeatureset instead.
  this.get_featureset = require('./getFeatureset').bind(bindObj);
  // Deprecated: Use getModel instead.
  this.get_model = require('./getModel').bind(bindObj);
  // Deprecated: Use getStore instead.
  this.get_store = require('./getStore').bind(bindObj);
  // Deprecated: Use listStores instead.
  this.list_stores = require('./listStores').bind(bindObj);
  // Deprecated: Use searchFeatures instead.
  this.search_features = require('./searchFeatures').bind(bindObj);
  // Deprecated: Use searchFeaturesets instead.
  this.search_featuresets = require('./searchFeaturesets').bind(bindObj);
  // Deprecated: Use searchModels instead.
  this.search_models = require('./searchModels').bind(bindObj);
  // Deprecated: Use updateFeature instead.
  this.update_feature = require('./updateFeature').bind(bindObj);
  // Deprecated: Use updateFeatureset instead.
  this.update_featureset = require('./updateFeatureset').bind(bindObj);
}

module.exports = LtrApi;

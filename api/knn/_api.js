/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

'use strict';

const { apiFunc } = require('../utils');

/** @namespace API-Knn */

function KnnApi(bindObj) {
  const cache = {};
  this.deleteModel = apiFunc(bindObj, cache, './knn/delete_model');
  this.getModel = apiFunc(bindObj, cache, './knn/get_model');
  this.searchModels = apiFunc(bindObj, cache, './knn/search_models');
  this.stats = apiFunc(bindObj, cache, './knn/stats');
  this.trainModel = apiFunc(bindObj, cache, './knn/train_model');
  this.warmup = apiFunc(bindObj, cache, './knn/warmup');
}

module.exports = KnnApi;

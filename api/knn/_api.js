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

/** @namespace API-Knn */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const deleteModelFn = require('./deleteModel');
const getModelFn = require('./getModel');
const searchModelsFn = require('./searchModels');
const statsFn = require('./stats');
const trainModelFn = require('./trainModel');
const warmupFn = require('./warmup');

function KnnApi(bindObj) {
  this.deleteModel = deleteModelFn.bind(bindObj);
  this.getModel = getModelFn.bind(bindObj);
  this.searchModels = searchModelsFn.bind(bindObj);
  this.stats = statsFn.bind(bindObj);
  this.trainModel = trainModelFn.bind(bindObj);
  this.warmup = warmupFn.bind(bindObj);

  // Deprecated: Use deleteModel instead.
  this.delete_model = deleteModelFn.bind(bindObj);
  // Deprecated: Use getModel instead.
  this.get_model = getModelFn.bind(bindObj);
  // Deprecated: Use searchModels instead.
  this.search_models = searchModelsFn.bind(bindObj);
  // Deprecated: Use trainModel instead.
  this.train_model = trainModelFn.bind(bindObj);
}

module.exports = KnnApi;

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

/** @namespace API-Ml */

function MlApi(bindObj) {
  const cache = {};
  this.deleteModel = apiFunc(bindObj, cache, './ml/deleteModel');
  this.deleteModelGroup = apiFunc(bindObj, cache, './ml/deleteModelGroup');
  this.getModelGroup = apiFunc(bindObj, cache, './ml/getModelGroup');
  this.getTask = apiFunc(bindObj, cache, './ml/getTask');
  this.registerModel = apiFunc(bindObj, cache, './ml/registerModel');
  this.registerModelGroup = apiFunc(bindObj, cache, './ml/registerModelGroup');
  this.searchModels = apiFunc(bindObj, cache, './ml/searchModels');
}

module.exports = MlApi;

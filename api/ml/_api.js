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

/** @namespace API-Ml */

function MlApi(bindObj) {
  const cache = {};
  this.deleteModel = require('./deleteModel').bind(bindObj);
  this.deleteModelGroup = require('./deleteModelGroup').bind(bindObj);
  this.getModelGroup = require('./getModelGroup').bind(bindObj);
  this.getTask = require('./getTask').bind(bindObj);
  this.registerModel = require('./registerModel').bind(bindObj);
  this.registerModelGroup = require('./registerModelGroup').bind(bindObj);
  this.searchModels = require('./searchModels').bind(bindObj);
}

module.exports = MlApi;

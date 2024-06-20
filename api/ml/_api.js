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

/** @namespace API-Ml */

function MlApi(bindObj) {
  this.deleteModel = require('./deleteModel').bind(bindObj);
  this.deleteModelGroup = require('./deleteModelGroup').bind(bindObj);
  this.getModelGroup = require('./getModelGroup').bind(bindObj);
  this.getTask = require('./getTask').bind(bindObj);
  this.registerModel = require('./registerModel').bind(bindObj);
  this.registerModelGroup = require('./registerModelGroup').bind(bindObj);
  this.searchModels = require('./searchModels').bind(bindObj);

  // Deprecated: Use deleteModel instead.
  this.delete_model = require('./deleteModel').bind(bindObj);
  // Deprecated: Use deleteModelGroup instead.
  this.delete_model_group = require('./deleteModelGroup').bind(bindObj);
  // Deprecated: Use getModelGroup instead.
  this.get_model_group = require('./getModelGroup').bind(bindObj);
  // Deprecated: Use getTask instead.
  this.get_task = require('./getTask').bind(bindObj);
  // Deprecated: Use registerModel instead.
  this.register_model = require('./registerModel').bind(bindObj);
  // Deprecated: Use registerModelGroup instead.
  this.register_model_group = require('./registerModelGroup').bind(bindObj);
  // Deprecated: Use searchModels instead.
  this.search_models = require('./searchModels').bind(bindObj);
}

module.exports = MlApi;

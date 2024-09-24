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
  this.createConnector = require('./createConnector').bind(bindObj);
  this.deleteAgent = require('./deleteAgent').bind(bindObj);
  this.deleteConnector = require('./deleteConnector').bind(bindObj);
  this.deleteModel = require('./deleteModel').bind(bindObj);
  this.deleteModelGroup = require('./deleteModelGroup').bind(bindObj);
  this.deleteTask = require('./deleteTask').bind(bindObj);
  this.deployModel = require('./deployModel').bind(bindObj);
  this.getModelGroup = require('./getModelGroup').bind(bindObj);
  this.getTask = require('./getTask').bind(bindObj);
  this.registerAgents = require('./registerAgents').bind(bindObj);
  this.registerModel = require('./registerModel').bind(bindObj);
  this.registerModelGroup = require('./registerModelGroup').bind(bindObj);
  this.searchModels = require('./searchModels').bind(bindObj);
  this.undeployModel = require('./undeployModel').bind(bindObj);

  // Deprecated: Use createConnector instead.
  this.create_connector = require('./createConnector').bind(bindObj);
  // Deprecated: Use deleteAgent instead.
  this.delete_agent = require('./deleteAgent').bind(bindObj);
  // Deprecated: Use deleteConnector instead.
  this.delete_connector = require('./deleteConnector').bind(bindObj);
  // Deprecated: Use deleteModel instead.
  this.delete_model = require('./deleteModel').bind(bindObj);
  // Deprecated: Use deleteModelGroup instead.
  this.delete_model_group = require('./deleteModelGroup').bind(bindObj);
  // Deprecated: Use deleteTask instead.
  this.delete_task = require('./deleteTask').bind(bindObj);
  // Deprecated: Use deployModel instead.
  this.deploy_model = require('./deployModel').bind(bindObj);
  // Deprecated: Use getModelGroup instead.
  this.get_model_group = require('./getModelGroup').bind(bindObj);
  // Deprecated: Use getTask instead.
  this.get_task = require('./getTask').bind(bindObj);
  // Deprecated: Use registerAgents instead.
  this.register_agents = require('./registerAgents').bind(bindObj);
  // Deprecated: Use registerModel instead.
  this.register_model = require('./registerModel').bind(bindObj);
  // Deprecated: Use registerModelGroup instead.
  this.register_model_group = require('./registerModelGroup').bind(bindObj);
  // Deprecated: Use searchModels instead.
  this.search_models = require('./searchModels').bind(bindObj);
  // Deprecated: Use undeployModel instead.
  this.undeploy_model = require('./undeployModel').bind(bindObj);
}

module.exports = MlApi;

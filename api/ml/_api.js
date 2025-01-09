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
  this.chunkModel = require('./chunkModel').bind(bindObj);
  this.createConnector = require('./createConnector').bind(bindObj);
  this.createMemory = require('./createMemory').bind(bindObj);
  this.createMessage = require('./createMessage').bind(bindObj);
  this.createModelMeta = require('./createModelMeta').bind(bindObj);
  this.deleteAgent = require('./deleteAgent').bind(bindObj);
  this.deleteConnector = require('./deleteConnector').bind(bindObj);
  this.deleteMemory = require('./deleteMemory').bind(bindObj);
  this.deleteModel = require('./deleteModel').bind(bindObj);
  this.deleteModelGroup = require('./deleteModelGroup').bind(bindObj);
  this.deleteTask = require('./deleteTask').bind(bindObj);
  this.deployModel = require('./deployModel').bind(bindObj);
  this.getConnector = require('./getConnector').bind(bindObj);
  this.getMemory = require('./getMemory').bind(bindObj);
  this.getMessage = require('./getMessage').bind(bindObj);
  this.getMessageTraces = require('./getMessageTraces').bind(bindObj);
  this.getModel = require('./getModel').bind(bindObj);
  this.getModelGroup = require('./getModelGroup').bind(bindObj);
  this.getTask = require('./getTask').bind(bindObj);
  this.loadModel = require('./loadModel').bind(bindObj);
  this.predict = require('./predict').bind(bindObj);
  this.predictModel = require('./predictModel').bind(bindObj);
  this.registerAgents = require('./registerAgents').bind(bindObj);
  this.registerModel = require('./registerModel').bind(bindObj);
  this.registerModelGroup = require('./registerModelGroup').bind(bindObj);
  this.registerModelMeta = require('./registerModelMeta').bind(bindObj);
  this.searchConnectors = require('./searchConnectors').bind(bindObj);
  this.searchMemory = require('./searchMemory').bind(bindObj);
  this.searchMessage = require('./searchMessage').bind(bindObj);
  this.searchModelGroup = require('./searchModelGroup').bind(bindObj);
  this.searchModels = require('./searchModels').bind(bindObj);
  this.train = require('./train').bind(bindObj);
  this.trainPredict = require('./trainPredict').bind(bindObj);
  this.undeployModel = require('./undeployModel').bind(bindObj);
  this.unloadModel = require('./unloadModel').bind(bindObj);
  this.updateConnector = require('./updateConnector').bind(bindObj);
  this.updateMemory = require('./updateMemory').bind(bindObj);
  this.updateMessage = require('./updateMessage').bind(bindObj);
  this.updateModel = require('./updateModel').bind(bindObj);
  this.updateModelGroup = require('./updateModelGroup').bind(bindObj);
  this.uploadChunk = require('./uploadChunk').bind(bindObj);
  this.uploadModel = require('./uploadModel').bind(bindObj);

  // Deprecated: Use chunkModel instead.
  this.chunk_model = require('./chunkModel').bind(bindObj);
  // Deprecated: Use createConnector instead.
  this.create_connector = require('./createConnector').bind(bindObj);
  // Deprecated: Use createMemory instead.
  this.create_memory = require('./createMemory').bind(bindObj);
  // Deprecated: Use createMessage instead.
  this.create_message = require('./createMessage').bind(bindObj);
  // Deprecated: Use createModelMeta instead.
  this.create_model_meta = require('./createModelMeta').bind(bindObj);
  // Deprecated: Use deleteAgent instead.
  this.delete_agent = require('./deleteAgent').bind(bindObj);
  // Deprecated: Use deleteConnector instead.
  this.delete_connector = require('./deleteConnector').bind(bindObj);
  // Deprecated: Use deleteMemory instead.
  this.delete_memory = require('./deleteMemory').bind(bindObj);
  // Deprecated: Use deleteModel instead.
  this.delete_model = require('./deleteModel').bind(bindObj);
  // Deprecated: Use deleteModelGroup instead.
  this.delete_model_group = require('./deleteModelGroup').bind(bindObj);
  // Deprecated: Use deleteTask instead.
  this.delete_task = require('./deleteTask').bind(bindObj);
  // Deprecated: Use deployModel instead.
  this.deploy_model = require('./deployModel').bind(bindObj);
  // Deprecated: Use getConnector instead.
  this.get_connector = require('./getConnector').bind(bindObj);
  // Deprecated: Use getMemory instead.
  this.get_memory = require('./getMemory').bind(bindObj);
  // Deprecated: Use getMessage instead.
  this.get_message = require('./getMessage').bind(bindObj);
  // Deprecated: Use getMessageTraces instead.
  this.get_message_traces = require('./getMessageTraces').bind(bindObj);
  // Deprecated: Use getModel instead.
  this.get_model = require('./getModel').bind(bindObj);
  // Deprecated: Use getModelGroup instead.
  this.get_model_group = require('./getModelGroup').bind(bindObj);
  // Deprecated: Use getTask instead.
  this.get_task = require('./getTask').bind(bindObj);
  // Deprecated: Use loadModel instead.
  this.load_model = require('./loadModel').bind(bindObj);
  // Deprecated: Use predictModel instead.
  this.predict_model = require('./predictModel').bind(bindObj);
  // Deprecated: Use registerAgents instead.
  this.register_agents = require('./registerAgents').bind(bindObj);
  // Deprecated: Use registerModel instead.
  this.register_model = require('./registerModel').bind(bindObj);
  // Deprecated: Use registerModelGroup instead.
  this.register_model_group = require('./registerModelGroup').bind(bindObj);
  // Deprecated: Use registerModelMeta instead.
  this.register_model_meta = require('./registerModelMeta').bind(bindObj);
  // Deprecated: Use searchConnectors instead.
  this.search_connectors = require('./searchConnectors').bind(bindObj);
  // Deprecated: Use searchMemory instead.
  this.search_memory = require('./searchMemory').bind(bindObj);
  // Deprecated: Use searchMessage instead.
  this.search_message = require('./searchMessage').bind(bindObj);
  // Deprecated: Use searchModelGroup instead.
  this.search_model_group = require('./searchModelGroup').bind(bindObj);
  // Deprecated: Use searchModels instead.
  this.search_models = require('./searchModels').bind(bindObj);
  // Deprecated: Use trainPredict instead.
  this.train_predict = require('./trainPredict').bind(bindObj);
  // Deprecated: Use undeployModel instead.
  this.undeploy_model = require('./undeployModel').bind(bindObj);
  // Deprecated: Use unloadModel instead.
  this.unload_model = require('./unloadModel').bind(bindObj);
  // Deprecated: Use updateConnector instead.
  this.update_connector = require('./updateConnector').bind(bindObj);
  // Deprecated: Use updateMemory instead.
  this.update_memory = require('./updateMemory').bind(bindObj);
  // Deprecated: Use updateMessage instead.
  this.update_message = require('./updateMessage').bind(bindObj);
  // Deprecated: Use updateModel instead.
  this.update_model = require('./updateModel').bind(bindObj);
  // Deprecated: Use updateModelGroup instead.
  this.update_model_group = require('./updateModelGroup').bind(bindObj);
  // Deprecated: Use uploadChunk instead.
  this.upload_chunk = require('./uploadChunk').bind(bindObj);
  // Deprecated: Use uploadModel instead.
  this.upload_model = require('./uploadModel').bind(bindObj);
}

module.exports = MlApi;

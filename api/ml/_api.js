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

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const addAgenticMemoryFn = require('./addAgenticMemory');
const chunkModelFn = require('./chunkModel');
const createConnectorFn = require('./createConnector');
const createControllerFn = require('./createController');
const createMemoryFn = require('./createMemory');
const createMemoryContainerFn = require('./createMemoryContainer');
const createMemoryContainerSessionFn = require('./createMemoryContainerSession');
const createMessageFn = require('./createMessage');
const createModelMetaFn = require('./createModelMeta');
const deleteAgentFn = require('./deleteAgent');
const deleteAgenticMemoryFn = require('./deleteAgenticMemory');
const deleteAgenticMemoryQueryFn = require('./deleteAgenticMemoryQuery');
const deleteConnectorFn = require('./deleteConnector');
const deleteControllerFn = require('./deleteController');
const deleteMemoryFn = require('./deleteMemory');
const deleteMemoryContainerFn = require('./deleteMemoryContainer');
const deleteModelFn = require('./deleteModel');
const deleteModelGroupFn = require('./deleteModelGroup');
const deleteTaskFn = require('./deleteTask');
const deployModelFn = require('./deployModel');
const executeAgentFn = require('./executeAgent');
const executeAgentStreamFn = require('./executeAgentStream');
const executeAlgorithmFn = require('./executeAlgorithm');
const executeToolFn = require('./executeTool');
const getAgentFn = require('./getAgent');
const getAgenticMemoryFn = require('./getAgenticMemory');
const getAllMemoriesFn = require('./getAllMemories');
const getAllMessagesFn = require('./getAllMessages');
const getAllToolsFn = require('./getAllTools');
const getConnectorFn = require('./getConnector');
const getControllerFn = require('./getController');
const getMemoryFn = require('./getMemory');
const getMemoryContainerFn = require('./getMemoryContainer');
const getMessageFn = require('./getMessage');
const getMessageTracesFn = require('./getMessageTraces');
const getModelFn = require('./getModel');
const getModelGroupFn = require('./getModelGroup');
const getProfileFn = require('./getProfile');
const getProfileModelsFn = require('./getProfileModels');
const getProfileTasksFn = require('./getProfileTasks');
const getStatsFn = require('./getStats');
const getTaskFn = require('./getTask');
const getToolFn = require('./getTool');
const loadModelFn = require('./loadModel');
const predictFn = require('./predict');
const predictModelFn = require('./predictModel');
const predictModelStreamFn = require('./predictModelStream');
const registerAgentsFn = require('./registerAgents');
const registerModelFn = require('./registerModel');
const registerModelGroupFn = require('./registerModelGroup');
const registerModelMetaFn = require('./registerModelMeta');
const searchAgenticMemoryFn = require('./searchAgenticMemory');
const searchAgentsFn = require('./searchAgents');
const searchConnectorsFn = require('./searchConnectors');
const searchMemoryFn = require('./searchMemory');
const searchMemoryContainerFn = require('./searchMemoryContainer');
const searchMessageFn = require('./searchMessage');
const searchModelGroupFn = require('./searchModelGroup');
const searchModelsFn = require('./searchModels');
const searchTasksFn = require('./searchTasks');
const trainFn = require('./train');
const trainPredictFn = require('./trainPredict');
const undeployModelFn = require('./undeployModel');
const unloadModelFn = require('./unloadModel');
const updateAgenticMemoryFn = require('./updateAgenticMemory');
const updateConnectorFn = require('./updateConnector');
const updateControllerFn = require('./updateController');
const updateMemoryFn = require('./updateMemory');
const updateMemoryContainerFn = require('./updateMemoryContainer');
const updateMessageFn = require('./updateMessage');
const updateModelFn = require('./updateModel');
const updateModelGroupFn = require('./updateModelGroup');
const uploadChunkFn = require('./uploadChunk');
const uploadModelFn = require('./uploadModel');

function MlApi(bindObj) {
  this.addAgenticMemory = addAgenticMemoryFn.bind(bindObj);
  this.chunkModel = chunkModelFn.bind(bindObj);
  this.createConnector = createConnectorFn.bind(bindObj);
  this.createController = createControllerFn.bind(bindObj);
  this.createMemory = createMemoryFn.bind(bindObj);
  this.createMemoryContainer = createMemoryContainerFn.bind(bindObj);
  this.createMemoryContainerSession = createMemoryContainerSessionFn.bind(bindObj);
  this.createMessage = createMessageFn.bind(bindObj);
  this.createModelMeta = createModelMetaFn.bind(bindObj);
  this.deleteAgent = deleteAgentFn.bind(bindObj);
  this.deleteAgenticMemory = deleteAgenticMemoryFn.bind(bindObj);
  this.deleteAgenticMemoryQuery = deleteAgenticMemoryQueryFn.bind(bindObj);
  this.deleteConnector = deleteConnectorFn.bind(bindObj);
  this.deleteController = deleteControllerFn.bind(bindObj);
  this.deleteMemory = deleteMemoryFn.bind(bindObj);
  this.deleteMemoryContainer = deleteMemoryContainerFn.bind(bindObj);
  this.deleteModel = deleteModelFn.bind(bindObj);
  this.deleteModelGroup = deleteModelGroupFn.bind(bindObj);
  this.deleteTask = deleteTaskFn.bind(bindObj);
  this.deployModel = deployModelFn.bind(bindObj);
  this.executeAgent = executeAgentFn.bind(bindObj);
  this.executeAgentStream = executeAgentStreamFn.bind(bindObj);
  this.executeAlgorithm = executeAlgorithmFn.bind(bindObj);
  this.executeTool = executeToolFn.bind(bindObj);
  this.getAgent = getAgentFn.bind(bindObj);
  this.getAgenticMemory = getAgenticMemoryFn.bind(bindObj);
  this.getAllMemories = getAllMemoriesFn.bind(bindObj);
  this.getAllMessages = getAllMessagesFn.bind(bindObj);
  this.getAllTools = getAllToolsFn.bind(bindObj);
  this.getConnector = getConnectorFn.bind(bindObj);
  this.getController = getControllerFn.bind(bindObj);
  this.getMemory = getMemoryFn.bind(bindObj);
  this.getMemoryContainer = getMemoryContainerFn.bind(bindObj);
  this.getMessage = getMessageFn.bind(bindObj);
  this.getMessageTraces = getMessageTracesFn.bind(bindObj);
  this.getModel = getModelFn.bind(bindObj);
  this.getModelGroup = getModelGroupFn.bind(bindObj);
  this.getProfile = getProfileFn.bind(bindObj);
  this.getProfileModels = getProfileModelsFn.bind(bindObj);
  this.getProfileTasks = getProfileTasksFn.bind(bindObj);
  this.getStats = getStatsFn.bind(bindObj);
  this.getTask = getTaskFn.bind(bindObj);
  this.getTool = getToolFn.bind(bindObj);
  this.loadModel = loadModelFn.bind(bindObj);
  this.predict = predictFn.bind(bindObj);
  this.predictModel = predictModelFn.bind(bindObj);
  this.predictModelStream = predictModelStreamFn.bind(bindObj);
  this.registerAgents = registerAgentsFn.bind(bindObj);
  this.registerModel = registerModelFn.bind(bindObj);
  this.registerModelGroup = registerModelGroupFn.bind(bindObj);
  this.registerModelMeta = registerModelMetaFn.bind(bindObj);
  this.searchAgenticMemory = searchAgenticMemoryFn.bind(bindObj);
  this.searchAgents = searchAgentsFn.bind(bindObj);
  this.searchConnectors = searchConnectorsFn.bind(bindObj);
  this.searchMemory = searchMemoryFn.bind(bindObj);
  this.searchMemoryContainer = searchMemoryContainerFn.bind(bindObj);
  this.searchMessage = searchMessageFn.bind(bindObj);
  this.searchModelGroup = searchModelGroupFn.bind(bindObj);
  this.searchModels = searchModelsFn.bind(bindObj);
  this.searchTasks = searchTasksFn.bind(bindObj);
  this.train = trainFn.bind(bindObj);
  this.trainPredict = trainPredictFn.bind(bindObj);
  this.undeployModel = undeployModelFn.bind(bindObj);
  this.unloadModel = unloadModelFn.bind(bindObj);
  this.updateAgenticMemory = updateAgenticMemoryFn.bind(bindObj);
  this.updateConnector = updateConnectorFn.bind(bindObj);
  this.updateController = updateControllerFn.bind(bindObj);
  this.updateMemory = updateMemoryFn.bind(bindObj);
  this.updateMemoryContainer = updateMemoryContainerFn.bind(bindObj);
  this.updateMessage = updateMessageFn.bind(bindObj);
  this.updateModel = updateModelFn.bind(bindObj);
  this.updateModelGroup = updateModelGroupFn.bind(bindObj);
  this.uploadChunk = uploadChunkFn.bind(bindObj);
  this.uploadModel = uploadModelFn.bind(bindObj);

  // Deprecated: Use addAgenticMemory instead.
  this.add_agentic_memory = addAgenticMemoryFn.bind(bindObj);
  // Deprecated: Use chunkModel instead.
  this.chunk_model = chunkModelFn.bind(bindObj);
  // Deprecated: Use createConnector instead.
  this.create_connector = createConnectorFn.bind(bindObj);
  // Deprecated: Use createController instead.
  this.create_controller = createControllerFn.bind(bindObj);
  // Deprecated: Use createMemory instead.
  this.create_memory = createMemoryFn.bind(bindObj);
  // Deprecated: Use createMemoryContainer instead.
  this.create_memory_container = createMemoryContainerFn.bind(bindObj);
  // Deprecated: Use createMemoryContainerSession instead.
  this.create_memory_container_session = createMemoryContainerSessionFn.bind(bindObj);
  // Deprecated: Use createMessage instead.
  this.create_message = createMessageFn.bind(bindObj);
  // Deprecated: Use createModelMeta instead.
  this.create_model_meta = createModelMetaFn.bind(bindObj);
  // Deprecated: Use deleteAgent instead.
  this.delete_agent = deleteAgentFn.bind(bindObj);
  // Deprecated: Use deleteAgenticMemory instead.
  this.delete_agentic_memory = deleteAgenticMemoryFn.bind(bindObj);
  // Deprecated: Use deleteAgenticMemoryQuery instead.
  this.delete_agentic_memory_query = deleteAgenticMemoryQueryFn.bind(bindObj);
  // Deprecated: Use deleteConnector instead.
  this.delete_connector = deleteConnectorFn.bind(bindObj);
  // Deprecated: Use deleteController instead.
  this.delete_controller = deleteControllerFn.bind(bindObj);
  // Deprecated: Use deleteMemory instead.
  this.delete_memory = deleteMemoryFn.bind(bindObj);
  // Deprecated: Use deleteMemoryContainer instead.
  this.delete_memory_container = deleteMemoryContainerFn.bind(bindObj);
  // Deprecated: Use deleteModel instead.
  this.delete_model = deleteModelFn.bind(bindObj);
  // Deprecated: Use deleteModelGroup instead.
  this.delete_model_group = deleteModelGroupFn.bind(bindObj);
  // Deprecated: Use deleteTask instead.
  this.delete_task = deleteTaskFn.bind(bindObj);
  // Deprecated: Use deployModel instead.
  this.deploy_model = deployModelFn.bind(bindObj);
  // Deprecated: Use executeAgent instead.
  this.execute_agent = executeAgentFn.bind(bindObj);
  // Deprecated: Use executeAgentStream instead.
  this.execute_agent_stream = executeAgentStreamFn.bind(bindObj);
  // Deprecated: Use executeAlgorithm instead.
  this.execute_algorithm = executeAlgorithmFn.bind(bindObj);
  // Deprecated: Use executeTool instead.
  this.execute_tool = executeToolFn.bind(bindObj);
  // Deprecated: Use getAgent instead.
  this.get_agent = getAgentFn.bind(bindObj);
  // Deprecated: Use getAgenticMemory instead.
  this.get_agentic_memory = getAgenticMemoryFn.bind(bindObj);
  // Deprecated: Use getAllMemories instead.
  this.get_all_memories = getAllMemoriesFn.bind(bindObj);
  // Deprecated: Use getAllMessages instead.
  this.get_all_messages = getAllMessagesFn.bind(bindObj);
  // Deprecated: Use getAllTools instead.
  this.get_all_tools = getAllToolsFn.bind(bindObj);
  // Deprecated: Use getConnector instead.
  this.get_connector = getConnectorFn.bind(bindObj);
  // Deprecated: Use getController instead.
  this.get_controller = getControllerFn.bind(bindObj);
  // Deprecated: Use getMemory instead.
  this.get_memory = getMemoryFn.bind(bindObj);
  // Deprecated: Use getMemoryContainer instead.
  this.get_memory_container = getMemoryContainerFn.bind(bindObj);
  // Deprecated: Use getMessage instead.
  this.get_message = getMessageFn.bind(bindObj);
  // Deprecated: Use getMessageTraces instead.
  this.get_message_traces = getMessageTracesFn.bind(bindObj);
  // Deprecated: Use getModel instead.
  this.get_model = getModelFn.bind(bindObj);
  // Deprecated: Use getModelGroup instead.
  this.get_model_group = getModelGroupFn.bind(bindObj);
  // Deprecated: Use getProfile instead.
  this.get_profile = getProfileFn.bind(bindObj);
  // Deprecated: Use getProfileModels instead.
  this.get_profile_models = getProfileModelsFn.bind(bindObj);
  // Deprecated: Use getProfileTasks instead.
  this.get_profile_tasks = getProfileTasksFn.bind(bindObj);
  // Deprecated: Use getStats instead.
  this.get_stats = getStatsFn.bind(bindObj);
  // Deprecated: Use getTask instead.
  this.get_task = getTaskFn.bind(bindObj);
  // Deprecated: Use getTool instead.
  this.get_tool = getToolFn.bind(bindObj);
  // Deprecated: Use loadModel instead.
  this.load_model = loadModelFn.bind(bindObj);
  // Deprecated: Use predictModel instead.
  this.predict_model = predictModelFn.bind(bindObj);
  // Deprecated: Use predictModelStream instead.
  this.predict_model_stream = predictModelStreamFn.bind(bindObj);
  // Deprecated: Use registerAgents instead.
  this.register_agents = registerAgentsFn.bind(bindObj);
  // Deprecated: Use registerModel instead.
  this.register_model = registerModelFn.bind(bindObj);
  // Deprecated: Use registerModelGroup instead.
  this.register_model_group = registerModelGroupFn.bind(bindObj);
  // Deprecated: Use registerModelMeta instead.
  this.register_model_meta = registerModelMetaFn.bind(bindObj);
  // Deprecated: Use searchAgenticMemory instead.
  this.search_agentic_memory = searchAgenticMemoryFn.bind(bindObj);
  // Deprecated: Use searchAgents instead.
  this.search_agents = searchAgentsFn.bind(bindObj);
  // Deprecated: Use searchConnectors instead.
  this.search_connectors = searchConnectorsFn.bind(bindObj);
  // Deprecated: Use searchMemory instead.
  this.search_memory = searchMemoryFn.bind(bindObj);
  // Deprecated: Use searchMemoryContainer instead.
  this.search_memory_container = searchMemoryContainerFn.bind(bindObj);
  // Deprecated: Use searchMessage instead.
  this.search_message = searchMessageFn.bind(bindObj);
  // Deprecated: Use searchModelGroup instead.
  this.search_model_group = searchModelGroupFn.bind(bindObj);
  // Deprecated: Use searchModels instead.
  this.search_models = searchModelsFn.bind(bindObj);
  // Deprecated: Use searchTasks instead.
  this.search_tasks = searchTasksFn.bind(bindObj);
  // Deprecated: Use trainPredict instead.
  this.train_predict = trainPredictFn.bind(bindObj);
  // Deprecated: Use undeployModel instead.
  this.undeploy_model = undeployModelFn.bind(bindObj);
  // Deprecated: Use unloadModel instead.
  this.unload_model = unloadModelFn.bind(bindObj);
  // Deprecated: Use updateAgenticMemory instead.
  this.update_agentic_memory = updateAgenticMemoryFn.bind(bindObj);
  // Deprecated: Use updateConnector instead.
  this.update_connector = updateConnectorFn.bind(bindObj);
  // Deprecated: Use updateController instead.
  this.update_controller = updateControllerFn.bind(bindObj);
  // Deprecated: Use updateMemory instead.
  this.update_memory = updateMemoryFn.bind(bindObj);
  // Deprecated: Use updateMemoryContainer instead.
  this.update_memory_container = updateMemoryContainerFn.bind(bindObj);
  // Deprecated: Use updateMessage instead.
  this.update_message = updateMessageFn.bind(bindObj);
  // Deprecated: Use updateModel instead.
  this.update_model = updateModelFn.bind(bindObj);
  // Deprecated: Use updateModelGroup instead.
  this.update_model_group = updateModelGroupFn.bind(bindObj);
  // Deprecated: Use uploadChunk instead.
  this.upload_chunk = uploadChunkFn.bind(bindObj);
  // Deprecated: Use uploadModel instead.
  this.upload_model = uploadModelFn.bind(bindObj);
}

module.exports = MlApi;

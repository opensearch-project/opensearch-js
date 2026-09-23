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

/** @namespace API-Indices */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const addBlockFn = require('./addBlock');
const analyzeFn = require('./analyze');
const clearCacheFn = require('./clearCache');
const cloneFn = require('./clone');
const closeFn = require('./close');
const createFn = require('./create');
const createDataStreamFn = require('./createDataStream');
const dataStreamsStatsFn = require('./dataStreamsStats');
const deleteFn = require('./delete');
const deleteAliasFn = require('./deleteAlias');
const deleteDataStreamFn = require('./deleteDataStream');
const deleteIndexTemplateFn = require('./deleteIndexTemplate');
const deleteTemplateFn = require('./deleteTemplate');
const existsFn = require('./exists');
const existsAliasFn = require('./existsAlias');
const existsIndexTemplateFn = require('./existsIndexTemplate');
const existsTemplateFn = require('./existsTemplate');
const flushFn = require('./flush');
const forcemergeFn = require('./forcemerge');
const getFn = require('./get');
const getAliasFn = require('./getAlias');
const getDataStreamFn = require('./getDataStream');
const getFieldMappingFn = require('./getFieldMapping');
const getIndexTemplateFn = require('./getIndexTemplate');
const getMappingFn = require('./getMapping');
const getSettingsFn = require('./getSettings');
const getTemplateFn = require('./getTemplate');
const getUpgradeFn = require('./getUpgrade');
const openFn = require('./open');
const putAliasFn = require('./putAlias');
const putIndexTemplateFn = require('./putIndexTemplate');
const putMappingFn = require('./putMapping');
const putSettingsFn = require('./putSettings');
const putTemplateFn = require('./putTemplate');
const recoveryFn = require('./recovery');
const refreshFn = require('./refresh');
const resolveIndexFn = require('./resolveIndex');
const rolloverFn = require('./rollover');
const segmentsFn = require('./segments');
const shardStoresFn = require('./shardStores');
const shrinkFn = require('./shrink');
const simulateIndexTemplateFn = require('./simulateIndexTemplate');
const simulateTemplateFn = require('./simulateTemplate');
const splitFn = require('./split');
const statsFn = require('./stats');
const updateAliasesFn = require('./updateAliases');
const upgradeFn = require('./upgrade');
const validateQueryFn = require('./validateQuery');

function IndicesApi(bindObj) {
  this.addBlock = addBlockFn.bind(bindObj);
  this.analyze = analyzeFn.bind(bindObj);
  this.clearCache = clearCacheFn.bind(bindObj);
  this.clone = cloneFn.bind(bindObj);
  this.close = closeFn.bind(bindObj);
  this.create = createFn.bind(bindObj);
  this.createDataStream = createDataStreamFn.bind(bindObj);
  this.dataStreamsStats = dataStreamsStatsFn.bind(bindObj);
  this.delete = deleteFn.bind(bindObj);
  this.deleteAlias = deleteAliasFn.bind(bindObj);
  this.deleteDataStream = deleteDataStreamFn.bind(bindObj);
  this.deleteIndexTemplate = deleteIndexTemplateFn.bind(bindObj);
  this.deleteTemplate = deleteTemplateFn.bind(bindObj);
  this.exists = existsFn.bind(bindObj);
  this.existsAlias = existsAliasFn.bind(bindObj);
  this.existsIndexTemplate = existsIndexTemplateFn.bind(bindObj);
  this.existsTemplate = existsTemplateFn.bind(bindObj);
  this.flush = flushFn.bind(bindObj);
  this.forcemerge = forcemergeFn.bind(bindObj);
  this.get = getFn.bind(bindObj);
  this.getAlias = getAliasFn.bind(bindObj);
  this.getDataStream = getDataStreamFn.bind(bindObj);
  this.getFieldMapping = getFieldMappingFn.bind(bindObj);
  this.getIndexTemplate = getIndexTemplateFn.bind(bindObj);
  this.getMapping = getMappingFn.bind(bindObj);
  this.getSettings = getSettingsFn.bind(bindObj);
  this.getTemplate = getTemplateFn.bind(bindObj);
  this.getUpgrade = getUpgradeFn.bind(bindObj);
  this.open = openFn.bind(bindObj);
  this.putAlias = putAliasFn.bind(bindObj);
  this.putIndexTemplate = putIndexTemplateFn.bind(bindObj);
  this.putMapping = putMappingFn.bind(bindObj);
  this.putSettings = putSettingsFn.bind(bindObj);
  this.putTemplate = putTemplateFn.bind(bindObj);
  this.recovery = recoveryFn.bind(bindObj);
  this.refresh = refreshFn.bind(bindObj);
  this.resolveIndex = resolveIndexFn.bind(bindObj);
  this.rollover = rolloverFn.bind(bindObj);
  this.segments = segmentsFn.bind(bindObj);
  this.shardStores = shardStoresFn.bind(bindObj);
  this.shrink = shrinkFn.bind(bindObj);
  this.simulateIndexTemplate = simulateIndexTemplateFn.bind(bindObj);
  this.simulateTemplate = simulateTemplateFn.bind(bindObj);
  this.split = splitFn.bind(bindObj);
  this.stats = statsFn.bind(bindObj);
  this.updateAliases = updateAliasesFn.bind(bindObj);
  this.upgrade = upgradeFn.bind(bindObj);
  this.validateQuery = validateQueryFn.bind(bindObj);

  // Deprecated: Use addBlock instead.
  this.add_block = addBlockFn.bind(bindObj);
  // Deprecated: Use clearCache instead.
  this.clear_cache = clearCacheFn.bind(bindObj);
  // Deprecated: Use createDataStream instead.
  this.create_data_stream = createDataStreamFn.bind(bindObj);
  // Deprecated: Use dataStreamsStats instead.
  this.data_streams_stats = dataStreamsStatsFn.bind(bindObj);
  // Deprecated: Use deleteAlias instead.
  this.delete_alias = deleteAliasFn.bind(bindObj);
  // Deprecated: Use deleteDataStream instead.
  this.delete_data_stream = deleteDataStreamFn.bind(bindObj);
  // Deprecated: Use deleteIndexTemplate instead.
  this.delete_index_template = deleteIndexTemplateFn.bind(bindObj);
  // Deprecated: Use deleteTemplate instead.
  this.delete_template = deleteTemplateFn.bind(bindObj);
  // Deprecated: Use existsAlias instead.
  this.exists_alias = existsAliasFn.bind(bindObj);
  // Deprecated: Use existsIndexTemplate instead.
  this.exists_index_template = existsIndexTemplateFn.bind(bindObj);
  // Deprecated: Use existsTemplate instead.
  this.exists_template = existsTemplateFn.bind(bindObj);
  // Deprecated: Use getAlias instead.
  this.get_alias = getAliasFn.bind(bindObj);
  // Deprecated: Use getDataStream instead.
  this.get_data_stream = getDataStreamFn.bind(bindObj);
  // Deprecated: Use getFieldMapping instead.
  this.get_field_mapping = getFieldMappingFn.bind(bindObj);
  // Deprecated: Use getIndexTemplate instead.
  this.get_index_template = getIndexTemplateFn.bind(bindObj);
  // Deprecated: Use getMapping instead.
  this.get_mapping = getMappingFn.bind(bindObj);
  // Deprecated: Use getSettings instead.
  this.get_settings = getSettingsFn.bind(bindObj);
  // Deprecated: Use getTemplate instead.
  this.get_template = getTemplateFn.bind(bindObj);
  // Deprecated: Use getUpgrade instead.
  this.get_upgrade = getUpgradeFn.bind(bindObj);
  // Deprecated: Use putAlias instead.
  this.put_alias = putAliasFn.bind(bindObj);
  // Deprecated: Use putIndexTemplate instead.
  this.put_index_template = putIndexTemplateFn.bind(bindObj);
  // Deprecated: Use putMapping instead.
  this.put_mapping = putMappingFn.bind(bindObj);
  // Deprecated: Use putSettings instead.
  this.put_settings = putSettingsFn.bind(bindObj);
  // Deprecated: Use putTemplate instead.
  this.put_template = putTemplateFn.bind(bindObj);
  // Deprecated: Use resolveIndex instead.
  this.resolve_index = resolveIndexFn.bind(bindObj);
  // Deprecated: Use shardStores instead.
  this.shard_stores = shardStoresFn.bind(bindObj);
  // Deprecated: Use simulateIndexTemplate instead.
  this.simulate_index_template = simulateIndexTemplateFn.bind(bindObj);
  // Deprecated: Use simulateTemplate instead.
  this.simulate_template = simulateTemplateFn.bind(bindObj);
  // Deprecated: Use updateAliases instead.
  this.update_aliases = updateAliasesFn.bind(bindObj);
  // Deprecated: Use validateQuery instead.
  this.validate_query = validateQueryFn.bind(bindObj);
}

module.exports = IndicesApi;

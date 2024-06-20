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

/** @namespace API-Indices */

function IndicesApi(bindObj) {
  const cache = {};
  this.addBlock = apiFunc(bindObj, cache, './indices/add_block');
  this.analyze = apiFunc(bindObj, cache, './indices/analyze');
  this.clearCache = apiFunc(bindObj, cache, './indices/clear_cache');
  this.clone = apiFunc(bindObj, cache, './indices/clone');
  this.close = apiFunc(bindObj, cache, './indices/close');
  this.create = apiFunc(bindObj, cache, './indices/create');
  this.createDataStream = apiFunc(bindObj, cache, './indices/create_data_stream');
  this.dataStreamsStats = apiFunc(bindObj, cache, './indices/data_streams_stats');
  this.delete = apiFunc(bindObj, cache, './indices/delete');
  this.deleteAlias = apiFunc(bindObj, cache, './indices/delete_alias');
  this.deleteDataStream = apiFunc(bindObj, cache, './indices/delete_data_stream');
  this.deleteIndexTemplate = apiFunc(bindObj, cache, './indices/delete_index_template');
  this.deleteTemplate = apiFunc(bindObj, cache, './indices/delete_template');
  this.exists = apiFunc(bindObj, cache, './indices/exists');
  this.existsAlias = apiFunc(bindObj, cache, './indices/exists_alias');
  this.existsIndexTemplate = apiFunc(bindObj, cache, './indices/exists_index_template');
  this.existsTemplate = apiFunc(bindObj, cache, './indices/exists_template');
  this.flush = apiFunc(bindObj, cache, './indices/flush');
  this.forcemerge = apiFunc(bindObj, cache, './indices/forcemerge');
  this.get = apiFunc(bindObj, cache, './indices/get');
  this.getAlias = apiFunc(bindObj, cache, './indices/get_alias');
  this.getDataStream = apiFunc(bindObj, cache, './indices/get_data_stream');
  this.getFieldMapping = apiFunc(bindObj, cache, './indices/get_field_mapping');
  this.getIndexTemplate = apiFunc(bindObj, cache, './indices/get_index_template');
  this.getMapping = apiFunc(bindObj, cache, './indices/get_mapping');
  this.getSettings = apiFunc(bindObj, cache, './indices/get_settings');
  this.getTemplate = apiFunc(bindObj, cache, './indices/get_template');
  this.getUpgrade = apiFunc(bindObj, cache, './indices/get_upgrade');
  this.open = apiFunc(bindObj, cache, './indices/open');
  this.putAlias = apiFunc(bindObj, cache, './indices/put_alias');
  this.putIndexTemplate = apiFunc(bindObj, cache, './indices/put_index_template');
  this.putMapping = apiFunc(bindObj, cache, './indices/put_mapping');
  this.putSettings = apiFunc(bindObj, cache, './indices/put_settings');
  this.putTemplate = apiFunc(bindObj, cache, './indices/put_template');
  this.recovery = apiFunc(bindObj, cache, './indices/recovery');
  this.refresh = apiFunc(bindObj, cache, './indices/refresh');
  this.resolveIndex = apiFunc(bindObj, cache, './indices/resolve_index');
  this.rollover = apiFunc(bindObj, cache, './indices/rollover');
  this.segments = apiFunc(bindObj, cache, './indices/segments');
  this.shardStores = apiFunc(bindObj, cache, './indices/shard_stores');
  this.shrink = apiFunc(bindObj, cache, './indices/shrink');
  this.simulateIndexTemplate = apiFunc(bindObj, cache, './indices/simulate_index_template');
  this.simulateTemplate = apiFunc(bindObj, cache, './indices/simulate_template');
  this.split = apiFunc(bindObj, cache, './indices/split');
  this.stats = apiFunc(bindObj, cache, './indices/stats');
  this.updateAliases = apiFunc(bindObj, cache, './indices/update_aliases');
  this.upgrade = apiFunc(bindObj, cache, './indices/upgrade');
  this.validateQuery = apiFunc(bindObj, cache, './indices/validate_query');
}

module.exports = IndicesApi;

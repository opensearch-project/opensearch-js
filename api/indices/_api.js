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
  this.addBlock = apiFunc(bindObj, cache, './indices/addBlock');
  this.analyze = apiFunc(bindObj, cache, './indices/analyze');
  this.clearCache = apiFunc(bindObj, cache, './indices/clearCache');
  this.clone = apiFunc(bindObj, cache, './indices/clone');
  this.close = apiFunc(bindObj, cache, './indices/close');
  this.create = apiFunc(bindObj, cache, './indices/create');
  this.createDataStream = apiFunc(bindObj, cache, './indices/createDataStream');
  this.dataStreamsStats = apiFunc(bindObj, cache, './indices/dataStreamsStats');
  this.delete = apiFunc(bindObj, cache, './indices/delete');
  this.deleteAlias = apiFunc(bindObj, cache, './indices/deleteAlias');
  this.deleteDataStream = apiFunc(bindObj, cache, './indices/deleteDataStream');
  this.deleteIndexTemplate = apiFunc(bindObj, cache, './indices/deleteIndexTemplate');
  this.deleteTemplate = apiFunc(bindObj, cache, './indices/deleteTemplate');
  this.exists = apiFunc(bindObj, cache, './indices/exists');
  this.existsAlias = apiFunc(bindObj, cache, './indices/existsAlias');
  this.existsIndexTemplate = apiFunc(bindObj, cache, './indices/existsIndexTemplate');
  this.existsTemplate = apiFunc(bindObj, cache, './indices/existsTemplate');
  this.flush = apiFunc(bindObj, cache, './indices/flush');
  this.forcemerge = apiFunc(bindObj, cache, './indices/forcemerge');
  this.get = apiFunc(bindObj, cache, './indices/get');
  this.getAlias = apiFunc(bindObj, cache, './indices/getAlias');
  this.getDataStream = apiFunc(bindObj, cache, './indices/getDataStream');
  this.getFieldMapping = apiFunc(bindObj, cache, './indices/getFieldMapping');
  this.getIndexTemplate = apiFunc(bindObj, cache, './indices/getIndexTemplate');
  this.getMapping = apiFunc(bindObj, cache, './indices/getMapping');
  this.getSettings = apiFunc(bindObj, cache, './indices/getSettings');
  this.getTemplate = apiFunc(bindObj, cache, './indices/getTemplate');
  this.getUpgrade = apiFunc(bindObj, cache, './indices/getUpgrade');
  this.open = apiFunc(bindObj, cache, './indices/open');
  this.putAlias = apiFunc(bindObj, cache, './indices/putAlias');
  this.putIndexTemplate = apiFunc(bindObj, cache, './indices/putIndexTemplate');
  this.putMapping = apiFunc(bindObj, cache, './indices/putMapping');
  this.putSettings = apiFunc(bindObj, cache, './indices/putSettings');
  this.putTemplate = apiFunc(bindObj, cache, './indices/putTemplate');
  this.recovery = apiFunc(bindObj, cache, './indices/recovery');
  this.refresh = apiFunc(bindObj, cache, './indices/refresh');
  this.resolveIndex = apiFunc(bindObj, cache, './indices/resolveIndex');
  this.rollover = apiFunc(bindObj, cache, './indices/rollover');
  this.segments = apiFunc(bindObj, cache, './indices/segments');
  this.shardStores = apiFunc(bindObj, cache, './indices/shardStores');
  this.shrink = apiFunc(bindObj, cache, './indices/shrink');
  this.simulateIndexTemplate = apiFunc(bindObj, cache, './indices/simulateIndexTemplate');
  this.simulateTemplate = apiFunc(bindObj, cache, './indices/simulateTemplate');
  this.split = apiFunc(bindObj, cache, './indices/split');
  this.stats = apiFunc(bindObj, cache, './indices/stats');
  this.updateAliases = apiFunc(bindObj, cache, './indices/updateAliases');
  this.upgrade = apiFunc(bindObj, cache, './indices/upgrade');
  this.validateQuery = apiFunc(bindObj, cache, './indices/validateQuery');
}

module.exports = IndicesApi;

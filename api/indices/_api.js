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

/** @namespace API-Indices */

function IndicesApi(bindObj) {
  const cache = {};
  this.addBlock = require('./addBlock').bind(bindObj);
  this.analyze = require('./analyze').bind(bindObj);
  this.clearCache = require('./clearCache').bind(bindObj);
  this.clone = require('./clone').bind(bindObj);
  this.close = require('./close').bind(bindObj);
  this.create = require('./create').bind(bindObj);
  this.createDataStream = require('./createDataStream').bind(bindObj);
  this.dataStreamsStats = require('./dataStreamsStats').bind(bindObj);
  this.delete = require('./delete').bind(bindObj);
  this.deleteAlias = require('./deleteAlias').bind(bindObj);
  this.deleteDataStream = require('./deleteDataStream').bind(bindObj);
  this.deleteIndexTemplate = require('./deleteIndexTemplate').bind(bindObj);
  this.deleteTemplate = require('./deleteTemplate').bind(bindObj);
  this.exists = require('./exists').bind(bindObj);
  this.existsAlias = require('./existsAlias').bind(bindObj);
  this.existsIndexTemplate = require('./existsIndexTemplate').bind(bindObj);
  this.existsTemplate = require('./existsTemplate').bind(bindObj);
  this.flush = require('./flush').bind(bindObj);
  this.forcemerge = require('./forcemerge').bind(bindObj);
  this.get = require('./get').bind(bindObj);
  this.getAlias = require('./getAlias').bind(bindObj);
  this.getDataStream = require('./getDataStream').bind(bindObj);
  this.getFieldMapping = require('./getFieldMapping').bind(bindObj);
  this.getIndexTemplate = require('./getIndexTemplate').bind(bindObj);
  this.getMapping = require('./getMapping').bind(bindObj);
  this.getSettings = require('./getSettings').bind(bindObj);
  this.getTemplate = require('./getTemplate').bind(bindObj);
  this.getUpgrade = require('./getUpgrade').bind(bindObj);
  this.open = require('./open').bind(bindObj);
  this.putAlias = require('./putAlias').bind(bindObj);
  this.putIndexTemplate = require('./putIndexTemplate').bind(bindObj);
  this.putMapping = require('./putMapping').bind(bindObj);
  this.putSettings = require('./putSettings').bind(bindObj);
  this.putTemplate = require('./putTemplate').bind(bindObj);
  this.recovery = require('./recovery').bind(bindObj);
  this.refresh = require('./refresh').bind(bindObj);
  this.resolveIndex = require('./resolveIndex').bind(bindObj);
  this.rollover = require('./rollover').bind(bindObj);
  this.segments = require('./segments').bind(bindObj);
  this.shardStores = require('./shardStores').bind(bindObj);
  this.shrink = require('./shrink').bind(bindObj);
  this.simulateIndexTemplate = require('./simulateIndexTemplate').bind(bindObj);
  this.simulateTemplate = require('./simulateTemplate').bind(bindObj);
  this.split = require('./split').bind(bindObj);
  this.stats = require('./stats').bind(bindObj);
  this.updateAliases = require('./updateAliases').bind(bindObj);
  this.upgrade = require('./upgrade').bind(bindObj);
  this.validateQuery = require('./validateQuery').bind(bindObj);
}

module.exports = IndicesApi;

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

/** @namespace API-Nodes */

function NodesApi(bindObj) {
  const cache = {};
  this.hotThreads = apiFunc(bindObj, cache, './nodes/hot_threads');
  this.info = apiFunc(bindObj, cache, './nodes/info');
  this.reloadSecureSettings = apiFunc(bindObj, cache, './nodes/reload_secure_settings');
  this.stats = apiFunc(bindObj, cache, './nodes/stats');
  this.usage = apiFunc(bindObj, cache, './nodes/usage');
}

module.exports = NodesApi;

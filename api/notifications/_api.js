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

/** @namespace API-Notifications */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const createConfigFn = require('./createConfig');
const deleteConfigFn = require('./deleteConfig');
const deleteConfigsFn = require('./deleteConfigs');
const getConfigFn = require('./getConfig');
const getConfigsFn = require('./getConfigs');
const listChannelsFn = require('./listChannels');
const listFeaturesFn = require('./listFeatures');
const sendTestFn = require('./sendTest');
const updateConfigFn = require('./updateConfig');

function NotificationsApi(bindObj) {
  this.createConfig = createConfigFn.bind(bindObj);
  this.deleteConfig = deleteConfigFn.bind(bindObj);
  this.deleteConfigs = deleteConfigsFn.bind(bindObj);
  this.getConfig = getConfigFn.bind(bindObj);
  this.getConfigs = getConfigsFn.bind(bindObj);
  this.listChannels = listChannelsFn.bind(bindObj);
  this.listFeatures = listFeaturesFn.bind(bindObj);
  this.sendTest = sendTestFn.bind(bindObj);
  this.updateConfig = updateConfigFn.bind(bindObj);

  // Deprecated: Use createConfig instead.
  this.create_config = createConfigFn.bind(bindObj);
  // Deprecated: Use deleteConfig instead.
  this.delete_config = deleteConfigFn.bind(bindObj);
  // Deprecated: Use deleteConfigs instead.
  this.delete_configs = deleteConfigsFn.bind(bindObj);
  // Deprecated: Use getConfig instead.
  this.get_config = getConfigFn.bind(bindObj);
  // Deprecated: Use getConfigs instead.
  this.get_configs = getConfigsFn.bind(bindObj);
  // Deprecated: Use listChannels instead.
  this.list_channels = listChannelsFn.bind(bindObj);
  // Deprecated: Use listFeatures instead.
  this.list_features = listFeaturesFn.bind(bindObj);
  // Deprecated: Use sendTest instead.
  this.send_test = sendTestFn.bind(bindObj);
  // Deprecated: Use updateConfig instead.
  this.update_config = updateConfigFn.bind(bindObj);
}

module.exports = NotificationsApi;

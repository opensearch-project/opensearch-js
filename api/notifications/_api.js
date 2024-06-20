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

/** @namespace API-Notifications */

function NotificationsApi(bindObj) {
  const cache = {};
  this.createConfig = apiFunc(bindObj, cache, './notifications/create_config');
  this.deleteConfig = apiFunc(bindObj, cache, './notifications/delete_config');
  this.deleteConfigs = apiFunc(bindObj, cache, './notifications/delete_configs');
  this.getConfig = apiFunc(bindObj, cache, './notifications/get_config');
  this.getConfigs = apiFunc(bindObj, cache, './notifications/get_configs');
  this.listChannels = apiFunc(bindObj, cache, './notifications/list_channels');
  this.listFeatures = apiFunc(bindObj, cache, './notifications/list_features');
  this.sendTest = apiFunc(bindObj, cache, './notifications/send_test');
  this.updateConfig = apiFunc(bindObj, cache, './notifications/update_config');
}

module.exports = NotificationsApi;

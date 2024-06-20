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
  this.createConfig = apiFunc(bindObj, cache, './notifications/createConfig');
  this.deleteConfig = apiFunc(bindObj, cache, './notifications/deleteConfig');
  this.deleteConfigs = apiFunc(bindObj, cache, './notifications/deleteConfigs');
  this.getConfig = apiFunc(bindObj, cache, './notifications/getConfig');
  this.getConfigs = apiFunc(bindObj, cache, './notifications/getConfigs');
  this.listChannels = apiFunc(bindObj, cache, './notifications/listChannels');
  this.listFeatures = apiFunc(bindObj, cache, './notifications/listFeatures');
  this.sendTest = apiFunc(bindObj, cache, './notifications/sendTest');
  this.updateConfig = apiFunc(bindObj, cache, './notifications/updateConfig');
}

module.exports = NotificationsApi;

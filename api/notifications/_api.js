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

/** @namespace API-Notifications */

function NotificationsApi(bindObj) {
  const cache = {};
  this.createConfig = require('./createConfig').bind(bindObj);
  this.deleteConfig = require('./deleteConfig').bind(bindObj);
  this.deleteConfigs = require('./deleteConfigs').bind(bindObj);
  this.getConfig = require('./getConfig').bind(bindObj);
  this.getConfigs = require('./getConfigs').bind(bindObj);
  this.listChannels = require('./listChannels').bind(bindObj);
  this.listFeatures = require('./listFeatures').bind(bindObj);
  this.sendTest = require('./sendTest').bind(bindObj);
  this.updateConfig = require('./updateConfig').bind(bindObj);
}

module.exports = NotificationsApi;

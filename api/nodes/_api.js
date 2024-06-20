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

/** @namespace API-Nodes */

function NodesApi(bindObj) {
  const cache = {};
  this.hotThreads = require('./hotThreads').bind(bindObj);
  this.info = require('./info').bind(bindObj);
  this.reloadSecureSettings = require('./reloadSecureSettings').bind(bindObj);
  this.stats = require('./stats').bind(bindObj);
  this.usage = require('./usage').bind(bindObj);
}

module.exports = NodesApi;

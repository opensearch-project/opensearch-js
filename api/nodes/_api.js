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

/** @namespace API-Nodes */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const hotThreadsFn = require('./hotThreads');
const infoFn = require('./info');
const reloadSecureSettingsFn = require('./reloadSecureSettings');
const statsFn = require('./stats');
const usageFn = require('./usage');

function NodesApi(bindObj) {
  this.hotThreads = hotThreadsFn.bind(bindObj);
  this.info = infoFn.bind(bindObj);
  this.reloadSecureSettings = reloadSecureSettingsFn.bind(bindObj);
  this.stats = statsFn.bind(bindObj);
  this.usage = usageFn.bind(bindObj);

  // Deprecated: Use hotThreads instead.
  this.hot_threads = hotThreadsFn.bind(bindObj);
  // Deprecated: Use reloadSecureSettings instead.
  this.reload_secure_settings = reloadSecureSettingsFn.bind(bindObj);
}

module.exports = NodesApi;

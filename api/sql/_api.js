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

/** @namespace API-Sql */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const closeFn = require('./close');
const explainFn = require('./explain');
const getStatsFn = require('./getStats');
const postStatsFn = require('./postStats');
const queryFn = require('./query');
const settingsFn = require('./settings');

function SqlApi(bindObj) {
  this.close = closeFn.bind(bindObj);
  this.explain = explainFn.bind(bindObj);
  this.getStats = getStatsFn.bind(bindObj);
  this.postStats = postStatsFn.bind(bindObj);
  this.query = queryFn.bind(bindObj);
  this.settings = settingsFn.bind(bindObj);

  // Deprecated: Use getStats instead.
  this.get_stats = getStatsFn.bind(bindObj);
  // Deprecated: Use postStats instead.
  this.post_stats = postStatsFn.bind(bindObj);
}

module.exports = SqlApi;

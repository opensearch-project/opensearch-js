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

/** @namespace API-Rollups */

function RollupsApi(bindObj) {
  const cache = {};
  this.delete = apiFunc(bindObj, cache, './rollups/delete');
  this.explain = apiFunc(bindObj, cache, './rollups/explain');
  this.get = apiFunc(bindObj, cache, './rollups/get');
  this.put = apiFunc(bindObj, cache, './rollups/put');
  this.start = apiFunc(bindObj, cache, './rollups/start');
  this.stop = apiFunc(bindObj, cache, './rollups/stop');
}

module.exports = RollupsApi;

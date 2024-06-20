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

/** @namespace API-Sql */

function SqlApi(bindObj) {
  const cache = {};
  this.close = apiFunc(bindObj, cache, './sql/close');
  this.explain = apiFunc(bindObj, cache, './sql/explain');
  this.getStats = apiFunc(bindObj, cache, './sql/getStats');
  this.postStats = apiFunc(bindObj, cache, './sql/postStats');
  this.query = apiFunc(bindObj, cache, './sql/query');
  this.settings = apiFunc(bindObj, cache, './sql/settings');
}

module.exports = SqlApi;

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

/** @namespace API-Tasks */

function TasksApi(bindObj) {
  const cache = {};
  this.cancel = apiFunc(bindObj, cache, './tasks/cancel');
  this.get = apiFunc(bindObj, cache, './tasks/get');
  this.list = apiFunc(bindObj, cache, './tasks/list');
}

module.exports = TasksApi;

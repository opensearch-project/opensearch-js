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

/** @namespace API-Tasks */

function TasksApi(bindObj) {
  const cache = {};
  this.cancel = require('./cancel').bind(bindObj);
  this.get = require('./get').bind(bindObj);
  this.list = require('./list').bind(bindObj);
}

module.exports = TasksApi;

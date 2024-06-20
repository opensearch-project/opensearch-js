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

/** @namespace API-Sql */

function SqlApi(bindObj) {
  const cache = {};
  this.close = require('./close').bind(bindObj);
  this.explain = require('./explain').bind(bindObj);
  this.getStats = require('./getStats').bind(bindObj);
  this.postStats = require('./postStats').bind(bindObj);
  this.query = require('./query').bind(bindObj);
  this.settings = require('./settings').bind(bindObj);
}

module.exports = SqlApi;

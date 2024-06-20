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

/** @namespace API-Http */

function HttpApi(bindObj) {
  const cache = {};
  this.connect = require('./connect').bind(bindObj);
  this.delete = require('./delete').bind(bindObj);
  this.get = require('./get').bind(bindObj);
  this.head = require('./head').bind(bindObj);
  this.options = require('./options').bind(bindObj);
  this.patch = require('./patch').bind(bindObj);
  this.post = require('./post').bind(bindObj);
  this.put = require('./put').bind(bindObj);
  this.trace = require('./trace').bind(bindObj);
}

module.exports = HttpApi;

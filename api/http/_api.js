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

/** @namespace API-Http */

function HttpApi(bindObj) {
  const cache = {};
  this.connect = apiFunc(bindObj, cache, './http/connect');
  this.delete = apiFunc(bindObj, cache, './http/delete');
  this.get = apiFunc(bindObj, cache, './http/get');
  this.head = apiFunc(bindObj, cache, './http/head');
  this.options = apiFunc(bindObj, cache, './http/options');
  this.patch = apiFunc(bindObj, cache, './http/patch');
  this.post = apiFunc(bindObj, cache, './http/post');
  this.put = apiFunc(bindObj, cache, './http/put');
  this.trace = apiFunc(bindObj, cache, './http/trace');
}

module.exports = HttpApi;

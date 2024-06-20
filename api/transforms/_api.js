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

/** @namespace API-Transforms */

function TransformsApi(bindObj) {
  const cache = {};
  this.delete = apiFunc(bindObj, cache, './transforms/delete');
  this.explain = apiFunc(bindObj, cache, './transforms/explain');
  this.get = apiFunc(bindObj, cache, './transforms/get');
  this.preview = apiFunc(bindObj, cache, './transforms/preview');
  this.put = apiFunc(bindObj, cache, './transforms/put');
  this.search = apiFunc(bindObj, cache, './transforms/search');
  this.start = apiFunc(bindObj, cache, './transforms/start');
  this.stop = apiFunc(bindObj, cache, './transforms/stop');
}

module.exports = TransformsApi;

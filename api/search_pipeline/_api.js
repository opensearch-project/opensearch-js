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

/** @namespace API-Search-Pipeline */

function SearchpipelineApi(bindObj) {
  const cache = {};
  this.delete = apiFunc(bindObj, cache, './search_pipeline/delete');
  this.get = apiFunc(bindObj, cache, './search_pipeline/get');
  this.put = apiFunc(bindObj, cache, './search_pipeline/put');
}

module.exports = SearchpipelineApi;

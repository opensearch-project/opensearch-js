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

/** @namespace API-Ppl */

function PplApi(bindObj) {
  const cache = {};
  this.explain = apiFunc(bindObj, cache, './ppl/explain');
  this.getStats = apiFunc(bindObj, cache, './ppl/get_stats');
  this.postStats = apiFunc(bindObj, cache, './ppl/post_stats');
  this.query = apiFunc(bindObj, cache, './ppl/query');
}

module.exports = PplApi;

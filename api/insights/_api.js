/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 */

/*
 * This file was generated from the OpenSearch API Spec. Do NOT edit it
 * manually. If you want to make changes, either update the spec or
 * modify the API generator.
 */

'use strict';

/** @namespace API-Insights */

function InsightsApi(bindObj) {
  this.topQueries = require('./topQueries').bind(bindObj);

  // Deprecated: Use topQueries instead.
  this.top_queries = require('./topQueries').bind(bindObj);
}

module.exports = InsightsApi;

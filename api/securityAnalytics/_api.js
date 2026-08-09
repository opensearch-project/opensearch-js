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

/** @namespace API-Security-Analytics */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const getAlertsFn = require('./getAlerts');
const getFindingsFn = require('./getFindings');
const searchFindingCorrelationsFn = require('./searchFindingCorrelations');

function SecurityAnalyticsApi(bindObj) {
  this.getAlerts = getAlertsFn.bind(bindObj);
  this.getFindings = getFindingsFn.bind(bindObj);
  this.searchFindingCorrelations = searchFindingCorrelationsFn.bind(bindObj);

  // Deprecated: Use getAlerts instead.
  this.get_alerts = getAlertsFn.bind(bindObj);
  // Deprecated: Use getFindings instead.
  this.get_findings = getFindingsFn.bind(bindObj);
  // Deprecated: Use searchFindingCorrelations instead.
  this.search_finding_correlations = searchFindingCorrelationsFn.bind(bindObj);
}

module.exports = SecurityAnalyticsApi;

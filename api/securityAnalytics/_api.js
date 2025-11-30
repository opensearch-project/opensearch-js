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

function SecurityAnalyticsApi(bindObj) {
  this.getAlerts = require('./getAlerts').bind(bindObj);
  this.getFindings = require('./getFindings').bind(bindObj);
  this.searchFindingCorrelations = require('./searchFindingCorrelations').bind(bindObj);

  // Deprecated: Use getAlerts instead.
  this.get_alerts = require('./getAlerts').bind(bindObj);
  // Deprecated: Use getFindings instead.
  this.get_findings = require('./getFindings').bind(bindObj);
  // Deprecated: Use searchFindingCorrelations instead.
  this.search_finding_correlations = require('./searchFindingCorrelations').bind(bindObj);
}

module.exports = SecurityAnalyticsApi;

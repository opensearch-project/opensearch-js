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

const { normalizeArguments, handleMissingParam } = require('../utils');

/**
 * List correlations for a finding.
 * <br/> See Also: {@link https://docs.opensearch.org/docs/latest/security-analytics/api-tools/correlation-eng/#list-correlations-for-a-finding-belonging-to-a-log-type - security_analytics.search_finding_correlations}
 *
 * @memberOf API-Security-Analytics
 *
 * @param {object} params
 * @param {string} params.detector_type - The log type of findings you want to correlate with the specified finding. Required.
 * @param {string} params.finding - The finding ID for which you want to find other findings that are correlated. Required.
 * @param {number} [params.nearby_findings=10] - The number of nearby findings you want to return. Optional.
 * @param {number} [params.time_window=300000] - The time window (in ms) in which all of the correlations must have occurred together. Optional.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function searchFindingCorrelationsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.detector_type == null) return handleMissingParam('detector_type', this, callback);
  if (params.finding == null) return handleMissingParam('finding', this, callback);

  let { body, ...querystring } = params;

  const path = '/_plugins/_security_analytics/findings/correlate';
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = searchFindingCorrelationsFunc;

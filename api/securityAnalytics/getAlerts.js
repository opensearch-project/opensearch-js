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

const { normalizeArguments } = require('../utils');

/**
 * Retrieve alerts related to a specific detector type or detector ID.
 * <br/> See Also: {@link https://docs.opensearch.org/docs/latest/security-analytics/api-tools/alert-finding-api/#get-alerts - security_analytics.get_alerts}
 *
 * @memberOf API-Security-Analytics
 *
 * @param {object} [params]
 * @param {string} [params.alertState] - Used to filter by alert state. Optional.
 * @param {string} [params.detectorType] - The type of detector used to fetch alerts. Optional when `detector_id` is specified. Otherwise required.
 * @param {string} [params.detector_id] - The ID of the detector used to fetch alerts. Optional when `detectorType` is specified. Otherwise required.
 * @param {number} [params.endTime] - The end timestamp (in ms) of the time window in which you want to retrieve alerts. Optional.
 * @param {string} [params.missing] - Used to sort by whether the field `missing` exists or not in the documents associated with the alert. Optional.
 * @param {string} [params.searchString] - The alert attribute you want returned in the search. Optional.
 * @param {string} [params.severityLevel] - Used to filter by alert severity level. Optional.
 * @param {number} [params.size=20] - The maximum number of results returned in the response. Optional.
 * @param {string} [params.sortOrder] - The order used to sort the list of findings. Possible values are `asc` or `desc`. Optional.
 * @param {string} [params.sortString=start_time] - The string used by Security Analytics to sort the alerts. Optional.
 * @param {number} [params.startIndex=0] - The pagination index. Optional.
 * @param {number} [params.startTime] - The beginning timestamp (in ms) of the time window in which you want to retrieve alerts. Optional.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getAlertsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, ...querystring } = params;

  const path = '/_plugins/_security_analytics/alerts';
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getAlertsFunc;

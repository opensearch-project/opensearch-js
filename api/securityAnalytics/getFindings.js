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
 * Retrieve findings related to a specific detector type or detector ID.
 * <br/> See Also: {@link https://docs.opensearch.org/docs/latest/security-analytics/api-tools/alert-finding-api/#get-findings - security_analytics.get_findings}
 *
 * @memberOf API-Security-Analytics
 *
 * @param {object} [params]
 * @param {string} [params.detectionType] - The detection type that dictates the retrieval type for the findings. When the detection type is `threat`, it fetches threat intelligence feeds. When the detection type is `rule`, findings are fetched based on the detector’s rule. Optional.
 * @param {string} [params.detectorType] - The type of detector used to fetch alerts. Optional when the `detector_id` is specified. Otherwise required.
 * @param {string} [params.detector_id] - The ID of the detector used to fetch alerts. Optional when the `detectorType` is specified. Otherwise required.
 * @param {string} [params.endTime] - The end timestamp (in ms) of the time window in which you want to retrieve findings. Optional.
 * @param {string} [params.findingIds] - The comma-separated id list of findings for which you want retrieve details. Optional.
 * @param {string} [params.missing] - Used to sort by whether the field `missing` exists or not in the documents associated with the finding. Optional.
 * @param {string} [params.searchString] - The finding attribute you want returned in the search. To search in a specific index, specify the index name in the request path. For example, to search findings in the indexABC index, use `searchString=indexABC’. Optional.
 * @param {string} [params.severity] - The rule severity for which retrieve findings. Severity can be `critical`, `high`, `medium`, or `low`. Optional.
 * @param {number} [params.size=20] - The maximum number of results returned in the response. Optional.
 * @param {string} [params.sortOrder] - The order used to sort the list of findings. Possible values are `asc` or `desc`. Optional.
 * @param {string} [params.sortString=timestamp] - The string used by the Alerting plugin to sort the findings. Optional.
 * @param {number} [params.startIndex=0] - The pagination index. Optional.
 * @param {number} [params.startTime] - The beginning timestamp (in ms) of the time window in which you want to retrieve findings. Optional.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getFindingsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, ...querystring } = params;

  const path = '/_plugins/_security_analytics/findings/_search';
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getFindingsFunc;

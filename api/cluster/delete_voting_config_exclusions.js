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

'use strict'

const { normalizeArguments } = require('../utils');

/**
 * Clears cluster voting config exclusions.
 * <br/> See Also: {@link https://opensearch.org/docs/latest - cluster.delete_voting_config_exclusions}
 *
 * @memberOf API-Cluster
 *
 * @param {object} [params]
 * @param {boolean} [params.wait_for_removal=true] - Specifies whether to wait for all excluded nodes to be removed from the cluster before clearing the voting configuration exclusions list. Defaults to true, meaning that all excluded nodes must be removed from the cluster before this API takes any action. If set to false then the voting configuration exclusions list is cleared even if some excluded nodes are still in the cluster.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function deleteVotingConfigExclusionsFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);

  let { body, ...querystring } = params;

  const path = '/_cluster/voting_config_exclusions';
  const method = 'DELETE';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = deleteVotingConfigExclusionsFunc;

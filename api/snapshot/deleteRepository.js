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

const { normalizeArguments, parsePathParam, handleMissingParam } = require('../utils');

/**
 * Deletes a repository.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/snapshots/delete-snapshot-repository/ - snapshot.delete_repository}
 *
 * @memberOf API-Snapshot
 *
 * @param {object} params
 * @param {string} [params.cluster_manager_timeout] - Operation timeout for connection to cluster-manager node.
 * @param {string} [params.master_timeout] DEPRECATED - Explicit operation timeout for connection to master node
 * @param {string} [params.timeout] - Explicit operation timeout
 * @param {string} params.repository - Name of the snapshot repository to unregister. Wildcard (`*`) patterns are supported.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function deleteRepositoryFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.repository == null) return handleMissingParam('repository', this, callback);

  let { body, repository, ...querystring } = params;
  repository = parsePathParam(repository);

  const path = '/_snapshot/' + repository;
  const method = 'DELETE';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = deleteRepositoryFunc;

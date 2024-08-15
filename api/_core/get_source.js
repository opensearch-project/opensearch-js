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
 * Returns the source of a document.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/api-reference/document-apis/get-documents/ - get_source}
 *
 * @memberOf API-Core
 *
 * @param {object} params
 * @param {string} [params._source] - True or false to return the _source field or not, or a list of fields to return.
 * @param {string} [params._source_excludes] - A comma-separated list of source fields to exclude in the response.
 * @param {string} [params._source_includes] - A comma-separated list of source fields to include in the response.
 * @param {string} [params.preference=random] - Specifies the node or shard the operation should be performed on. Random by default.
 * @param {boolean} [params.realtime] - Boolean) If true, the request is real-time as opposed to near-real-time.
 * @param {boolean} [params.refresh] - If true, OpenSearch refreshes the affected shards to make this operation visible to search. If false, do nothing with refreshes.
 * @param {string} [params.routing] - Target the specified primary shard.
 * @param {number} [params.version] - Explicit version number for concurrency control. The specified version must match the current version of the document for the request to succeed.
 * @param {string} [params.version_type] - Specific version type: internal, external, external_gte.
 * @param {string} params.id - Unique identifier of the document.
 * @param {string} params.index - Name of the index that contains the document.
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function getSourceFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.id == null) return handleMissingParam('id', this, callback);
  if (params.index == null) return handleMissingParam('index', this, callback);

  let { body, id, index, ...querystring } = params;
  id = parsePathParam(id);
  index = parsePathParam(index);

  const path = '/' + index + '/_source/' + id;
  const method = 'GET';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = getSourceFunc;

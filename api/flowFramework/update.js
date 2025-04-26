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

const { normalizeArguments, parsePathParam, handleMissingParam } = require('../utils');

/**
 * Updates a workflow template that has not been provisioned.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/automating-configurations/api/create-workflow/ - flow_framework.update}
 *
 * @memberOf API-Flow-Framework
 *
 * @param {object} params
 * @param {boolean} [params.provision=false] - Whether to provision the workflow as part of the request.
 * @param {boolean} [params.reprovision=false] - Whether to reprovision an existing workflow.
 * @param {boolean} [params.update_fields=false] - Whether to update only the fields included in the request body..
 * @param {string} [params.use_case] - Specifies the workflow template to use.
 * @param {string} [params.validation=all] - Specifies the validation type. Valid values are `all` (validate the template) and `none` (do not validate the template).
 * @param {string} params.workflow_id - The ID of the workflow.
 * @param {object} [params.body] 
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function updateFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.workflow_id == null) return handleMissingParam('workflow_id', this, callback);

  let { body, workflow_id, ...querystring } = params;
  workflow_id = parsePathParam(workflow_id);

  const path = '/_plugins/_flow_framework/workflow/' + workflow_id;
  const method = 'PUT';
  body = body || '';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = updateFunc;

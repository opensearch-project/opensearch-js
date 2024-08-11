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
 * Update channel configuration.
 * <br/> See Also: {@link https://opensearch.org/docs/latest/observing-your-data/notifications/api/#update-channel-configuration - notifications.update_config}
 *
 * @memberOf API-Notifications
 *
 * @param {object} params
 * @param {string} params.config_id 
 * @param {object} params.body 
 *
 * @param {TransportRequestOptions} [options] - Options for {@link Transport#request}
 * @param {function} [callback] - Callback that handles errors and response
 *
 * @returns {{abort: function(), then: function(), catch: function()}|Promise<never>|*}
 */
function updateConfigFunc(params, options, callback) {
  [params, options, callback] = normalizeArguments(params, options, callback);
  if (params.config_id == null) return handleMissingParam('config_id', this, callback);
  if (params.body == null) return handleMissingParam('body', this, callback);

  let { body, config_id, ...querystring } = params;
  config_id = parsePathParam(config_id);

  const path = '/_plugins/_notifications/configs/' + config_id;
  const method = 'PUT';

  return this.transport.request({ method, path, querystring, body }, options, callback);
}

module.exports = updateConfigFunc;

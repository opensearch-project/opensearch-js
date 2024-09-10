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

/** @namespace API-Flow-Framework */

function FlowFrameworkApi(bindObj) {
  this.create = require('./create').bind(bindObj);
  this.delete = require('./delete').bind(bindObj);
  this.get = require('./get').bind(bindObj);
  this.update = require('./update').bind(bindObj);

}

module.exports = FlowFrameworkApi;

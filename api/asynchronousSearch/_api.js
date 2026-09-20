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

/** @namespace API-Asynchronous-Search */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const deleteFn = require('./delete');
const getFn = require('./get');
const searchFn = require('./search');
const statsFn = require('./stats');

function AsynchronousSearchApi(bindObj) {
  this.delete = deleteFn.bind(bindObj);
  this.get = getFn.bind(bindObj);
  this.search = searchFn.bind(bindObj);
  this.stats = statsFn.bind(bindObj);

}

module.exports = AsynchronousSearchApi;

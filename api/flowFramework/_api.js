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

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const createFn = require('./create');
const deleteFn = require('./delete');
const deprovisionFn = require('./deprovision');
const getFn = require('./get');
const getStatusFn = require('./getStatus');
const getStepsFn = require('./getSteps');
const provisionFn = require('./provision');
const searchFn = require('./search');
const searchStateFn = require('./searchState');
const updateFn = require('./update');

function FlowFrameworkApi(bindObj) {
  this.create = createFn.bind(bindObj);
  this.delete = deleteFn.bind(bindObj);
  this.deprovision = deprovisionFn.bind(bindObj);
  this.get = getFn.bind(bindObj);
  this.getStatus = getStatusFn.bind(bindObj);
  this.getSteps = getStepsFn.bind(bindObj);
  this.provision = provisionFn.bind(bindObj);
  this.search = searchFn.bind(bindObj);
  this.searchState = searchStateFn.bind(bindObj);
  this.update = updateFn.bind(bindObj);

  // Deprecated: Use getStatus instead.
  this.get_status = getStatusFn.bind(bindObj);
  // Deprecated: Use getSteps instead.
  this.get_steps = getStepsFn.bind(bindObj);
  // Deprecated: Use searchState instead.
  this.search_state = searchStateFn.bind(bindObj);
}

module.exports = FlowFrameworkApi;

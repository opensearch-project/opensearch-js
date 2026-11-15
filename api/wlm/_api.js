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

/** @namespace API-Wlm */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const createQueryGroupFn = require('./createQueryGroup');
const createWorkloadGroupFn = require('./createWorkloadGroup');
const deleteQueryGroupFn = require('./deleteQueryGroup');
const deleteWorkloadGroupFn = require('./deleteWorkloadGroup');
const getQueryGroupFn = require('./getQueryGroup');
const getWorkloadGroupFn = require('./getWorkloadGroup');
const statsFn = require('./stats');
const updateQueryGroupFn = require('./updateQueryGroup');
const updateWorkloadGroupFn = require('./updateWorkloadGroup');

function WlmApi(bindObj) {
  this.createQueryGroup = createQueryGroupFn.bind(bindObj);
  this.createWorkloadGroup = createWorkloadGroupFn.bind(bindObj);
  this.deleteQueryGroup = deleteQueryGroupFn.bind(bindObj);
  this.deleteWorkloadGroup = deleteWorkloadGroupFn.bind(bindObj);
  this.getQueryGroup = getQueryGroupFn.bind(bindObj);
  this.getWorkloadGroup = getWorkloadGroupFn.bind(bindObj);
  this.stats = statsFn.bind(bindObj);
  this.updateQueryGroup = updateQueryGroupFn.bind(bindObj);
  this.updateWorkloadGroup = updateWorkloadGroupFn.bind(bindObj);

  // Deprecated: Use createQueryGroup instead.
  this.create_query_group = createQueryGroupFn.bind(bindObj);
  // Deprecated: Use createWorkloadGroup instead.
  this.create_workload_group = createWorkloadGroupFn.bind(bindObj);
  // Deprecated: Use deleteQueryGroup instead.
  this.delete_query_group = deleteQueryGroupFn.bind(bindObj);
  // Deprecated: Use deleteWorkloadGroup instead.
  this.delete_workload_group = deleteWorkloadGroupFn.bind(bindObj);
  // Deprecated: Use getQueryGroup instead.
  this.get_query_group = getQueryGroupFn.bind(bindObj);
  // Deprecated: Use getWorkloadGroup instead.
  this.get_workload_group = getWorkloadGroupFn.bind(bindObj);
  // Deprecated: Use updateQueryGroup instead.
  this.update_query_group = updateQueryGroupFn.bind(bindObj);
  // Deprecated: Use updateWorkloadGroup instead.
  this.update_workload_group = updateWorkloadGroupFn.bind(bindObj);
}

module.exports = WlmApi;

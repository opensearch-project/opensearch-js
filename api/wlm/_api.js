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
const deleteQueryGroupFn = require('./deleteQueryGroup');
const getQueryGroupFn = require('./getQueryGroup');
const updateQueryGroupFn = require('./updateQueryGroup');

function WlmApi(bindObj) {
  this.createQueryGroup = createQueryGroupFn.bind(bindObj);
  this.deleteQueryGroup = deleteQueryGroupFn.bind(bindObj);
  this.getQueryGroup = getQueryGroupFn.bind(bindObj);
  this.updateQueryGroup = updateQueryGroupFn.bind(bindObj);

  // Deprecated: Use createQueryGroup instead.
  this.create_query_group = createQueryGroupFn.bind(bindObj);
  // Deprecated: Use deleteQueryGroup instead.
  this.delete_query_group = deleteQueryGroupFn.bind(bindObj);
  // Deprecated: Use getQueryGroup instead.
  this.get_query_group = getQueryGroupFn.bind(bindObj);
  // Deprecated: Use updateQueryGroup instead.
  this.update_query_group = updateQueryGroupFn.bind(bindObj);
}

module.exports = WlmApi;

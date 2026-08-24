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

/** @namespace API-Snapshot */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const cleanupRepositoryFn = require('./cleanupRepository');
const cloneFn = require('./clone');
const createFn = require('./create');
const createRepositoryFn = require('./createRepository');
const deleteFn = require('./delete');
const deleteRepositoryFn = require('./deleteRepository');
const getFn = require('./get');
const getRepositoryFn = require('./getRepository');
const restoreFn = require('./restore');
const statusFn = require('./status');
const verifyRepositoryFn = require('./verifyRepository');

function SnapshotApi(bindObj) {
  this.cleanupRepository = cleanupRepositoryFn.bind(bindObj);
  this.clone = cloneFn.bind(bindObj);
  this.create = createFn.bind(bindObj);
  this.createRepository = createRepositoryFn.bind(bindObj);
  this.delete = deleteFn.bind(bindObj);
  this.deleteRepository = deleteRepositoryFn.bind(bindObj);
  this.get = getFn.bind(bindObj);
  this.getRepository = getRepositoryFn.bind(bindObj);
  this.restore = restoreFn.bind(bindObj);
  this.status = statusFn.bind(bindObj);
  this.verifyRepository = verifyRepositoryFn.bind(bindObj);

  // Deprecated: Use cleanupRepository instead.
  this.cleanup_repository = cleanupRepositoryFn.bind(bindObj);
  // Deprecated: Use createRepository instead.
  this.create_repository = createRepositoryFn.bind(bindObj);
  // Deprecated: Use deleteRepository instead.
  this.delete_repository = deleteRepositoryFn.bind(bindObj);
  // Deprecated: Use getRepository instead.
  this.get_repository = getRepositoryFn.bind(bindObj);
  // Deprecated: Use verifyRepository instead.
  this.verify_repository = verifyRepositoryFn.bind(bindObj);
}

module.exports = SnapshotApi;

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

'use strict';

const { apiFunc } = require('../utils');

/** @namespace API-Snapshot */

function SnapshotApi(bindObj) {
  const cache = {};
  this.cleanupRepository = apiFunc(bindObj, cache, './snapshot/cleanup_repository');
  this.clone = apiFunc(bindObj, cache, './snapshot/clone');
  this.create = apiFunc(bindObj, cache, './snapshot/create');
  this.createRepository = apiFunc(bindObj, cache, './snapshot/create_repository');
  this.delete = apiFunc(bindObj, cache, './snapshot/delete');
  this.deleteRepository = apiFunc(bindObj, cache, './snapshot/delete_repository');
  this.get = apiFunc(bindObj, cache, './snapshot/get');
  this.getRepository = apiFunc(bindObj, cache, './snapshot/get_repository');
  this.restore = apiFunc(bindObj, cache, './snapshot/restore');
  this.status = apiFunc(bindObj, cache, './snapshot/status');
  this.verifyRepository = apiFunc(bindObj, cache, './snapshot/verify_repository');
}

module.exports = SnapshotApi;

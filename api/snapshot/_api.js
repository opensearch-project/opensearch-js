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

/** @namespace API-Snapshot */

function SnapshotApi(bindObj) {
  const cache = {};
  this.cleanupRepository = require('./cleanupRepository').bind(bindObj);
  this.clone = require('./clone').bind(bindObj);
  this.create = require('./create').bind(bindObj);
  this.createRepository = require('./createRepository').bind(bindObj);
  this.delete = require('./delete').bind(bindObj);
  this.deleteRepository = require('./deleteRepository').bind(bindObj);
  this.get = require('./get').bind(bindObj);
  this.getRepository = require('./getRepository').bind(bindObj);
  this.restore = require('./restore').bind(bindObj);
  this.status = require('./status').bind(bindObj);
  this.verifyRepository = require('./verifyRepository').bind(bindObj);
}

module.exports = SnapshotApi;

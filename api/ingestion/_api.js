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

/** @namespace API-Ingestion */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const getStateFn = require('./getState');
const pauseFn = require('./pause');
const resumeFn = require('./resume');

function IngestionApi(bindObj) {
  this.getState = getStateFn.bind(bindObj);
  this.pause = pauseFn.bind(bindObj);
  this.resume = resumeFn.bind(bindObj);

  // Deprecated: Use getState instead.
  this.get_state = getStateFn.bind(bindObj);
}

module.exports = IngestionApi;

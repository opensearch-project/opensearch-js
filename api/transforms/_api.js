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

/** @namespace API-Transforms */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const deleteFn = require('./delete');
const explainFn = require('./explain');
const getFn = require('./get');
const previewFn = require('./preview');
const putFn = require('./put');
const searchFn = require('./search');
const startFn = require('./start');
const stopFn = require('./stop');

function TransformsApi(bindObj) {
  this.delete = deleteFn.bind(bindObj);
  this.explain = explainFn.bind(bindObj);
  this.get = getFn.bind(bindObj);
  this.preview = previewFn.bind(bindObj);
  this.put = putFn.bind(bindObj);
  this.search = searchFn.bind(bindObj);
  this.start = startFn.bind(bindObj);
  this.stop = stopFn.bind(bindObj);

}

module.exports = TransformsApi;

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

/** @namespace API-Http */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const connectFn = require('./connect');
const deleteFn = require('./delete');
const getFn = require('./get');
const headFn = require('./head');
const optionsFn = require('./options');
const patchFn = require('./patch');
const postFn = require('./post');
const putFn = require('./put');
const traceFn = require('./trace');

function HttpApi(bindObj) {
  this.connect = connectFn.bind(bindObj);
  this.delete = deleteFn.bind(bindObj);
  this.get = getFn.bind(bindObj);
  this.head = headFn.bind(bindObj);
  this.options = optionsFn.bind(bindObj);
  this.patch = patchFn.bind(bindObj);
  this.post = postFn.bind(bindObj);
  this.put = putFn.bind(bindObj);
  this.trace = traceFn.bind(bindObj);

}

module.exports = HttpApi;

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

/** @namespace API-Dangling-Indices */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const deleteDanglingIndexFn = require('./deleteDanglingIndex');
const importDanglingIndexFn = require('./importDanglingIndex');
const listDanglingIndicesFn = require('./listDanglingIndices');

function DanglingIndicesApi(bindObj) {
  this.deleteDanglingIndex = deleteDanglingIndexFn.bind(bindObj);
  this.importDanglingIndex = importDanglingIndexFn.bind(bindObj);
  this.listDanglingIndices = listDanglingIndicesFn.bind(bindObj);

  // Deprecated: Use deleteDanglingIndex instead.
  this.delete_dangling_index = deleteDanglingIndexFn.bind(bindObj);
  // Deprecated: Use importDanglingIndex instead.
  this.import_dangling_index = importDanglingIndexFn.bind(bindObj);
  // Deprecated: Use listDanglingIndices instead.
  this.list_dangling_indices = listDanglingIndicesFn.bind(bindObj);
}

module.exports = DanglingIndicesApi;

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

/** @namespace API-Dangling-Indices */

function DanglingindicesApi(bindObj) {
  const cache = {};
  this.deleteDanglingIndex = apiFunc(bindObj, cache, './dangling_indices/delete_dangling_index');
  this.importDanglingIndex = apiFunc(bindObj, cache, './dangling_indices/import_dangling_index');
  this.listDanglingIndices = apiFunc(bindObj, cache, './dangling_indices/list_dangling_indices');
}

module.exports = DanglingindicesApi;

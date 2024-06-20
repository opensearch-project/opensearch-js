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

/** @namespace API-Ingest */

function IngestApi(bindObj) {
  const cache = {};
  this.deletePipeline = apiFunc(bindObj, cache, './ingest/deletePipeline');
  this.getPipeline = apiFunc(bindObj, cache, './ingest/getPipeline');
  this.processorGrok = apiFunc(bindObj, cache, './ingest/processorGrok');
  this.putPipeline = apiFunc(bindObj, cache, './ingest/putPipeline');
  this.simulate = apiFunc(bindObj, cache, './ingest/simulate');
}

module.exports = IngestApi;

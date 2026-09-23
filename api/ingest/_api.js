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

/** @namespace API-Ingest */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const deletePipelineFn = require('./deletePipeline');
const getPipelineFn = require('./getPipeline');
const processorGrokFn = require('./processorGrok');
const putPipelineFn = require('./putPipeline');
const simulateFn = require('./simulate');

function IngestApi(bindObj) {
  this.deletePipeline = deletePipelineFn.bind(bindObj);
  this.getPipeline = getPipelineFn.bind(bindObj);
  this.processorGrok = processorGrokFn.bind(bindObj);
  this.putPipeline = putPipelineFn.bind(bindObj);
  this.simulate = simulateFn.bind(bindObj);

  // Deprecated: Use deletePipeline instead.
  this.delete_pipeline = deletePipelineFn.bind(bindObj);
  // Deprecated: Use getPipeline instead.
  this.get_pipeline = getPipelineFn.bind(bindObj);
  // Deprecated: Use processorGrok instead.
  this.processor_grok = processorGrokFn.bind(bindObj);
  // Deprecated: Use putPipeline instead.
  this.put_pipeline = putPipelineFn.bind(bindObj);
}

module.exports = IngestApi;

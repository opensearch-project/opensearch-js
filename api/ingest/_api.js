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

/** @namespace API-Ingest */

function IngestApi(bindObj) {
  const cache = {};
  this.deletePipeline = require('./deletePipeline').bind(bindObj);
  this.getPipeline = require('./getPipeline').bind(bindObj);
  this.processorGrok = require('./processorGrok').bind(bindObj);
  this.putPipeline = require('./putPipeline').bind(bindObj);
  this.simulate = require('./simulate').bind(bindObj);
}

module.exports = IngestApi;

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

/** @namespace API-Cat */

function CatApi(bindObj) {
  const cache = {};
  this.aliases = require('./aliases').bind(bindObj);
  this.allocation = require('./allocation').bind(bindObj);
  this.allPitSegments = require('./allPitSegments').bind(bindObj);
  this.clusterManager = require('./clusterManager').bind(bindObj);
  this.count = require('./count').bind(bindObj);
  this.fielddata = require('./fielddata').bind(bindObj);
  this.health = require('./health').bind(bindObj);
  this.help = require('./help').bind(bindObj);
  this.indices = require('./indices').bind(bindObj);
  this.master = require('./master').bind(bindObj);
  this.nodeattrs = require('./nodeattrs').bind(bindObj);
  this.nodes = require('./nodes').bind(bindObj);
  this.pendingTasks = require('./pendingTasks').bind(bindObj);
  this.pitSegments = require('./pitSegments').bind(bindObj);
  this.plugins = require('./plugins').bind(bindObj);
  this.recovery = require('./recovery').bind(bindObj);
  this.repositories = require('./repositories').bind(bindObj);
  this.segmentReplication = require('./segmentReplication').bind(bindObj);
  this.segments = require('./segments').bind(bindObj);
  this.shards = require('./shards').bind(bindObj);
  this.snapshots = require('./snapshots').bind(bindObj);
  this.tasks = require('./tasks').bind(bindObj);
  this.templates = require('./templates').bind(bindObj);
  this.threadPool = require('./threadPool').bind(bindObj);
}

module.exports = CatApi;

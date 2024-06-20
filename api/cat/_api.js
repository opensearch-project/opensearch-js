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

/** @namespace API-Cat */

function CatApi(bindObj) {
  const cache = {};
  this.aliases = apiFunc(bindObj, cache, './cat/aliases');
  this.allocation = apiFunc(bindObj, cache, './cat/allocation');
  this.allPitSegments = apiFunc(bindObj, cache, './cat/all_pit_segments');
  this.clusterManager = apiFunc(bindObj, cache, './cat/cluster_manager');
  this.count = apiFunc(bindObj, cache, './cat/count');
  this.fielddata = apiFunc(bindObj, cache, './cat/fielddata');
  this.health = apiFunc(bindObj, cache, './cat/health');
  this.help = apiFunc(bindObj, cache, './cat/help');
  this.indices = apiFunc(bindObj, cache, './cat/indices');
  this.master = apiFunc(bindObj, cache, './cat/master');
  this.nodeattrs = apiFunc(bindObj, cache, './cat/nodeattrs');
  this.nodes = apiFunc(bindObj, cache, './cat/nodes');
  this.pendingTasks = apiFunc(bindObj, cache, './cat/pending_tasks');
  this.pitSegments = apiFunc(bindObj, cache, './cat/pit_segments');
  this.plugins = apiFunc(bindObj, cache, './cat/plugins');
  this.recovery = apiFunc(bindObj, cache, './cat/recovery');
  this.repositories = apiFunc(bindObj, cache, './cat/repositories');
  this.segmentReplication = apiFunc(bindObj, cache, './cat/segment_replication');
  this.segments = apiFunc(bindObj, cache, './cat/segments');
  this.shards = apiFunc(bindObj, cache, './cat/shards');
  this.snapshots = apiFunc(bindObj, cache, './cat/snapshots');
  this.tasks = apiFunc(bindObj, cache, './cat/tasks');
  this.templates = apiFunc(bindObj, cache, './cat/templates');
  this.threadPool = apiFunc(bindObj, cache, './cat/thread_pool');
}

module.exports = CatApi;

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

/** @namespace API-Cat */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const aliasesFn = require('./aliases');
const allocationFn = require('./allocation');
const allPitSegmentsFn = require('./allPitSegments');
const clusterManagerFn = require('./clusterManager');
const countFn = require('./count');
const fielddataFn = require('./fielddata');
const healthFn = require('./health');
const helpFn = require('./help');
const indicesFn = require('./indices');
const masterFn = require('./master');
const nodeattrsFn = require('./nodeattrs');
const nodesFn = require('./nodes');
const pendingTasksFn = require('./pendingTasks');
const pitSegmentsFn = require('./pitSegments');
const pluginsFn = require('./plugins');
const recoveryFn = require('./recovery');
const repositoriesFn = require('./repositories');
const segmentReplicationFn = require('./segmentReplication');
const segmentsFn = require('./segments');
const shardsFn = require('./shards');
const snapshotsFn = require('./snapshots');
const tasksFn = require('./tasks');
const templatesFn = require('./templates');
const threadPoolFn = require('./threadPool');

function CatApi(bindObj) {
  this.aliases = aliasesFn.bind(bindObj);
  this.allocation = allocationFn.bind(bindObj);
  this.allPitSegments = allPitSegmentsFn.bind(bindObj);
  this.clusterManager = clusterManagerFn.bind(bindObj);
  this.count = countFn.bind(bindObj);
  this.fielddata = fielddataFn.bind(bindObj);
  this.health = healthFn.bind(bindObj);
  this.help = helpFn.bind(bindObj);
  this.indices = indicesFn.bind(bindObj);
  this.master = masterFn.bind(bindObj);
  this.nodeattrs = nodeattrsFn.bind(bindObj);
  this.nodes = nodesFn.bind(bindObj);
  this.pendingTasks = pendingTasksFn.bind(bindObj);
  this.pitSegments = pitSegmentsFn.bind(bindObj);
  this.plugins = pluginsFn.bind(bindObj);
  this.recovery = recoveryFn.bind(bindObj);
  this.repositories = repositoriesFn.bind(bindObj);
  this.segmentReplication = segmentReplicationFn.bind(bindObj);
  this.segments = segmentsFn.bind(bindObj);
  this.shards = shardsFn.bind(bindObj);
  this.snapshots = snapshotsFn.bind(bindObj);
  this.tasks = tasksFn.bind(bindObj);
  this.templates = templatesFn.bind(bindObj);
  this.threadPool = threadPoolFn.bind(bindObj);

  // Deprecated: Use allPitSegments instead.
  this.all_pit_segments = allPitSegmentsFn.bind(bindObj);
  // Deprecated: Use clusterManager instead.
  this.cluster_manager = clusterManagerFn.bind(bindObj);
  // Deprecated: Use pendingTasks instead.
  this.pending_tasks = pendingTasksFn.bind(bindObj);
  // Deprecated: Use pitSegments instead.
  this.pit_segments = pitSegmentsFn.bind(bindObj);
  // Deprecated: Use segmentReplication instead.
  this.segment_replication = segmentReplicationFn.bind(bindObj);
  // Deprecated: Use threadPool instead.
  this.thread_pool = threadPoolFn.bind(bindObj);
}

module.exports = CatApi;

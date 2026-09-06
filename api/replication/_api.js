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

/** @namespace API-Replication */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const autofollowStatsFn = require('./autofollowStats');
const createReplicationRuleFn = require('./createReplicationRule');
const deleteReplicationRuleFn = require('./deleteReplicationRule');
const followerStatsFn = require('./followerStats');
const leaderStatsFn = require('./leaderStats');
const pauseFn = require('./pause');
const resumeFn = require('./resume');
const startFn = require('./start');
const statusFn = require('./status');
const stopFn = require('./stop');
const updateSettingsFn = require('./updateSettings');

function ReplicationApi(bindObj) {
  this.autofollowStats = autofollowStatsFn.bind(bindObj);
  this.createReplicationRule = createReplicationRuleFn.bind(bindObj);
  this.deleteReplicationRule = deleteReplicationRuleFn.bind(bindObj);
  this.followerStats = followerStatsFn.bind(bindObj);
  this.leaderStats = leaderStatsFn.bind(bindObj);
  this.pause = pauseFn.bind(bindObj);
  this.resume = resumeFn.bind(bindObj);
  this.start = startFn.bind(bindObj);
  this.status = statusFn.bind(bindObj);
  this.stop = stopFn.bind(bindObj);
  this.updateSettings = updateSettingsFn.bind(bindObj);

  // Deprecated: Use autofollowStats instead.
  this.autofollow_stats = autofollowStatsFn.bind(bindObj);
  // Deprecated: Use createReplicationRule instead.
  this.create_replication_rule = createReplicationRuleFn.bind(bindObj);
  // Deprecated: Use deleteReplicationRule instead.
  this.delete_replication_rule = deleteReplicationRuleFn.bind(bindObj);
  // Deprecated: Use followerStats instead.
  this.follower_stats = followerStatsFn.bind(bindObj);
  // Deprecated: Use leaderStats instead.
  this.leader_stats = leaderStatsFn.bind(bindObj);
  // Deprecated: Use updateSettings instead.
  this.update_settings = updateSettingsFn.bind(bindObj);
}

module.exports = ReplicationApi;

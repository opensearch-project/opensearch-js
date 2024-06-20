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

/** @namespace API-Cluster */

function ClusterApi(bindObj) {
  const cache = {};
  this.allocationExplain = apiFunc(bindObj, cache, './cluster/allocation_explain');
  this.deleteComponentTemplate = apiFunc(bindObj, cache, './cluster/delete_component_template');
  this.deleteDecommissionAwareness = apiFunc(bindObj, cache, './cluster/delete_decommission_awareness');
  this.deleteVotingConfigExclusions = apiFunc(bindObj, cache, './cluster/delete_voting_config_exclusions');
  this.deleteWeightedRouting = apiFunc(bindObj, cache, './cluster/delete_weighted_routing');
  this.existsComponentTemplate = apiFunc(bindObj, cache, './cluster/exists_component_template');
  this.getComponentTemplate = apiFunc(bindObj, cache, './cluster/get_component_template');
  this.getDecommissionAwareness = apiFunc(bindObj, cache, './cluster/get_decommission_awareness');
  this.getSettings = apiFunc(bindObj, cache, './cluster/get_settings');
  this.getWeightedRouting = apiFunc(bindObj, cache, './cluster/get_weighted_routing');
  this.health = apiFunc(bindObj, cache, './cluster/health');
  this.pendingTasks = apiFunc(bindObj, cache, './cluster/pending_tasks');
  this.postVotingConfigExclusions = apiFunc(bindObj, cache, './cluster/post_voting_config_exclusions');
  this.putComponentTemplate = apiFunc(bindObj, cache, './cluster/put_component_template');
  this.putDecommissionAwareness = apiFunc(bindObj, cache, './cluster/put_decommission_awareness');
  this.putSettings = apiFunc(bindObj, cache, './cluster/put_settings');
  this.putWeightedRouting = apiFunc(bindObj, cache, './cluster/put_weighted_routing');
  this.remoteInfo = apiFunc(bindObj, cache, './cluster/remote_info');
  this.reroute = apiFunc(bindObj, cache, './cluster/reroute');
  this.state = apiFunc(bindObj, cache, './cluster/state');
  this.stats = apiFunc(bindObj, cache, './cluster/stats');
}

module.exports = ClusterApi;

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
  this.allocationExplain = apiFunc(bindObj, cache, './cluster/allocationExplain');
  this.deleteComponentTemplate = apiFunc(bindObj, cache, './cluster/deleteComponentTemplate');
  this.deleteDecommissionAwareness = apiFunc(bindObj, cache, './cluster/deleteDecommissionAwareness');
  this.deleteVotingConfigExclusions = apiFunc(bindObj, cache, './cluster/deleteVotingConfigExclusions');
  this.deleteWeightedRouting = apiFunc(bindObj, cache, './cluster/deleteWeightedRouting');
  this.existsComponentTemplate = apiFunc(bindObj, cache, './cluster/existsComponentTemplate');
  this.getComponentTemplate = apiFunc(bindObj, cache, './cluster/getComponentTemplate');
  this.getDecommissionAwareness = apiFunc(bindObj, cache, './cluster/getDecommissionAwareness');
  this.getSettings = apiFunc(bindObj, cache, './cluster/getSettings');
  this.getWeightedRouting = apiFunc(bindObj, cache, './cluster/getWeightedRouting');
  this.health = apiFunc(bindObj, cache, './cluster/health');
  this.pendingTasks = apiFunc(bindObj, cache, './cluster/pendingTasks');
  this.postVotingConfigExclusions = apiFunc(bindObj, cache, './cluster/postVotingConfigExclusions');
  this.putComponentTemplate = apiFunc(bindObj, cache, './cluster/putComponentTemplate');
  this.putDecommissionAwareness = apiFunc(bindObj, cache, './cluster/putDecommissionAwareness');
  this.putSettings = apiFunc(bindObj, cache, './cluster/putSettings');
  this.putWeightedRouting = apiFunc(bindObj, cache, './cluster/putWeightedRouting');
  this.remoteInfo = apiFunc(bindObj, cache, './cluster/remoteInfo');
  this.reroute = apiFunc(bindObj, cache, './cluster/reroute');
  this.state = apiFunc(bindObj, cache, './cluster/state');
  this.stats = apiFunc(bindObj, cache, './cluster/stats');
}

module.exports = ClusterApi;

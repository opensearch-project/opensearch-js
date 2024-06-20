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

/** @namespace API-Cluster */

function ClusterApi(bindObj) {
  const cache = {};
  this.allocationExplain = require('./allocationExplain').bind(bindObj);
  this.deleteComponentTemplate = require('./deleteComponentTemplate').bind(bindObj);
  this.deleteDecommissionAwareness = require('./deleteDecommissionAwareness').bind(bindObj);
  this.deleteVotingConfigExclusions = require('./deleteVotingConfigExclusions').bind(bindObj);
  this.deleteWeightedRouting = require('./deleteWeightedRouting').bind(bindObj);
  this.existsComponentTemplate = require('./existsComponentTemplate').bind(bindObj);
  this.getComponentTemplate = require('./getComponentTemplate').bind(bindObj);
  this.getDecommissionAwareness = require('./getDecommissionAwareness').bind(bindObj);
  this.getSettings = require('./getSettings').bind(bindObj);
  this.getWeightedRouting = require('./getWeightedRouting').bind(bindObj);
  this.health = require('./health').bind(bindObj);
  this.pendingTasks = require('./pendingTasks').bind(bindObj);
  this.postVotingConfigExclusions = require('./postVotingConfigExclusions').bind(bindObj);
  this.putComponentTemplate = require('./putComponentTemplate').bind(bindObj);
  this.putDecommissionAwareness = require('./putDecommissionAwareness').bind(bindObj);
  this.putSettings = require('./putSettings').bind(bindObj);
  this.putWeightedRouting = require('./putWeightedRouting').bind(bindObj);
  this.remoteInfo = require('./remoteInfo').bind(bindObj);
  this.reroute = require('./reroute').bind(bindObj);
  this.state = require('./state').bind(bindObj);
  this.stats = require('./stats').bind(bindObj);
}

module.exports = ClusterApi;

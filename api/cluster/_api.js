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

/** @namespace API-Cluster */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const allocationExplainFn = require('./allocationExplain');
const deleteComponentTemplateFn = require('./deleteComponentTemplate');
const deleteDecommissionAwarenessFn = require('./deleteDecommissionAwareness');
const deleteVotingConfigExclusionsFn = require('./deleteVotingConfigExclusions');
const deleteWeightedRoutingFn = require('./deleteWeightedRouting');
const existsComponentTemplateFn = require('./existsComponentTemplate');
const getComponentTemplateFn = require('./getComponentTemplate');
const getDecommissionAwarenessFn = require('./getDecommissionAwareness');
const getSettingsFn = require('./getSettings');
const getWeightedRoutingFn = require('./getWeightedRouting');
const healthFn = require('./health');
const pendingTasksFn = require('./pendingTasks');
const postVotingConfigExclusionsFn = require('./postVotingConfigExclusions');
const putComponentTemplateFn = require('./putComponentTemplate');
const putDecommissionAwarenessFn = require('./putDecommissionAwareness');
const putSettingsFn = require('./putSettings');
const putWeightedRoutingFn = require('./putWeightedRouting');
const remoteInfoFn = require('./remoteInfo');
const rerouteFn = require('./reroute');
const stateFn = require('./state');
const statsFn = require('./stats');

function ClusterApi(bindObj) {
  this.allocationExplain = allocationExplainFn.bind(bindObj);
  this.deleteComponentTemplate = deleteComponentTemplateFn.bind(bindObj);
  this.deleteDecommissionAwareness = deleteDecommissionAwarenessFn.bind(bindObj);
  this.deleteVotingConfigExclusions = deleteVotingConfigExclusionsFn.bind(bindObj);
  this.deleteWeightedRouting = deleteWeightedRoutingFn.bind(bindObj);
  this.existsComponentTemplate = existsComponentTemplateFn.bind(bindObj);
  this.getComponentTemplate = getComponentTemplateFn.bind(bindObj);
  this.getDecommissionAwareness = getDecommissionAwarenessFn.bind(bindObj);
  this.getSettings = getSettingsFn.bind(bindObj);
  this.getWeightedRouting = getWeightedRoutingFn.bind(bindObj);
  this.health = healthFn.bind(bindObj);
  this.pendingTasks = pendingTasksFn.bind(bindObj);
  this.postVotingConfigExclusions = postVotingConfigExclusionsFn.bind(bindObj);
  this.putComponentTemplate = putComponentTemplateFn.bind(bindObj);
  this.putDecommissionAwareness = putDecommissionAwarenessFn.bind(bindObj);
  this.putSettings = putSettingsFn.bind(bindObj);
  this.putWeightedRouting = putWeightedRoutingFn.bind(bindObj);
  this.remoteInfo = remoteInfoFn.bind(bindObj);
  this.reroute = rerouteFn.bind(bindObj);
  this.state = stateFn.bind(bindObj);
  this.stats = statsFn.bind(bindObj);

  // Deprecated: Use allocationExplain instead.
  this.allocation_explain = allocationExplainFn.bind(bindObj);
  // Deprecated: Use deleteComponentTemplate instead.
  this.delete_component_template = deleteComponentTemplateFn.bind(bindObj);
  // Deprecated: Use deleteDecommissionAwareness instead.
  this.delete_decommission_awareness = deleteDecommissionAwarenessFn.bind(bindObj);
  // Deprecated: Use deleteVotingConfigExclusions instead.
  this.delete_voting_config_exclusions = deleteVotingConfigExclusionsFn.bind(bindObj);
  // Deprecated: Use deleteWeightedRouting instead.
  this.delete_weighted_routing = deleteWeightedRoutingFn.bind(bindObj);
  // Deprecated: Use existsComponentTemplate instead.
  this.exists_component_template = existsComponentTemplateFn.bind(bindObj);
  // Deprecated: Use getComponentTemplate instead.
  this.get_component_template = getComponentTemplateFn.bind(bindObj);
  // Deprecated: Use getDecommissionAwareness instead.
  this.get_decommission_awareness = getDecommissionAwarenessFn.bind(bindObj);
  // Deprecated: Use getSettings instead.
  this.get_settings = getSettingsFn.bind(bindObj);
  // Deprecated: Use getWeightedRouting instead.
  this.get_weighted_routing = getWeightedRoutingFn.bind(bindObj);
  // Deprecated: Use pendingTasks instead.
  this.pending_tasks = pendingTasksFn.bind(bindObj);
  // Deprecated: Use postVotingConfigExclusions instead.
  this.post_voting_config_exclusions = postVotingConfigExclusionsFn.bind(bindObj);
  // Deprecated: Use putComponentTemplate instead.
  this.put_component_template = putComponentTemplateFn.bind(bindObj);
  // Deprecated: Use putDecommissionAwareness instead.
  this.put_decommission_awareness = putDecommissionAwarenessFn.bind(bindObj);
  // Deprecated: Use putSettings instead.
  this.put_settings = putSettingsFn.bind(bindObj);
  // Deprecated: Use putWeightedRouting instead.
  this.put_weighted_routing = putWeightedRoutingFn.bind(bindObj);
  // Deprecated: Use remoteInfo instead.
  this.remote_info = remoteInfoFn.bind(bindObj);
}

module.exports = ClusterApi;

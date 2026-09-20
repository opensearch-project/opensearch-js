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

/** @namespace API-Search-Relevance */

// All operation modules are required once at module load time (not per
// instance) to avoid paying `require()` resolution cost on every Client
// construction.
const deleteExperimentsFn = require('./deleteExperiments');
const deleteJudgmentsFn = require('./deleteJudgments');
const deleteQuerySetsFn = require('./deleteQuerySets');
const deleteScheduledExperimentsFn = require('./deleteScheduledExperiments');
const deleteSearchConfigurationsFn = require('./deleteSearchConfigurations');
const getExperimentsFn = require('./getExperiments');
const getJudgmentsFn = require('./getJudgments');
const getNodeStatsFn = require('./getNodeStats');
const getQuerySetsFn = require('./getQuerySets');
const getScheduledExperimentsFn = require('./getScheduledExperiments');
const getSearchConfigurationsFn = require('./getSearchConfigurations');
const getStatsFn = require('./getStats');
const postQuerySetsFn = require('./postQuerySets');
const postScheduledExperimentsFn = require('./postScheduledExperiments');
const putExperimentsFn = require('./putExperiments');
const putJudgmentsFn = require('./putJudgments');
const putQuerySetsFn = require('./putQuerySets');
const putSearchConfigurationsFn = require('./putSearchConfigurations');

function SearchRelevanceApi(bindObj) {
  this.deleteExperiments = deleteExperimentsFn.bind(bindObj);
  this.deleteJudgments = deleteJudgmentsFn.bind(bindObj);
  this.deleteQuerySets = deleteQuerySetsFn.bind(bindObj);
  this.deleteScheduledExperiments = deleteScheduledExperimentsFn.bind(bindObj);
  this.deleteSearchConfigurations = deleteSearchConfigurationsFn.bind(bindObj);
  this.getExperiments = getExperimentsFn.bind(bindObj);
  this.getJudgments = getJudgmentsFn.bind(bindObj);
  this.getNodeStats = getNodeStatsFn.bind(bindObj);
  this.getQuerySets = getQuerySetsFn.bind(bindObj);
  this.getScheduledExperiments = getScheduledExperimentsFn.bind(bindObj);
  this.getSearchConfigurations = getSearchConfigurationsFn.bind(bindObj);
  this.getStats = getStatsFn.bind(bindObj);
  this.postQuerySets = postQuerySetsFn.bind(bindObj);
  this.postScheduledExperiments = postScheduledExperimentsFn.bind(bindObj);
  this.putExperiments = putExperimentsFn.bind(bindObj);
  this.putJudgments = putJudgmentsFn.bind(bindObj);
  this.putQuerySets = putQuerySetsFn.bind(bindObj);
  this.putSearchConfigurations = putSearchConfigurationsFn.bind(bindObj);

  // Deprecated: Use deleteExperiments instead.
  this.delete_experiments = deleteExperimentsFn.bind(bindObj);
  // Deprecated: Use deleteJudgments instead.
  this.delete_judgments = deleteJudgmentsFn.bind(bindObj);
  // Deprecated: Use deleteQuerySets instead.
  this.delete_query_sets = deleteQuerySetsFn.bind(bindObj);
  // Deprecated: Use deleteScheduledExperiments instead.
  this.delete_scheduled_experiments = deleteScheduledExperimentsFn.bind(bindObj);
  // Deprecated: Use deleteSearchConfigurations instead.
  this.delete_search_configurations = deleteSearchConfigurationsFn.bind(bindObj);
  // Deprecated: Use getExperiments instead.
  this.get_experiments = getExperimentsFn.bind(bindObj);
  // Deprecated: Use getJudgments instead.
  this.get_judgments = getJudgmentsFn.bind(bindObj);
  // Deprecated: Use getNodeStats instead.
  this.get_node_stats = getNodeStatsFn.bind(bindObj);
  // Deprecated: Use getQuerySets instead.
  this.get_query_sets = getQuerySetsFn.bind(bindObj);
  // Deprecated: Use getScheduledExperiments instead.
  this.get_scheduled_experiments = getScheduledExperimentsFn.bind(bindObj);
  // Deprecated: Use getSearchConfigurations instead.
  this.get_search_configurations = getSearchConfigurationsFn.bind(bindObj);
  // Deprecated: Use getStats instead.
  this.get_stats = getStatsFn.bind(bindObj);
  // Deprecated: Use postQuerySets instead.
  this.post_query_sets = postQuerySetsFn.bind(bindObj);
  // Deprecated: Use postScheduledExperiments instead.
  this.post_scheduled_experiments = postScheduledExperimentsFn.bind(bindObj);
  // Deprecated: Use putExperiments instead.
  this.put_experiments = putExperimentsFn.bind(bindObj);
  // Deprecated: Use putJudgments instead.
  this.put_judgments = putJudgmentsFn.bind(bindObj);
  // Deprecated: Use putQuerySets instead.
  this.put_query_sets = putQuerySetsFn.bind(bindObj);
  // Deprecated: Use putSearchConfigurations instead.
  this.put_search_configurations = putSearchConfigurationsFn.bind(bindObj);
}

module.exports = SearchRelevanceApi;

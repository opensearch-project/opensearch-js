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

function SearchRelevanceApi(bindObj) {
  this.deleteExperiments = require('./deleteExperiments').bind(bindObj);
  this.deleteJudgments = require('./deleteJudgments').bind(bindObj);
  this.deleteQuerySets = require('./deleteQuerySets').bind(bindObj);
  this.deleteSearchConfigurations = require('./deleteSearchConfigurations').bind(bindObj);
  this.getExperiments = require('./getExperiments').bind(bindObj);
  this.getJudgments = require('./getJudgments').bind(bindObj);
  this.getNodeStats = require('./getNodeStats').bind(bindObj);
  this.getQuerySets = require('./getQuerySets').bind(bindObj);
  this.getSearchConfigurations = require('./getSearchConfigurations').bind(bindObj);
  this.getStats = require('./getStats').bind(bindObj);
  this.postQuerySets = require('./postQuerySets').bind(bindObj);
  this.putExperiments = require('./putExperiments').bind(bindObj);
  this.putJudgments = require('./putJudgments').bind(bindObj);
  this.putQuerySets = require('./putQuerySets').bind(bindObj);
  this.putSearchConfigurations = require('./putSearchConfigurations').bind(bindObj);

  // Deprecated: Use deleteExperiments instead.
  this.delete_experiments = require('./deleteExperiments').bind(bindObj);
  // Deprecated: Use deleteJudgments instead.
  this.delete_judgments = require('./deleteJudgments').bind(bindObj);
  // Deprecated: Use deleteQuerySets instead.
  this.delete_query_sets = require('./deleteQuerySets').bind(bindObj);
  // Deprecated: Use deleteSearchConfigurations instead.
  this.delete_search_configurations = require('./deleteSearchConfigurations').bind(bindObj);
  // Deprecated: Use getExperiments instead.
  this.get_experiments = require('./getExperiments').bind(bindObj);
  // Deprecated: Use getJudgments instead.
  this.get_judgments = require('./getJudgments').bind(bindObj);
  // Deprecated: Use getNodeStats instead.
  this.get_node_stats = require('./getNodeStats').bind(bindObj);
  // Deprecated: Use getQuerySets instead.
  this.get_query_sets = require('./getQuerySets').bind(bindObj);
  // Deprecated: Use getSearchConfigurations instead.
  this.get_search_configurations = require('./getSearchConfigurations').bind(bindObj);
  // Deprecated: Use getStats instead.
  this.get_stats = require('./getStats').bind(bindObj);
  // Deprecated: Use postQuerySets instead.
  this.post_query_sets = require('./postQuerySets').bind(bindObj);
  // Deprecated: Use putExperiments instead.
  this.put_experiments = require('./putExperiments').bind(bindObj);
  // Deprecated: Use putJudgments instead.
  this.put_judgments = require('./putJudgments').bind(bindObj);
  // Deprecated: Use putQuerySets instead.
  this.put_query_sets = require('./putQuerySets').bind(bindObj);
  // Deprecated: Use putSearchConfigurations instead.
  this.put_search_configurations = require('./putSearchConfigurations').bind(bindObj);
}

module.exports = SearchRelevanceApi;

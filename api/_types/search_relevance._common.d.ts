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


export type PostQuerySetsRequest = {
  description?: string;
  name?: string;
  querySetSize?: number;
  sampling?: string;
}

export type PostQuerySetsResponse = {
  query_set_id?: string;
  query_set_result?: string;
}

export type PostScheduledExperimentsRequest = {
  cronExpression?: string;
  experimentId?: string;
}

export type PostScheduledExperimentsResponse = {
  job_id?: string;
  job_result?: string;
}

export type PutExperimentResponse = {
  experiment_id?: string;
  experiment_result?: string;
}

export type PutHybridOptimizerExperimentRequest = {
  judgmentList?: string[];
  querySetId?: string;
  searchConfigurationList?: string[];
  size?: number;
  type?: string;
}

export type PutImportJudgmentsRequest = {
  description?: string;
  judgmentRatings?: Record<string, any>[];
  name?: string;
  type?: string;
}

export type PutJudgmentsResponse = {
  judgment_id?: string;
}

export type PutLLMJudgmentsRequest = {
  contextFields?: string[];
  description?: string;
  ignoreFailure?: boolean;
  modelId?: string;
  name?: string;
  querySetId?: string;
  searchConfigurationList?: string[];
  size?: number;
  type?: string;
}

export type PutPairwiseExperimentRequest = {
  querySetId?: string;
  searchConfigurationList?: string[];
  size?: number;
  type?: string;
}

export type PutPointwiseExperimentRequest = {
  judgmentList?: string[];
  querySetId?: string;
  searchConfigurationList?: string[];
  size?: number;
  type?: string;
}

export type PutQuerySetsRequest = {
  description?: string;
  name?: string;
  querySetQueries?: Record<string, any>[];
  sampling?: string;
}

export type PutQuerySetsResponse = {
  query_set_id?: string;
  query_set_result?: string;
}

export type PutSearchConfigurationRequest = {
  index?: string;
  name?: string;
  query?: string;
  searchPipeline?: string;
}

export type PutSearchConfigurationResponse = {
  search_configuration_id?: string;
  search_configuration_result?: string;
}

export type PutUBIJudgmentsRequest = {
  clickModel?: string;
  description?: string;
  maxRank?: number;
  name?: string;
  type?: string;
}


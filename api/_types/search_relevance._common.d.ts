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

import * as Common from './_common'
import * as Common_QueryDsl from './_common.query_dsl'

export type DocumentRatingUpdate = {
  docId: string;
  rating: string;
}

export type ExperimentValidationStatus = 'DRIFTED' | 'UNAVAILABLE' | 'VALID'

export type JudgmentRatingUpdate = {
  query: string;
  ratings: DocumentRatingUpdate[];
}

export type LLMJudgmentRatingType = 'RELEVANT_IRRELEVANT' | 'SCORE0_1'

export type PatchExperimentRequest = {
  description?: string;
  name?: string;
}

export type PatchExperimentResponse = {
  experiment_id?: string;
  experiment_result?: string;
}

export type PostQuerySetsRequest = {
  description?: string;
  name: string;
  querySetSize?: number;
  sampling?: string;
  ubiQueriesIndex?: string;
}

export type PostQuerySetsResponse = {
  query_set_id?: string;
  query_set_result?: string;
}

export type PostScheduledExperimentsRequest = {
  cronExpression: string;
  experimentId: string;
}

export type PostScheduledExperimentsResponse = {
  job_id?: string;
  job_result?: string;
}

export type PutExperimentRequestBase = {
  querySetId: string;
  searchConfigurationList: string[];
  size: number;
}

export type PutExperimentResponse = {
  experiment_id?: string;
  experiment_result?: string;
}

export type PutHybridOptimizerExperimentRequest = PutExperimentRequestBase & {
  judgmentList?: string[];
  type: 'HYBRID_OPTIMIZER';
}

export type PutImportJudgmentsRequest = PutJudgmentsRequestBase & {
  judgmentRatings: Record<string, any>[];
  type: 'IMPORT_JUDGMENT';
}

export type PutJudgmentsRequestBase = {
  description?: string;
  name: string;
}

export type PutJudgmentsResponse = {
  judgment_id?: string;
}

export type PutLLMJudgmentsRequest = PutJudgmentsRequestBase & {
  contextFields?: string[];
  existingJudgments?: string[];
  ignoreFailure?: boolean;
  llmJudgmentRatingType?: LLMJudgmentRatingType;
  modelId: string;
  overwriteCache?: boolean;
  promptTemplate?: string;
  querySetId: string;
  searchConfigurationList?: string[];
  size?: number;
  tokenLimit?: number;
  type: 'LLM_JUDGMENT';
}

export type PutPairwiseExperimentRequest = PutExperimentRequestBase & {
  type: 'PAIRWISE_COMPARISON';
}

export type PutPointwiseExperimentRequest = PutExperimentRequestBase & {
  judgmentList?: string[];
  type: 'POINTWISE_EVALUATION';
}

export type PutQuerySetsRequest = {
  description?: string;
  name: string;
  querySetQueries?: Record<string, any>[];
  sampling?: string;
}

export type PutQuerySetsResponse = {
  query_set_id?: string;
  query_set_result?: string;
}

export type PutSearchConfigurationRequest = {
  description?: string;
  index?: string;
  name: string;
  query?: string;
  searchPipeline?: string;
}

export type PutSearchConfigurationResponse = {
  search_configuration_id?: string;
  search_configuration_result?: string;
}

export type PutUBIJudgmentsRequest = PutJudgmentsRequestBase & {
  clickModel: string;
  endDate?: string;
  maxRank: number;
  startDate?: string;
  type: 'UBI_JUDGMENT';
  ubiEventsIndex?: string;
}

export type RetryJudgmentsResponse = {
  judgment_id?: string;
  message?: string;
  status?: string;
}

export type SearchRequest = {
  from?: number;
  query?: Common_QueryDsl.QueryContainer;
  size?: number;
  sort?: Common.Sort;
}

export type UpdateJudgmentRatingsRequest = {
  judgmentRatings: JudgmentRatingUpdate[];
}

export type UpdateJudgmentRatingsResponse = {
  judgment_id?: string;
  result?: string;
}

export type ValidateExperimentResponse = {
  drifted_inputs: string[];
  message: string;
  status: ExperimentValidationStatus;
}


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


export interface CollapseResponseProcessor {
  context_prefix?: string;
  description?: string;
  field: string;
  ignore_failure?: boolean;
  tag?: string;
}

export interface FilterQueryRequestProcessor {
  description?: string;
  ignore_failure?: boolean;
  query?: UserDefinedObjectStructure;
  tag?: string;
}

export interface MLOpenSearchReranker {
  model_id: string;
}

export type NeuralFieldMap = Record<string, string>

export interface NeuralQueryEnricherRequestProcessor {
  default_model_id?: string;
  description?: string;
  neural_field_default_id?: NeuralFieldMap;
  tag?: string;
}

export interface NormalizationPhaseResultsProcessor {
  combination?: ScoreCombination;
  description?: string;
  ignore_failure?: boolean;
  normalization?: ScoreNormalization;
  tag?: string;
}

export interface OversampleRequestProcessor {
  content_prefix?: string;
  description?: string;
  ignore_failure?: boolean;
  sample_factor: number;
  tag?: string;
}

export interface PersonalizeSearchRankingResponseProcessor {
  campaign_arn: string;
  description?: string;
  iam_role_arn?: string;
  ignore_failure?: boolean;
  item_id_field?: string;
  recipe: string;
  tag?: string;
  weight: number;
}

export interface PhaseResultsProcessor {
  'normalization-processor': NormalizationPhaseResultsProcessor;
}

export interface RenameFieldResponseProcessor {
  description?: string;
  field: string;
  ignore_failure?: boolean;
  tag?: string;
  target_field: string;
}

export type RequestProcessor = {
  filter_query: FilterQueryRequestProcessor;
} | {
  neural_query_enricher: NeuralQueryEnricherRequestProcessor;
} | {
  script: SearchScriptRequestProcessor;
} | {
  oversample: OversampleRequestProcessor;
}

export interface RerankContext {
  document_fields: string[];
}

export interface RerankResponseProcessor {
  context?: RerankContext;
  description?: string;
  ignore_failure?: boolean;
  ml_opensearch?: MLOpenSearchReranker;
  tag?: string;
}

export type ResponseProcessor = {
  personalize_search_ranking: PersonalizeSearchRankingResponseProcessor;
} | {
  retrieval_augmented_generation: RetrievalAugmentedGenerationResponseProcessor;
} | {
  rename_field: RenameFieldResponseProcessor;
} | {
  rerank: RerankResponseProcessor;
} | {
  collapse: CollapseResponseProcessor;
} | {
  truncate_hits: TruncateHitsResponseProcessor;
} | {
  sort: SortResponseProcessor;
} | {
  split: SplitResponseProcessor;
}

export interface RetrievalAugmentedGenerationResponseProcessor {
  context_field_list: string[];
  description?: string;
  model_id: string;
  system_prompt?: string;
  tag?: string;
  user_instructions?: string;
}

export interface ScoreCombination {
  parameters?: number[];
  technique?: ScoreCombinationTechnique;
}

export type ScoreCombinationTechnique = 'arithmetic_mean' | 'geometric_mean' | 'harmonic_mean'

export interface ScoreNormalization {
  technique?: ScoreNormalizationTechnique;
}

export type ScoreNormalizationTechnique = 'l2' | 'min_max'

export type SearchPipelineMap = Record<string, SearchPipelineStructure>

export interface SearchPipelineStructure {
  phase_results_processors?: PhaseResultsProcessor[];
  request_processors?: RequestProcessor[];
  response_processors?: ResponseProcessor[];
  version?: number;
}

export interface SearchScriptRequestProcessor {
  description?: string;
  ignore_failure?: boolean;
  lang?: string;
  source: string;
  tag?: string;
}

export interface SortResponseProcessor {
  description?: string;
  field: string;
  ignore_failure?: boolean;
  order?: string;
  tag?: string;
  target_field?: string;
}

export interface SplitResponseProcessor {
  description?: string;
  field: string;
  ignore_failure?: boolean;
  preserve_trailing?: boolean;
  separator: string;
  tag?: string;
  target_field?: string;
}

export interface TruncateHitsResponseProcessor {
  context_prefix?: string;
  description?: string;
  ignore_failure?: boolean;
  tag?: string;
  target_size?: number;
}

export interface UserDefinedObjectStructure {
  bool?: any;
  boosting?: any;
  combined_fields?: any;
  constant_score?: any;
  dis_max?: any;
  distance_feature?: any;
  exists?: any;
  field_masking_span?: any;
  function_score?: any;
  fuzzy?: UserDefinedValueMap;
  geo_bounding_box?: any;
  geo_distance?: any;
  geo_polygon?: any;
  geo_shape?: any;
  has_child?: any;
  has_parent?: any;
  ids?: any;
  intervals?: UserDefinedValueMap;
  knn?: any;
  match?: UserDefinedValueMap;
  match_all?: any;
  match_bool_prefix?: UserDefinedValueMap;
  match_none?: any;
  match_phrase?: UserDefinedValueMap;
  match_phrase_prefix?: UserDefinedValueMap;
  more_like_this?: any;
  multi_match?: any;
  nested?: any;
  parent_id?: any;
  percolate?: any;
  pinned?: any;
  prefix?: UserDefinedValueMap;
  query_string?: any;
  range?: UserDefinedValueMap;
  rank_feature?: any;
  regexp?: UserDefinedValueMap;
  script?: any;
  script_score?: any;
  shape?: any;
  simple_query_string?: any;
  span_containing?: any;
  span_first?: any;
  span_multi?: any;
  span_near?: any;
  span_not?: any;
  span_or?: any;
  span_term?: UserDefinedValueMap;
  span_within?: any;
  term?: UserDefinedValueMap;
  terms?: any;
  terms_set?: UserDefinedValueMap;
  wildcard?: UserDefinedValueMap;
  wrapper?: any;
}

export interface UserDefinedValueMap {
}


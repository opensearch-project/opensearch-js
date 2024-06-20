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


export interface FilterQueryRequestProcessor {
  description?: string;
  ignore_failure?: boolean;
  query?: UserDefinedObjectStructure;
  tag?: string;
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

export interface PhaseResultsProcessor {
  'normalization-processor': NormalizationPhaseResultsProcessor;
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
  response_processors?: RequestProcessor[];
  version?: number;
}

export interface SearchScriptRequestProcessor {
  description?: string;
  ignore_failure?: boolean;
  lang?: string;
  source: string;
  tag?: string;
}

export interface UserDefinedObjectStructure {
  bool?: Record<string, any>;
  boosting?: Record<string, any>;
  combined_fields?: Record<string, any>;
  constant_score?: Record<string, any>;
  dis_max?: Record<string, any>;
  distance_feature?: Record<string, any>;
  exists?: Record<string, any>;
  field_masking_span?: Record<string, any>;
  function_score?: Record<string, any>;
  fuzzy?: UserDefinedValueMap;
  geo_bounding_box?: Record<string, any>;
  geo_distance?: Record<string, any>;
  geo_polygon?: Record<string, any>;
  geo_shape?: Record<string, any>;
  has_child?: Record<string, any>;
  has_parent?: Record<string, any>;
  ids?: Record<string, any>;
  intervals?: UserDefinedValueMap;
  knn?: Record<string, any>;
  match?: UserDefinedValueMap;
  match_all?: Record<string, any>;
  match_bool_prefix?: UserDefinedValueMap;
  match_none?: Record<string, any>;
  match_phrase?: UserDefinedValueMap;
  match_phrase_prefix?: UserDefinedValueMap;
  more_like_this?: Record<string, any>;
  multi_match?: Record<string, any>;
  nested?: Record<string, any>;
  parent_id?: Record<string, any>;
  percolate?: Record<string, any>;
  pinned?: Record<string, any>;
  prefix?: UserDefinedValueMap;
  query_string?: Record<string, any>;
  range?: UserDefinedValueMap;
  rank_feature?: Record<string, any>;
  regexp?: UserDefinedValueMap;
  script?: Record<string, any>;
  script_score?: Record<string, any>;
  shape?: Record<string, any>;
  simple_query_string?: Record<string, any>;
  span_containing?: Record<string, any>;
  span_first?: Record<string, any>;
  span_multi?: Record<string, any>;
  span_near?: Record<string, any>;
  span_not?: Record<string, any>;
  span_or?: Record<string, any>;
  span_term?: UserDefinedValueMap;
  span_within?: Record<string, any>;
  term?: UserDefinedValueMap;
  terms?: Record<string, any>;
  terms_set?: UserDefinedValueMap;
  wildcard?: UserDefinedValueMap;
  wrapper?: Record<string, any>;
}

export interface UserDefinedValueMap {
}


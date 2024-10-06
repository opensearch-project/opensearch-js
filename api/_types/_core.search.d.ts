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
import * as Common_Aggregations from './_common.aggregations'
import * as Common_Analysis from './_common.analysis'
import * as Common_QueryDsl from './_common.query_dsl'
import * as Core_Explain from './_core.explain'

export interface AggregationBreakdown {
  build_aggregation: number;
  build_aggregation_count: number;
  build_leaf_collector: number;
  build_leaf_collector_count: number;
  collect: number;
  collect_count: number;
  initialize: number;
  initialize_count: number;
  post_collection?: number;
  post_collection_count?: number;
  reduce: number;
  reduce_count: number;
}

export interface AggregationProfile {
  breakdown: AggregationBreakdown;
  children?: AggregationProfile[];
  debug?: AggregationProfileDebug;
  description: string;
  time_in_nanos: Common.DurationValueUnitNanos;
  type: string;
}

export interface AggregationProfileDebug {
  built_buckets?: number;
  chars_fetched?: number;
  collect_analyzed_count?: number;
  collect_analyzed_ns?: number;
  collection_strategy?: string;
  deferred_aggregators?: string[];
  delegate?: string;
  delegate_debug?: AggregationProfileDebug;
  empty_collectors_used?: number;
  extract_count?: number;
  extract_ns?: number;
  filters?: AggregationProfileDelegateDebugFilter[];
  has_filter?: boolean;
  map_reducer?: string;
  numeric_collectors_used?: number;
  ordinals_collectors_overhead_too_high?: number;
  ordinals_collectors_used?: number;
  result_strategy?: string;
  segments_collected?: number;
  segments_counted?: number;
  segments_with_deleted_docs?: number;
  segments_with_doc_count_field?: number;
  segments_with_multi_valued_ords?: number;
  segments_with_single_valued_ords?: number;
  string_hashing_collectors_used?: number;
  surviving_buckets?: number;
  total_buckets?: number;
  values_fetched?: number;
}

export interface AggregationProfileDelegateDebugFilter {
  query?: string;
  results_from_metadata?: number;
  segments_counted_in_constant_time?: number;
  specialized_for?: string;
}

export type BoundaryScanner = 'chars' | 'sentence' | 'word'

export type BuiltinHighlighterType = 'fvh' | 'plain' | 'unified'

export interface Collector {
  children?: Collector[];
  name: string;
  reason: string;
  time_in_nanos: Common.DurationValueUnitNanos;
}

export interface CompletionSuggest extends SuggestBase {
  options: CompletionSuggestOption | CompletionSuggestOption[];
}

export interface CompletionSuggestOption {
  _id?: string;
  _index?: Common.IndexName;
  _routing?: Common.Routing;
  _score?: number;
  _source?: Record<string, any>;
  collate_match?: boolean;
  contexts?: Record<string, Context[]>;
  fields?: Record<string, Record<string, any>>;
  score?: number;
  text: string;
}

export type Context = string | Common.GeoLocation

export interface FetchProfile {
  breakdown: FetchProfileBreakdown;
  children?: FetchProfile[];
  debug?: FetchProfileDebug;
  description: string;
  time_in_nanos: Common.DurationValueUnitNanos;
  type: string;
}

export interface FetchProfileBreakdown {
  load_source?: number;
  load_source_count?: number;
  load_stored_fields?: number;
  load_stored_fields_count?: number;
  next_reader?: number;
  next_reader_count?: number;
  process?: number;
  process_count?: number;
}

export interface FetchProfileDebug {
  fast_path?: number;
  stored_fields?: string[];
}

export interface FieldCollapse {
  field: Common.Field;
  inner_hits?: InnerHits | InnerHits[];
  max_concurrent_group_searches?: number;
}

export interface Highlight extends HighlightBase {
  encoder?: HighlighterEncoder;
  fields: Record<string, HighlightField>;
}

export interface HighlightBase {
  boundary_chars?: string;
  boundary_max_scan?: number;
  boundary_scanner?: BoundaryScanner;
  boundary_scanner_locale?: string;
  force_source?: boolean;
  fragment_size?: number;
  fragmenter?: HighlighterFragmenter;
  highlight_filter?: boolean;
  highlight_query?: Common_QueryDsl.QueryContainer;
  max_analyzed_offset?: number;
  max_fragment_length?: number;
  no_match_size?: number;
  number_of_fragments?: number;
  options?: Record<string, Record<string, any>>;
  order?: HighlighterOrder;
  phrase_limit?: number;
  post_tags?: string[];
  pre_tags?: string[];
  require_field_match?: boolean;
  tags_schema?: HighlighterTagsSchema;
  type?: HighlighterType;
}

export type HighlighterEncoder = 'default' | 'html'

export type HighlighterFragmenter = 'simple' | 'span'

export type HighlighterOrder = 'score'

export type HighlighterTagsSchema = 'styled'

export type HighlighterType = BuiltinHighlighterType | string

export interface HighlightField extends HighlightBase {
  analyzer?: Common_Analysis.Analyzer;
  fragment_offset?: number;
  matched_fields?: Common.Fields;
}

export interface Hit {
  _explanation?: Core_Explain.Explanation;
  _id: Common.Id;
  _ignored?: string[];
  _index: Common.IndexName;
  _nested?: NestedIdentity;
  _node?: string;
  _primary_term?: number;
  _routing?: string;
  _score?: undefined | number | string;
  _seq_no?: Common.SequenceNumber;
  _shard?: string;
  _source?: Record<string, any>;
  _type?: Common.Type;
  _version?: Common.VersionNumber;
  fields?: Record<string, Record<string, any>>;
  highlight?: Record<string, string[]>;
  ignored_field_values?: Record<string, string[]>;
  inner_hits?: Record<string, InnerHitsResult>;
  matched_queries?: string[];
  sort?: Common.SortResults;
}

export interface HitsMetadata {
  hits: Hit[];
  max_score?: undefined | number | string;
  total?: TotalHits | number;
}

export interface InnerHits {
  _source?: SourceConfig;
  collapse?: FieldCollapse;
  docvalue_fields?: Common_QueryDsl.FieldAndFormat[];
  explain?: boolean;
  fields?: Common.Fields;
  from?: number;
  highlight?: Highlight;
  ignore_unmapped?: boolean;
  name?: Common.Name;
  script_fields?: Record<string, Common.ScriptField>;
  seq_no_primary_term?: boolean;
  size?: number;
  sort?: Common.Sort;
  stored_field?: Common.Fields;
  track_scores?: boolean;
  version?: boolean;
}

export interface InnerHitsResult {
  hits: HitsMetadata;
}

export interface NestedIdentity {
  _nested?: NestedIdentity;
  field: Common.Field;
  offset: number;
}

export interface PhraseSuggest extends SuggestBase {
  options: PhraseSuggestOption | PhraseSuggestOption[];
}

export interface PhraseSuggestOption {
  collate_match?: boolean;
  highlighted?: string;
  score: number;
  text: string;
}

export interface PointInTimeReference {
  id: Common.Id;
  keep_alive?: Common.Duration;
}

export interface Profile {
  shards: ShardProfile[];
}

export interface QueryBreakdown {
  advance: number;
  advance_count: number;
  build_scorer: number;
  build_scorer_count: number;
  compute_max_score: number;
  compute_max_score_count: number;
  create_weight: number;
  create_weight_count: number;
  match: number;
  match_count: number;
  next_doc: number;
  next_doc_count: number;
  score: number;
  score_count: number;
  set_min_competitive_score: number;
  set_min_competitive_score_count: number;
  shallow_advance: number;
  shallow_advance_count: number;
}

export interface QueryProfile {
  breakdown: QueryBreakdown;
  children?: QueryProfile[];
  description: string;
  time_in_nanos: Common.DurationValueUnitNanos;
  type: string;
}

export interface Rescore {
  query: RescoreQuery;
  window_size?: number;
}

export interface RescoreQuery {
  query_weight?: number;
  rescore_query: Common_QueryDsl.QueryContainer;
  rescore_query_weight?: number;
  score_mode?: ScoreMode;
}

export interface ResponseBody {
  _clusters?: Common.ClusterStatistics;
  _scroll_id?: Common.ScrollId;
  _shards: Common.ShardStatistics;
  aggregations?: Record<string, Common_Aggregations.Aggregate>;
  fields?: Record<string, Record<string, any>>;
  hits: HitsMetadata;
  max_score?: number;
  num_reduce_phases?: number;
  phase_took?: Common.PhaseTook;
  pit_id?: Common.Id;
  profile?: Profile;
  suggest?: Record<string, Suggest[]>;
  terminated_early?: boolean;
  timed_out: boolean;
  took: number;
}

export type ScoreMode = 'avg' | 'max' | 'min' | 'multiply' | 'total'

export interface SearchProfile {
  collector: Collector[];
  query: QueryProfile[];
  rewrite_time: number;
}

export interface ShardProfile {
  aggregations: AggregationProfile[];
  fetch?: FetchProfile;
  id: string;
  searches: SearchProfile[];
}

export type SourceConfig = boolean | Common.Field[] | SourceFilter

export type SourceConfigParam = boolean | Common.Fields

export interface SourceFilter {
  excludes?: Common.Fields;
  includes?: Common.Fields;
}

export type Suggest = CompletionSuggest | PhraseSuggest | TermSuggest

export interface SuggestBase {
  length: number;
  offset: number;
  text: string;
}

export interface Suggester {
  text?: string;
}

export interface TermSuggest extends SuggestBase {
  options: TermSuggestOption | TermSuggestOption[];
}

export interface TermSuggestOption {
  collate_match?: boolean;
  freq: number;
  highlighted?: string;
  score: number;
  text: string;
}

export interface TotalHits {
  relation: TotalHitsRelation;
  value: number;
}

export type TotalHitsRelation = 'eq' | 'gte'

export type TrackHits = boolean | number


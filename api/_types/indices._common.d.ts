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
import * as Common_Analysis from './_common.analysis'
import * as Common_Mapping from './_common.mapping'
import * as Common_QueryDsl from './_common.query_dsl'

export interface Alias {
  filter?: Common_QueryDsl.QueryContainer;
  index_routing?: Common.Routing;
  is_hidden?: boolean;
  is_write_index?: boolean;
  routing?: Common.Routing;
  search_routing?: Common.Routing;
}

export interface AliasDefinition {
  filter?: Common_QueryDsl.QueryContainer;
  index_routing?: string;
  is_hidden?: boolean;
  is_write_index?: boolean;
  routing?: string;
  search_routing?: string;
}

export interface DataStream {
  _meta?: Common.Metadata;
  allow_custom_routing?: boolean;
  generation: number;
  hidden?: boolean;
  ilm_policy?: Common.Name;
  indices: DataStreamIndex[];
  name: Common.DataStreamName;
  next_generation_managed_by?: ManagedBy;
  prefer_ilm?: boolean;
  replicated?: boolean;
  status: Common.HealthStatusCapitalized;
  system?: boolean;
  template: Common.Name;
  timestamp_field: DataStreamTimestampField;
}

export interface DataStreamIndex {
  ilm_policy?: Common.Name;
  index_name: Common.IndexName;
  index_uuid: Common.Uuid;
  managed_by?: ManagedBy;
  prefer_ilm?: boolean;
}

export interface DataStreamTimestampField {
  name: Common.Field;
}

export interface FielddataFrequencyFilter {
  max: number;
  min: number;
  min_segment_size: number;
}

export type IndexCheckOnStartup = 'checksum' | 'false' | 'true'

export interface IndexErrorCause {
  index?: Common.IndexName;
  index_uuid?: Common.Uuid;
  reason?: string;
  'resource.id'?: Common.IndexName;
  'resource.type'?: Common.ResourceType;
  root_cause?: IndexErrorCause[];
  type: string;
  [key: string]: any | Record<string, any>;
}

export interface IndexingPressure {
  memory: IndexingPressureMemory;
}

export interface IndexingPressureMemory {
  limit?: string | number;
}

export interface IndexingSlowlog {
  level?: string;
  reformat?: boolean;
  source?: number;
  threshold?: IndexingSlowlogThresholds;
}

export interface IndexingSlowlogThresholds {
  index?: SlowlogThresholdLevels;
}

export interface IndexRouting {
  allocation?: IndexRoutingAllocation;
  rebalance?: IndexRoutingRebalance;
}

export interface IndexRoutingAllocation {
  disk?: IndexRoutingAllocationDisk;
  enable?: IndexRoutingAllocationOptions;
  include?: IndexRoutingAllocationInclude;
  initial_recovery?: IndexRoutingAllocationInitialRecovery;
}

export interface IndexRoutingAllocationDisk {
  threshold_enabled?: Common.Stringifiedboolean;
}

export interface IndexRoutingAllocationInclude {
  _id?: Common.Id;
  _tier_preference?: string;
}

export interface IndexRoutingAllocationInitialRecovery {
  _id?: Common.Id;
}

export type IndexRoutingAllocationOptions = 'all' | 'new_primaries' | 'none' | 'primaries'

export interface IndexRoutingRebalance {
  enable: IndexRoutingRebalanceOptions;
}

export type IndexRoutingRebalanceOptions = 'all' | 'none' | 'primaries' | 'replicas'

export interface IndexSegmentSort {
  field?: Common.Fields;
  missing?: SegmentSortMissing | SegmentSortMissing[];
  mode?: SegmentSortMode | SegmentSortMode[];
  order?: SegmentSortOrder | SegmentSortOrder[];
}

export interface IndexSettingBlocks {
  metadata?: Common.Stringifiedboolean;
  read?: Common.Stringifiedboolean;
  read_only?: Common.Stringifiedboolean;
  read_only_allow_delete?: Common.Stringifiedboolean;
  write?: Common.Stringifiedboolean;
}

export interface IndexSettings {
  analysis?: IndexSettingsAnalysis;
  analyze?: IndexSettingsAnalyze;
  'analyze.max_token_count'?: Common.Stringifiedinteger;
  auto_expand_replicas?: string;
  blocks?: IndexSettingBlocks;
  'blocks.metadata'?: Common.Stringifiedboolean;
  'blocks.read'?: Common.Stringifiedboolean;
  'blocks.read_only'?: Common.Stringifiedboolean;
  'blocks.read_only_allow_delete'?: Common.Stringifiedboolean;
  'blocks.write'?: Common.Stringifiedboolean;
  check_on_startup?: IndexCheckOnStartup;
  codec?: string;
  creation_date?: Common.StringifiedEpochTimeUnitMillis;
  creation_date_string?: Common.DateTime;
  default_pipeline?: Common.PipelineName;
  final_pipeline?: Common.PipelineName;
  format?: string | number;
  gc_deletes?: Common.Duration;
  hidden?: Common.Stringifiedboolean;
  highlight?: IndexSettingsHighlight;
  'highlight.max_analyzed_offset'?: number;
  index?: IndexSettings;
  indexing?: IndexSettingsIndexing;
  indexing_pressure?: IndexingPressure;
  knn?: boolean;
  'knn.algo_param.ef_search'?: number;
  lifecycle?: IndexSettingsLifecycle;
  'lifecycle.name'?: Common.Name;
  load_fixed_bitset_filters_eagerly?: boolean;
  mapping?: IndexSettingsMapping;
  max_docvalue_fields_search?: number;
  max_inner_result_window?: number;
  max_ngram_diff?: number;
  max_refresh_listeners?: number;
  max_regex_length?: number;
  max_rescore_window?: number;
  max_result_window?: number;
  max_script_fields?: number;
  max_shingle_diff?: number;
  max_slices_per_scroll?: number;
  max_terms_count?: number;
  merge?: IndexSettingsMerge;
  'merge.scheduler.max_thread_count'?: Common.Stringifiedinteger;
  mode?: string;
  number_of_replicas?: number | string;
  number_of_routing_shards?: number;
  number_of_shards?: number | string;
  priority?: number | string;
  provided_name?: Common.Name;
  queries?: IndexSettingsQueries;
  query_string?: IndexSettingsQueryString;
  'query_string.lenient'?: Common.Stringifiedboolean;
  refresh_interval?: Common.Duration;
  routing?: IndexRouting;
  routing_partition_size?: Common.Stringifiedinteger;
  routing_path?: string | string[];
  search?: IndexSettingsSearch;
  'search.idle.after'?: Common.Duration;
  settings?: IndexSettings;
  similarity?: IndexSettingsSimilarity;
  soft_deletes?: SoftDeletes;
  'soft_deletes.retention_lease.period'?: Common.Duration;
  sort?: IndexSegmentSort;
  store?: IndexSettingsStore;
  time_series?: IndexSettingsTimeSeries;
  top_metrics_max_size?: number;
  translog?: Translog;
  'translog.durability'?: TranslogDurability;
  'translog.flush_threshold_size'?: Common.HumanReadableByteCount;
  uuid?: Common.Uuid;
  verified_before_close?: Common.Stringifiedboolean;
  version?: IndexVersioning;
  [key: string]: any | Record<string, any>;
}

export interface IndexSettingsAnalysis {
  analyzer?: Record<string, Common_Analysis.Analyzer>;
  char_filter?: Record<string, Common_Analysis.CharFilter>;
  filter?: Record<string, Common_Analysis.TokenFilter>;
  normalizer?: Record<string, Common_Analysis.Normalizer>;
  tokenizer?: Record<string, Common_Analysis.Tokenizer>;
}

export interface IndexSettingsAnalyze {
  max_token_count?: Common.Stringifiedinteger;
}

export interface IndexSettingsHighlight {
  max_analyzed_offset?: number;
}

export interface IndexSettingsIndexing {
  slowlog?: IndexingSlowlog;
}

export interface IndexSettingsLifecycle {
  indexing_complete?: Common.Stringifiedboolean;
  name: Common.Name;
  origination_date?: Common.StringifiedEpochTimeUnitMillis;
  parse_origination_date?: boolean;
  rollover_alias?: string;
  step?: IndexSettingsLifecycleStep;
}

export interface IndexSettingsLifecycleStep {
  wait_time_threshold?: Common.Duration;
}

export interface IndexSettingsMapping {
  coerce?: boolean;
  depth?: IndexSettingsMappingLimitDepth;
  dimension_fields?: IndexSettingsMappingLimitDimensionFields;
  field_name_length?: IndexSettingsMappingLimitFieldNameLength;
  ignore_malformed?: boolean;
  nested_fields?: IndexSettingsMappingLimitNestedFields;
  nested_objects?: IndexSettingsMappingLimitNestedObjects;
  total_fields?: IndexSettingsMappingLimitTotalFields;
}

export interface IndexSettingsMappingLimitDepth {
  limit?: number;
}

export interface IndexSettingsMappingLimitDimensionFields {
  limit?: number;
}

export interface IndexSettingsMappingLimitFieldNameLength {
  limit?: number;
}

export interface IndexSettingsMappingLimitNestedFields {
  limit?: number;
}

export interface IndexSettingsMappingLimitNestedObjects {
  limit?: number;
}

export interface IndexSettingsMappingLimitTotalFields {
  limit?: number;
}

export interface IndexSettingsMerge {
  scheduler?: IndexSettingsMergeScheduler;
}

export interface IndexSettingsMergeScheduler {
  max_merge_count?: Common.Stringifiedinteger;
  max_thread_count?: Common.Stringifiedinteger;
}

export interface IndexSettingsQueries {
  cache?: IndexSettingsQueriesCache;
}

export interface IndexSettingsQueriesCache {
  enabled: boolean;
}

export interface IndexSettingsQueryString {
  lenient?: Common.Stringifiedboolean;
}

export interface IndexSettingsSearch {
  idle?: SearchIdle;
  slowlog?: SearchSlowlog;
}

export interface IndexSettingsSimilarity {
  bm25?: IndexSettingsSimilarityBm25;
  dfi?: IndexSettingsSimilarityDfi;
  dfr?: IndexSettingsSimilarityDfr;
  ib?: IndexSettingsSimilarityIb;
  lmd?: IndexSettingsSimilarityLmd;
  lmj?: IndexSettingsSimilarityLmj;
  scripted_tfidf?: IndexSettingsSimilarityScriptedTfidf;
}

export interface IndexSettingsSimilarityBm25 {
  b: number;
  discount_overlaps: boolean;
  k1: number;
  type: 'BM25';
}

export interface IndexSettingsSimilarityDfi {
  independence_measure: Common.DFIIndependenceMeasure;
  type: 'DFI';
}

export interface IndexSettingsSimilarityDfr {
  after_effect: Common.DFRAfterEffect;
  basic_model: Common.DFRBasicModel;
  normalization: Common.TermFrequencyNormalization;
  type: 'DFR';
}

export interface IndexSettingsSimilarityIb {
  distribution: Common.IBDistribution;
  lambda: Common.IBLambda;
  normalization: Common.TermFrequencyNormalization;
  type: 'IB';
}

export interface IndexSettingsSimilarityLmd {
  mu: number;
  type: 'LMDirichlet';
}

export interface IndexSettingsSimilarityLmj {
  lambda: number;
  type: 'LMJelinekMercer';
}

export interface IndexSettingsSimilarityScriptedTfidf {
  script: Common.Script;
  type: 'scripted';
}

export interface IndexSettingsStore {
  allow_mmap?: boolean;
  type: StorageType;
}

export interface IndexSettingsTimeSeries {
  end_time?: Common.DateTime;
  start_time?: Common.DateTime;
}

export interface IndexState {
  aliases?: Record<string, Alias>;
  data_stream?: Common.DataStreamName;
  defaults?: IndexSettings;
  mappings?: Common_Mapping.TypeMapping;
  settings?: IndexSettings;
}

export interface IndexTemplate {
  _meta?: Common.Metadata;
  allow_auto_create?: boolean;
  composed_of?: Common.Name[];
  data_stream?: IndexTemplateDataStreamConfiguration;
  index_patterns: Common.Names;
  priority?: number;
  template?: IndexTemplateSummary;
  version?: Common.VersionNumber;
}

export interface IndexTemplateDataStreamConfiguration {
  allow_custom_routing?: boolean;
  hidden?: boolean;
  timestamp_field?: DataStreamTimestampField;
}

export interface IndexTemplateSummary {
  aliases?: Record<string, Alias>;
  mappings?: Common_Mapping.TypeMapping;
  settings?: IndexSettings;
}

export interface IndexVersioning {
  created?: Common.VersionString;
  created_string?: string;
}

export type ManagedBy = 'Data stream lifecycle' | 'Index Lifecycle Management' | 'Unmanaged'

export interface NumericFielddata {
  format: NumericFielddataFormat;
}

export type NumericFielddataFormat = 'array' | 'disabled'

export interface RetentionLease {
  period: Common.Duration;
}

export interface SearchIdle {
  after?: Common.Duration;
}

export interface SearchSlowlog {
  level?: string;
  reformat?: boolean;
  threshold?: SearchSlowlogThresholds;
}

export interface SearchSlowlogThresholds {
  fetch?: SlowlogThresholdLevels;
  query?: SlowlogThresholdLevels;
}

export type SegmentSortMissing = '_first' | '_last'

export type SegmentSortMode = 'max' | 'min'

export type SegmentSortOrder = 'asc' | 'desc'

export interface SlowlogThresholdLevels {
  debug?: Common.Duration;
  info?: Common.Duration;
  trace?: Common.Duration;
  warn?: Common.Duration;
}

export interface SoftDeletes {
  enabled?: boolean;
  retention_lease?: RetentionLease;
}

export type StorageType = 'fs' | 'hybridfs' | 'mmapfs' | 'niofs'

export interface TemplateMapping {
  aliases: Record<string, Alias>;
  index_patterns: Common.Name[];
  mappings: Common_Mapping.TypeMapping;
  order: number;
  settings: Record<string, Record<string, any>>;
  version?: Common.VersionNumber;
}

export interface Translog {
  durability?: TranslogDurability;
  flush_threshold_size?: Common.HumanReadableByteCount;
  retention?: TranslogRetention;
  sync_interval?: Common.Duration;
}

export type TranslogDurability = 'ASYNC' | 'REQUEST' | 'async' | 'request'

export interface TranslogRetention {
  age?: Common.Duration;
  size?: Common.HumanReadableByteCount;
}


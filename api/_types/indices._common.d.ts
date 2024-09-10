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

import * as Common_QueryDsl from './_common.query_dsl'
import * as Common from './_common'
import * as Common_Analysis from './_common.analysis'
import * as Common_Mapping from './_common.mapping'

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

export interface CacheQueries {
  enabled: boolean;
}

export interface DataStream {
  _meta?: Common.Metadata;
  allow_custom_routing?: boolean;
  generation: number;
  hidden?: boolean;
  ilm_policy?: Common.Name;
  indices: DataStreamIndex[];
  lifecycle?: DataStreamLifecycleWithRollover;
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

export interface DataStreamLifecycle {
  data_retention?: Common.Duration;
  downsampling?: DataStreamLifecycleDownsampling;
}

export interface DataStreamLifecycleDownsampling {
  rounds: DownsamplingRound[];
}

export interface DataStreamLifecycleRolloverConditions {
  max_age?: string;
  max_docs?: number;
  max_primary_shard_docs?: number;
  max_primary_shard_size?: Common.StorageSize;
  max_size?: Common.StorageSize;
  min_age?: Common.Duration;
  min_docs?: number;
  min_primary_shard_docs?: number;
  min_primary_shard_size?: Common.StorageSize;
  min_size?: Common.StorageSize;
}

export interface DataStreamLifecycleWithRollover {
  data_retention?: Common.Duration;
  downsampling?: DataStreamLifecycleDownsampling;
  rollover?: DataStreamLifecycleRolloverConditions;
}

export interface DataStreamTimestampField {
  name: Common.Field;
}

export interface DownsampleConfig {
  fixed_interval: Common.DurationLarge;
}

export interface DownsamplingRound {
  after: Common.Duration;
  config: DownsampleConfig;
}

export interface FielddataFrequencyFilter {
  max: number;
  min: number;
  min_segment_size: number;
}

export type IndexCheckOnStartup = 'checksum' | 'false' | 'true'

export interface IndexingPressure {
  memory: IndexingPressureMemory;
}

export interface IndexingPressureMemory {
  limit?: number;
}

export interface IndexingSlowlogSettings {
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
  threshold_enabled?: boolean | string;
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
  analyze?: SettingsAnalyze;
  auto_expand_replicas?: string;
  blocks?: IndexSettingBlocks;
  check_on_startup?: IndexCheckOnStartup;
  codec?: string;
  creation_date?: Common.StringifiedEpochTimeUnitMillis;
  creation_date_string?: Common.DateTime;
  default_pipeline?: Common.PipelineName;
  final_pipeline?: Common.PipelineName;
  format?: string | number;
  gc_deletes?: Common.Duration;
  hidden?: boolean | string;
  highlight?: SettingsHighlight;
  index?: IndexSettings;
  indexing_pressure?: IndexingPressure;
  'indexing.slowlog'?: IndexingSlowlogSettings;
  lifecycle?: IndexSettingsLifecycle;
  load_fixed_bitset_filters_eagerly?: boolean;
  mapping?: MappingLimitSettings;
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
  merge?: Merge;
  mode?: string;
  number_of_replicas?: number | string;
  number_of_routing_shards?: number;
  number_of_shards?: number | string;
  priority?: number | string;
  provided_name?: Common.Name;
  queries?: Queries;
  query_string?: SettingsQueryString;
  refresh_interval?: Common.Duration;
  routing?: IndexRouting;
  routing_partition_size?: Common.Stringifiedinteger;
  routing_path?: string | string[];
  search?: SettingsSearch;
  settings?: IndexSettings;
  similarity?: SettingsSimilarity;
  soft_deletes?: SoftDeletes;
  sort?: IndexSegmentSort;
  store?: Storage;
  time_series?: IndexSettingsTimeSeries;
  top_metrics_max_size?: number;
  translog?: Translog;
  uuid?: Common.Uuid;
  verified_before_close?: boolean | string;
  version?: IndexVersioning;
}

export interface IndexSettingsAnalysis {
  analyzer?: Record<string, Common_Analysis.Analyzer>;
  char_filter?: Record<string, Common_Analysis.CharFilter>;
  filter?: Record<string, Common_Analysis.TokenFilter>;
  normalizer?: Record<string, Common_Analysis.Normalizer>;
  tokenizer?: Record<string, Common_Analysis.Tokenizer>;
}

export interface IndexSettingsLifecycle {
  indexing_complete?: Common.Stringifiedboolean;
  name: Common.Name;
  origination_date?: number;
  parse_origination_date?: boolean;
  rollover_alias?: string;
  step?: IndexSettingsLifecycleStep;
}

export interface IndexSettingsLifecycleStep {
  wait_time_threshold?: Common.Duration;
}

export interface IndexSettingsTimeSeries {
  end_time?: Common.DateTime;
  start_time?: Common.DateTime;
}

export interface IndexState {
  aliases?: Record<string, Alias>;
  data_stream?: Common.DataStreamName;
  defaults?: IndexSettings;
  lifecycle?: DataStreamLifecycle;
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
  lifecycle?: DataStreamLifecycleWithRollover;
  mappings?: Common_Mapping.TypeMapping;
  settings?: IndexSettings;
}

export interface IndexVersioning {
  created?: Common.VersionString;
  created_string?: string;
}

export type ManagedBy = 'Data stream lifecycle' | 'Index Lifecycle Management' | 'Unmanaged'

export interface MappingLimitSettings {
  coerce?: boolean;
  depth?: MappingLimitSettingsDepth;
  dimension_fields?: MappingLimitSettingsDimensionFields;
  field_name_length?: MappingLimitSettingsFieldNameLength;
  ignore_malformed?: boolean;
  nested_fields?: MappingLimitSettingsNestedFields;
  nested_objects?: MappingLimitSettingsNestedObjects;
  total_fields?: MappingLimitSettingsTotalFields;
}

export interface MappingLimitSettingsDepth {
  limit?: number;
}

export interface MappingLimitSettingsDimensionFields {
  limit?: number;
}

export interface MappingLimitSettingsFieldNameLength {
  limit?: number;
}

export interface MappingLimitSettingsNestedFields {
  limit?: number;
}

export interface MappingLimitSettingsNestedObjects {
  limit?: number;
}

export interface MappingLimitSettingsTotalFields {
  limit?: number;
}

export interface Merge {
  scheduler?: MergeScheduler;
}

export interface MergeScheduler {
  max_merge_count?: Common.Stringifiedinteger;
  max_thread_count?: Common.Stringifiedinteger;
}

export interface NumericFielddata {
  format: NumericFielddataFormat;
}

export type NumericFielddataFormat = 'array' | 'disabled'

export interface Queries {
  cache?: CacheQueries;
}

export interface RetentionLease {
  period: Common.Duration;
}

export interface SearchIdle {
  after?: Common.Duration;
}

export type SegmentSortMissing = '_first' | '_last'

export type SegmentSortMode = 'max' | 'min'

export type SegmentSortOrder = 'asc' | 'desc'

export interface SettingsAnalyze {
  max_token_count?: Common.Stringifiedinteger;
}

export interface SettingsHighlight {
  max_analyzed_offset?: number;
}

export interface SettingsQueryString {
  lenient: Common.Stringifiedboolean;
}

export interface SettingsSearch {
  idle?: SearchIdle;
  slowlog?: SlowlogSettings;
}

export interface SettingsSimilarity {
  bm25?: SettingsSimilarityBm25;
  dfi?: SettingsSimilarityDfi;
  dfr?: SettingsSimilarityDfr;
  ib?: SettingsSimilarityIb;
  lmd?: SettingsSimilarityLmd;
  lmj?: SettingsSimilarityLmj;
  scripted_tfidf?: SettingsSimilarityScriptedTfidf;
}

export interface SettingsSimilarityBm25 {
  b: number;
  discount_overlaps: boolean;
  k1: number;
  type: 'BM25';
}

export interface SettingsSimilarityDfi {
  independence_measure: Common.DFIIndependenceMeasure;
  type: 'DFI';
}

export interface SettingsSimilarityDfr {
  after_effect: Common.DFRAfterEffect;
  basic_model: Common.DFRBasicModel;
  normalization: Common.Normalization;
  type: 'DFR';
}

export interface SettingsSimilarityIb {
  distribution: Common.IBDistribution;
  lambda: Common.IBLambda;
  normalization: Common.Normalization;
  type: 'IB';
}

export interface SettingsSimilarityLmd {
  mu: number;
  type: 'LMDirichlet';
}

export interface SettingsSimilarityLmj {
  lambda: number;
  type: 'LMJelinekMercer';
}

export interface SettingsSimilarityScriptedTfidf {
  script: Common.Script;
  type: 'scripted';
}

export interface SlowlogSettings {
  level?: string;
  reformat?: boolean;
  source?: number;
  threshold?: SlowlogThresholds;
}

export interface SlowlogThresholdLevels {
  debug?: Common.Duration;
  info?: Common.Duration;
  trace?: Common.Duration;
  warn?: Common.Duration;
}

export interface SlowlogThresholds {
  fetch?: SlowlogThresholdLevels;
  query?: SlowlogThresholdLevels;
}

export interface SoftDeletes {
  enabled?: boolean;
  retention_lease?: RetentionLease;
}

export interface Storage {
  allow_mmap?: boolean;
  type: StorageType;
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
  flush_threshold_size?: Common.StorageSize;
  retention?: TranslogRetention;
  sync_interval?: Common.Duration;
}

export type TranslogDurability = 'async' | 'request'

export interface TranslogRetention {
  age?: Common.Duration;
  size?: Common.StorageSize;
}


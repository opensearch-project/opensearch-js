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

import * as Indices_Common from './indices._common'
import * as Common from './_common'

export interface AggregateMetricDoubleProperty extends PropertyBase {
  default_metric: string;
  metrics: string[];
  time_series_metric?: TimeSeriesMetricType;
  type: 'aggregate_metric_double';
}

export interface AllField {
  analyzer: string;
  enabled: boolean;
  omit_norms: boolean;
  search_analyzer: string;
  similarity: string;
  store: boolean;
  store_term_vector_offsets: boolean;
  store_term_vector_payloads: boolean;
  store_term_vector_positions: boolean;
  store_term_vectors: boolean;
}

export interface BinaryProperty extends DocValuesPropertyBase {
  type: 'binary';
}

export interface BooleanProperty extends DocValuesPropertyBase {
  boost?: number;
  fielddata?: Indices_Common.NumericFielddata;
  index?: boolean;
  null_value?: boolean;
  type: 'boolean';
}

export interface ByteNumberProperty extends NumberPropertyBase {
  null_value?: Common.byte;
  type: 'byte';
}

export interface CompletionProperty extends DocValuesPropertyBase {
  analyzer?: string;
  contexts?: SuggestContext[];
  max_input_length?: number;
  preserve_position_increments?: boolean;
  preserve_separators?: boolean;
  search_analyzer?: string;
  type: 'completion';
}

export interface ConstantKeywordProperty extends PropertyBase {
  type: 'constant_keyword';
  value?: Record<string, any>;
}

export interface CorePropertyBase extends PropertyBase {
  copy_to?: Common.Fields;
  similarity?: string;
  store?: boolean;
}

export interface DataStreamTimestamp {
  enabled: boolean;
}

export interface DateNanosProperty extends DocValuesPropertyBase {
  boost?: number;
  format?: string;
  ignore_malformed?: boolean;
  index?: boolean;
  null_value?: Common.DateTime;
  precision_step?: number;
  type: 'date_nanos';
}

export interface DateProperty extends DocValuesPropertyBase {
  boost?: number;
  fielddata?: Indices_Common.NumericFielddata;
  format?: string;
  ignore_malformed?: boolean;
  index?: boolean;
  locale?: string;
  null_value?: Common.DateTime;
  precision_step?: number;
  type: 'date';
}

export interface DateRangeProperty extends RangePropertyBase {
  format?: string;
  type: 'date_range';
}

export interface DenseVectorIndexOptions {
  ef_construction: number;
  m: number;
  type: string;
}

export interface DenseVectorProperty extends PropertyBase {
  dims: number;
  index?: boolean;
  index_options?: DenseVectorIndexOptions;
  similarity?: string;
  type: 'dense_vector';
}

export interface DocValuesPropertyBase extends CorePropertyBase {
  doc_values?: boolean;
}

export interface DoubleNumberProperty extends NumberPropertyBase {
  null_value?: number;
  type: 'double';
}

export interface DoubleRangeProperty extends RangePropertyBase {
  type: 'double_range';
}

export type DynamicMapping = 'false' | 'strict' | 'strict_allow_templates' | 'true'

export interface DynamicProperty extends DocValuesPropertyBase {
  analyzer?: string;
  boost?: number;
  coerce?: boolean;
  eager_global_ordinals?: boolean;
  enabled?: boolean;
  format?: string;
  ignore_malformed?: boolean;
  index?: boolean;
  index_options?: IndexOptions;
  index_phrases?: boolean;
  index_prefixes?: TextIndexPrefixes;
  locale?: string;
  norms?: boolean;
  null_value?: Common.FieldValue;
  on_script_error?: OnScriptError;
  position_increment_gap?: number;
  precision_step?: number;
  script?: Common.Script;
  search_analyzer?: string;
  search_quote_analyzer?: string;
  term_vector?: TermVectorOption;
  time_series_metric?: TimeSeriesMetricType;
  type: '{dynamic_property}';
}

export interface DynamicTemplate {
  mapping?: Property;
  match?: string;
  match_mapping_type?: string;
  match_pattern?: MatchType;
  path_match?: string;
  path_unmatch?: string;
  unmatch?: string;
}

export interface FieldAliasProperty extends PropertyBase {
  path?: Common.Field;
  type: 'alias';
}

export interface FieldMapping {
  full_name: string;
  mapping: Record<string, Property>;
}

export interface FieldNamesField {
  enabled: boolean;
}

export interface FlattenedProperty extends PropertyBase {
  boost?: number;
  depth_limit?: number;
  doc_values?: boolean;
  eager_global_ordinals?: boolean;
  index?: boolean;
  index_options?: IndexOptions;
  null_value?: string;
  similarity?: string;
  split_queries_on_whitespace?: boolean;
  type: 'flattened';
}

export interface FloatNumberProperty extends NumberPropertyBase {
  null_value?: number;
  type: 'float';
}

export interface FloatRangeProperty extends RangePropertyBase {
  type: 'float_range';
}

export type GeoOrientation = 'left' | 'right'

export interface GeoPointProperty extends DocValuesPropertyBase {
  ignore_malformed?: boolean;
  ignore_z_value?: boolean;
  null_value?: Common.GeoLocation;
  type: 'geo_point';
}

export interface GeoShapeProperty extends DocValuesPropertyBase {
  coerce?: boolean;
  ignore_malformed?: boolean;
  ignore_z_value?: boolean;
  orientation?: GeoOrientation;
  strategy?: GeoStrategy;
  type: 'geo_shape';
}

export type GeoStrategy = 'recursive' | 'term'

export interface HalfFloatNumberProperty extends NumberPropertyBase {
  null_value?: number;
  type: 'half_float';
}

export interface HistogramProperty extends PropertyBase {
  ignore_malformed?: boolean;
  type: 'histogram';
}

export interface IndexField {
  enabled: boolean;
}

export type IndexOptions = 'docs' | 'freqs' | 'offsets' | 'positions'

export interface IntegerNumberProperty extends NumberPropertyBase {
  null_value?: number;
  type: 'integer';
}

export interface IntegerRangeProperty extends RangePropertyBase {
  type: 'integer_range';
}

export interface IpProperty extends DocValuesPropertyBase {
  boost?: number;
  ignore_malformed?: boolean;
  index?: boolean;
  null_value?: string;
  on_script_error?: OnScriptError;
  script?: Common.Script;
  time_series_dimension?: boolean;
  type: 'ip';
}

export interface IpRangeProperty extends RangePropertyBase {
  type: 'ip_range';
}

export interface JoinProperty extends PropertyBase {
  eager_global_ordinals?: boolean;
  relations?: Record<string, Common.RelationName | Common.RelationName[]>;
  type: 'join';
}

export interface KeywordProperty extends DocValuesPropertyBase {
  boost?: number;
  eager_global_ordinals?: boolean;
  index?: boolean;
  index_options?: IndexOptions;
  normalizer?: string;
  norms?: boolean;
  null_value?: string;
  split_queries_on_whitespace?: boolean;
  time_series_dimension?: boolean;
  type: 'keyword';
}

export interface LongNumberProperty extends NumberPropertyBase {
  null_value?: number;
  type: 'long';
}

export interface LongRangeProperty extends RangePropertyBase {
  type: 'long_range';
}

export interface MatchOnlyTextProperty {
  copy_to?: Common.Fields;
  fields?: Record<string, Property>;
  meta?: Record<string, string>;
  type: 'match_only_text';
}

export type MatchType = 'regex' | 'simple'

export interface Murmur3HashProperty extends DocValuesPropertyBase {
  type: 'murmur3';
}

export interface NestedProperty extends CorePropertyBase {
  enabled?: boolean;
  include_in_parent?: boolean;
  include_in_root?: boolean;
  type: 'nested';
}

export interface NumberPropertyBase extends DocValuesPropertyBase {
  boost?: number;
  coerce?: boolean;
  ignore_malformed?: boolean;
  index?: boolean;
  on_script_error?: OnScriptError;
  script?: Common.Script;
  time_series_dimension?: boolean;
  time_series_metric?: TimeSeriesMetricType;
}

export interface ObjectProperty extends CorePropertyBase {
  enabled?: boolean;
  type?: 'object';
}

export type OnScriptError = 'continue' | 'fail'

export interface PercolatorProperty extends PropertyBase {
  type: 'percolator';
}

export interface PointProperty extends DocValuesPropertyBase {
  ignore_malformed?: boolean;
  ignore_z_value?: boolean;
  null_value?: string;
  type: 'point';
}

export type Property = BinaryProperty | BooleanProperty | DynamicProperty | JoinProperty | KeywordProperty | MatchOnlyTextProperty | PercolatorProperty | RankFeatureProperty | RankFeaturesProperty | SearchAsYouTypeProperty | TextProperty | VersionProperty | WildcardProperty | DateNanosProperty | DateProperty | AggregateMetricDoubleProperty | DenseVectorProperty | SparseVectorProperty | FlattenedProperty | NestedProperty | ObjectProperty | CompletionProperty | ConstantKeywordProperty | FieldAliasProperty | HistogramProperty | IpProperty | Murmur3HashProperty | TokenCountProperty | GeoPointProperty | GeoShapeProperty | PointProperty | ShapeProperty | ByteNumberProperty | DoubleNumberProperty | FloatNumberProperty | HalfFloatNumberProperty | IntegerNumberProperty | LongNumberProperty | ScaledFloatNumberProperty | ShortNumberProperty | UnsignedLongNumberProperty | DateRangeProperty | DoubleRangeProperty | FloatRangeProperty | IntegerRangeProperty | IpRangeProperty | LongRangeProperty

export interface PropertyBase {
  dynamic?: DynamicMapping;
  fields?: Record<string, Property>;
  ignore_above?: number;
  meta?: Record<string, string>;
  properties?: Record<string, Property>;
}

export interface RangePropertyBase extends DocValuesPropertyBase {
  boost?: number;
  coerce?: boolean;
  index?: boolean;
}

export interface RankFeatureProperty extends PropertyBase {
  positive_score_impact?: boolean;
  type: 'rank_feature';
}

export interface RankFeaturesProperty extends PropertyBase {
  type: 'rank_features';
}

export interface RoutingField {
  required: boolean;
}

export interface RuntimeField {
  fetch_fields?: RuntimeFieldFetchFields[];
  format?: string;
  input_field?: Common.Field;
  script?: Common.Script;
  target_field?: Common.Field;
  target_index?: Common.IndexName;
  type: RuntimeFieldType;
}

export interface RuntimeFieldFetchFields {
  field: Common.Field;
  format?: string;
}

export type RuntimeFields = Record<string, RuntimeField>

export type RuntimeFieldType = 'boolean' | 'date' | 'double' | 'geo_point' | 'ip' | 'keyword' | 'long' | 'lookup'

export interface ScaledFloatNumberProperty extends NumberPropertyBase {
  null_value?: number;
  scaling_factor?: number;
  type: 'scaled_float';
}

export interface SearchAsYouTypeProperty extends CorePropertyBase {
  analyzer?: string;
  index?: boolean;
  index_options?: IndexOptions;
  max_shingle_size?: number;
  norms?: boolean;
  search_analyzer?: string;
  search_quote_analyzer?: string;
  term_vector?: TermVectorOption;
  type: 'search_as_you_type';
}

export interface ShapeProperty extends DocValuesPropertyBase {
  coerce?: boolean;
  ignore_malformed?: boolean;
  ignore_z_value?: boolean;
  orientation?: GeoOrientation;
  type: 'shape';
}

export interface ShortNumberProperty extends NumberPropertyBase {
  null_value?: Common.short;
  type: 'short';
}

export interface SizeField {
  enabled: boolean;
}

export interface SourceField {
  compress?: boolean;
  compress_threshold?: string;
  enabled?: boolean;
  excludes?: string[];
  includes?: string[];
  mode?: SourceFieldMode;
}

export type SourceFieldMode = 'disabled' | 'stored' | 'synthetic'

export interface SparseVectorProperty extends PropertyBase {
  type: 'sparse_vector';
}

export interface SuggestContext {
  name: Common.Name;
  path?: Common.Field;
  precision?: number | string;
  type: string;
}

export type TermVectorOption = 'no' | 'with_offsets' | 'with_positions' | 'with_positions_offsets' | 'with_positions_offsets_payloads' | 'with_positions_payloads' | 'yes'

export interface TextIndexPrefixes {
  max_chars: number;
  min_chars: number;
}

export interface TextProperty extends CorePropertyBase {
  analyzer?: string;
  boost?: number;
  eager_global_ordinals?: boolean;
  fielddata?: boolean;
  fielddata_frequency_filter?: Indices_Common.FielddataFrequencyFilter;
  index?: boolean;
  index_options?: IndexOptions;
  index_phrases?: boolean;
  index_prefixes?: TextIndexPrefixes;
  norms?: boolean;
  position_increment_gap?: number;
  search_analyzer?: string;
  search_quote_analyzer?: string;
  term_vector?: TermVectorOption;
  type: 'text';
}

export type TimeSeriesMetricType = 'counter' | 'gauge' | 'histogram' | 'position' | 'summary'

export interface TokenCountProperty extends DocValuesPropertyBase {
  analyzer?: string;
  boost?: number;
  enable_position_increments?: boolean;
  index?: boolean;
  null_value?: number;
  type: 'token_count';
}

export interface TypeMapping {
  _data_stream_timestamp?: DataStreamTimestamp;
  _field_names?: FieldNamesField;
  _meta?: Common.Metadata;
  _routing?: RoutingField;
  _size?: SizeField;
  _source?: SourceField;
  all_field?: AllField;
  date_detection?: boolean;
  dynamic?: DynamicMapping;
  dynamic_date_formats?: string[];
  dynamic_templates?: Record<string, DynamicTemplate>[];
  enabled?: boolean;
  index_field?: IndexField;
  numeric_detection?: boolean;
  properties?: Record<string, Property>;
  runtime?: Record<string, RuntimeField>;
}

export interface UnsignedLongNumberProperty extends NumberPropertyBase {
  null_value?: Common.ulong;
  type: 'unsigned_long';
}

export interface VersionProperty extends DocValuesPropertyBase {
  type: 'version';
}

export interface WildcardProperty extends DocValuesPropertyBase {
  null_value?: string;
  type: 'wildcard';
}


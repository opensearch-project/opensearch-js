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

import * as Common_QueryDsl from './_common.query_dsl'
import * as Common from './_common'
import * as Core_Search from './_core.search'

export type AdjacencyMatrixAggregate = MultiBucketAggregateBaseAdjacencyMatrixBucket & Record<string, any>

export interface AdjacencyMatrixAggregation extends BucketAggregationBase {
  filters?: Record<string, Common_QueryDsl.QueryContainer>;
}

export interface AdjacencyMatrixBucket extends MultiBucketBase {
  key: string;
}

export type Aggregate = CardinalityAggregate | HdrPercentilesAggregate | HdrPercentileRanksAggregate | TDigestPercentilesAggregate | TDigestPercentileRanksAggregate | PercentilesBucketAggregate | MedianAbsoluteDeviationAggregate | MinAggregate | MaxAggregate | SumAggregate | AvgAggregate | WeightedAvgAggregate | ValueCountAggregate | SimpleValueAggregate | DerivativeAggregate | BucketMetricValueAggregate | StatsAggregate | StatsBucketAggregate | ExtendedStatsAggregate | ExtendedStatsBucketAggregate | GeoBoundsAggregate | GeoCentroidAggregate | HistogramAggregate | DateHistogramAggregate | AutoDateHistogramAggregate | VariableWidthHistogramAggregate | StringTermsAggregate | LongTermsAggregate | DoubleTermsAggregate | UnmappedTermsAggregate | LongRareTermsAggregate | StringRareTermsAggregate | UnmappedRareTermsAggregate | MultiTermsAggregate | MissingAggregate | NestedAggregate | ReverseNestedAggregate | GlobalAggregate | FilterAggregate | ChildrenAggregate | ParentAggregate | SamplerAggregate | UnmappedSamplerAggregate | GeoHashGridAggregate | GeoTileGridAggregate | GeoHexGridAggregate | RangeAggregate | DateRangeAggregate | GeoDistanceAggregate | IpRangeAggregate | IpPrefixAggregate | FiltersAggregate | AdjacencyMatrixAggregate | SignificantLongTermsAggregate | SignificantStringTermsAggregate | UnmappedSignificantTermsAggregate | CompositeAggregate | FrequentItemSetsAggregate | ScriptedMetricAggregate | TopHitsAggregate | InferenceAggregate | StringStatsAggregate | BoxPlotAggregate | TopMetricsAggregate | TTestAggregate | RateAggregate | CumulativeCardinalityAggregate | MatrixStatsAggregate | GeoLineAggregate

export interface AggregateBase {
  meta?: Common.Metadata;
}

export type AggregateOrder = Record<string, Common.SortOrder> | Record<string, Common.SortOrder>[]

export interface Aggregation {
  meta?: Common.Metadata;
  name?: string;
}

export interface AggregationContainer {
  adjacency_matrix?: AdjacencyMatrixAggregation;
  aggregations?: Record<string, AggregationContainer>;
  auto_date_histogram?: AutoDateHistogramAggregation;
  avg?: AverageAggregation;
  avg_bucket?: AverageBucketAggregation;
  boxplot?: BoxplotAggregation;
  bucket_correlation?: BucketCorrelationAggregation;
  bucket_count_ks_test?: BucketKsAggregation;
  bucket_script?: BucketScriptAggregation;
  bucket_selector?: BucketSelectorAggregation;
  bucket_sort?: BucketSortAggregation;
  cardinality?: CardinalityAggregation;
  categorize_text?: CategorizeTextAggregation;
  children?: ChildrenAggregation;
  composite?: CompositeAggregation;
  cumulative_cardinality?: CumulativeCardinalityAggregation;
  cumulative_sum?: CumulativeSumAggregation;
  date_histogram?: DateHistogramAggregation;
  date_range?: DateRangeAggregation;
  derivative?: DerivativeAggregation;
  diversified_sampler?: DiversifiedSamplerAggregation;
  extended_stats?: ExtendedStatsAggregation;
  extended_stats_bucket?: ExtendedStatsBucketAggregation;
  filter?: Common_QueryDsl.QueryContainer;
  filters?: FiltersAggregation;
  frequent_item_sets?: FrequentItemSetsAggregation;
  geo_bounds?: GeoBoundsAggregation;
  geo_centroid?: GeoCentroidAggregation;
  geo_distance?: GeoDistanceAggregation;
  geo_line?: GeoLineAggregation;
  geohash_grid?: GeoHashGridAggregation;
  geohex_grid?: GeohexGridAggregation;
  geotile_grid?: GeoTileGridAggregation;
  global?: GlobalAggregation;
  histogram?: HistogramAggregation;
  inference?: InferenceAggregation;
  ip_prefix?: IpPrefixAggregation;
  ip_range?: IpRangeAggregation;
  line?: GeoLineAggregation;
  matrix_stats?: MatrixStatsAggregation;
  max?: MaxAggregation;
  max_bucket?: MaxBucketAggregation;
  median_absolute_deviation?: MedianAbsoluteDeviationAggregation;
  meta?: Common.Metadata;
  min?: MinAggregation;
  min_bucket?: MinBucketAggregation;
  missing?: MissingAggregation;
  moving_avg?: MovingAverageAggregation;
  moving_fn?: MovingFunctionAggregation;
  moving_percentiles?: MovingPercentilesAggregation;
  multi_terms?: MultiTermsAggregation;
  nested?: NestedAggregation;
  normalize?: NormalizeAggregation;
  parent?: ParentAggregation;
  percentile_ranks?: PercentileRanksAggregation;
  percentiles?: PercentilesAggregation;
  percentiles_bucket?: PercentilesBucketAggregation;
  range?: RangeAggregation;
  rare_terms?: RareTermsAggregation;
  rate?: RateAggregation;
  reverse_nested?: ReverseNestedAggregation;
  sampler?: SamplerAggregation;
  scripted_metric?: ScriptedMetricAggregation;
  serial_diff?: SerialDifferencingAggregation;
  significant_terms?: SignificantTermsAggregation;
  significant_text?: SignificantTextAggregation;
  stats?: StatsAggregation;
  stats_bucket?: StatsBucketAggregation;
  string_stats?: StringStatsAggregation;
  sum?: SumAggregation;
  sum_bucket?: SumBucketAggregation;
  t_test?: TTestAggregation;
  terms?: TermsAggregation;
  top_hits?: TopHitsAggregation;
  top_metrics?: TopMetricsAggregation;
  value_count?: ValueCountAggregation;
  variable_width_histogram?: VariableWidthHistogramAggregation;
  weighted_avg?: WeightedAverageAggregation;
}

export interface AggregationRange {
  from?: undefined | number | string;
  key?: string;
  to?: undefined | number | string;
}

export interface ArrayPercentilesItem {
  key: string;
  value: undefined | number | string;
  value_as_string?: string;
}

export interface AutoDateHistogramAggregate extends MultiBucketAggregateBaseDateHistogramBucket {
  interval: Common.DurationLarge;
}

export interface AutoDateHistogramAggregation extends BucketAggregationBase {
  buckets?: number;
  field?: Common.Field;
  format?: string;
  minimum_interval?: MinimumInterval;
  missing?: Common.DateTime;
  offset?: string;
  params?: Record<string, Record<string, any>>;
  script?: Common.Script;
  time_zone?: Common.TimeZone;
}

export type AverageAggregation = FormatMetricAggregationBase & Record<string, any>

export type AverageBucketAggregation = PipelineAggregationBase & Record<string, any>

export type AvgAggregate = SingleMetricAggregateBase & Record<string, any>

export interface BoxPlotAggregate extends AggregateBase {
  lower: number;
  lower_as_string?: string;
  max: number;
  max_as_string?: string;
  min: number;
  min_as_string?: string;
  q1: number;
  q1_as_string?: string;
  q2: number;
  q2_as_string?: string;
  q3: number;
  q3_as_string?: string;
  upper: number;
  upper_as_string?: string;
}

export interface BoxplotAggregation extends MetricAggregationBase {
  compression?: number;
}

export type BucketAggregationBase = Aggregation & Record<string, any>

export interface BucketCorrelationAggregation extends BucketPathAggregation {
  function: BucketCorrelationFunction;
}

export interface BucketCorrelationFunction {
  count_correlation: BucketCorrelationFunctionCountCorrelation;
}

export interface BucketCorrelationFunctionCountCorrelation {
  indicator: BucketCorrelationFunctionCountCorrelationIndicator;
}

export interface BucketCorrelationFunctionCountCorrelationIndicator {
  doc_count: number;
  expectations: number[];
  fractions?: number[];
}

export interface BucketKsAggregation extends BucketPathAggregation {
  alternative?: string[];
  fractions?: number[];
  sampling_method?: string;
}

export interface BucketMetricValueAggregate extends SingleMetricAggregateBase {
  keys: string[];
}

export interface BucketPathAggregation extends Aggregation {
  buckets_path?: BucketsPath;
}

export type BucketsAdjacencyMatrixBucket = Record<string, AdjacencyMatrixBucket> | AdjacencyMatrixBucket[]

export type BucketsCompositeBucket = Record<string, CompositeBucket> | CompositeBucket[]

export interface BucketScriptAggregation extends PipelineAggregationBase {
  script?: Common.Script;
}

export type BucketsDateHistogramBucket = Record<string, DateHistogramBucket> | DateHistogramBucket[]

export type BucketsDoubleTermsBucket = Record<string, DoubleTermsBucket> | DoubleTermsBucket[]

export interface BucketSelectorAggregation extends PipelineAggregationBase {
  script?: Common.Script;
}

export type BucketsFiltersBucket = Record<string, FiltersBucket> | FiltersBucket[]

export type BucketsFrequentItemSetsBucket = Record<string, FrequentItemSetsBucket> | FrequentItemSetsBucket[]

export type BucketsGeoHashGridBucket = Record<string, GeoHashGridBucket> | GeoHashGridBucket[]

export type BucketsGeoHexGridBucket = Record<string, GeoHexGridBucket> | GeoHexGridBucket[]

export type BucketsGeoTileGridBucket = Record<string, GeoTileGridBucket> | GeoTileGridBucket[]

export type BucketsHistogramBucket = Record<string, HistogramBucket> | HistogramBucket[]

export type BucketsIpPrefixBucket = Record<string, IpPrefixBucket> | IpPrefixBucket[]

export type BucketsIpRangeBucket = Record<string, IpRangeBucket> | IpRangeBucket[]

export type BucketsLongRareTermsBucket = Record<string, LongRareTermsBucket> | LongRareTermsBucket[]

export type BucketsLongTermsBucket = Record<string, LongTermsBucket> | LongTermsBucket[]

export type BucketsMultiTermsBucket = Record<string, MultiTermsBucket> | MultiTermsBucket[]

export interface BucketSortAggregation extends Aggregation {
  from?: number;
  gap_policy?: GapPolicy;
  size?: number;
  sort?: Common.Sort;
}

export type BucketsPath = string | string[] | Record<string, string>

export type BucketsQueryContainer = Record<string, Common_QueryDsl.QueryContainer> | Common_QueryDsl.QueryContainer[]

export type BucketsRangeBucket = Record<string, RangeBucket> | RangeBucket[]

export type BucketsSignificantLongTermsBucket = Record<string, SignificantLongTermsBucket> | SignificantLongTermsBucket[]

export type BucketsSignificantStringTermsBucket = Record<string, SignificantStringTermsBucket> | SignificantStringTermsBucket[]

export type BucketsStringRareTermsBucket = Record<string, StringRareTermsBucket> | StringRareTermsBucket[]

export type BucketsStringTermsBucket = Record<string, StringTermsBucket> | StringTermsBucket[]

export type BucketsVariableWidthHistogramBucket = Record<string, VariableWidthHistogramBucket> | VariableWidthHistogramBucket[]

export type BucketsVoid = Record<string, Common.Void> | Common.Void[]

export type CalendarInterval = 'day' | 'hour' | 'minute' | 'month' | 'quarter' | 'second' | 'week' | 'year'

export interface CardinalityAggregate extends AggregateBase {
  value: number;
}

export interface CardinalityAggregation extends MetricAggregationBase {
  execution_hint?: CardinalityExecutionMode;
  precision_threshold?: number;
  rehash?: boolean;
}

export type CardinalityExecutionMode = 'direct' | 'global_ordinals' | 'save_memory_heuristic' | 'save_time_heuristic' | 'segment_ordinals'

export interface CategorizeTextAggregation extends Aggregation {
  categorization_analyzer?: CategorizeTextAnalyzer;
  categorization_filters?: string[];
  field: Common.Field;
  max_matched_tokens?: number;
  max_unique_tokens?: number;
  min_doc_count?: number;
  shard_min_doc_count?: number;
  shard_size?: number;
  similarity_threshold?: number;
  size?: number;
}

export type CategorizeTextAnalyzer = string | CustomCategorizeTextAnalyzer

export type ChildrenAggregate = SingleBucketAggregateBase & Record<string, any>

export interface ChildrenAggregation extends BucketAggregationBase {
  type?: Common.RelationName;
}

export interface ChiSquareHeuristic {
  background_is_superset: boolean;
  include_negatives: boolean;
}

export interface ClassificationInferenceOptions {
  num_top_classes?: number;
  num_top_feature_importance_values?: number;
  prediction_field_type?: string;
  results_field?: string;
  top_classes_results_field?: string;
}

export interface CompositeAggregate extends MultiBucketAggregateBaseCompositeBucket {
  after_key?: CompositeAggregateKey;
}

export type CompositeAggregateKey = Record<string, Common.FieldValue>

export interface CompositeAggregation extends BucketAggregationBase {
  after?: CompositeAggregateKey;
  size?: number;
  sources?: Record<string, CompositeAggregationSource>[];
}

export interface CompositeAggregationBase {
  field?: Common.Field;
  missing_bucket?: boolean;
  missing_order?: MissingOrder;
  order?: Common.SortOrder;
  script?: Common.Script;
  value_type?: ValueType;
}

export interface CompositeAggregationSource {
  date_histogram?: CompositeDateHistogramAggregation;
  geotile_grid?: CompositeGeoTileGridAggregation;
  histogram?: CompositeHistogramAggregation;
  terms?: CompositeTermsAggregation;
}

export interface CompositeBucket extends MultiBucketBase {
  key: CompositeAggregateKey;
}

export interface CompositeDateHistogramAggregation extends CompositeAggregationBase {
  calendar_interval?: Common.DurationLarge;
  fixed_interval?: Common.DurationLarge;
  format?: string;
  offset?: Common.Duration;
  time_zone?: Common.TimeZone;
}

export interface CompositeGeoTileGridAggregation extends CompositeAggregationBase {
  bounds?: Common.GeoBounds;
  precision?: number;
}

export interface CompositeHistogramAggregation extends CompositeAggregationBase {
  interval: number;
}

export type CompositeTermsAggregation = CompositeAggregationBase & Record<string, any>

export interface CumulativeCardinalityAggregate extends AggregateBase {
  value: number;
  value_as_string?: string;
}

export type CumulativeCardinalityAggregation = PipelineAggregationBase & Record<string, any>

export type CumulativeSumAggregation = PipelineAggregationBase & Record<string, any>

export interface CustomCategorizeTextAnalyzer {
  char_filter?: string[];
  filter?: string[];
  tokenizer?: string;
}

export type DateHistogramAggregate = MultiBucketAggregateBaseDateHistogramBucket & Record<string, any>

export interface DateHistogramAggregation extends BucketAggregationBase {
  calendar_interval?: CalendarInterval;
  extended_bounds?: ExtendedBoundsFieldDateMath;
  field?: Common.Field;
  fixed_interval?: Common.Duration;
  format?: string;
  hard_bounds?: ExtendedBoundsFieldDateMath;
  interval?: Common.Duration;
  keyed?: boolean;
  min_doc_count?: number;
  missing?: Common.DateTime;
  offset?: Common.Duration;
  order?: AggregateOrder;
  params?: Record<string, Record<string, any>>;
  script?: Common.Script;
  time_zone?: Common.TimeZone;
}

export interface DateHistogramBucket extends MultiBucketBase {
  key: Common.EpochTimeUnitMillis;
  key_as_string?: string;
}

export type DateRangeAggregate = RangeAggregate & Record<string, any>

export interface DateRangeAggregation extends BucketAggregationBase {
  field?: Common.Field;
  format?: string;
  keyed?: boolean;
  missing?: Missing;
  ranges?: DateRangeExpression[];
  time_zone?: Common.TimeZone;
}

export interface DateRangeExpression {
  from?: FieldDateMath;
  key?: string;
  to?: FieldDateMath;
}

export interface DerivativeAggregate extends SingleMetricAggregateBase {
  normalized_value?: number;
  normalized_value_as_string?: string;
}

export type DerivativeAggregation = PipelineAggregationBase & Record<string, any>

export interface DiversifiedSamplerAggregation extends BucketAggregationBase {
  execution_hint?: SamplerAggregationExecutionHint;
  field?: Common.Field;
  max_docs_per_value?: number;
  script?: Common.Script;
  shard_size?: number;
}

export type DoubleTermsAggregate = TermsAggregateBaseDoubleTermsBucket & Record<string, any>

export interface DoubleTermsBucket extends TermsBucketBase {
  key: number;
  key_as_string?: string;
}

export interface EwmaModelSettings {
  alpha?: number;
}

export interface EwmaMovingAverageAggregation extends MovingAverageAggregationBase {
  model: 'ewma';
  settings: EwmaModelSettings;
}

export interface ExtendedBoundsdouble {
  max: number;
  min: number;
}

export interface ExtendedBoundsFieldDateMath {
  max: FieldDateMath;
  min: FieldDateMath;
}

export interface ExtendedStatsAggregate extends StatsAggregate {
  std_deviation: undefined | number | string;
  std_deviation_as_string?: string;
  std_deviation_bounds?: StandardDeviationBounds;
  std_deviation_bounds_as_string?: StandardDeviationBoundsAsString;
  std_deviation_population: undefined | number | string;
  std_deviation_sampling: undefined | number | string;
  sum_of_squares: undefined | number | string;
  sum_of_squares_as_string?: string;
  variance: undefined | number | string;
  variance_as_string?: string;
  variance_population: undefined | number | string;
  variance_population_as_string?: string;
  variance_sampling: undefined | number | string;
  variance_sampling_as_string?: string;
}

export interface ExtendedStatsAggregation extends FormatMetricAggregationBase {
  sigma?: number;
}

export type ExtendedStatsBucketAggregate = ExtendedStatsAggregate & Record<string, any>

export interface ExtendedStatsBucketAggregation extends PipelineAggregationBase {
  sigma?: number;
}

export type FieldDateMath = Common.DateMath | number

export type FilterAggregate = SingleBucketAggregateBase & Record<string, any>

export type FiltersAggregate = MultiBucketAggregateBaseFiltersBucket & Record<string, any>

export interface FiltersAggregation extends BucketAggregationBase {
  filters?: BucketsQueryContainer;
  keyed?: boolean;
  other_bucket?: boolean;
  other_bucket_key?: string;
}

export type FiltersBucket = MultiBucketBase & Record<string, any>

export interface FormatMetricAggregationBase extends MetricAggregationBase {
  format?: string;
}

export interface FormattableMetricAggregation extends MetricAggregationBase {
  format?: string;
}

export type FrequentItemSetsAggregate = MultiBucketAggregateBaseFrequentItemSetsBucket & Record<string, any>

export interface FrequentItemSetsAggregation {
  fields: FrequentItemSetsField[];
  filter?: Common_QueryDsl.QueryContainer;
  minimum_set_size?: number;
  minimum_support?: number;
  size?: number;
}

export interface FrequentItemSetsBucket extends MultiBucketBase {
  key: Record<string, string[]>;
  support: number;
}

export interface FrequentItemSetsField {
  exclude?: TermsExclude;
  field: Common.Field;
  include?: TermsInclude;
}

export type GapPolicy = 'insert_zeros' | 'keep_values' | 'skip'

export interface GeoBoundsAggregate extends AggregateBase {
  bounds?: Common.GeoBounds;
}

export interface GeoBoundsAggregation extends MetricAggregationBase {
  wrap_longitude?: boolean;
}

export interface GeoCentroidAggregate extends AggregateBase {
  count: number;
  location?: Common.GeoLocation;
}

export interface GeoCentroidAggregation extends MetricAggregationBase {
  count?: number;
  location?: Common.GeoLocation;
}

export type GeoDistanceAggregate = RangeAggregate & Record<string, any>

export interface GeoDistanceAggregation extends BucketAggregationBase {
  distance_type?: Common.GeoDistanceType;
  field?: Common.Field;
  origin?: Common.GeoLocation;
  ranges?: AggregationRange[];
  unit?: Common.DistanceUnit;
}

export type GeoHashGridAggregate = MultiBucketAggregateBaseGeoHashGridBucket & Record<string, any>

export interface GeoHashGridAggregation extends BucketAggregationBase {
  bounds?: Common.GeoBounds;
  field?: Common.Field;
  precision?: Common.GeoHashPrecision;
  shard_size?: number;
  size?: number;
}

export interface GeoHashGridBucket extends MultiBucketBase {
  key: Common.GeoHash;
}

export type GeoHexGridAggregate = MultiBucketAggregateBaseGeoHexGridBucket & Record<string, any>

export interface GeohexGridAggregation extends BucketAggregationBase {
  bounds?: Common.GeoBounds;
  field: Common.Field;
  precision?: number;
  shard_size?: number;
  size?: number;
}

export interface GeoHexGridBucket extends MultiBucketBase {
  key: Common.GeoHexCell;
}

export interface GeoLineAggregate extends AggregateBase {
  geometry: Common.GeoLine;
  properties: Record<string, any>;
  type: string;
}

export interface GeoLineAggregation {
  include_sort?: boolean;
  point: GeoLinePoint;
  size?: number;
  sort: GeoLineSort;
  sort_order?: Common.SortOrder;
}

export interface GeoLinePoint {
  field: Common.Field;
}

export interface GeoLineSort {
  field: Common.Field;
}

export type GeoTileGridAggregate = MultiBucketAggregateBaseGeoTileGridBucket & Record<string, any>

export interface GeoTileGridAggregation extends BucketAggregationBase {
  bounds?: Common.GeoBounds;
  field?: Common.Field;
  precision?: Common.GeoTilePrecision;
  shard_size?: number;
  size?: number;
}

export interface GeoTileGridBucket extends MultiBucketBase {
  key: Common.GeoTile;
}

export type GlobalAggregate = SingleBucketAggregateBase & Record<string, any>

export type GlobalAggregation = BucketAggregationBase & Record<string, any>

export interface GoogleNormalizedDistanceHeuristic {
  background_is_superset?: boolean;
}

export interface HdrMethod {
  number_of_significant_value_digits?: number;
}

export type HdrPercentileRanksAggregate = PercentilesAggregateBase & Record<string, any>

export type HdrPercentilesAggregate = PercentilesAggregateBase & Record<string, any>

export type HistogramAggregate = MultiBucketAggregateBaseHistogramBucket & Record<string, any>

export interface HistogramAggregation extends BucketAggregationBase {
  extended_bounds?: ExtendedBoundsdouble;
  field?: Common.Field;
  format?: string;
  hard_bounds?: ExtendedBoundsdouble;
  interval?: number;
  keyed?: boolean;
  min_doc_count?: number;
  missing?: number;
  offset?: number;
  order?: AggregateOrder;
  script?: Common.Script;
}

export interface HistogramBucket extends MultiBucketBase {
  key: number;
  key_as_string?: string;
}

export interface HoltLinearModelSettings {
  alpha?: number;
  beta?: number;
}

export interface HoltMovingAverageAggregation extends MovingAverageAggregationBase {
  model: 'holt';
  settings: HoltLinearModelSettings;
}

export interface HoltWintersModelSettings {
  alpha?: number;
  beta?: number;
  gamma?: number;
  pad?: boolean;
  period?: number;
  type?: HoltWintersType;
}

export interface HoltWintersMovingAverageAggregation extends MovingAverageAggregationBase {
  model: 'holt_winters';
  settings: HoltWintersModelSettings;
}

export type HoltWintersType = 'add' | 'mult'

export interface InferenceAggregate extends AggregateBase {
  feature_importance?: InferenceFeatureImportance[];
  top_classes?: InferenceTopClassEntry[];
  value?: Common.FieldValue;
  warning?: string;
}

export interface InferenceAggregation extends PipelineAggregationBase {
  inference_config?: InferenceConfigContainer;
  model_id: Common.Name;
}

export interface InferenceClassImportance {
  class_name: string;
  importance: number;
}

export interface InferenceConfigContainer {
  classification?: ClassificationInferenceOptions;
  regression?: RegressionInferenceOptions;
}

export interface InferenceFeatureImportance {
  classes?: InferenceClassImportance[];
  feature_name: string;
  importance?: number;
}

export interface InferenceTopClassEntry {
  class_name: Common.FieldValue;
  class_probability: number;
  class_score: number;
}

export type IpPrefixAggregate = MultiBucketAggregateBaseIpPrefixBucket & Record<string, any>

export interface IpPrefixAggregation extends BucketAggregationBase {
  append_prefix_length?: boolean;
  field: Common.Field;
  is_ipv6?: boolean;
  keyed?: boolean;
  min_doc_count?: number;
  prefix_length: number;
}

export interface IpPrefixBucket extends MultiBucketBase {
  is_ipv6: boolean;
  key: string;
  netmask?: string;
  prefix_length: number;
}

export type IpRangeAggregate = MultiBucketAggregateBaseIpRangeBucket & Record<string, any>

export interface IpRangeAggregation extends BucketAggregationBase {
  field?: Common.Field;
  ranges?: IpRangeAggregationRange[];
}

export interface IpRangeAggregationRange {
  from?: undefined | string;
  mask?: string;
  to?: undefined | string;
}

export interface IpRangeBucket extends MultiBucketBase {
  from?: string;
  key?: string;
  to?: string;
}

export type KeyedPercentiles = Record<string, undefined | number | string>

export interface LinearMovingAverageAggregation extends MovingAverageAggregationBase {
  model: 'linear';
  settings: Common.EmptyObject;
}

export type LongRareTermsAggregate = MultiBucketAggregateBaseLongRareTermsBucket & Record<string, any>

export interface LongRareTermsBucket extends MultiBucketBase {
  key: number;
  key_as_string?: string;
}

export type LongTermsAggregate = TermsAggregateBaseLongTermsBucket & Record<string, any>

export interface LongTermsBucket extends TermsBucketBase {
  key: number;
  key_as_string?: string;
}

export interface MatrixAggregation extends Aggregation {
  fields?: Common.Fields;
  missing?: Record<string, number>;
}

export interface MatrixStatsAggregate extends AggregateBase {
  doc_count: number;
  fields?: MatrixStatsFields[];
}

export interface MatrixStatsAggregation extends MatrixAggregation {
  mode?: Common.SortMode;
}

export interface MatrixStatsFields {
  correlation: Record<string, number>;
  count: number;
  covariance: Record<string, number>;
  kurtosis: number;
  mean: number;
  name: Common.Field;
  skewness: number;
  variance: number;
}

export type MaxAggregate = SingleMetricAggregateBase & Record<string, any>

export type MaxAggregation = FormatMetricAggregationBase & Record<string, any>

export type MaxBucketAggregation = PipelineAggregationBase & Record<string, any>

export type MedianAbsoluteDeviationAggregate = SingleMetricAggregateBase & Record<string, any>

export interface MedianAbsoluteDeviationAggregation extends FormatMetricAggregationBase {
  compression?: number;
}

export interface MetricAggregationBase {
  field?: Common.Field;
  missing?: Missing;
  script?: Common.Script;
}

export type MinAggregate = SingleMetricAggregateBase & Record<string, any>

export type MinAggregation = FormatMetricAggregationBase & Record<string, any>

export type MinBucketAggregation = PipelineAggregationBase & Record<string, any>

export type MinimumInterval = 'day' | 'hour' | 'minute' | 'month' | 'second' | 'year'

export type Missing = string | number | number | boolean

export type MissingAggregate = SingleBucketAggregateBase & Record<string, any>

export interface MissingAggregation extends BucketAggregationBase {
  field?: Common.Field;
  missing?: Missing;
}

export type MissingOrder = 'default' | 'first' | 'last'

export type MovingAverageAggregation = LinearMovingAverageAggregation | SimpleMovingAverageAggregation | EwmaMovingAverageAggregation | HoltMovingAverageAggregation | HoltWintersMovingAverageAggregation

export interface MovingAverageAggregationBase extends PipelineAggregationBase {
  minimize?: boolean;
  predict?: number;
  window?: number;
}

export interface MovingFunctionAggregation extends PipelineAggregationBase {
  script?: string;
  shift?: number;
  window?: number;
}

export interface MovingPercentilesAggregation extends PipelineAggregationBase {
  keyed?: boolean;
  shift?: number;
  window?: number;
}

export interface MultiBucketAggregateBaseAdjacencyMatrixBucket extends AggregateBase {
  buckets: BucketsAdjacencyMatrixBucket;
}

export interface MultiBucketAggregateBaseCompositeBucket extends AggregateBase {
  buckets: BucketsCompositeBucket;
}

export interface MultiBucketAggregateBaseDateHistogramBucket extends AggregateBase {
  buckets: BucketsDateHistogramBucket;
}

export interface MultiBucketAggregateBaseDoubleTermsBucket extends AggregateBase {
  buckets: BucketsDoubleTermsBucket;
}

export interface MultiBucketAggregateBaseFiltersBucket extends AggregateBase {
  buckets: BucketsFiltersBucket;
}

export interface MultiBucketAggregateBaseFrequentItemSetsBucket extends AggregateBase {
  buckets: BucketsFrequentItemSetsBucket;
}

export interface MultiBucketAggregateBaseGeoHashGridBucket extends AggregateBase {
  buckets: BucketsGeoHashGridBucket;
}

export interface MultiBucketAggregateBaseGeoHexGridBucket extends AggregateBase {
  buckets: BucketsGeoHexGridBucket;
}

export interface MultiBucketAggregateBaseGeoTileGridBucket extends AggregateBase {
  buckets: BucketsGeoTileGridBucket;
}

export interface MultiBucketAggregateBaseHistogramBucket extends AggregateBase {
  buckets: BucketsHistogramBucket;
}

export interface MultiBucketAggregateBaseIpPrefixBucket extends AggregateBase {
  buckets: BucketsIpPrefixBucket;
}

export interface MultiBucketAggregateBaseIpRangeBucket extends AggregateBase {
  buckets: BucketsIpRangeBucket;
}

export interface MultiBucketAggregateBaseLongRareTermsBucket extends AggregateBase {
  buckets: BucketsLongRareTermsBucket;
}

export interface MultiBucketAggregateBaseLongTermsBucket extends AggregateBase {
  buckets: BucketsLongTermsBucket;
}

export interface MultiBucketAggregateBaseMultiTermsBucket extends AggregateBase {
  buckets: BucketsMultiTermsBucket;
}

export interface MultiBucketAggregateBaseRangeBucket extends AggregateBase {
  buckets: BucketsRangeBucket;
}

export interface MultiBucketAggregateBaseSignificantLongTermsBucket extends AggregateBase {
  buckets: BucketsSignificantLongTermsBucket;
}

export interface MultiBucketAggregateBaseSignificantStringTermsBucket extends AggregateBase {
  buckets: BucketsSignificantStringTermsBucket;
}

export interface MultiBucketAggregateBaseStringRareTermsBucket extends AggregateBase {
  buckets: BucketsStringRareTermsBucket;
}

export interface MultiBucketAggregateBaseStringTermsBucket extends AggregateBase {
  buckets: BucketsStringTermsBucket;
}

export interface MultiBucketAggregateBaseVariableWidthHistogramBucket extends AggregateBase {
  buckets: BucketsVariableWidthHistogramBucket;
}

export interface MultiBucketAggregateBaseVoid extends AggregateBase {
  buckets: BucketsVoid;
}

export interface MultiBucketBase {
  doc_count: number;
}

export interface MultiTermLookup {
  field: Common.Field;
  missing?: Missing;
}

export type MultiTermsAggregate = TermsAggregateBaseMultiTermsBucket & Record<string, any>

export interface MultiTermsAggregation extends BucketAggregationBase {
  collect_mode?: TermsAggregationCollectMode;
  min_doc_count?: number;
  order?: AggregateOrder;
  shard_min_doc_count?: number;
  shard_size?: number;
  show_term_doc_count_error?: boolean;
  size?: number;
  terms: MultiTermLookup[];
}

export interface MultiTermsBucket extends MultiBucketBase {
  doc_count_error_upper_bound?: number;
  key: Common.FieldValue[];
  key_as_string?: string;
}

export interface MutualInformationHeuristic {
  background_is_superset?: boolean;
  include_negatives?: boolean;
}

export type NestedAggregate = SingleBucketAggregateBase & Record<string, any>

export interface NestedAggregation extends BucketAggregationBase {
  path?: Common.Field;
}

export interface NormalizeAggregation extends PipelineAggregationBase {
  method?: NormalizeMethod;
}

export type NormalizeMethod = 'mean' | 'percent_of_sum' | 'rescale_0_1' | 'rescale_0_100' | 'softmax' | 'z-score'

export type ParentAggregate = SingleBucketAggregateBase & Record<string, any>

export interface ParentAggregation extends BucketAggregationBase {
  type?: Common.RelationName;
}

export type PercentageScoreHeuristic = Record<string, any>

export interface PercentileRanksAggregation extends FormatMetricAggregationBase {
  hdr?: HdrMethod;
  keyed?: boolean;
  tdigest?: TDigest;
  values?: number[] | undefined | string;
}

export type Percentiles = KeyedPercentiles | ArrayPercentilesItem[]

export interface PercentilesAggregateBase extends AggregateBase {
  values: Percentiles;
}

export interface PercentilesAggregation extends FormatMetricAggregationBase {
  hdr?: HdrMethod;
  keyed?: boolean;
  percents?: number[];
  tdigest?: TDigest;
}

export type PercentilesBucketAggregate = PercentilesAggregateBase & Record<string, any>

export interface PercentilesBucketAggregation extends PipelineAggregationBase {
  percents?: number[];
}

export interface PipelineAggregationBase extends BucketPathAggregation {
  format?: string;
  gap_policy?: GapPolicy;
}

export type RangeAggregate = MultiBucketAggregateBaseRangeBucket & Record<string, any>

export interface RangeAggregation extends BucketAggregationBase {
  field?: Common.Field;
  format?: string;
  keyed?: boolean;
  missing?: number;
  ranges?: AggregationRange[];
  script?: Common.Script;
}

export interface RangeBucket extends MultiBucketBase {
  from?: number;
  from_as_string?: string;
  key?: string;
  to?: number;
  to_as_string?: string;
}

export interface RareTermsAggregation extends BucketAggregationBase {
  exclude?: TermsExclude;
  field?: Common.Field;
  include?: TermsInclude;
  max_doc_count?: number;
  missing?: Missing;
  precision?: number;
  value_type?: string;
}

export interface RateAggregate extends AggregateBase {
  value: number;
  value_as_string?: string;
}

export interface RateAggregation extends FormatMetricAggregationBase {
  mode?: RateMode;
  unit?: CalendarInterval;
}

export type RateMode = 'sum' | 'value_count'

export interface RegressionInferenceOptions {
  num_top_feature_importance_values?: number;
  results_field?: Common.Field;
}

export type ReverseNestedAggregate = SingleBucketAggregateBase & Record<string, any>

export interface ReverseNestedAggregation extends BucketAggregationBase {
  path?: Common.Field;
}

export type SamplerAggregate = SingleBucketAggregateBase & Record<string, any>

export interface SamplerAggregation extends BucketAggregationBase {
  shard_size?: number;
}

export type SamplerAggregationExecutionHint = 'bytes_hash' | 'global_ordinals' | 'map'

export interface ScriptedHeuristic {
  script: Common.Script;
}

export interface ScriptedMetricAggregate extends AggregateBase {
  value: Record<string, any>;
}

export interface ScriptedMetricAggregation extends MetricAggregationBase {
  combine_script?: Common.Script;
  init_script?: Common.Script;
  map_script?: Common.Script;
  params?: Record<string, Record<string, any>>;
  reduce_script?: Common.Script;
}

export interface SerialDifferencingAggregation extends PipelineAggregationBase {
  lag?: number;
}

export type SignificantLongTermsAggregate = SignificantTermsAggregateBaseSignificantLongTermsBucket & Record<string, any>

export interface SignificantLongTermsBucket extends SignificantTermsBucketBase {
  key: number;
  key_as_string?: string;
}

export type SignificantStringTermsAggregate = SignificantTermsAggregateBaseSignificantStringTermsBucket & Record<string, any>

export interface SignificantStringTermsBucket extends SignificantTermsBucketBase {
  key: string;
}

export interface SignificantTermsAggregateBaseSignificantLongTermsBucket extends MultiBucketAggregateBaseSignificantLongTermsBucket {
  bg_count?: number;
  doc_count?: number;
}

export interface SignificantTermsAggregateBaseSignificantStringTermsBucket extends MultiBucketAggregateBaseSignificantStringTermsBucket {
  bg_count?: number;
  doc_count?: number;
}

export interface SignificantTermsAggregateBaseVoid extends MultiBucketAggregateBaseVoid {
  bg_count?: number;
  doc_count?: number;
}

export interface SignificantTermsAggregation extends BucketAggregationBase {
  background_filter?: Common_QueryDsl.QueryContainer;
  chi_square?: ChiSquareHeuristic;
  exclude?: TermsExclude;
  execution_hint?: TermsAggregationExecutionHint;
  field?: Common.Field;
  gnd?: GoogleNormalizedDistanceHeuristic;
  include?: TermsInclude;
  jlh?: Common.EmptyObject;
  min_doc_count?: number;
  mutual_information?: MutualInformationHeuristic;
  percentage?: PercentageScoreHeuristic;
  script_heuristic?: ScriptedHeuristic;
  shard_min_doc_count?: number;
  shard_size?: number;
  size?: number;
}

export interface SignificantTermsBucketBase extends MultiBucketBase {
  bg_count: number;
  score: number;
}

export interface SignificantTextAggregation extends BucketAggregationBase {
  background_filter?: Common_QueryDsl.QueryContainer;
  chi_square?: ChiSquareHeuristic;
  exclude?: TermsExclude;
  execution_hint?: TermsAggregationExecutionHint;
  field?: Common.Field;
  filter_duplicate_text?: boolean;
  gnd?: GoogleNormalizedDistanceHeuristic;
  include?: TermsInclude;
  jlh?: Common.EmptyObject;
  min_doc_count?: number;
  mutual_information?: MutualInformationHeuristic;
  percentage?: PercentageScoreHeuristic;
  script_heuristic?: ScriptedHeuristic;
  shard_min_doc_count?: number;
  shard_size?: number;
  size?: number;
  source_fields?: Common.Fields;
}

export interface SimpleMovingAverageAggregation extends MovingAverageAggregationBase {
  model: 'simple';
  settings: Common.EmptyObject;
}

export type SimpleValueAggregate = SingleMetricAggregateBase & Record<string, any>

export interface SingleBucketAggregateBase extends AggregateBase {
  doc_count: number;
}

export interface SingleMetricAggregateBase extends AggregateBase {
  value: undefined | number | string;
  value_as_string?: string;
}

export interface StandardDeviationBounds {
  lower: undefined | number | string;
  lower_population: undefined | number | string;
  lower_sampling: undefined | number | string;
  upper: undefined | number | string;
  upper_population: undefined | number | string;
  upper_sampling: undefined | number | string;
}

export interface StandardDeviationBoundsAsString {
  lower: string;
  lower_population: string;
  lower_sampling: string;
  upper: string;
  upper_population: string;
  upper_sampling: string;
}

export interface StatsAggregate extends AggregateBase {
  avg: undefined | number | string;
  avg_as_string?: string;
  count: number;
  max: undefined | number | string;
  max_as_string?: string;
  min: undefined | number | string;
  min_as_string?: string;
  sum: number;
  sum_as_string?: string;
}

export type StatsAggregation = FormatMetricAggregationBase & Record<string, any>

export type StatsBucketAggregate = StatsAggregate & Record<string, any>

export type StatsBucketAggregation = PipelineAggregationBase & Record<string, any>

export type StringRareTermsAggregate = MultiBucketAggregateBaseStringRareTermsBucket & Record<string, any>

export interface StringRareTermsBucket extends MultiBucketBase {
  key: string;
}

export interface StringStatsAggregate extends AggregateBase {
  avg_length: undefined | number | string;
  avg_length_as_string?: string;
  count: number;
  distribution?: undefined | Record<string, number> | string;
  entropy: undefined | number | string;
  max_length: undefined | number | string;
  max_length_as_string?: string;
  min_length: undefined | number | string;
  min_length_as_string?: string;
}

export interface StringStatsAggregation extends MetricAggregationBase {
  show_distribution?: boolean;
}

export type StringTermsAggregate = TermsAggregateBaseStringTermsBucket & Record<string, any>

export interface StringTermsBucket extends TermsBucketBase {
  key: Common.FieldValue;
}

export type SumAggregate = SingleMetricAggregateBase & Record<string, any>

export type SumAggregation = FormatMetricAggregationBase & Record<string, any>

export type SumBucketAggregation = PipelineAggregationBase & Record<string, any>

export interface TDigest {
  compression?: number;
}

export type TDigestPercentileRanksAggregate = PercentilesAggregateBase & Record<string, any>

export type TDigestPercentilesAggregate = PercentilesAggregateBase & Record<string, any>

export interface TermsAggregateBaseDoubleTermsBucket extends MultiBucketAggregateBaseDoubleTermsBucket {
  doc_count_error_upper_bound?: number;
  sum_other_doc_count?: number;
}

export interface TermsAggregateBaseLongTermsBucket extends MultiBucketAggregateBaseLongTermsBucket {
  doc_count_error_upper_bound?: number;
  sum_other_doc_count?: number;
}

export interface TermsAggregateBaseMultiTermsBucket extends MultiBucketAggregateBaseMultiTermsBucket {
  doc_count_error_upper_bound?: number;
  sum_other_doc_count?: number;
}

export interface TermsAggregateBaseStringTermsBucket extends MultiBucketAggregateBaseStringTermsBucket {
  doc_count_error_upper_bound?: number;
  sum_other_doc_count?: number;
}

export interface TermsAggregateBaseVoid extends MultiBucketAggregateBaseVoid {
  doc_count_error_upper_bound?: number;
  sum_other_doc_count?: number;
}

export interface TermsAggregation extends BucketAggregationBase {
  collect_mode?: TermsAggregationCollectMode;
  exclude?: TermsExclude;
  execution_hint?: TermsAggregationExecutionHint;
  field?: Common.Field;
  format?: string;
  include?: TermsInclude;
  min_doc_count?: number;
  missing?: Missing;
  missing_bucket?: boolean;
  missing_order?: MissingOrder;
  order?: AggregateOrder;
  script?: Common.Script;
  shard_size?: number;
  show_term_doc_count_error?: boolean;
  size?: number;
  value_type?: string;
}

export type TermsAggregationCollectMode = 'breadth_first' | 'depth_first'

export type TermsAggregationExecutionHint = 'global_ordinals' | 'global_ordinals_hash' | 'global_ordinals_low_cardinality' | 'map'

export interface TermsBucketBase extends MultiBucketBase {
  doc_count_error?: number;
}

export type TermsExclude = string | string[]

export type TermsInclude = string | string[] | TermsPartition

export interface TermsPartition {
  num_partitions: number;
  partition: number;
}

export interface TestPopulation {
  field: Common.Field;
  filter?: Common_QueryDsl.QueryContainer;
  script?: Common.Script;
}

export interface TopHitsAggregate extends AggregateBase {
  hits: Core_Search.HitsMetadata;
}

export interface TopHitsAggregation extends MetricAggregationBase {
  _source?: Core_Search.SourceConfig;
  docvalue_fields?: Common.Fields;
  explain?: boolean;
  from?: number;
  highlight?: Core_Search.Highlight;
  script_fields?: Record<string, Common.ScriptField>;
  seq_no_primary_term?: boolean;
  size?: number;
  sort?: Common.Sort;
  stored_fields?: Common.Fields;
  track_scores?: boolean;
  version?: boolean;
}

export interface TopMetrics {
  metrics: Record<string, Common.FieldValue>;
  sort: Common.FieldValue[];
}

export interface TopMetricsAggregate extends AggregateBase {
  top: TopMetrics[];
}

export interface TopMetricsAggregation extends MetricAggregationBase {
  metrics?: TopMetricsValue | TopMetricsValue[];
  size?: number;
  sort?: Common.Sort;
}

export interface TopMetricsValue {
  field: Common.Field;
}

export interface TTestAggregate extends AggregateBase {
  value: undefined | number | string;
  value_as_string?: string;
}

export interface TTestAggregation extends Aggregation {
  a?: TestPopulation;
  b?: TestPopulation;
  type?: TTestType;
}

export type TTestType = 'heteroscedastic' | 'homoscedastic' | 'paired'

export type UnmappedRareTermsAggregate = MultiBucketAggregateBaseVoid & Record<string, any>

export type UnmappedSamplerAggregate = SingleBucketAggregateBase & Record<string, any>

export type UnmappedSignificantTermsAggregate = SignificantTermsAggregateBaseVoid & Record<string, any>

export type UnmappedTermsAggregate = TermsAggregateBaseVoid & Record<string, any>

export type ValueCountAggregate = SingleMetricAggregateBase & Record<string, any>

export type ValueCountAggregation = FormattableMetricAggregation & Record<string, any>

export type ValueType = 'boolean' | 'date' | 'date_nanos' | 'double' | 'geo_point' | 'ip' | 'long' | 'number' | 'numeric' | 'string'

export type VariableWidthHistogramAggregate = MultiBucketAggregateBaseVariableWidthHistogramBucket & Record<string, any>

export interface VariableWidthHistogramAggregation {
  buckets?: number;
  field?: Common.Field;
  initial_buffer?: number;
  shard_size?: number;
}

export interface VariableWidthHistogramBucket extends MultiBucketBase {
  key: number;
  key_as_string?: string;
  max: number;
  max_as_string?: string;
  min: number;
  min_as_string?: string;
}

export interface WeightedAverageAggregation extends Aggregation {
  format?: string;
  value?: WeightedAverageValue;
  value_type?: ValueType;
  weight?: WeightedAverageValue;
}

export interface WeightedAverageValue {
  field?: Common.Field;
  missing?: number;
  script?: Common.Script;
}

export type WeightedAvgAggregate = SingleMetricAggregateBase & Record<string, any>


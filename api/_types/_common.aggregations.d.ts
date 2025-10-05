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
import * as Core_Search from './_core.search'

export type AdjacencyMatrixAggregate = MultiBucketAggregateBaseAdjacencyMatrixBucket & Record<string, any>

export type AdjacencyMatrixAggregation = BucketAggregationBase & {
  filters?: Record<string, Common_QueryDsl.QueryContainer>;
}

export type AdjacencyMatrixBucket = MultiBucketBase & {
  key: string;
}

export type Aggregate = AdjacencyMatrixAggregate | AutoDateHistogramAggregate | AvgAggregate | BoxPlotAggregate | BucketMetricValueAggregate | CardinalityAggregate | ChildrenAggregate | CompositeAggregate | DateHistogramAggregate | DateRangeAggregate | DerivativeAggregate | DoubleTermsAggregate | ExtendedStatsAggregate | ExtendedStatsBucketAggregate | FilterAggregate | FiltersAggregate | GeoBoundsAggregate | GeoCentroidAggregate | GeoDistanceAggregate | GeoHashGridAggregate | GeoTileGridAggregate | GlobalAggregate | HdrPercentilesAggregate | HdrPercentileRanksAggregate | HistogramAggregate | IpRangeAggregate | LongRareTermsAggregate | LongTermsAggregate | MatrixStatsAggregate | MaxAggregate | MedianAbsoluteDeviationAggregate | MinAggregate | MissingAggregate | MultiTermsAggregate | NestedAggregate | ParentAggregate | PercentilesBucketAggregate | RangeAggregate | RateAggregate | ReverseNestedAggregate | SamplerAggregate | ScriptedMetricAggregate | SignificantLongTermsAggregate | SignificantStringTermsAggregate | CumulativeCardinalityAggregate | SimpleValueAggregate | StatsAggregate | StatsBucketAggregate | StringRareTermsAggregate | StringTermsAggregate | SumAggregate | TDigestPercentilesAggregate | TDigestPercentileRanksAggregate | TTestAggregate | TopHitsAggregate | UnmappedRareTermsAggregate | UnmappedSignificantTermsAggregate | UnmappedTermsAggregate | ValueCountAggregate | VariableWidthHistogramAggregate | WeightedAvgAggregate

export type AggregateBase = {
  meta?: Common.Metadata;
}

export type AggregateOrder = Record<string, Common.SortOrder> | Record<string, Common.SortOrder>[]

export type Aggregation = {
  meta?: Common.Metadata;
  name?: string;
}

export type AggregationContainer = {
  meta?: Common.Metadata;
} & ({
  adjacency_matrix: AdjacencyMatrixAggregation;
} | {
  auto_date_histogram: AutoDateHistogramAggregation;
} | {
  avg: AverageAggregation;
} | {
  avg_bucket: AverageBucketAggregation;
} | {
  boxplot: BoxplotAggregation;
} | {
  bucket_script: BucketScriptAggregation;
} | {
  bucket_selector: BucketSelectorAggregation;
} | {
  bucket_sort: BucketSortAggregation;
} | {
  cardinality: CardinalityAggregation;
} | {
  children: ChildrenAggregation;
} | {
  composite: CompositeAggregation;
} | {
  cumulative_cardinality: CumulativeCardinalityAggregation;
} | {
  cumulative_sum: CumulativeSumAggregation;
} | {
  date_histogram: DateHistogramAggregation;
} | {
  date_range: DateRangeAggregation;
} | {
  derivative: DerivativeAggregation;
} | {
  diversified_sampler: DiversifiedSamplerAggregation;
} | {
  extended_stats: ExtendedStatsAggregation;
} | {
  extended_stats_bucket: ExtendedStatsBucketAggregation;
} | {
  filter: Common_QueryDsl.QueryContainer;
} | {
  filters: FiltersAggregation;
} | {
  geo_bounds: GeoBoundsAggregation;
} | {
  geo_centroid: GeoCentroidAggregation;
} | {
  geo_distance: GeoDistanceAggregation;
} | {
  geohash_grid: GeoHashGridAggregation;
} | {
  geotile_grid: GeoTileGridAggregation;
} | {
  global: GlobalAggregation;
} | {
  histogram: HistogramAggregation;
} | {
  ip_range: IpRangeAggregation;
} | {
  matrix_stats: MatrixStatsAggregation;
} | {
  max: MaxAggregation;
} | {
  max_bucket: MaxBucketAggregation;
} | {
  median_absolute_deviation: MedianAbsoluteDeviationAggregation;
} | {
  min: MinAggregation;
} | {
  min_bucket: MinBucketAggregation;
} | {
  missing: MissingAggregation;
} | {
  moving_avg: MovingAverageAggregation;
} | {
  moving_percentiles: MovingPercentilesAggregation;
} | {
  moving_fn: MovingFunctionAggregation;
} | {
  multi_terms: MultiTermsAggregation;
} | {
  nested: NestedAggregation;
} | {
  normalize: NormalizeAggregation;
} | {
  parent: ParentAggregation;
} | {
  percentile_ranks: PercentileRanksAggregation;
} | {
  percentiles: PercentilesAggregation;
} | {
  percentiles_bucket: PercentilesBucketAggregation;
} | {
  range: RangeAggregation;
} | {
  rare_terms: RareTermsAggregation;
} | {
  rate: RateAggregation;
} | {
  reverse_nested: ReverseNestedAggregation;
} | {
  sampler: SamplerAggregation;
} | {
  scripted_metric: ScriptedMetricAggregation;
} | {
  serial_diff: SerialDifferencingAggregation;
} | {
  significant_terms: SignificantTermsAggregation;
} | {
  significant_text: SignificantTextAggregation;
} | {
  stats: StatsAggregation;
} | {
  stats_bucket: StatsBucketAggregation;
} | {
  sum: SumAggregation;
} | {
  sum_bucket: SumBucketAggregation;
} | {
  terms: TermsAggregation;
} | {
  top_hits: TopHitsAggregation;
} | {
  t_test: TTestAggregation;
} | {
  value_count: ValueCountAggregation;
} | {
  weighted_avg: WeightedAverageAggregation;
} | {
  variable_width_histogram: VariableWidthHistogramAggregation;
})

export type AggregationRange = {
  from?: number | string | undefined;
  key?: string;
  to?: number | string | undefined;
}

export type ArrayPercentilesItem = {
  key: string;
  value: number | undefined;
  value_as_string?: string;
}

export type AutoDateHistogramAggregate = MultiBucketAggregateBaseDateHistogramBucket & {
  interval: Common.DurationLarge;
}

export type AutoDateHistogramAggregation = BucketAggregationBase & {
  buckets?: number;
  field?: Common.Field;
  format?: string;
  minimum_interval?: MinimumInterval;
  missing?: Common.DateTime;
  offset?: string;
  params?: Record<string, any>;
  script?: Common.Script;
  time_zone?: Common.TimeZone;
}

export type AverageAggregation = FormatMetricAggregationBase & Record<string, any>

export type AverageBucketAggregation = PipelineAggregationBase & Record<string, any>

export type AvgAggregate = SingleMetricAggregateBase & Record<string, any>

export type BoxPlotAggregate = AggregateBase & {
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

export type BoxplotAggregation = MetricAggregationBase & {
  compression?: number;
}

export type BucketAggregationBase = Aggregation & {
  aggregations?: Record<string, AggregationContainer>;
  aggs?: Record<string, AggregationContainer>;
}

export type BucketMetricValueAggregate = SingleMetricAggregateBase & {
  keys: string[];
}

export type BucketPathAggregation = Aggregation & {
  buckets_path?: BucketsPath;
}

export type Buckets = Record<string, TBucket> | TBucket[]

export type BucketScriptAggregation = PipelineAggregationBase & {
  script?: Common.Script;
}

export type BucketSelectorAggregation = PipelineAggregationBase & {
  script?: Common.Script;
}

export type BucketSortAggregation = Aggregation & {
  from?: number;
  gap_policy?: GapPolicy;
  size?: number;
  sort?: Common.Sort;
}

export type BucketsPath = string | string[] | Record<string, string>

export type BucketsQueryContainer = Buckets & (Record<string, Common_QueryDsl.QueryContainer> | Common_QueryDsl.QueryContainer[])

export type CalendarInterval = 'second' | '1s' | 'minute' | '1m' | 'hour' | '1h' | 'day' | '1d' | 'week' | '1w' | 'month' | '1M' | 'quarter' | '1q' | 'year' | '1Y'

export type CardinalityAggregate = AggregateBase & {
  value: number;
}

export type CardinalityAggregation = MetricAggregationBase & {
  execution_hint?: CardinalityExecutionMode;
  precision_threshold?: number;
  rehash?: boolean;
}

export type CardinalityExecutionMode = 'direct' | 'global_ordinals'

export type ChildrenAggregate = SingleBucketAggregateBase & Record<string, any>

export type ChildrenAggregation = BucketAggregationBase & {
  type?: Common.RelationName;
}

export type ChiSquareHeuristic = {
  background_is_superset: boolean;
  include_negatives: boolean;
}

export type CompositeAggregate = MultiBucketAggregateBaseCompositeBucket & {
  after_key?: CompositeAggregateKey;
}

export type CompositeAggregateKey = Record<string, Common.FieldValue>

export type CompositeAggregation = BucketAggregationBase & {
  after?: CompositeAggregateKey;
  size?: number;
  sources?: Record<string, CompositeAggregationSource>[];
}

export type CompositeAggregationSource = {
  date_histogram?: CompositeDateHistogramAggregationSource;
  geotile_grid?: CompositeGeoTileGridAggregationSource;
  histogram?: CompositeHistogramAggregationSource;
  terms?: CompositeTermsAggregationSource;
}

export type CompositeBucket = MultiBucketBase & {
  key: CompositeAggregateKey;
}

export type CompositeDateHistogramAggregationSource = CompositeValuesSource & {
  calendar_interval?: Common.DurationLarge;
  fixed_interval?: Common.DurationLarge;
  format?: string;
  offset?: Common.Duration;
  time_zone?: Common.TimeZone;
}

export type CompositeGeoTileGridAggregationSource = CompositeValuesSource & {
  bounds?: Common.GeoBounds;
  precision?: number;
}

export type CompositeHistogramAggregationSource = CompositeValuesSource & {
  interval: number;
}

export type CompositeTermsAggregationSource = CompositeValuesSource & Record<string, any>

export type CompositeValuesSource = {
  field?: Common.Field;
  missing_bucket?: boolean;
  missing_order?: MissingOrder;
  order?: Common.SortOrder;
  script?: Common.Script;
  value_type?: ValueType;
}

export type CumulativeCardinalityAggregate = AggregateBase & {
  value: number;
  value_as_string?: string;
}

export type CumulativeCardinalityAggregation = PipelineAggregationBase & Record<string, any>

export type CumulativeSumAggregation = PipelineAggregationBase & Record<string, any>

export type DateHistogramAggregate = MultiBucketAggregateBaseDateHistogramBucket & Record<string, any>

export type DateHistogramAggregation = BucketAggregationBase & {
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
  order?: HistogramOrder;
  params?: Record<string, any>;
  script?: Common.Script;
  time_zone?: Common.TimeZone;
}

export type DateHistogramBucket = MultiBucketBase & {
  key: Common.EpochTimeUnitMillis;
  key_as_string?: string;
}

export type DateRangeAggregate = RangeAggregateBase & Record<string, any>

export type DateRangeAggregation = BucketAggregationBase & {
  field?: Common.Field;
  format?: string;
  keyed?: boolean;
  missing?: Common.FieldValue;
  ranges?: DateRangeExpression[];
  time_zone?: Common.TimeZone;
}

export type DateRangeExpression = {
  from?: FieldDateMath;
  key?: string;
  to?: FieldDateMath;
}

export type DerivativeAggregate = SingleMetricAggregateBase & {
  normalized_value?: number;
  normalized_value_as_string?: string;
}

export type DerivativeAggregation = PipelineAggregationBase & Record<string, any>

export type DiversifiedSamplerAggregation = BucketAggregationBase & {
  execution_hint?: SamplerAggregationExecutionHint;
  field?: Common.Field;
  max_docs_per_value?: number;
  script?: Common.Script;
  shard_size?: number;
}

export type DoubleTermsAggregate = TermsAggregateBaseDoubleTermsBucket & Record<string, any>

export type DoubleTermsBucket = TermsBucketBase & {
  key: number;
  key_as_string?: string;
}

export type EwmaModelSettings = {
  alpha?: number;
}

export type EwmaMovingAverageAggregation = MovingAverageAggregationBase & {
  model: 'ewma';
  settings: EwmaModelSettings;
}

export type ExtendedBounds = {
  max: T;
  min: T;
}

export type ExtendedBoundsDouble = ExtendedBounds & {
  max?: number;
  min?: number;
}

export type ExtendedBoundsFieldDateMath = ExtendedBounds & {
  max?: FieldDateMath;
  min?: FieldDateMath;
}

export type ExtendedStatsAggregate = ExtendedStatsAggregateBase & Record<string, any>

export type ExtendedStatsAggregateBase = StatsAggregateBase & {
  std_deviation: number | undefined;
  std_deviation_as_string?: string;
  std_deviation_bounds?: StandardDeviationBounds;
  std_deviation_bounds_as_string?: StandardDeviationBoundsAsString;
  std_deviation_population: number | undefined;
  std_deviation_sampling: number | undefined;
  sum_of_squares: number | undefined;
  sum_of_squares_as_string?: string;
  variance: number | undefined;
  variance_as_string?: string;
  variance_population: number | undefined;
  variance_population_as_string?: string;
  variance_sampling: number | undefined;
  variance_sampling_as_string?: string;
}

export type ExtendedStatsAggregation = FormatMetricAggregationBase & {
  sigma?: number;
}

export type ExtendedStatsBucketAggregate = ExtendedStatsAggregateBase & Record<string, any>

export type ExtendedStatsBucketAggregation = PipelineAggregationBase & {
  sigma?: number;
}

export type FieldDateMath = Common.DateMath | number

export type FilterAggregate = SingleBucketAggregateBase & Record<string, any>

export type FiltersAggregate = MultiBucketAggregateBaseFiltersBucket & Record<string, any>

export type FiltersAggregation = BucketAggregationBase & {
  filters?: BucketsQueryContainer;
  keyed?: boolean;
  other_bucket?: boolean;
  other_bucket_key?: string;
}

export type FiltersBucket = MultiBucketBase & Record<string, any>

export type FormatMetricAggregationBase = MetricAggregationBase & {
  format?: string;
}

export type FormattableMetricAggregation = MetricAggregationBase & {
  format?: string;
}

export type GapPolicy = 'insert_zeros' | 'keep_values' | 'skip'

export type GeoBoundsAggregate = AggregateBase & {
  bounds?: Common.GeoBounds;
}

export type GeoBoundsAggregation = MetricAggregationBase & {
  wrap_longitude?: boolean;
}

export type GeoCentroidAggregate = AggregateBase & {
  count: number;
  location?: Common.GeoLocation;
}

export type GeoCentroidAggregation = MetricAggregationBase & {
  count?: number;
  location?: Common.GeoLocation;
}

export type GeoDistanceAggregate = RangeAggregateBase & Record<string, any>

export type GeoDistanceAggregation = BucketAggregationBase & {
  distance_type?: Common.GeoDistanceType;
  field?: Common.Field;
  origin?: Common.GeoLocation;
  ranges?: AggregationRange[];
  unit?: Common.DistanceUnit;
}

export type GeoHashGridAggregate = MultiBucketAggregateBaseGeoHashGridBucket & Record<string, any>

export type GeoHashGridAggregation = BucketAggregationBase & {
  bounds?: Common.GeoBounds;
  field?: Common.Field;
  precision?: Common.GeoHashPrecision;
  shard_size?: number;
  size?: number;
}

export type GeoHashGridBucket = MultiBucketBase & {
  key: Common.GeoHash;
}

export type GeoTileGridAggregate = MultiBucketAggregateBaseGeoTileGridBucket & Record<string, any>

export type GeoTileGridAggregation = BucketAggregationBase & {
  bounds?: Common.GeoBounds;
  field?: Common.Field;
  precision?: Common.GeoTilePrecision;
  shard_size?: number;
  size?: number;
}

export type GeoTileGridBucket = MultiBucketBase & {
  key: Common.GeoTile;
}

export type GlobalAggregate = SingleBucketAggregateBase & Record<string, any>

export type GlobalAggregation = BucketAggregationBase & Record<string, any>

export type GoogleNormalizedDistanceHeuristic = {
  background_is_superset?: boolean;
}

export type HdrMethod = {
  number_of_significant_value_digits?: number;
}

export type HdrPercentileRanksAggregate = PercentilesAggregateBase & Record<string, any>

export type HdrPercentilesAggregate = PercentilesAggregateBase & Record<string, any>

export type HistogramAggregate = MultiBucketAggregateBaseHistogramBucket & Record<string, any>

export type HistogramAggregation = BucketAggregationBase & {
  extended_bounds?: ExtendedBoundsDouble;
  field?: Common.Field;
  format?: string;
  hard_bounds?: ExtendedBoundsDouble;
  interval?: number;
  keyed?: boolean;
  min_doc_count?: number;
  missing?: number;
  offset?: number;
  order?: HistogramOrder;
  script?: Common.Script;
}

export type HistogramBucket = MultiBucketBase & {
  key: number;
  key_as_string?: string;
}

export type HistogramOrder = {
  _count?: Common.SortOrder;
  _key?: Common.SortOrder;
}

export type HoltLinearModelSettings = {
  alpha?: number;
  beta?: number;
}

export type HoltMovingAverageAggregation = MovingAverageAggregationBase & {
  model: 'holt';
  settings: HoltLinearModelSettings;
}

export type HoltWintersModelSettings = {
  alpha?: number;
  beta?: number;
  gamma?: number;
  pad?: boolean;
  period?: number;
  type?: HoltWintersType;
}

export type HoltWintersMovingAverageAggregation = MovingAverageAggregationBase & {
  model: 'holt_winters';
  settings: HoltWintersModelSettings;
}

export type HoltWintersType = 'add' | 'mult'

export type IpRangeAggregate = MultiBucketAggregateBaseIpRangeBucket & Record<string, any>

export type IpRangeAggregation = BucketAggregationBase & {
  field?: Common.Field;
  ranges?: IpRangeAggregationRange[];
}

export type IpRangeAggregationRange = {
  from?: undefined | string;
  mask?: string;
  to?: undefined | string;
}

export type IpRangeBucket = MultiBucketBase & {
  from?: string;
  key?: string;
  to?: string;
}

export type KeyedPercentiles = Record<string, number | string | undefined>

export type LinearMovingAverageAggregation = MovingAverageAggregationBase & {
  model: 'linear';
  settings: Common.EmptyObject;
}

export type LongRareTermsAggregate = MultiBucketAggregateBaseLongRareTermsBucket & Record<string, any>

export type LongRareTermsBucket = MultiBucketBase & {
  key: number;
  key_as_string?: string;
}

export type LongTermsAggregate = TermsAggregateBaseLongTermsBucket & Record<string, any>

export type LongTermsBucket = TermsBucketBase & {
  key: LongTermsBucketKey;
  key_as_string?: string;
}

export type LongTermsBucketKey = number | string

export type MatrixAggregation = Aggregation & {
  fields?: Common.Fields;
  missing?: Record<string, number>;
}

export type MatrixStatsAggregate = AggregateBase & {
  doc_count: number;
  fields?: MatrixStatsFields[];
}

export type MatrixStatsAggregation = MatrixAggregation & {
  mode?: Common.SortMode;
}

export type MatrixStatsFields = {
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

export type MedianAbsoluteDeviationAggregation = FormatMetricAggregationBase & {
  compression?: number;
}

export type MetricAggregationBase = Aggregation & {
  field?: Common.Field;
  missing?: Common.FieldValue;
  script?: Common.Script;
}

export type MinAggregate = SingleMetricAggregateBase & Record<string, any>

export type MinAggregation = FormatMetricAggregationBase & Record<string, any>

export type MinBucketAggregation = PipelineAggregationBase & Record<string, any>

export type MinimumInterval = 'day' | 'hour' | 'minute' | 'month' | 'second' | 'year'

export type MissingAggregate = SingleBucketAggregateBase & Record<string, any>

export type MissingAggregation = BucketAggregationBase & {
  field?: Common.Field;
  missing?: Common.FieldValue;
}

export type MissingOrder = 'default' | 'first' | 'last'

export type MovingAverageAggregation = LinearMovingAverageAggregation | SimpleMovingAverageAggregation | EwmaMovingAverageAggregation | HoltMovingAverageAggregation | HoltWintersMovingAverageAggregation

export type MovingAverageAggregationBase = PipelineAggregationBase & {
  minimize?: boolean;
  predict?: number;
  window?: number;
}

export type MovingFunctionAggregation = PipelineAggregationBase & {
  script?: string;
  shift?: number;
  window?: number;
}

export type MovingPercentilesAggregation = PipelineAggregationBase & {
  keyed?: boolean;
  shift?: number;
  window?: number;
}

export type MultiBucketAggregateBase = AggregateBase & {
  buckets: Buckets & (Record<string, TBucket> | TBucket[]);
}

export type MultiBucketAggregateBaseAdjacencyMatrixBucket = MultiBucketAggregateBase & {
  buckets: Buckets & (Record<string, AdjacencyMatrixBucket> | AdjacencyMatrixBucket[]);
}

export type MultiBucketAggregateBaseCompositeBucket = MultiBucketAggregateBase & {
  buckets: Buckets & (Record<string, CompositeBucket> | CompositeBucket[]);
}

export type MultiBucketAggregateBaseDateHistogramBucket = MultiBucketAggregateBase & {
  buckets: Buckets & (Record<string, DateHistogramBucket> | DateHistogramBucket[]);
}

export type MultiBucketAggregateBaseFiltersBucket = MultiBucketAggregateBase & {
  buckets: Buckets & (Record<string, FiltersBucket> | FiltersBucket[]);
}

export type MultiBucketAggregateBaseGeoHashGridBucket = MultiBucketAggregateBase & {
  buckets: Buckets & (Record<string, GeoHashGridBucket> | GeoHashGridBucket[]);
}

export type MultiBucketAggregateBaseGeoTileGridBucket = MultiBucketAggregateBase & {
  buckets: Buckets & (Record<string, GeoTileGridBucket> | GeoTileGridBucket[]);
}

export type MultiBucketAggregateBaseHistogramBucket = MultiBucketAggregateBase & {
  buckets: Buckets & (Record<string, HistogramBucket> | HistogramBucket[]);
}

export type MultiBucketAggregateBaseIpRangeBucket = MultiBucketAggregateBase & {
  buckets: Buckets & (Record<string, IpRangeBucket> | IpRangeBucket[]);
}

export type MultiBucketAggregateBaseLongRareTermsBucket = MultiBucketAggregateBase & {
  buckets?: Buckets & (Record<string, LongRareTermsBucket> | LongRareTermsBucket[]);
}

export type MultiBucketAggregateBaseRangeBucket = MultiBucketAggregateBase & {
  buckets: Buckets & (Record<string, RangeBucket> | RangeBucket[]);
}

export type MultiBucketAggregateBaseStringRareTermsBucket = MultiBucketAggregateBase & {
  buckets?: Buckets & (Record<string, StringRareTermsBucket> | StringRareTermsBucket[]);
}

export type MultiBucketAggregateBaseVariableWidthHistogramBucket = MultiBucketAggregateBase & {
  buckets: Buckets & (Record<string, VariableWidthHistogramBucket> | VariableWidthHistogramBucket[]);
}

export type MultiBucketAggregateBaseVoid = MultiBucketAggregateBase & {
  buckets?: Buckets & (Record<string, Common.Void> | Common.Void[]);
}

export type MultiBucketBase = {
  doc_count: number;
}

export type MultiTermLookup = {
  field: Common.Field;
  missing?: Common.FieldValue;
}

export type MultiTermsAggregate = TermsAggregateBaseMultiTermsBucket & Record<string, any>

export type MultiTermsAggregation = BucketAggregationBase & {
  collect_mode?: TermsAggregationCollectMode;
  min_doc_count?: number;
  order?: HistogramOrder;
  shard_min_doc_count?: number;
  shard_size?: number;
  show_term_doc_count_error?: boolean;
  size?: number;
  terms: MultiTermLookup[];
}

export type MultiTermsBucket = MultiBucketBase & {
  doc_count_error_upper_bound?: number;
  key: Common.FieldValue[];
  key_as_string?: string;
}

export type MutualInformationHeuristic = {
  background_is_superset?: boolean;
  include_negatives?: boolean;
}

export type NestedAggregate = SingleBucketAggregateBase & Record<string, any>

export type NestedAggregation = BucketAggregationBase & {
  path?: Common.Field;
}

export type NormalizeAggregation = PipelineAggregationBase & {
  method?: NormalizeMethod;
}

export type NormalizeMethod = 'mean' | 'percent_of_sum' | 'rescale_0_1' | 'rescale_0_100' | 'softmax' | 'z-score'

export type ParentAggregate = SingleBucketAggregateBase & Record<string, any>

export type ParentAggregation = BucketAggregationBase & {
  type?: Common.RelationName;
}

export type PercentageScoreHeuristic = Record<string, any>

export type PercentileRanksAggregation = FormatMetricAggregationBase & {
  hdr?: HdrMethod;
  keyed?: boolean;
  tdigest?: TDigest;
  values?: number[];
}

export type Percentiles = KeyedPercentiles | ArrayPercentilesItem[]

export type PercentilesAggregateBase = AggregateBase & {
  values: Percentiles;
}

export type PercentilesAggregation = FormatMetricAggregationBase & {
  hdr?: HdrMethod;
  keyed?: boolean;
  percents?: number[];
  tdigest?: TDigest;
}

export type PercentilesBucketAggregate = PercentilesAggregateBase & Record<string, any>

export type PercentilesBucketAggregation = PipelineAggregationBase & {
  percents?: number[];
}

export type PipelineAggregationBase = BucketPathAggregation & {
  format?: string;
  gap_policy?: GapPolicy;
}

export type RangeAggregate = RangeAggregateBase & Record<string, any>

export type RangeAggregateBase = MultiBucketAggregateBaseRangeBucket & Record<string, any>

export type RangeAggregation = BucketAggregationBase & {
  field?: Common.Field;
  format?: string;
  keyed?: boolean;
  missing?: number;
  ranges?: AggregationRange[];
  script?: Common.Script;
}

export type RangeBucket = MultiBucketBase & {
  from?: number;
  from_as_string?: string;
  key?: string;
  to?: number;
  to_as_string?: string;
}

export type RareTermsAggregation = BucketAggregationBase & {
  exclude?: TermsExclude;
  field?: Common.Field;
  include?: TermsInclude;
  max_doc_count?: number;
  missing?: Common.FieldValue;
  precision?: number;
  value_type?: string;
}

export type RateAggregate = AggregateBase & {
  value: number;
  value_as_string?: string;
}

export type RateAggregation = FormatMetricAggregationBase & {
  mode?: RateMode;
  unit?: CalendarInterval;
}

export type RateMode = 'sum' | 'value_count'

export type ReverseNestedAggregate = SingleBucketAggregateBase & Record<string, any>

export type ReverseNestedAggregation = BucketAggregationBase & {
  path?: Common.Field;
}

export type SamplerAggregate = SingleBucketAggregateBase & Record<string, any>

export type SamplerAggregation = BucketAggregationBase & {
  shard_size?: number;
}

export type SamplerAggregationExecutionHint = 'bytes_hash' | 'global_ordinals' | 'map'

export type ScriptedHeuristic = {
  script: Common.Script;
}

export type ScriptedMetricAggregate = AggregateBase & {
  value: any;
}

export type ScriptedMetricAggregation = MetricAggregationBase & {
  combine_script?: Common.Script;
  init_script?: Common.Script;
  map_script?: Common.Script;
  params?: Record<string, any>;
  reduce_script?: Common.Script;
}

export type SerialDifferencingAggregation = PipelineAggregationBase & {
  lag?: number;
}

export type SignificantLongTermsAggregate = SignificantTermsAggregateBaseSignificantLongTermsBucket & Record<string, any>

export type SignificantLongTermsBucket = SignificantTermsBucketBase & {
  key: number;
  key_as_string?: string;
}

export type SignificantStringTermsAggregate = SignificantTermsAggregateBaseSignificantStringTermsBucket & Record<string, any>

export type SignificantStringTermsBucket = SignificantTermsBucketBase & {
  key: string;
}

export type SignificantTermsAggregateBase = MultiBucketAggregateBase & {
  bg_count?: number;
  doc_count?: number;
}

export type SignificantTermsAggregateBaseSignificantLongTermsBucket = SignificantTermsAggregateBase & {
  buckets?: Buckets & (Record<string, SignificantLongTermsBucket> | SignificantLongTermsBucket[]);
}

export type SignificantTermsAggregateBaseSignificantStringTermsBucket = SignificantTermsAggregateBase & {
  buckets?: Buckets & (Record<string, SignificantStringTermsBucket> | SignificantStringTermsBucket[]);
}

export type SignificantTermsAggregateBaseVoid = SignificantTermsAggregateBase & {
  buckets?: Buckets & (Record<string, Common.Void> | Common.Void[]);
}

export type SignificantTermsAggregation = BucketAggregationBase & {
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

export type SignificantTermsBucketBase = MultiBucketBase & {
  bg_count: number;
  score: number;
}

export type SignificantTextAggregation = BucketAggregationBase & {
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

export type SimpleMovingAverageAggregation = MovingAverageAggregationBase & {
  model: 'simple';
  settings: Common.EmptyObject;
}

export type SimpleValueAggregate = SingleMetricAggregateBase & Record<string, any>

export type SingleBucketAggregateBase = AggregateBase & {
  doc_count: number;
  [key: string]: any | Aggregate;
}

export type SingleMetricAggregateBase = AggregateBase & {
  value: number | undefined;
  value_as_string?: string;
}

export type StandardDeviationBounds = {
  lower: number | undefined;
  lower_population: number | undefined;
  lower_sampling: number | undefined;
  upper: number | undefined;
  upper_population: number | undefined;
  upper_sampling: number | undefined;
}

export type StandardDeviationBoundsAsString = {
  lower: string;
  lower_population: string;
  lower_sampling: string;
  upper: string;
  upper_population: string;
  upper_sampling: string;
}

export type StatsAggregate = StatsAggregateBase & Record<string, any>

export type StatsAggregateBase = AggregateBase & {
  avg: number | undefined;
  avg_as_string?: string;
  count: number;
  max: number | undefined;
  max_as_string?: string;
  min: number | undefined;
  min_as_string?: string;
  sum: number;
  sum_as_string?: string;
}

export type StatsAggregation = FormatMetricAggregationBase & Record<string, any>

export type StatsBucketAggregate = StatsAggregateBase & Record<string, any>

export type StatsBucketAggregation = PipelineAggregationBase & Record<string, any>

export type StringRareTermsAggregate = MultiBucketAggregateBaseStringRareTermsBucket & Record<string, any>

export type StringRareTermsBucket = MultiBucketBase & {
  key: string;
}

export type StringTermsAggregate = TermsAggregateBaseStringTermsBucket & Record<string, any>

export type StringTermsBucket = TermsBucketBase & {
  key: string;
}

export type SumAggregate = SingleMetricAggregateBase & Record<string, any>

export type SumAggregation = FormatMetricAggregationBase & Record<string, any>

export type SumBucketAggregation = PipelineAggregationBase & Record<string, any>

export type T = Record<string, any>

export type TBucket = Record<string, any>

export type TDigest = {
  compression?: number;
}

export type TDigestPercentileRanksAggregate = PercentilesAggregateBase & Record<string, any>

export type TDigestPercentilesAggregate = PercentilesAggregateBase & Record<string, any>

export type TermsAggregateBase = MultiBucketAggregateBase & {
  doc_count_error_upper_bound?: number;
  sum_other_doc_count?: number;
}

export type TermsAggregateBaseDoubleTermsBucket = TermsAggregateBase & {
  buckets?: Buckets & (Record<string, DoubleTermsBucket> | DoubleTermsBucket[]);
}

export type TermsAggregateBaseLongTermsBucket = TermsAggregateBase & {
  buckets?: Buckets & (Record<string, LongTermsBucket> | LongTermsBucket[]);
}

export type TermsAggregateBaseMultiTermsBucket = TermsAggregateBase & {
  buckets?: Buckets & (Record<string, MultiTermsBucket> | MultiTermsBucket[]);
}

export type TermsAggregateBaseStringTermsBucket = TermsAggregateBase & {
  buckets?: Buckets & (Record<string, StringTermsBucket> | StringTermsBucket[]);
}

export type TermsAggregateBaseVoid = TermsAggregateBase & {
  buckets?: Buckets & (Record<string, Common.Void> | Common.Void[]);
}

export type TermsAggregation = BucketAggregationBase & {
  collect_mode?: TermsAggregationCollectMode;
  exclude?: TermsExclude;
  execution_hint?: TermsAggregationExecutionHint;
  field?: Common.Field;
  format?: string;
  include?: TermsInclude;
  min_doc_count?: number;
  missing?: Common.FieldValue;
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

export type TermsBucketBase = MultiBucketBase & {
  doc_count_error?: number;
}

export type TermsExclude = string | string[]

export type TermsInclude = string | string[] | TermsPartition

export type TermsPartition = {
  num_partitions: number;
  partition: number;
}

export type TestPopulation = {
  field: Common.Field;
  filter?: Common_QueryDsl.QueryContainer;
  script?: Common.Script;
}

export type TopHitsAggregate = AggregateBase & {
  hits: Core_Search.HitsMetadataJsonValue;
}

export type TopHitsAggregation = MetricAggregationBase & {
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

export type TTestAggregate = AggregateBase & {
  value: number | undefined;
  value_as_string?: string;
}

export type TTestAggregation = Aggregation & {
  a?: TestPopulation;
  b?: TestPopulation;
  type?: TTestType;
}

export type TTestType = 'heteroscedastic' | 'homoscedastic' | 'paired'

export type UnmappedRareTermsAggregate = MultiBucketAggregateBaseVoid & Record<string, any>

export type UnmappedSignificantTermsAggregate = SignificantTermsAggregateBaseVoid & Record<string, any>

export type UnmappedTermsAggregate = TermsAggregateBaseVoid & Record<string, any>

export type ValueCountAggregate = SingleMetricAggregateBase & Record<string, any>

export type ValueCountAggregation = FormattableMetricAggregation & Record<string, any>

export type ValueType = 'boolean' | 'date' | 'date_nanos' | 'double' | 'geo_point' | 'ip' | 'long' | 'number' | 'numeric' | 'string'

export type VariableWidthHistogramAggregate = MultiBucketAggregateBaseVariableWidthHistogramBucket & Record<string, any>

export type VariableWidthHistogramAggregation = {
  buckets?: number;
  field?: Common.Field;
  initial_buffer?: number;
  shard_size?: number;
}

export type VariableWidthHistogramBucket = MultiBucketBase & {
  key: number;
  key_as_string?: string;
  max: number;
  max_as_string?: string;
  min: number;
  min_as_string?: string;
}

export type WeightedAverageAggregation = Aggregation & {
  format?: string;
  value?: WeightedAverageValue;
  value_type?: ValueType;
  weight?: WeightedAverageValue;
}

export type WeightedAverageValue = {
  field?: Common.Field;
  missing?: number;
  script?: Common.Script;
}

export type WeightedAvgAggregate = SingleMetricAggregateBase & Record<string, any>


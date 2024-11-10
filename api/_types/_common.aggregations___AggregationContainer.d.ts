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

import * as Common_AggregationsAdjacencyMatrixAggregation from './_common.aggregations___AdjacencyMatrixAggregation'
import * as Common_AggregationsAutoDateHistogramAggregation from './_common.aggregations___AutoDateHistogramAggregation'
import * as Common_AggregationsAverageAggregation from './_common.aggregations___AverageAggregation'
import * as Common_AggregationsAverageBucketAggregation from './_common.aggregations___AverageBucketAggregation'
import * as Common_AggregationsBoxplotAggregation from './_common.aggregations___BoxplotAggregation'
import * as Common_AggregationsBucketCorrelationAggregation from './_common.aggregations___BucketCorrelationAggregation'
import * as Common_AggregationsBucketKsAggregation from './_common.aggregations___BucketKsAggregation'
import * as Common_AggregationsBucketScriptAggregation from './_common.aggregations___BucketScriptAggregation'
import * as Common_AggregationsBucketSelectorAggregation from './_common.aggregations___BucketSelectorAggregation'
import * as Common_AggregationsBucketSortAggregation from './_common.aggregations___BucketSortAggregation'
import * as Common_AggregationsCardinalityAggregation from './_common.aggregations___CardinalityAggregation'
import * as Common_AggregationsCategorizeTextAggregation from './_common.aggregations___CategorizeTextAggregation'
import * as Common_AggregationsChildrenAggregation from './_common.aggregations___ChildrenAggregation'
import * as Common_AggregationsCompositeAggregation from './_common.aggregations___CompositeAggregation'
import * as Common_AggregationsCumulativeCardinalityAggregation from './_common.aggregations___CumulativeCardinalityAggregation'
import * as Common_AggregationsCumulativeSumAggregation from './_common.aggregations___CumulativeSumAggregation'
import * as Common_AggregationsDateHistogramAggregation from './_common.aggregations___DateHistogramAggregation'
import * as Common_AggregationsDateRangeAggregation from './_common.aggregations___DateRangeAggregation'
import * as Common_AggregationsDerivativeAggregation from './_common.aggregations___DerivativeAggregation'
import * as Common_AggregationsDiversifiedSamplerAggregation from './_common.aggregations___DiversifiedSamplerAggregation'
import * as Common_AggregationsExtendedStatsAggregation from './_common.aggregations___ExtendedStatsAggregation'
import * as Common_AggregationsExtendedStatsBucketAggregation from './_common.aggregations___ExtendedStatsBucketAggregation'
import * as Common_AggregationsFiltersAggregation from './_common.aggregations___FiltersAggregation'
import * as Common_AggregationsFrequentItemSetsAggregation from './_common.aggregations___FrequentItemSetsAggregation'
import * as Common_AggregationsGeoBoundsAggregation from './_common.aggregations___GeoBoundsAggregation'
import * as Common_AggregationsGeoCentroidAggregation from './_common.aggregations___GeoCentroidAggregation'
import * as Common_AggregationsGeoDistanceAggregation from './_common.aggregations___GeoDistanceAggregation'
import * as Common_AggregationsGeoHashGridAggregation from './_common.aggregations___GeoHashGridAggregation'
import * as Common_AggregationsGeohexGridAggregation from './_common.aggregations___GeohexGridAggregation'
import * as Common_AggregationsGeoLineAggregation from './_common.aggregations___GeoLineAggregation'
import * as Common_AggregationsGeoTileGridAggregation from './_common.aggregations___GeoTileGridAggregation'
import * as Common_AggregationsGlobalAggregation from './_common.aggregations___GlobalAggregation'
import * as Common_AggregationsHistogramAggregation from './_common.aggregations___HistogramAggregation'
import * as Common_AggregationsInferenceAggregation from './_common.aggregations___InferenceAggregation'
import * as Common_AggregationsIpPrefixAggregation from './_common.aggregations___IpPrefixAggregation'
import * as Common_AggregationsIpRangeAggregation from './_common.aggregations___IpRangeAggregation'
import * as Common_AggregationsMatrixStatsAggregation from './_common.aggregations___MatrixStatsAggregation'
import * as Common_AggregationsMaxAggregation from './_common.aggregations___MaxAggregation'
import * as Common_AggregationsMaxBucketAggregation from './_common.aggregations___MaxBucketAggregation'
import * as Common_AggregationsMedianAbsoluteDeviationAggregation from './_common.aggregations___MedianAbsoluteDeviationAggregation'
import * as Common_AggregationsMinAggregation from './_common.aggregations___MinAggregation'
import * as Common_AggregationsMinBucketAggregation from './_common.aggregations___MinBucketAggregation'
import * as Common_AggregationsMissingAggregation from './_common.aggregations___MissingAggregation'
import * as Common_AggregationsMovingAverageAggregation from './_common.aggregations___MovingAverageAggregation'
import * as Common_AggregationsMovingFunctionAggregation from './_common.aggregations___MovingFunctionAggregation'
import * as Common_AggregationsMovingPercentilesAggregation from './_common.aggregations___MovingPercentilesAggregation'
import * as Common_AggregationsMultiTermsAggregation from './_common.aggregations___MultiTermsAggregation'
import * as Common_AggregationsNestedAggregation from './_common.aggregations___NestedAggregation'
import * as Common_AggregationsNormalizeAggregation from './_common.aggregations___NormalizeAggregation'
import * as Common_AggregationsParentAggregation from './_common.aggregations___ParentAggregation'
import * as Common_AggregationsPercentileRanksAggregation from './_common.aggregations___PercentileRanksAggregation'
import * as Common_AggregationsPercentilesAggregation from './_common.aggregations___PercentilesAggregation'
import * as Common_AggregationsPercentilesBucketAggregation from './_common.aggregations___PercentilesBucketAggregation'
import * as Common_AggregationsRangeAggregation from './_common.aggregations___RangeAggregation'
import * as Common_AggregationsRareTermsAggregation from './_common.aggregations___RareTermsAggregation'
import * as Common_AggregationsRateAggregation from './_common.aggregations___RateAggregation'
import * as Common_AggregationsReverseNestedAggregation from './_common.aggregations___ReverseNestedAggregation'
import * as Common_AggregationsSamplerAggregation from './_common.aggregations___SamplerAggregation'
import * as Common_AggregationsScriptedMetricAggregation from './_common.aggregations___ScriptedMetricAggregation'
import * as Common_AggregationsSerialDifferencingAggregation from './_common.aggregations___SerialDifferencingAggregation'
import * as Common_AggregationsSignificantTermsAggregation from './_common.aggregations___SignificantTermsAggregation'
import * as Common_AggregationsSignificantTextAggregation from './_common.aggregations___SignificantTextAggregation'
import * as Common_AggregationsStatsAggregation from './_common.aggregations___StatsAggregation'
import * as Common_AggregationsStatsBucketAggregation from './_common.aggregations___StatsBucketAggregation'
import * as Common_AggregationsStringStatsAggregation from './_common.aggregations___StringStatsAggregation'
import * as Common_AggregationsSumAggregation from './_common.aggregations___SumAggregation'
import * as Common_AggregationsSumBucketAggregation from './_common.aggregations___SumBucketAggregation'
import * as Common_AggregationsTermsAggregation from './_common.aggregations___TermsAggregation'
import * as Common_AggregationsTopHitsAggregation from './_common.aggregations___TopHitsAggregation'
import * as Common_AggregationsTopMetricsAggregation from './_common.aggregations___TopMetricsAggregation'
import * as Common_AggregationsTTestAggregation from './_common.aggregations___TTestAggregation'
import * as Common_AggregationsValueCountAggregation from './_common.aggregations___ValueCountAggregation'
import * as Common_AggregationsVariableWidthHistogramAggregation from './_common.aggregations___VariableWidthHistogramAggregation'
import * as Common_AggregationsWeightedAverageAggregation from './_common.aggregations___WeightedAverageAggregation'
import * as Common_QueryDslQueryContainer from './_common.query_dsl___QueryContainer'
import * as CommonMetadata from './_common___Metadata'

export type undefined = {
  adjacency_matrix?: Common_AggregationsAdjacencyMatrixAggregation.undefined;
  aggregations?: Record<string, undefined>;
  auto_date_histogram?: Common_AggregationsAutoDateHistogramAggregation.undefined;
  avg?: Common_AggregationsAverageAggregation.undefined;
  avg_bucket?: Common_AggregationsAverageBucketAggregation.undefined;
  boxplot?: Common_AggregationsBoxplotAggregation.undefined;
  bucket_correlation?: Common_AggregationsBucketCorrelationAggregation.undefined;
  bucket_count_ks_test?: Common_AggregationsBucketKsAggregation.undefined;
  bucket_script?: Common_AggregationsBucketScriptAggregation.undefined;
  bucket_selector?: Common_AggregationsBucketSelectorAggregation.undefined;
  bucket_sort?: Common_AggregationsBucketSortAggregation.undefined;
  cardinality?: Common_AggregationsCardinalityAggregation.undefined;
  categorize_text?: Common_AggregationsCategorizeTextAggregation.undefined;
  children?: Common_AggregationsChildrenAggregation.undefined;
  composite?: Common_AggregationsCompositeAggregation.undefined;
  cumulative_cardinality?: Common_AggregationsCumulativeCardinalityAggregation.undefined;
  cumulative_sum?: Common_AggregationsCumulativeSumAggregation.undefined;
  date_histogram?: Common_AggregationsDateHistogramAggregation.undefined;
  date_range?: Common_AggregationsDateRangeAggregation.undefined;
  derivative?: Common_AggregationsDerivativeAggregation.undefined;
  diversified_sampler?: Common_AggregationsDiversifiedSamplerAggregation.undefined;
  extended_stats?: Common_AggregationsExtendedStatsAggregation.undefined;
  extended_stats_bucket?: Common_AggregationsExtendedStatsBucketAggregation.undefined;
  filter?: Common_QueryDslQueryContainer.undefined;
  filters?: Common_AggregationsFiltersAggregation.undefined;
  frequent_item_sets?: Common_AggregationsFrequentItemSetsAggregation.undefined;
  geo_bounds?: Common_AggregationsGeoBoundsAggregation.undefined;
  geo_centroid?: Common_AggregationsGeoCentroidAggregation.undefined;
  geo_distance?: Common_AggregationsGeoDistanceAggregation.undefined;
  geo_line?: Common_AggregationsGeoLineAggregation.undefined;
  geohash_grid?: Common_AggregationsGeoHashGridAggregation.undefined;
  geohex_grid?: Common_AggregationsGeohexGridAggregation.undefined;
  geotile_grid?: Common_AggregationsGeoTileGridAggregation.undefined;
  global?: Common_AggregationsGlobalAggregation.undefined;
  histogram?: Common_AggregationsHistogramAggregation.undefined;
  inference?: Common_AggregationsInferenceAggregation.undefined;
  ip_prefix?: Common_AggregationsIpPrefixAggregation.undefined;
  ip_range?: Common_AggregationsIpRangeAggregation.undefined;
  line?: Common_AggregationsGeoLineAggregation.undefined;
  matrix_stats?: Common_AggregationsMatrixStatsAggregation.undefined;
  max?: Common_AggregationsMaxAggregation.undefined;
  max_bucket?: Common_AggregationsMaxBucketAggregation.undefined;
  median_absolute_deviation?: Common_AggregationsMedianAbsoluteDeviationAggregation.undefined;
  meta?: CommonMetadata.undefined;
  min?: Common_AggregationsMinAggregation.undefined;
  min_bucket?: Common_AggregationsMinBucketAggregation.undefined;
  missing?: Common_AggregationsMissingAggregation.undefined;
  moving_avg?: Common_AggregationsMovingAverageAggregation.undefined;
  moving_fn?: Common_AggregationsMovingFunctionAggregation.undefined;
  moving_percentiles?: Common_AggregationsMovingPercentilesAggregation.undefined;
  multi_terms?: Common_AggregationsMultiTermsAggregation.undefined;
  nested?: Common_AggregationsNestedAggregation.undefined;
  normalize?: Common_AggregationsNormalizeAggregation.undefined;
  parent?: Common_AggregationsParentAggregation.undefined;
  percentile_ranks?: Common_AggregationsPercentileRanksAggregation.undefined;
  percentiles?: Common_AggregationsPercentilesAggregation.undefined;
  percentiles_bucket?: Common_AggregationsPercentilesBucketAggregation.undefined;
  range?: Common_AggregationsRangeAggregation.undefined;
  rare_terms?: Common_AggregationsRareTermsAggregation.undefined;
  rate?: Common_AggregationsRateAggregation.undefined;
  reverse_nested?: Common_AggregationsReverseNestedAggregation.undefined;
  sampler?: Common_AggregationsSamplerAggregation.undefined;
  scripted_metric?: Common_AggregationsScriptedMetricAggregation.undefined;
  serial_diff?: Common_AggregationsSerialDifferencingAggregation.undefined;
  significant_terms?: Common_AggregationsSignificantTermsAggregation.undefined;
  significant_text?: Common_AggregationsSignificantTextAggregation.undefined;
  stats?: Common_AggregationsStatsAggregation.undefined;
  stats_bucket?: Common_AggregationsStatsBucketAggregation.undefined;
  string_stats?: Common_AggregationsStringStatsAggregation.undefined;
  sum?: Common_AggregationsSumAggregation.undefined;
  sum_bucket?: Common_AggregationsSumBucketAggregation.undefined;
  t_test?: Common_AggregationsTTestAggregation.undefined;
  terms?: Common_AggregationsTermsAggregation.undefined;
  top_hits?: Common_AggregationsTopHitsAggregation.undefined;
  top_metrics?: Common_AggregationsTopMetricsAggregation.undefined;
  value_count?: Common_AggregationsValueCountAggregation.undefined;
  variable_width_histogram?: Common_AggregationsVariableWidthHistogramAggregation.undefined;
  weighted_avg?: Common_AggregationsWeightedAverageAggregation.undefined;
}


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

import * as Common_AggregationsAdjacencyMatrixAggregate from './_common.aggregations___AdjacencyMatrixAggregate'
import * as Common_AggregationsAutoDateHistogramAggregate from './_common.aggregations___AutoDateHistogramAggregate'
import * as Common_AggregationsAvgAggregate from './_common.aggregations___AvgAggregate'
import * as Common_AggregationsBoxPlotAggregate from './_common.aggregations___BoxPlotAggregate'
import * as Common_AggregationsBucketMetricValueAggregate from './_common.aggregations___BucketMetricValueAggregate'
import * as Common_AggregationsCardinalityAggregate from './_common.aggregations___CardinalityAggregate'
import * as Common_AggregationsChildrenAggregate from './_common.aggregations___ChildrenAggregate'
import * as Common_AggregationsCompositeAggregate from './_common.aggregations___CompositeAggregate'
import * as Common_AggregationsCumulativeCardinalityAggregate from './_common.aggregations___CumulativeCardinalityAggregate'
import * as Common_AggregationsDateHistogramAggregate from './_common.aggregations___DateHistogramAggregate'
import * as Common_AggregationsDateRangeAggregate from './_common.aggregations___DateRangeAggregate'
import * as Common_AggregationsDerivativeAggregate from './_common.aggregations___DerivativeAggregate'
import * as Common_AggregationsDoubleTermsAggregate from './_common.aggregations___DoubleTermsAggregate'
import * as Common_AggregationsExtendedStatsAggregate from './_common.aggregations___ExtendedStatsAggregate'
import * as Common_AggregationsExtendedStatsBucketAggregate from './_common.aggregations___ExtendedStatsBucketAggregate'
import * as Common_AggregationsFilterAggregate from './_common.aggregations___FilterAggregate'
import * as Common_AggregationsFiltersAggregate from './_common.aggregations___FiltersAggregate'
import * as Common_AggregationsFrequentItemSetsAggregate from './_common.aggregations___FrequentItemSetsAggregate'
import * as Common_AggregationsGeoBoundsAggregate from './_common.aggregations___GeoBoundsAggregate'
import * as Common_AggregationsGeoCentroidAggregate from './_common.aggregations___GeoCentroidAggregate'
import * as Common_AggregationsGeoDistanceAggregate from './_common.aggregations___GeoDistanceAggregate'
import * as Common_AggregationsGeoHashGridAggregate from './_common.aggregations___GeoHashGridAggregate'
import * as Common_AggregationsGeoHexGridAggregate from './_common.aggregations___GeoHexGridAggregate'
import * as Common_AggregationsGeoLineAggregate from './_common.aggregations___GeoLineAggregate'
import * as Common_AggregationsGeoTileGridAggregate from './_common.aggregations___GeoTileGridAggregate'
import * as Common_AggregationsGlobalAggregate from './_common.aggregations___GlobalAggregate'
import * as Common_AggregationsHdrPercentileRanksAggregate from './_common.aggregations___HdrPercentileRanksAggregate'
import * as Common_AggregationsHdrPercentilesAggregate from './_common.aggregations___HdrPercentilesAggregate'
import * as Common_AggregationsHistogramAggregate from './_common.aggregations___HistogramAggregate'
import * as Common_AggregationsInferenceAggregate from './_common.aggregations___InferenceAggregate'
import * as Common_AggregationsIpPrefixAggregate from './_common.aggregations___IpPrefixAggregate'
import * as Common_AggregationsIpRangeAggregate from './_common.aggregations___IpRangeAggregate'
import * as Common_AggregationsLongRareTermsAggregate from './_common.aggregations___LongRareTermsAggregate'
import * as Common_AggregationsLongTermsAggregate from './_common.aggregations___LongTermsAggregate'
import * as Common_AggregationsMatrixStatsAggregate from './_common.aggregations___MatrixStatsAggregate'
import * as Common_AggregationsMaxAggregate from './_common.aggregations___MaxAggregate'
import * as Common_AggregationsMedianAbsoluteDeviationAggregate from './_common.aggregations___MedianAbsoluteDeviationAggregate'
import * as Common_AggregationsMinAggregate from './_common.aggregations___MinAggregate'
import * as Common_AggregationsMissingAggregate from './_common.aggregations___MissingAggregate'
import * as Common_AggregationsMultiTermsAggregate from './_common.aggregations___MultiTermsAggregate'
import * as Common_AggregationsNestedAggregate from './_common.aggregations___NestedAggregate'
import * as Common_AggregationsParentAggregate from './_common.aggregations___ParentAggregate'
import * as Common_AggregationsPercentilesBucketAggregate from './_common.aggregations___PercentilesBucketAggregate'
import * as Common_AggregationsRangeAggregate from './_common.aggregations___RangeAggregate'
import * as Common_AggregationsRateAggregate from './_common.aggregations___RateAggregate'
import * as Common_AggregationsReverseNestedAggregate from './_common.aggregations___ReverseNestedAggregate'
import * as Common_AggregationsSamplerAggregate from './_common.aggregations___SamplerAggregate'
import * as Common_AggregationsScriptedMetricAggregate from './_common.aggregations___ScriptedMetricAggregate'
import * as Common_AggregationsSignificantLongTermsAggregate from './_common.aggregations___SignificantLongTermsAggregate'
import * as Common_AggregationsSignificantStringTermsAggregate from './_common.aggregations___SignificantStringTermsAggregate'
import * as Common_AggregationsSimpleValueAggregate from './_common.aggregations___SimpleValueAggregate'
import * as Common_AggregationsStatsAggregate from './_common.aggregations___StatsAggregate'
import * as Common_AggregationsStatsBucketAggregate from './_common.aggregations___StatsBucketAggregate'
import * as Common_AggregationsStringRareTermsAggregate from './_common.aggregations___StringRareTermsAggregate'
import * as Common_AggregationsStringStatsAggregate from './_common.aggregations___StringStatsAggregate'
import * as Common_AggregationsStringTermsAggregate from './_common.aggregations___StringTermsAggregate'
import * as Common_AggregationsSumAggregate from './_common.aggregations___SumAggregate'
import * as Common_AggregationsTDigestPercentileRanksAggregate from './_common.aggregations___TDigestPercentileRanksAggregate'
import * as Common_AggregationsTDigestPercentilesAggregate from './_common.aggregations___TDigestPercentilesAggregate'
import * as Common_AggregationsTopHitsAggregate from './_common.aggregations___TopHitsAggregate'
import * as Common_AggregationsTopMetricsAggregate from './_common.aggregations___TopMetricsAggregate'
import * as Common_AggregationsTTestAggregate from './_common.aggregations___TTestAggregate'
import * as Common_AggregationsUnmappedRareTermsAggregate from './_common.aggregations___UnmappedRareTermsAggregate'
import * as Common_AggregationsUnmappedSamplerAggregate from './_common.aggregations___UnmappedSamplerAggregate'
import * as Common_AggregationsUnmappedSignificantTermsAggregate from './_common.aggregations___UnmappedSignificantTermsAggregate'
import * as Common_AggregationsUnmappedTermsAggregate from './_common.aggregations___UnmappedTermsAggregate'
import * as Common_AggregationsValueCountAggregate from './_common.aggregations___ValueCountAggregate'
import * as Common_AggregationsVariableWidthHistogramAggregate from './_common.aggregations___VariableWidthHistogramAggregate'
import * as Common_AggregationsWeightedAvgAggregate from './_common.aggregations___WeightedAvgAggregate'

export type undefined = Common_AggregationsCardinalityAggregate.undefined | Common_AggregationsHdrPercentilesAggregate.undefined | Common_AggregationsHdrPercentileRanksAggregate.undefined | Common_AggregationsTDigestPercentilesAggregate.undefined | Common_AggregationsTDigestPercentileRanksAggregate.undefined | Common_AggregationsPercentilesBucketAggregate.undefined | Common_AggregationsMedianAbsoluteDeviationAggregate.undefined | Common_AggregationsMinAggregate.undefined | Common_AggregationsMaxAggregate.undefined | Common_AggregationsSumAggregate.undefined | Common_AggregationsAvgAggregate.undefined | Common_AggregationsWeightedAvgAggregate.undefined | Common_AggregationsValueCountAggregate.undefined | Common_AggregationsSimpleValueAggregate.undefined | Common_AggregationsDerivativeAggregate.undefined | Common_AggregationsBucketMetricValueAggregate.undefined | Common_AggregationsStatsAggregate.undefined | Common_AggregationsStatsBucketAggregate.undefined | Common_AggregationsExtendedStatsAggregate.undefined | Common_AggregationsExtendedStatsBucketAggregate.undefined | Common_AggregationsGeoBoundsAggregate.undefined | Common_AggregationsGeoCentroidAggregate.undefined | Common_AggregationsHistogramAggregate.undefined | Common_AggregationsDateHistogramAggregate.undefined | Common_AggregationsAutoDateHistogramAggregate.undefined | Common_AggregationsVariableWidthHistogramAggregate.undefined | Common_AggregationsStringTermsAggregate.undefined | Common_AggregationsLongTermsAggregate.undefined | Common_AggregationsDoubleTermsAggregate.undefined | Common_AggregationsUnmappedTermsAggregate.undefined | Common_AggregationsLongRareTermsAggregate.undefined | Common_AggregationsStringRareTermsAggregate.undefined | Common_AggregationsUnmappedRareTermsAggregate.undefined | Common_AggregationsMultiTermsAggregate.undefined | Common_AggregationsMissingAggregate.undefined | Common_AggregationsNestedAggregate.undefined | Common_AggregationsReverseNestedAggregate.undefined | Common_AggregationsGlobalAggregate.undefined | Common_AggregationsFilterAggregate.undefined | Common_AggregationsChildrenAggregate.undefined | Common_AggregationsParentAggregate.undefined | Common_AggregationsSamplerAggregate.undefined | Common_AggregationsUnmappedSamplerAggregate.undefined | Common_AggregationsGeoHashGridAggregate.undefined | Common_AggregationsGeoTileGridAggregate.undefined | Common_AggregationsGeoHexGridAggregate.undefined | Common_AggregationsRangeAggregate.undefined | Common_AggregationsDateRangeAggregate.undefined | Common_AggregationsGeoDistanceAggregate.undefined | Common_AggregationsIpRangeAggregate.undefined | Common_AggregationsIpPrefixAggregate.undefined | Common_AggregationsFiltersAggregate.undefined | Common_AggregationsAdjacencyMatrixAggregate.undefined | Common_AggregationsSignificantLongTermsAggregate.undefined | Common_AggregationsSignificantStringTermsAggregate.undefined | Common_AggregationsUnmappedSignificantTermsAggregate.undefined | Common_AggregationsCompositeAggregate.undefined | Common_AggregationsFrequentItemSetsAggregate.undefined | Common_AggregationsScriptedMetricAggregate.undefined | Common_AggregationsTopHitsAggregate.undefined | Common_AggregationsInferenceAggregate.undefined | Common_AggregationsStringStatsAggregate.undefined | Common_AggregationsBoxPlotAggregate.undefined | Common_AggregationsTopMetricsAggregate.undefined | Common_AggregationsTTestAggregate.undefined | Common_AggregationsRateAggregate.undefined | Common_AggregationsCumulativeCardinalityAggregate.undefined | Common_AggregationsMatrixStatsAggregate.undefined | Common_AggregationsGeoLineAggregate.undefined


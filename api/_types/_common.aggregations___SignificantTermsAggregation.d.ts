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

import * as Common_AggregationsBucketAggregationBase from './_common.aggregations___BucketAggregationBase'
import * as Common_AggregationsChiSquareHeuristic from './_common.aggregations___ChiSquareHeuristic'
import * as Common_AggregationsGoogleNormalizedDistanceHeuristic from './_common.aggregations___GoogleNormalizedDistanceHeuristic'
import * as Common_AggregationsMutualInformationHeuristic from './_common.aggregations___MutualInformationHeuristic'
import * as Common_AggregationsPercentageScoreHeuristic from './_common.aggregations___PercentageScoreHeuristic'
import * as Common_AggregationsScriptedHeuristic from './_common.aggregations___ScriptedHeuristic'
import * as Common_AggregationsTermsAggregationExecutionHint from './_common.aggregations___TermsAggregationExecutionHint'
import * as Common_AggregationsTermsExclude from './_common.aggregations___TermsExclude'
import * as Common_AggregationsTermsInclude from './_common.aggregations___TermsInclude'
import * as Common_QueryDslQueryContainer from './_common.query_dsl___QueryContainer'
import * as CommonEmptyObject from './_common___EmptyObject'
import * as CommonField from './_common___Field'

export type undefined = Common_AggregationsBucketAggregationBase.undefined & {
  background_filter?: Common_QueryDslQueryContainer.undefined;
  chi_square?: Common_AggregationsChiSquareHeuristic.undefined;
  exclude?: Common_AggregationsTermsExclude.undefined;
  execution_hint?: Common_AggregationsTermsAggregationExecutionHint.undefined;
  field?: CommonField.undefined;
  gnd?: Common_AggregationsGoogleNormalizedDistanceHeuristic.undefined;
  include?: Common_AggregationsTermsInclude.undefined;
  jlh?: CommonEmptyObject.undefined;
  min_doc_count?: number;
  mutual_information?: Common_AggregationsMutualInformationHeuristic.undefined;
  percentage?: Common_AggregationsPercentageScoreHeuristic.undefined;
  script_heuristic?: Common_AggregationsScriptedHeuristic.undefined;
  shard_min_doc_count?: number;
  shard_size?: number;
  size?: number;
}


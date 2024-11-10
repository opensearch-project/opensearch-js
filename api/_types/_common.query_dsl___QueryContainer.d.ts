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

import * as Common_QueryDslBoolQuery from './_common.query_dsl___BoolQuery'
import * as Common_QueryDslBoostingQuery from './_common.query_dsl___BoostingQuery'
import * as Common_QueryDslCombinedFieldsQuery from './_common.query_dsl___CombinedFieldsQuery'
import * as Common_QueryDslCommonTermsQuery from './_common.query_dsl___CommonTermsQuery'
import * as Common_QueryDslConstantScoreQuery from './_common.query_dsl___ConstantScoreQuery'
import * as Common_QueryDslDisMaxQuery from './_common.query_dsl___DisMaxQuery'
import * as Common_QueryDslDistanceFeatureQuery from './_common.query_dsl___DistanceFeatureQuery'
import * as Common_QueryDslExistsQuery from './_common.query_dsl___ExistsQuery'
import * as Common_QueryDslFunctionScoreQuery from './_common.query_dsl___FunctionScoreQuery'
import * as Common_QueryDslFuzzyQuery from './_common.query_dsl___FuzzyQuery'
import * as Common_QueryDslGeoBoundingBoxQuery from './_common.query_dsl___GeoBoundingBoxQuery'
import * as Common_QueryDslGeoDistanceQuery from './_common.query_dsl___GeoDistanceQuery'
import * as Common_QueryDslGeoPolygonQuery from './_common.query_dsl___GeoPolygonQuery'
import * as Common_QueryDslGeoShapeQuery from './_common.query_dsl___GeoShapeQuery'
import * as Common_QueryDslHasChildQuery from './_common.query_dsl___HasChildQuery'
import * as Common_QueryDslHasParentQuery from './_common.query_dsl___HasParentQuery'
import * as Common_QueryDslIdsQuery from './_common.query_dsl___IdsQuery'
import * as Common_QueryDslIntervalsQuery from './_common.query_dsl___IntervalsQuery'
import * as Common_QueryDslKnnQuery from './_common.query_dsl___KnnQuery'
import * as Common_QueryDslMatchAllQuery from './_common.query_dsl___MatchAllQuery'
import * as Common_QueryDslMatchBoolPrefixQuery from './_common.query_dsl___MatchBoolPrefixQuery'
import * as Common_QueryDslMatchNoneQuery from './_common.query_dsl___MatchNoneQuery'
import * as Common_QueryDslMatchPhrasePrefixQuery from './_common.query_dsl___MatchPhrasePrefixQuery'
import * as Common_QueryDslMatchPhraseQuery from './_common.query_dsl___MatchPhraseQuery'
import * as Common_QueryDslMatchQuery from './_common.query_dsl___MatchQuery'
import * as Common_QueryDslMoreLikeThisQuery from './_common.query_dsl___MoreLikeThisQuery'
import * as Common_QueryDslMultiMatchQuery from './_common.query_dsl___MultiMatchQuery'
import * as Common_QueryDslNestedQuery from './_common.query_dsl___NestedQuery'
import * as Common_QueryDslNeuralQuery from './_common.query_dsl___NeuralQuery'
import * as Common_QueryDslParentIdQuery from './_common.query_dsl___ParentIdQuery'
import * as Common_QueryDslPercolateQuery from './_common.query_dsl___PercolateQuery'
import * as Common_QueryDslPinnedQuery from './_common.query_dsl___PinnedQuery'
import * as Common_QueryDslPrefixQuery from './_common.query_dsl___PrefixQuery'
import * as Common_QueryDslQueryStringQuery from './_common.query_dsl___QueryStringQuery'
import * as Common_QueryDslRangeQuery from './_common.query_dsl___RangeQuery'
import * as Common_QueryDslRankFeatureQuery from './_common.query_dsl___RankFeatureQuery'
import * as Common_QueryDslRegexpQuery from './_common.query_dsl___RegexpQuery'
import * as Common_QueryDslRuleQuery from './_common.query_dsl___RuleQuery'
import * as Common_QueryDslScriptQuery from './_common.query_dsl___ScriptQuery'
import * as Common_QueryDslScriptScoreQuery from './_common.query_dsl___ScriptScoreQuery'
import * as Common_QueryDslSimpleQueryStringQuery from './_common.query_dsl___SimpleQueryStringQuery'
import * as Common_QueryDslSpanContainingQuery from './_common.query_dsl___SpanContainingQuery'
import * as Common_QueryDslSpanFieldMaskingQuery from './_common.query_dsl___SpanFieldMaskingQuery'
import * as Common_QueryDslSpanFirstQuery from './_common.query_dsl___SpanFirstQuery'
import * as Common_QueryDslSpanMultiTermQuery from './_common.query_dsl___SpanMultiTermQuery'
import * as Common_QueryDslSpanNearQuery from './_common.query_dsl___SpanNearQuery'
import * as Common_QueryDslSpanNotQuery from './_common.query_dsl___SpanNotQuery'
import * as Common_QueryDslSpanOrQuery from './_common.query_dsl___SpanOrQuery'
import * as Common_QueryDslSpanTermQuery from './_common.query_dsl___SpanTermQuery'
import * as Common_QueryDslSpanWithinQuery from './_common.query_dsl___SpanWithinQuery'
import * as Common_QueryDslTermQuery from './_common.query_dsl___TermQuery'
import * as Common_QueryDslTermsQueryField from './_common.query_dsl___TermsQueryField'
import * as Common_QueryDslTermsSetQuery from './_common.query_dsl___TermsSetQuery'
import * as Common_QueryDslTextExpansionQuery from './_common.query_dsl___TextExpansionQuery'
import * as Common_QueryDslTypeQuery from './_common.query_dsl___TypeQuery'
import * as Common_QueryDslWeightedTokensQuery from './_common.query_dsl___WeightedTokensQuery'
import * as Common_QueryDslWildcardQuery from './_common.query_dsl___WildcardQuery'
import * as Common_QueryDslWrapperQuery from './_common.query_dsl___WrapperQuery'
import * as Common_QueryDslXyShapeQuery from './_common.query_dsl___XyShapeQuery'
import * as CommonFieldValue from './_common___FieldValue'

export type undefined = {
  bool?: Common_QueryDslBoolQuery.undefined;
  boosting?: Common_QueryDslBoostingQuery.undefined;
  combined_fields?: Common_QueryDslCombinedFieldsQuery.undefined;
  common?: Record<string, Common_QueryDslCommonTermsQuery.undefined>;
  constant_score?: Common_QueryDslConstantScoreQuery.undefined;
  dis_max?: Common_QueryDslDisMaxQuery.undefined;
  distance_feature?: Common_QueryDslDistanceFeatureQuery.undefined;
  exists?: Common_QueryDslExistsQuery.undefined;
  field_masking_span?: Common_QueryDslSpanFieldMaskingQuery.undefined;
  function_score?: Common_QueryDslFunctionScoreQuery.undefined;
  fuzzy?: Record<string, Common_QueryDslFuzzyQuery.undefined>;
  geo_bounding_box?: Common_QueryDslGeoBoundingBoxQuery.undefined;
  geo_distance?: Common_QueryDslGeoDistanceQuery.undefined;
  geo_polygon?: Common_QueryDslGeoPolygonQuery.undefined;
  geo_shape?: Common_QueryDslGeoShapeQuery.undefined;
  has_child?: Common_QueryDslHasChildQuery.undefined;
  has_parent?: Common_QueryDslHasParentQuery.undefined;
  ids?: Common_QueryDslIdsQuery.undefined;
  intervals?: Record<string, Common_QueryDslIntervalsQuery.undefined>;
  knn?: Common_QueryDslKnnQuery.undefined;
  match?: Record<string, Common_QueryDslMatchQuery.undefined | any>;
  match_all?: Common_QueryDslMatchAllQuery.undefined;
  match_bool_prefix?: Record<string, Common_QueryDslMatchBoolPrefixQuery.undefined>;
  match_none?: Common_QueryDslMatchNoneQuery.undefined;
  match_phrase?: Record<string, Common_QueryDslMatchPhraseQuery.undefined>;
  match_phrase_prefix?: Record<string, Common_QueryDslMatchPhrasePrefixQuery.undefined>;
  more_like_this?: Common_QueryDslMoreLikeThisQuery.undefined;
  multi_match?: Common_QueryDslMultiMatchQuery.undefined;
  nested?: Common_QueryDslNestedQuery.undefined;
  neural?: Common_QueryDslNeuralQuery.undefined;
  parent_id?: Common_QueryDslParentIdQuery.undefined;
  percolate?: Common_QueryDslPercolateQuery.undefined;
  pinned?: Common_QueryDslPinnedQuery.undefined;
  prefix?: Record<string, Common_QueryDslPrefixQuery.undefined>;
  query_string?: Common_QueryDslQueryStringQuery.undefined;
  range?: Record<string, Common_QueryDslRangeQuery.undefined>;
  rank_feature?: Common_QueryDslRankFeatureQuery.undefined;
  regexp?: Record<string, Common_QueryDslRegexpQuery.undefined>;
  rule_query?: Common_QueryDslRuleQuery.undefined;
  script?: Common_QueryDslScriptQuery.undefined;
  script_score?: Common_QueryDslScriptScoreQuery.undefined;
  simple_query_string?: Common_QueryDslSimpleQueryStringQuery.undefined;
  span_containing?: Common_QueryDslSpanContainingQuery.undefined;
  span_first?: Common_QueryDslSpanFirstQuery.undefined;
  span_multi?: Common_QueryDslSpanMultiTermQuery.undefined;
  span_near?: Common_QueryDslSpanNearQuery.undefined;
  span_not?: Common_QueryDslSpanNotQuery.undefined;
  span_or?: Common_QueryDslSpanOrQuery.undefined;
  span_term?: Record<string, Common_QueryDslSpanTermQuery.undefined>;
  span_within?: Common_QueryDslSpanWithinQuery.undefined;
  term?: Record<string, Common_QueryDslTermQuery.undefined | CommonFieldValue.undefined>;
  terms?: Common_QueryDslTermsQueryField.undefined;
  terms_set?: Record<string, Common_QueryDslTermsSetQuery.undefined>;
  text_expansion?: Record<string, Common_QueryDslTextExpansionQuery.undefined>;
  type?: Common_QueryDslTypeQuery.undefined;
  weighted_tokens?: Record<string, Common_QueryDslWeightedTokensQuery.undefined>;
  wildcard?: Record<string, Common_QueryDslWildcardQuery.undefined>;
  wrapper?: Common_QueryDslWrapperQuery.undefined;
  xy_shape?: Common_QueryDslXyShapeQuery.undefined;
}


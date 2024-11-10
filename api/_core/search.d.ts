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

import { ApiResponse } from '../../lib/Transport'
import * as Common_AggregationsAggregationContainer from '../_types/_common.aggregations___AggregationContainer'
import * as Common_QueryDslFieldAndFormat from '../_types/_common.query_dsl___FieldAndFormat'
import * as Common_QueryDslOperator from '../_types/_common.query_dsl___Operator'
import * as Common_QueryDslQueryContainer from '../_types/_common.query_dsl___QueryContainer'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonField from '../_types/_common___Field'
import * as CommonFields from '../_types/_common___Fields'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonRankContainer from '../_types/_common___RankContainer'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as CommonScriptField from '../_types/_common___ScriptField'
import * as CommonSearchType from '../_types/_common___SearchType'
import * as CommonSlicedScroll from '../_types/_common___SlicedScroll'
import * as CommonSort from '../_types/_common___Sort'
import * as CommonSortResults from '../_types/_common___SortResults'
import * as CommonSuggestMode from '../_types/_common___SuggestMode'
import * as Core_SearchFieldCollapse from '../_types/_core.search___FieldCollapse'
import * as Core_SearchHighlight from '../_types/_core.search___Highlight'
import * as Core_SearchPointInTimeReference from '../_types/_core.search___PointInTimeReference'
import * as Core_SearchRescore from '../_types/_core.search___Rescore'
import * as Core_SearchResponseBody from '../_types/_core.search___ResponseBody'
import * as Core_SearchSourceConfig from '../_types/_core.search___SourceConfig'
import * as Core_SearchSourceConfigParam from '../_types/_core.search___SourceConfigParam'
import * as Core_SearchSuggester from '../_types/_core.search___Suggester'
import * as Core_SearchTrackHits from '../_types/_core.search___TrackHits'
import * as Global from '../_types/_global'

export type Search_Request = Global.Params & {
  _source?: Core_SearchSourceConfigParam.undefined;
  _source_excludes?: CommonFields.undefined;
  _source_includes?: CommonFields.undefined;
  allow_no_indices?: boolean;
  allow_partial_search_results?: boolean;
  analyze_wildcard?: boolean;
  analyzer?: string;
  batched_reduce_size?: number;
  body?: Search_RequestBody;
  cancel_after_time_interval?: CommonDuration.undefined;
  ccs_minimize_roundtrips?: boolean;
  default_operator?: Common_QueryDslOperator.undefined;
  df?: string;
  docvalue_fields?: CommonFields.undefined;
  expand_wildcards?: CommonExpandWildcards.undefined;
  explain?: boolean;
  from?: number;
  ignore_throttled?: boolean;
  ignore_unavailable?: boolean;
  include_named_queries_score?: boolean;
  index?: CommonIndices.undefined;
  lenient?: boolean;
  max_concurrent_shard_requests?: number;
  phase_took?: boolean;
  pre_filter_shard_size?: number;
  preference?: string;
  q?: string;
  request_cache?: boolean;
  rest_total_hits_as_int?: boolean;
  routing?: CommonRoutingInQueryString.undefined;
  scroll?: CommonDuration.undefined;
  search_pipeline?: string;
  search_type?: CommonSearchType.undefined;
  seq_no_primary_term?: boolean;
  size?: number;
  sort?: string | string[];
  stats?: string[];
  stored_fields?: CommonFields.undefined;
  suggest_field?: CommonField.undefined;
  suggest_mode?: CommonSuggestMode.undefined;
  suggest_size?: number;
  suggest_text?: string;
  terminate_after?: number;
  timeout?: CommonDuration.undefined;
  track_scores?: boolean;
  track_total_hits?: Core_SearchTrackHits.undefined;
  typed_keys?: boolean;
  version?: boolean;
}

export type Search_RequestBody = {
  _source?: Core_SearchSourceConfig.undefined;
  aggregations?: Record<string, Common_AggregationsAggregationContainer.undefined>;
  collapse?: Core_SearchFieldCollapse.undefined;
  docvalue_fields?: Common_QueryDslFieldAndFormat.undefined[];
  explain?: boolean;
  ext?: Record<string, Record<string, any>>;
  fields?: Common_QueryDslFieldAndFormat.undefined[];
  from?: number;
  highlight?: Core_SearchHighlight.undefined;
  indices_boost?: Record<string, number>[];
  min_score?: number;
  pit?: Core_SearchPointInTimeReference.undefined;
  post_filter?: Common_QueryDslQueryContainer.undefined;
  profile?: boolean;
  query?: Common_QueryDslQueryContainer.undefined;
  rank?: CommonRankContainer.undefined;
  rescore?: Core_SearchRescore.undefined | Core_SearchRescore.undefined[];
  script_fields?: Record<string, CommonScriptField.undefined>;
  search_after?: CommonSortResults.undefined;
  seq_no_primary_term?: boolean;
  size?: number;
  slice?: CommonSlicedScroll.undefined;
  sort?: CommonSort.undefined;
  stats?: string[];
  stored_fields?: CommonFields.undefined;
  suggest?: Core_SearchSuggester.undefined;
  terminate_after?: number;
  timeout?: string;
  track_scores?: boolean;
  track_total_hits?: Core_SearchTrackHits.undefined;
  version?: boolean;
}

export type Search_Response = ApiResponse & {
  body: Search_ResponseBody;
}

export type Search_ResponseBody = Core_SearchResponseBody.undefined


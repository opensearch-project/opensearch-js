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

import { ApiResponse } from '../../lib/Transport'
import * as Global from '../components/_global'
import * as Core_Search from '../components/_core.search'
import * as Common from '../components/_common'
import * as Common_QueryDsl from '../components/_common.query_dsl'
import * as Common_Aggregations from '../components/_common.aggregations'
import * as Common_Mapping from '../components/_common.mapping'

export interface Request extends Global.Params {
  _source?: Core_Search.SourceConfigParam;
  _source_excludes?: Common.Fields;
  _source_includes?: Common.Fields;
  allow_no_indices?: boolean;
  allow_partial_search_results?: boolean;
  analyze_wildcard?: boolean;
  analyzer?: string;
  batched_reduce_size?: number;
  body?: RequestBody;
  cancel_after_time_interval?: Common.Duration;
  ccs_minimize_roundtrips?: boolean;
  default_operator?: Common_QueryDsl.Operator;
  df?: string;
  docvalue_fields?: Common.Fields;
  expand_wildcards?: Common.ExpandWildcards;
  explain?: boolean;
  from?: number;
  ignore_throttled?: boolean;
  ignore_unavailable?: boolean;
  include_named_queries_score?: boolean;
  index?: Common.Indices;
  lenient?: boolean;
  max_concurrent_shard_requests?: number;
  phase_took?: boolean;
  pre_filter_shard_size?: number;
  preference?: string;
  q?: string;
  request_cache?: boolean;
  rest_total_hits_as_int?: boolean;
  routing?: Common.Routing;
  scroll?: Common.Duration;
  search_pipeline?: string;
  search_type?: Common.SearchType;
  seq_no_primary_term?: boolean;
  size?: number;
  sort?: string | string[];
  stats?: string[];
  stored_fields?: Common.Fields;
  suggest_field?: Common.Field;
  suggest_mode?: Common.SuggestMode;
  suggest_size?: number;
  suggest_text?: string;
  terminate_after?: number;
  timeout?: Common.Duration;
  track_scores?: boolean;
  track_total_hits?: Core_Search.TrackHits;
  typed_keys?: boolean;
  version?: boolean;
}

export type ResponseBody = Core_Search.ResponseBody

export interface RequestBody {
  _source?: Core_Search.SourceConfig;
  aggregations?: Record<string, Common_Aggregations.AggregationContainer>;
  collapse?: Core_Search.FieldCollapse;
  docvalue_fields?: Common_QueryDsl.FieldAndFormat[];
  explain?: boolean;
  ext?: Record<string, Record<string, any>>;
  fields?: Common_QueryDsl.FieldAndFormat[];
  from?: number;
  highlight?: Core_Search.Highlight;
  indices_boost?: Record<string, number>[];
  knn?: Common.KnnQuery | Common.KnnQuery[];
  min_score?: number;
  pit?: Core_Search.PointInTimeReference;
  post_filter?: Common_QueryDsl.QueryContainer;
  profile?: boolean;
  query?: Common_QueryDsl.QueryContainer;
  rank?: Common.RankContainer;
  rescore?: Core_Search.Rescore | Core_Search.Rescore[];
  runtime_mappings?: Common_Mapping.RuntimeFields;
  script_fields?: Record<string, Common.ScriptField>;
  search_after?: Common.SortResults;
  seq_no_primary_term?: boolean;
  size?: number;
  slice?: Common.SlicedScroll;
  sort?: Common.Sort;
  stats?: string[];
  stored_fields?: Common.Fields;
  suggest?: Core_Search.Suggester;
  terminate_after?: number;
  timeout?: string;
  track_scores?: boolean;
  track_total_hits?: Core_Search.TrackHits;
  version?: boolean;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

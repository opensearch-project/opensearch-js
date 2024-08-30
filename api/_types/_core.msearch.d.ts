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

import * as Core_Search from './_core.search'
import * as Common_Aggregations from './_common.aggregations'
import * as Common_QueryDsl from './_common.query_dsl'
import * as Common from './_common'
import * as Common_Mapping from './_common.mapping'

export interface MultisearchBody {
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
  rescore?: Core_Search.Rescore | Core_Search.Rescore[];
  runtime_mappings?: Common_Mapping.RuntimeFields;
  script_fields?: Record<string, Common.ScriptField>;
  search_after?: Common.SortResults;
  seq_no_primary_term?: boolean;
  size?: number;
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

export interface MultisearchHeader {
  allow_no_indices?: boolean;
  allow_partial_search_results?: boolean;
  ccs_minimize_roundtrips?: boolean;
  expand_wildcards?: Common.ExpandWildcards;
  ignore_throttled?: boolean;
  ignore_unavailable?: boolean;
  index?: Common.Indices;
  preference?: string;
  request_cache?: boolean;
  routing?: Common.Routing;
  search_type?: Common.SearchType;
}

export interface MultiSearchItem extends Core_Search.ResponseBody {
  status?: number;
}

export interface MultiSearchResult {
  responses: ResponseItem[];
  took: number;
}

export type RequestItem = MultisearchHeader | MultisearchBody

export type ResponseItem = MultiSearchItem | Common.ErrorResponseBase


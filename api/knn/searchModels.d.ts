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
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as Global from '../_types/_global'
import * as Knn_CommonDefaultOperator from '../_types/knn._common___DefaultOperator'
import * as Knn_CommonSearchType from '../_types/knn._common___SearchType'
import * as Knn_CommonSuggestMode from '../_types/knn._common___SuggestMode'

export type Knn_SearchModels_Request = Global.Params & {
  _source?: string[];
  _source_excludes?: string[];
  _source_includes?: string[];
  allow_no_indices?: boolean;
  allow_partial_search_results?: boolean;
  analyze_wildcard?: boolean;
  analyzer?: string;
  batched_reduce_size?: number;
  body?: Knn_SearchModels_RequestBody;
  ccs_minimize_roundtrips?: boolean;
  default_operator?: Knn_CommonDefaultOperator.undefined;
  df?: string;
  docvalue_fields?: string[];
  expand_wildcards?: CommonExpandWildcards.undefined;
  explain?: boolean;
  from?: number;
  ignore_throttled?: boolean;
  ignore_unavailable?: boolean;
  lenient?: boolean;
  max_concurrent_shard_requests?: number;
  pre_filter_shard_size?: number;
  preference?: string;
  q?: string;
  request_cache?: boolean;
  rest_total_hits_as_int?: boolean;
  routing?: CommonRoutingInQueryString.undefined;
  scroll?: CommonDuration.undefined;
  search_type?: Knn_CommonSearchType.undefined;
  seq_no_primary_term?: boolean;
  size?: number;
  sort?: string[];
  stats?: string[];
  stored_fields?: string[];
  suggest_field?: string;
  suggest_mode?: Knn_CommonSuggestMode.undefined;
  suggest_size?: number;
  suggest_text?: string;
  terminate_after?: number;
  timeout?: CommonDuration.undefined;
  track_scores?: boolean;
  track_total_hits?: boolean;
  typed_keys?: boolean;
  version?: boolean;
}

export type Knn_SearchModels_RequestBody = Record<string, any>

export type Knn_SearchModels_Response = ApiResponse & {
  body: Knn_SearchModels_ResponseBody;
}

export type Knn_SearchModels_ResponseBody = Record<string, any>


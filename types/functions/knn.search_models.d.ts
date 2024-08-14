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
import * as Knn_Common from '../components/knn._common'
import * as Common from '../components/_common'

export interface Request extends Global.Params {
  _source?: string[];
  _source_excludes?: string[];
  _source_includes?: string[];
  allow_no_indices?: boolean;
  allow_partial_search_results?: boolean;
  analyze_wildcard?: boolean;
  analyzer?: string;
  batched_reduce_size?: number;
  body?: RequestBody;
  ccs_minimize_roundtrips?: boolean;
  default_operator?: Knn_Common.DefaultOperator;
  df?: string;
  docvalue_fields?: string[];
  expand_wildcards?: Common.ExpandWildcards;
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
  routing?: string[];
  scroll?: Common.Duration;
  search_type?: Knn_Common.SearchType;
  seq_no_primary_term?: boolean;
  size?: number;
  sort?: string[];
  stats?: string[];
  stored_fields?: string[];
  suggest_field?: string;
  suggest_mode?: Knn_Common.SuggestMode;
  suggest_size?: number;
  suggest_text?: string;
  terminate_after?: number;
  timeout?: Common.Duration;
  track_scores?: boolean;
  track_total_hits?: boolean;
  typed_keys?: boolean;
  version?: boolean;
}

export type ResponseBody = Record<string, any>

export type RequestBody = Record<string, any>

export interface Response extends ApiResponse {
  body: ResponseBody
}

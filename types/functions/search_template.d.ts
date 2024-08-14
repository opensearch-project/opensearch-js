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
import * as Common from '../components/_common'
import * as Common_Aggregations from '../components/_common.aggregations'
import * as Core_Search from '../components/_core.search'

export interface Request extends Global.Params {
  allow_no_indices?: boolean;
  body: RequestBody;
  ccs_minimize_roundtrips?: boolean;
  expand_wildcards?: Common.ExpandWildcards;
  explain?: boolean;
  ignore_throttled?: boolean;
  ignore_unavailable?: boolean;
  index?: Common.Indices;
  preference?: string;
  profile?: boolean;
  rest_total_hits_as_int?: boolean;
  routing?: Common.Routing;
  scroll?: Common.Duration;
  search_type?: Common.SearchType;
  typed_keys?: boolean;
}

export interface ResponseBody {
  _clusters?: Common.ClusterStatistics;
  _scroll_id?: Common.ScrollId;
  _shards: Common.ShardStatistics;
  aggregations?: Record<string, Common_Aggregations.Aggregate>;
  fields?: Record<string, Record<string, any>>;
  hits: Core_Search.HitsMetadata;
  max_score?: number;
  num_reduce_phases?: number;
  pit_id?: Common.Id;
  profile?: Core_Search.Profile;
  suggest?: Record<string, Core_Search.Suggest[]>;
  terminated_early?: boolean;
  timed_out: boolean;
  took: number;
}

export interface RequestBody {
  explain?: boolean;
  id?: Common.Id;
  params?: Record<string, Record<string, any>>;
  profile?: boolean;
  source?: string;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

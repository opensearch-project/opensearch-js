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
import * as Common_AggregationsAggregate from '../_types/_common.aggregations___Aggregate'
import * as CommonClusterStatistics from '../_types/_common___ClusterStatistics'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonId from '../_types/_common___Id'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as CommonScrollId from '../_types/_common___ScrollId'
import * as CommonSearchType from '../_types/_common___SearchType'
import * as CommonShardStatistics from '../_types/_common___ShardStatistics'
import * as Core_SearchHitsMetadata from '../_types/_core.search___HitsMetadata'
import * as Core_SearchProfile from '../_types/_core.search___Profile'
import * as Core_SearchSuggest from '../_types/_core.search___Suggest'
import * as Global from '../_types/_global'

export type SearchTemplate_Request = Global.Params & {
  allow_no_indices?: boolean;
  body: SearchTemplate_RequestBody;
  ccs_minimize_roundtrips?: boolean;
  expand_wildcards?: CommonExpandWildcards.undefined;
  explain?: boolean;
  ignore_throttled?: boolean;
  ignore_unavailable?: boolean;
  index?: CommonIndices.undefined;
  preference?: string;
  profile?: boolean;
  rest_total_hits_as_int?: boolean;
  routing?: CommonRoutingInQueryString.undefined;
  scroll?: CommonDuration.undefined;
  search_type?: CommonSearchType.undefined;
  typed_keys?: boolean;
}

export type SearchTemplate_RequestBody = {
  explain?: boolean;
  id?: CommonId.undefined;
  params?: Record<string, Record<string, any>>;
  profile?: boolean;
  source?: string;
}

export type SearchTemplate_Response = ApiResponse & {
  body: SearchTemplate_ResponseBody;
}

export type SearchTemplate_ResponseBody = {
  _clusters?: CommonClusterStatistics.undefined;
  _scroll_id?: CommonScrollId.undefined;
  _shards: CommonShardStatistics.undefined;
  aggregations?: Record<string, Common_AggregationsAggregate.undefined>;
  fields?: Record<string, Record<string, any>>;
  hits: Core_SearchHitsMetadata.undefined;
  max_score?: number;
  num_reduce_phases?: number;
  pit_id?: CommonId.undefined;
  profile?: Core_SearchProfile.undefined;
  suggest?: Record<string, Core_SearchSuggest.undefined[]>;
  terminated_early?: boolean;
  timed_out: boolean;
  took: number;
}


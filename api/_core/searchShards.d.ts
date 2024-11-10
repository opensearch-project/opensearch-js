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
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonNodeAttributes from '../_types/_common___NodeAttributes'
import * as CommonNodeShard from '../_types/_common___NodeShard'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as Core_SearchShardsShardStoreIndex from '../_types/_core.search_shards___ShardStoreIndex'
import * as Global from '../_types/_global'

export type SearchShards_Request = Global.Params & {
  allow_no_indices?: boolean;
  expand_wildcards?: CommonExpandWildcards.undefined;
  ignore_unavailable?: boolean;
  index?: CommonIndices.undefined;
  local?: boolean;
  preference?: string;
  routing?: CommonRoutingInQueryString.undefined;
}

export type SearchShards_Response = ApiResponse & {
  body: SearchShards_ResponseBody;
}

export type SearchShards_ResponseBody = {
  indices: Record<string, Core_SearchShardsShardStoreIndex.undefined>;
  nodes: Record<string, CommonNodeAttributes.undefined>;
  shards: CommonNodeShard.undefined[][];
}


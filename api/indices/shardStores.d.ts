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
import * as Global from '../_types/_global'
import * as Indices_ShardStoresIndicesShardStores from '../_types/indices.shard_stores___IndicesShardStores'
import * as Indices_ShardStoresStatus from '../_types/indices.shard_stores___Status'

export type Indices_ShardStores_Request = Global.Params & {
  allow_no_indices?: boolean;
  expand_wildcards?: CommonExpandWildcards.undefined;
  ignore_unavailable?: boolean;
  index?: CommonIndices.undefined;
  status?: Indices_ShardStoresStatus.undefined | Indices_ShardStoresStatus.undefined[];
}

export type Indices_ShardStores_Response = ApiResponse & {
  body: Indices_ShardStores_ResponseBody;
}

export type Indices_ShardStores_ResponseBody = {
  indices: Record<string, Indices_ShardStoresIndicesShardStores.undefined>;
}


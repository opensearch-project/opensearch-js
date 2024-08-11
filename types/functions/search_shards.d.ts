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

import * as Global from '../components/_global'
import * as Common from '../components/_common'
import * as Core_SearchShards from '../components/_core.search_shards'

export interface Request extends Global.Params {
  allow_no_indices?: boolean;
  expand_wildcards?: Common.ExpandWildcards;
  ignore_unavailable?: boolean;
  index?: Common.Indices;
  local?: boolean;
  preference?: string;
  routing?: Common.Routing;
}

export interface Response {
  indices: Record<string, Core_SearchShards.ShardStoreIndex>;
  nodes: Record<string, Common.NodeAttributes>;
  shards: Common.NodeShard[][];
}


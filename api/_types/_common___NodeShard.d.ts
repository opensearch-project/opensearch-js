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

import * as Cluster_AllocationExplainUnassignedInformation from './cluster.allocation_explain___UnassignedInformation'
import * as CommonId from './_common___Id'
import * as CommonIndexName from './_common___IndexName'
import * as CommonNodeId from './_common___NodeId'
import * as CommonNodeName from './_common___NodeName'
import * as CommonRelocationFailureInfo from './_common___RelocationFailureInfo'
import * as Indices_StatsShardRoutingState from './indices.stats___ShardRoutingState'

export type undefined = {
  allocation_id?: Record<string, CommonId.undefined>;
  index: CommonIndexName.undefined;
  node?: CommonNodeName.undefined;
  primary: boolean;
  recovery_source?: Record<string, CommonId.undefined>;
  relocating_node?: CommonNodeId.undefined | undefined;
  relocation_failure_info?: CommonRelocationFailureInfo.undefined;
  shard: number;
  state: Indices_StatsShardRoutingState.undefined;
  unassigned_info?: Cluster_AllocationExplainUnassignedInformation.undefined;
}


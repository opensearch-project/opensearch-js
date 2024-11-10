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
import * as Cluster_AllocationExplainAllocationDecision from '../_types/cluster.allocation_explain___AllocationDecision'
import * as Cluster_AllocationExplainClusterInfo from '../_types/cluster.allocation_explain___ClusterInfo'
import * as Cluster_AllocationExplainCurrentNode from '../_types/cluster.allocation_explain___CurrentNode'
import * as Cluster_AllocationExplainDecision from '../_types/cluster.allocation_explain___Decision'
import * as Cluster_AllocationExplainNodeAllocationExplanation from '../_types/cluster.allocation_explain___NodeAllocationExplanation'
import * as Cluster_AllocationExplainUnassignedInformation from '../_types/cluster.allocation_explain___UnassignedInformation'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonDurationValueUnitMillis from '../_types/_common___DurationValueUnitMillis'
import * as CommonIndexName from '../_types/_common___IndexName'
import * as Global from '../_types/_global'

export type Cluster_AllocationExplain_Request = Global.Params & {
  body?: Cluster_AllocationExplain_RequestBody;
  include_disk_info?: boolean;
  include_yes_decisions?: boolean;
}

export type Cluster_AllocationExplain_RequestBody = {
  current_node?: string;
  index?: CommonIndexName.undefined;
  primary?: boolean;
  shard?: number;
}

export type Cluster_AllocationExplain_Response = ApiResponse & {
  body: Cluster_AllocationExplain_ResponseBody;
}

export type Cluster_AllocationExplain_ResponseBody = {
  allocate_explanation?: string;
  allocation_delay?: CommonDuration.undefined;
  allocation_delay_in_millis?: CommonDurationValueUnitMillis.undefined;
  can_allocate?: Cluster_AllocationExplainDecision.undefined;
  can_move_to_other_node?: Cluster_AllocationExplainDecision.undefined;
  can_rebalance_cluster?: Cluster_AllocationExplainDecision.undefined;
  can_rebalance_cluster_decisions?: Cluster_AllocationExplainAllocationDecision.undefined[];
  can_rebalance_to_other_node?: Cluster_AllocationExplainDecision.undefined;
  can_remain_decisions?: Cluster_AllocationExplainAllocationDecision.undefined[];
  can_remain_on_current_node?: Cluster_AllocationExplainDecision.undefined;
  cluster_info?: Cluster_AllocationExplainClusterInfo.undefined;
  configured_delay?: CommonDuration.undefined;
  configured_delay_in_millis?: CommonDurationValueUnitMillis.undefined;
  current_node?: Cluster_AllocationExplainCurrentNode.undefined;
  current_state: string;
  index: CommonIndexName.undefined;
  move_explanation?: string;
  node_allocation_decisions?: Cluster_AllocationExplainNodeAllocationExplanation.undefined[];
  note?: string;
  primary: boolean;
  rebalance_explanation?: string;
  remaining_delay?: CommonDuration.undefined;
  remaining_delay_in_millis?: CommonDurationValueUnitMillis.undefined;
  shard: number;
  unassigned_info?: Cluster_AllocationExplainUnassignedInformation.undefined;
}


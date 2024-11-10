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

import * as Nodes_CommonClusterAppliedStats from './nodes._common___ClusterAppliedStats'
import * as Nodes_CommonClusterStateQueue from './nodes._common___ClusterStateQueue'
import * as Nodes_CommonClusterStateStats from './nodes._common___ClusterStateStats'
import * as Nodes_CommonClusterStateUpdate from './nodes._common___ClusterStateUpdate'
import * as Nodes_CommonPublishedClusterStates from './nodes._common___PublishedClusterStates'
import * as Nodes_CommonSerializedClusterState from './nodes._common___SerializedClusterState'

export type undefined = {
  cluster_applier_stats?: Nodes_CommonClusterAppliedStats.undefined;
  cluster_state_queue?: Nodes_CommonClusterStateQueue.undefined;
  cluster_state_stats?: Nodes_CommonClusterStateStats.undefined;
  cluster_state_update?: Record<string, Nodes_CommonClusterStateUpdate.undefined>;
  published_cluster_states?: Nodes_CommonPublishedClusterStates.undefined;
  serialized_cluster_states?: Nodes_CommonSerializedClusterState.undefined;
}


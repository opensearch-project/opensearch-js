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

import * as CommonHost from './_common___Host'
import * as CommonIp from './_common___Ip'
import * as CommonName from './_common___Name'
import * as CommonNodeRoles from './_common___NodeRoles'
import * as CommonTransportAddress from './_common___TransportAddress'
import * as Indices_StatsIndexShardStats from './indices.stats___IndexShardStats'
import * as Nodes_CommonAdaptiveSelection from './nodes._common___AdaptiveSelection'
import * as Nodes_CommonBreaker from './nodes._common___Breaker'
import * as Nodes_CommonDiscovery from './nodes._common___Discovery'
import * as Nodes_CommonFileSystem from './nodes._common___FileSystem'
import * as Nodes_CommonHttp from './nodes._common___Http'
import * as Nodes_CommonIndexingPressure from './nodes._common___IndexingPressure'
import * as Nodes_CommonIngest from './nodes._common___Ingest'
import * as Nodes_CommonJvm from './nodes._common___Jvm'
import * as Nodes_CommonOperatingSystem from './nodes._common___OperatingSystem'
import * as Nodes_CommonProcess from './nodes._common___Process'
import * as Nodes_CommonRemoteStoreStats from './nodes._common___RemoteStoreStats'
import * as Nodes_CommonScriptCache from './nodes._common___ScriptCache'
import * as Nodes_CommonScripting from './nodes._common___Scripting'
import * as Nodes_CommonShardAdmissionControlStats from './nodes._common___ShardAdmissionControlStats'
import * as Nodes_CommonShardCachesStats from './nodes._common___ShardCachesStats'
import * as Nodes_CommonShardClusterManagerThrottlingStats from './nodes._common___ShardClusterManagerThrottlingStats'
import * as Nodes_CommonShardIndexingPressureStats from './nodes._common___ShardIndexingPressureStats'
import * as Nodes_CommonShardRepositoriesStats from './nodes._common___ShardRepositoriesStats'
import * as Nodes_CommonShardResourceUsageStats from './nodes._common___ShardResourceUsageStats'
import * as Nodes_CommonShardSearchBackpressureStats from './nodes._common___ShardSearchBackpressureStats'
import * as Nodes_CommonShardSearchPipelineStats from './nodes._common___ShardSearchPipelineStats'
import * as Nodes_CommonShardSegmentReplicationBackpressureStats from './nodes._common___ShardSegmentReplicationBackpressureStats'
import * as Nodes_CommonShardTaskCancellationStats from './nodes._common___ShardTaskCancellationStats'
import * as Nodes_CommonShardWeightedRoutingStats from './nodes._common___ShardWeightedRoutingStats'
import * as Nodes_CommonThreadCount from './nodes._common___ThreadCount'
import * as Nodes_CommonTransport from './nodes._common___Transport'

export type undefined = {
  adaptive_selection?: Record<string, Nodes_CommonAdaptiveSelection.undefined>;
  admission_control?: Nodes_CommonShardAdmissionControlStats.undefined;
  attributes?: Record<string, string>;
  breakers?: Record<string, Nodes_CommonBreaker.undefined>;
  caches?: Nodes_CommonShardCachesStats.undefined;
  cluster_manager_throttling?: Nodes_CommonShardClusterManagerThrottlingStats.undefined;
  discovery?: Nodes_CommonDiscovery.undefined;
  fs?: Nodes_CommonFileSystem.undefined;
  host?: CommonHost.undefined;
  http?: Nodes_CommonHttp.undefined;
  indexing_pressure?: Nodes_CommonIndexingPressure.undefined;
  indices?: Indices_StatsIndexShardStats.undefined;
  ingest?: Nodes_CommonIngest.undefined;
  ip?: CommonIp.undefined | CommonIp.undefined[];
  jvm?: Nodes_CommonJvm.undefined;
  name?: CommonName.undefined;
  os?: Nodes_CommonOperatingSystem.undefined;
  process?: Nodes_CommonProcess.undefined;
  remote_store?: Nodes_CommonRemoteStoreStats.undefined;
  repositories?: Nodes_CommonShardRepositoriesStats.undefined;
  resource_usage_stats?: Nodes_CommonShardResourceUsageStats.undefined;
  roles?: CommonNodeRoles.undefined;
  script?: Nodes_CommonScripting.undefined;
  script_cache?: Record<string, Nodes_CommonScriptCache.undefined | Nodes_CommonScriptCache.undefined[]>;
  search_backpressure?: Nodes_CommonShardSearchBackpressureStats.undefined;
  search_pipeline?: Nodes_CommonShardSearchPipelineStats.undefined;
  segment_replication_backpressure?: Nodes_CommonShardSegmentReplicationBackpressureStats.undefined;
  shard_indexing_pressure?: Nodes_CommonShardIndexingPressureStats.undefined;
  task_cancellation?: Nodes_CommonShardTaskCancellationStats.undefined;
  thread_pool?: Record<string, Nodes_CommonThreadCount.undefined>;
  timestamp?: number;
  transport?: Nodes_CommonTransport.undefined;
  transport_address?: CommonTransportAddress.undefined;
  weighted_routing?: Nodes_CommonShardWeightedRoutingStats.undefined;
}


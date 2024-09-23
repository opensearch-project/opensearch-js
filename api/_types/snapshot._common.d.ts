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

import * as Common from './_common'

export interface FileCountSnapshotStats {
  file_count: number;
  size_in_bytes: Common.ByteCount;
}

export interface IndexDetails {
  max_segments_per_shard: number;
  shard_count: number;
  size?: Common.HumanReadableByteCount;
  size_in_bytes: Common.ByteCount;
}

export interface InfoFeatureState {
  feature_name: string;
  indices: Common.Indices;
}

export interface Repository {
  settings: RepositorySettings;
  type: string;
  uuid?: Common.Uuid;
}

export interface RepositorySettings {
  chunk_size?: string;
  compress?: string | boolean;
  concurrent_streams?: string | number;
  location: string;
  read_only?: string | boolean;
}

export interface ShardsStats {
  done: number;
  failed: number;
  finalizing: number;
  initializing: number;
  started: number;
  total: number;
}

export type ShardsStatsStage = 'DONE' | 'FAILURE' | 'FINALIZE' | 'INIT' | 'STARTED'

export interface ShardsStatsSummary {
  incremental: ShardsStatsSummaryItem;
  start_time_in_millis: Common.EpochTimeUnitMillis;
  time?: Common.Duration;
  time_in_millis: Common.DurationValueUnitMillis;
  total: ShardsStatsSummaryItem;
}

export interface ShardsStatsSummaryItem {
  file_count: number;
  size_in_bytes: Common.ByteCount;
}

export interface SnapshotIndexStats {
  shards: Record<string, SnapshotShardsStatus>;
  shards_stats: ShardsStats;
  stats: SnapshotStats;
}

export interface SnapshotInfo {
  data_streams: string[];
  duration?: Common.Duration;
  duration_in_millis?: Common.DurationValueUnitMillis;
  end_time?: Common.DateTime;
  end_time_in_millis?: Common.EpochTimeUnitMillis;
  failures?: SnapshotShardFailure[];
  feature_states?: InfoFeatureState[];
  include_global_state?: boolean;
  index_details?: Record<string, IndexDetails>;
  indices?: Common.IndexName[];
  metadata?: Common.Metadata;
  reason?: string;
  repository?: Common.Name;
  shards?: Common.ShardStatistics;
  snapshot: Common.Name;
  start_time?: Common.DateTime;
  start_time_in_millis?: Common.EpochTimeUnitMillis;
  state?: string;
  uuid: Common.Uuid;
  version?: Common.VersionString;
  version_id?: Common.VersionNumber;
}

export interface SnapshotShardFailure {
  index: Common.IndexName;
  node_id?: Common.Id;
  reason: string;
  shard_id: Common.Id;
  status: string;
}

export interface SnapshotShardsStatus {
  stage: ShardsStatsStage;
  stats: ShardsStatsSummary;
}

export interface SnapshotStats {
  incremental: FileCountSnapshotStats;
  start_time_in_millis: Common.EpochTimeUnitMillis;
  time?: Common.Duration;
  time_in_millis: Common.DurationValueUnitMillis;
  total: FileCountSnapshotStats;
}

export interface Status {
  include_global_state: boolean;
  indices: Record<string, SnapshotIndexStats>;
  repository: string;
  shards_stats: ShardsStats;
  snapshot: string;
  state: string;
  stats: SnapshotStats;
  uuid: Common.Uuid;
}


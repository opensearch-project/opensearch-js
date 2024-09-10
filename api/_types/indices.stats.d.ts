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

export interface AllIndicesStats {
  primaries: IndexStats;
  total: IndexStats;
}

export interface IndexShardStats extends IndexStatsBase {
  commit?: ShardCommit;
  retention_leases?: ShardRetentionLeases;
  routing?: ShardRouting;
  seq_no?: ShardSequenceNumber;
  shard_path?: ShardPath;
}

export type IndexStats = IndexStatsBase & Record<string, any>

export interface IndexStatsBase {
  completion?: Common.CompletionStats;
  docs?: Common.DocStats;
  fielddata?: Common.FielddataStats;
  flush?: Common.FlushStats;
  get?: Common.GetStats;
  indexing?: Common.IndexingStats;
  merges?: Common.MergesStats;
  query_cache?: Common.QueryCacheStats;
  recovery?: Common.RecoveryStats;
  refresh?: Common.RefreshStats;
  request_cache?: Common.RequestCacheStats;
  search?: Common.SearchStats;
  segments?: Common.SegmentsStats;
  store?: Common.StoreStats;
  translog?: Common.TranslogStats;
  warmer?: Common.WarmerStats;
}

export interface IndicesStats {
  primaries: IndexStats;
  shards?: Record<string, IndexShardStats[]>;
  total: IndexStats;
  uuid: Common.Uuid;
}

export interface ShardCommit {
  generation: number;
  id: Common.Id;
  num_docs: number;
  user_data: Record<string, string>;
}

export interface ShardFileSizeInfo {
  average_size_in_bytes?: Common.Bytes;
  count?: number;
  description: string;
  max_size_in_bytes?: Common.Bytes;
  min_size_in_bytes?: Common.Bytes;
  size?: Common.StorageSize;
  size_in_bytes: Common.Bytes;
}

export interface ShardLease {
  id: Common.Id;
  retaining_seq_no: Common.SequenceNumber;
  source: string;
  timestamp: number;
}

export interface ShardPath {
  data_path: string;
  is_custom_data_path: boolean;
  state_path: string;
}

export interface ShardRetentionLeases {
  leases: ShardLease[];
  primary_term: number;
  version: Common.VersionNumber;
}

export interface ShardRouting {
  node: string;
  primary: boolean;
  relocating_node?: undefined | string;
  state: ShardRoutingState;
}

export type ShardRoutingState = 'INITIALIZING' | 'RELOCATING' | 'STARTED' | 'UNASSIGNED'

export interface ShardSequenceNumber {
  global_checkpoint: number;
  local_checkpoint: number;
  max_seq_no: Common.SequenceNumber;
}


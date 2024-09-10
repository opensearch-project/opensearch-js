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

export type IndexMetadataState = 'close' | 'open'

export interface IndexStats {
  bulk?: Common.BulkStats;
  completion?: Common.CompletionStats;
  docs?: Common.DocStats;
  fielddata?: Common.FielddataStats;
  flush?: Common.FlushStats;
  get?: Common.GetStats;
  indexing?: Common.IndexingStats;
  indices?: IndicesStats;
  merges?: Common.MergesStats;
  query_cache?: Common.QueryCacheStats;
  recovery?: Common.RecoveryStats;
  refresh?: Common.RefreshStats;
  request_cache?: Common.RequestCacheStats;
  search?: Common.SearchStats;
  segments?: Common.SegmentsStats;
  shard_stats?: ShardsTotalStats;
  store?: Common.StoreStats;
  translog?: Common.TranslogStats;
  warmer?: Common.WarmerStats;
}

export interface IndicesStats {
  health?: Common.HealthStatus;
  primaries?: IndexStats;
  shards?: Record<string, ShardStats[]>;
  status?: IndexMetadataState;
  total?: IndexStats;
  uuid?: Common.Uuid;
}

export interface MappingStats {
  total_count: number;
  total_estimated_overhead?: Common.ByteSize;
  total_estimated_overhead_in_bytes: number;
}

export interface ShardCommit {
  generation: number;
  id: Common.Id;
  num_docs: number;
  user_data: Record<string, string>;
}

export interface ShardFileSizeInfo {
  average_size_in_bytes?: number;
  count?: number;
  description: string;
  max_size_in_bytes?: number;
  min_size_in_bytes?: number;
  size_in_bytes: number;
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

export interface ShardQueryCache {
  cache_count: number;
  cache_size: number;
  evictions: number;
  hit_count: number;
  memory_size_in_bytes: number;
  miss_count: number;
  total_count: number;
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

export interface ShardStats {
  bulk?: Common.BulkStats;
  commit?: ShardCommit;
  completion?: Common.CompletionStats;
  docs?: Common.DocStats;
  fielddata?: Common.FielddataStats;
  flush?: Common.FlushStats;
  get?: Common.GetStats;
  indexing?: Common.IndexingStats;
  indices?: IndicesStats;
  mappings?: MappingStats;
  merges?: Common.MergesStats;
  query_cache?: ShardQueryCache;
  recovery?: Common.RecoveryStats;
  refresh?: Common.RefreshStats;
  request_cache?: Common.RequestCacheStats;
  retention_leases?: ShardRetentionLeases;
  routing?: ShardRouting;
  search?: Common.SearchStats;
  segments?: Common.SegmentsStats;
  seq_no?: ShardSequenceNumber;
  shard_path?: ShardPath;
  shard_stats?: ShardsTotalStats;
  shards?: Record<string, Record<string, any>>;
  store?: Common.StoreStats;
  translog?: Common.TranslogStats;
  warmer?: Common.WarmerStats;
}

export interface ShardsTotalStats {
  total_count: number;
}


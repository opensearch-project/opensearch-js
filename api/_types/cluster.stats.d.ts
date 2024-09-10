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
import * as Nodes_Common from './nodes._common'

export interface CharFilterTypes {
  analyzer_types: FieldTypes[];
  built_in_analyzers: FieldTypes[];
  built_in_char_filters: FieldTypes[];
  built_in_filters: FieldTypes[];
  built_in_tokenizers: FieldTypes[];
  char_filter_types: FieldTypes[];
  filter_types: FieldTypes[];
  tokenizer_types: FieldTypes[];
}

export interface ClusterFileSystem {
  available?: Common.StorageSize;
  available_in_bytes: Common.Bytes;
  cache_reserved?: Common.StorageSize;
  cache_reserved_in_bytes?: Common.Bytes;
  free?: Common.StorageSize;
  free_in_bytes: Common.Bytes;
  total?: Common.StorageSize;
  total_in_bytes: Common.Bytes;
}

export interface ClusterIndices {
  analysis: CharFilterTypes;
  completion: Common.CompletionStats;
  count: number;
  docs: Common.DocStats;
  fielddata: Common.FielddataStats;
  mappings: FieldTypesMappings;
  query_cache: Common.QueryCacheStats;
  segments: Common.SegmentsStats;
  shards: ClusterIndicesShards;
  store: Common.StoreStats;
  versions?: IndicesVersions[];
}

export interface ClusterIndicesShards {
  index?: ClusterIndicesShardsIndex;
  primaries?: number;
  replication?: number;
  total?: number;
}

export interface ClusterIndicesShardsIndex {
  primaries: ClusterShardMetrics;
  replication: ClusterShardMetrics;
  shards: ClusterShardMetrics;
}

export interface ClusterIngest {
  number_of_pipelines: number;
  processor_stats: Record<string, ClusterProcessor>;
}

export interface ClusterJvm {
  max_uptime?: Common.Duration;
  max_uptime_in_millis: Common.DurationValueUnitMillis;
  mem: ClusterJvmMemory;
  threads: number;
  versions: ClusterJvmVersion[];
}

export interface ClusterJvmMemory {
  heap_max?: Common.StorageSize;
  heap_max_in_bytes: Common.Bytes;
  heap_used?: Common.StorageSize;
  heap_used_in_bytes: Common.Bytes;
}

export interface ClusterJvmVersion {
  bundled_jdk: boolean;
  count: number;
  using_bundled_jdk: boolean;
  version: Common.VersionString;
  vm_name: string;
  vm_vendor: string;
  vm_version: Common.VersionString;
}

export interface ClusterNetworkTypes {
  http_types: Record<string, number>;
  transport_types: Record<string, number>;
}

export interface ClusterNodeCount {
  cluster_manager?: number;
  coordinating_only: number;
  data: number;
  data_cold?: number;
  data_content?: number;
  data_frozen?: number;
  data_hot?: number;
  data_warm?: number;
  ingest: number;
  master: number;
  ml?: number;
  remote_cluster_client: number;
  search?: number;
  total: number;
  transform?: number;
  voting_only?: number;
}

export interface ClusterNodes {
  count: ClusterNodeCount;
  discovery_types: Record<string, number>;
  fs: ClusterFileSystem;
  indexing_pressure?: IndexingPressure;
  ingest: ClusterIngest;
  jvm: ClusterJvm;
  network_types: ClusterNetworkTypes;
  os: ClusterOperatingSystem;
  packaging_types: NodePackagingType[];
  plugins: Common.PluginStats[];
  process: ClusterProcess;
  versions: Common.VersionString[];
}

export interface ClusterOperatingSystem {
  allocated_processors: number;
  architectures?: ClusterOperatingSystemArchitecture[];
  available_processors: number;
  mem: OperatingSystemMemoryInfo;
  names: ClusterOperatingSystemName[];
  pretty_names: ClusterOperatingSystemPrettyName[];
}

export interface ClusterOperatingSystemArchitecture {
  arch: string;
  count: number;
}

export interface ClusterOperatingSystemName {
  count: number;
  name: Common.Name;
}

export interface ClusterOperatingSystemPrettyName {
  count: number;
  pretty_name: Common.Name;
}

export interface ClusterProcess {
  cpu: ClusterProcessCpu;
  open_file_descriptors: ClusterProcessOpenFileDescriptors;
}

export interface ClusterProcessCpu {
  percent: number;
}

export interface ClusterProcessOpenFileDescriptors {
  avg: number;
  max: number;
  min: number;
}

export interface ClusterProcessor {
  count: number;
  current: number;
  failed: number;
  time?: Common.Duration;
  time_in_millis: Common.DurationValueUnitMillis;
}

export interface ClusterShardMetrics {
  avg: number;
  max: number;
  min: number;
}

export interface FieldTypes {
  count: number;
  index_count: number;
  indexed_vector_count?: number;
  indexed_vector_dim_max?: number;
  indexed_vector_dim_min?: number;
  name: Common.Name;
  script_count?: number;
}

export interface FieldTypesMappings {
  field_types: FieldTypes[];
  runtime_field_types?: RuntimeFieldTypes[];
  total_deduplicated_field_count?: number;
  total_deduplicated_mapping_size?: Common.StorageSize;
  total_deduplicated_mapping_size_in_bytes?: Common.Bytes;
  total_field_count?: number;
}

export interface IndexingPressure {
  memory: IndexingPressureMemory;
}

export interface IndexingPressureMemory {
  current: IndexingPressureMemorySummary;
  limit_in_bytes: Common.Bytes;
  total: IndexingPressureMemorySummary;
}

export interface IndexingPressureMemorySummary {
  all_in_bytes: Common.Bytes;
  combined_coordinating_and_primary_in_bytes: Common.Bytes;
  coordinating_in_bytes: Common.Bytes;
  coordinating_rejections?: number;
  primary_in_bytes: Common.Bytes;
  primary_rejections?: number;
  replica_in_bytes: Common.Bytes;
  replica_rejections?: number;
}

export interface IndicesVersions {
  index_count: number;
  primary_shard_count: number;
  total_primary_bytes: Common.Bytes;
  version: Common.VersionString;
}

export interface NodePackagingType {
  count: number;
  flavor?: string;
  type: string;
}

export interface OperatingSystemMemoryInfo {
  adjusted_total_in_bytes?: Common.Bytes;
  free?: Common.StorageSize;
  free_in_bytes: Common.Bytes;
  free_percent: number;
  total?: Common.StorageSize;
  total_in_bytes: Common.Bytes;
  used?: Common.StorageSize;
  used_in_bytes: Common.Bytes;
  used_percent: number;
}

export interface RuntimeFieldTypes {
  chars_max: number;
  chars_total: number;
  count: number;
  doc_max: number;
  doc_total: number;
  index_count: number;
  lang: string[];
  lines_max: number;
  lines_total: number;
  name: Common.Name;
  scriptless_count: number;
  shadowed_count: number;
  source_max: number;
  source_total: number;
}

export interface StatsResponseBase extends Nodes_Common.NodesResponseBase {
  cluster_name: Common.Name;
  cluster_uuid: Common.Uuid;
  indices: ClusterIndices;
  nodes: ClusterNodes;
  status: Common.HealthStatus;
  timestamp: number;
}


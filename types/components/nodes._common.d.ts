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

import * as Common from './_common'
import * as Indices_Stats from './indices.stats'

export interface AdaptiveSelection {
  avg_queue_size?: number;
  avg_response_time?: Common.Duration;
  avg_response_time_ns?: number;
  avg_service_time?: Common.Duration;
  avg_service_time_ns?: number;
  outgoing_searches?: number;
  rank?: string;
}

export interface Breaker {
  estimated_size?: string;
  estimated_size_in_bytes?: number;
  limit_size?: string;
  limit_size_in_bytes?: number;
  overhead?: number;
  tripped?: number;
}

export interface Cgroup {
  cpu?: CgroupCpu;
  cpuacct?: CpuAcct;
  memory?: CgroupMemory;
}

export interface CgroupCpu {
  cfs_period_micros?: number;
  cfs_quota_micros?: number;
  control_group?: string;
  stat?: CgroupCpuStat;
}

export interface CgroupCpuStat {
  number_of_elapsed_periods?: number;
  number_of_times_throttled?: number;
  time_throttled_nanos?: Common.DurationValueUnitNanos;
}

export interface CgroupMemory {
  control_group?: string;
  limit_in_bytes?: string;
  usage_in_bytes?: string;
}

export interface Client {
  agent?: string;
  closed_time_millis?: number;
  id?: number;
  last_request_time_millis?: number;
  last_uri?: string;
  local_address?: string;
  opened_time_millis?: number;
  remote_address?: string;
  request_count?: number;
  request_size_bytes?: number;
  x_opaque_id?: string;
}

export interface ClusterAppliedStats {
  recordings?: Recording[];
}

export interface ClusterStateOverallStats {
  failed_count?: number;
  total_time_in_millis?: Common.DurationValueUnitMillis;
  update_count?: number;
}

export interface ClusterStateQueue {
  committed?: number;
  pending?: number;
  total?: number;
}

export interface ClusterStateStats {
  overall?: ClusterStateOverallStats;
}

export interface ClusterStateUpdate {
  commit_time?: Common.Duration;
  commit_time_millis?: Common.DurationValueUnitMillis;
  completion_time?: Common.Duration;
  completion_time_millis?: Common.DurationValueUnitMillis;
  computation_time?: Common.Duration;
  computation_time_millis?: Common.DurationValueUnitMillis;
  context_construction_time?: Common.Duration;
  context_construction_time_millis?: Common.DurationValueUnitMillis;
  count: number;
  master_apply_time?: Common.Duration;
  master_apply_time_millis?: Common.DurationValueUnitMillis;
  notification_time?: Common.Duration;
  notification_time_millis?: Common.DurationValueUnitMillis;
  publication_time?: Common.Duration;
  publication_time_millis?: Common.DurationValueUnitMillis;
}

export interface Context {
  cache_evictions?: number;
  compilation_limit_triggered?: number;
  compilations?: number;
  context?: string;
}

export interface Cpu {
  load_average?: Record<string, number>;
  percent?: number;
  sys?: Common.Duration;
  sys_in_millis?: Common.DurationValueUnitMillis;
  total?: Common.Duration;
  total_in_millis?: Common.DurationValueUnitMillis;
  user?: Common.Duration;
  user_in_millis?: Common.DurationValueUnitMillis;
}

export interface CpuAcct {
  control_group?: string;
  usage_nanos?: Common.DurationValueUnitNanos;
}

export interface DataPathStats {
  available?: string;
  available_in_bytes?: number;
  cache_reserved_in_bytes?: number;
  disk_queue?: string;
  disk_read_size?: string;
  disk_read_size_in_bytes?: number;
  disk_reads?: number;
  disk_write_size?: string;
  disk_write_size_in_bytes?: number;
  disk_writes?: number;
  free?: string;
  free_in_bytes?: number;
  mount?: string;
  path?: string;
  total?: string;
  total_in_bytes?: number;
  type?: string;
}

export interface Discovery {
  cluster_applier_stats?: ClusterAppliedStats;
  cluster_state_queue?: ClusterStateQueue;
  cluster_state_stats?: ClusterStateStats;
  cluster_state_update?: Record<string, ClusterStateUpdate>;
  published_cluster_states?: PublishedClusterStates;
  serialized_cluster_states?: SerializedClusterState;
}

export interface ExtendedMemoryStats extends MemoryStats {
  free_percent?: number;
  used_percent?: number;
}

export interface FileSystem {
  data?: DataPathStats[];
  io_stats?: IoStats;
  timestamp?: number;
  total?: FileSystemTotal;
}

export interface FileSystemTotal {
  available?: string;
  available_in_bytes?: number;
  cache_reserved_in_bytes?: number;
  free?: string;
  free_in_bytes?: number;
  total?: string;
  total_in_bytes?: number;
}

export interface GarbageCollector {
  collectors?: Record<string, GarbageCollectorTotal>;
}

export interface GarbageCollectorTotal {
  collection_count?: number;
  collection_time?: string;
  collection_time_in_millis?: number;
}

export interface Http {
  clients?: Client[];
  current_open?: number;
  total_opened?: number;
}

export interface IndexingPressure {
  memory?: IndexingPressureMemory;
}

export interface IndexingPressureMemory {
  current?: PressureMemory;
  limit?: Common.ByteSize;
  limit_in_bytes?: number;
  total?: PressureMemory;
}

export interface Ingest {
  pipelines?: Record<string, IngestTotal>;
  total?: IngestTotal;
}

export interface IngestTotal {
  count?: number;
  current?: number;
  failed?: number;
  processors?: Record<string, KeyedProcessor>[];
  time_in_millis?: Common.DurationValueUnitMillis;
}

export interface IoStatDevice {
  device_name?: string;
  operations?: number;
  read_kilobytes?: number;
  read_operations?: number;
  write_kilobytes?: number;
  write_operations?: number;
}

export interface IoStats {
  devices?: IoStatDevice[];
  total?: IoStatDevice;
}

export interface Jvm {
  buffer_pools?: Record<string, NodeBufferPool>;
  classes?: JvmClasses;
  gc?: GarbageCollector;
  mem?: JvmMemoryStats;
  threads?: JvmThreads;
  timestamp?: number;
  uptime?: string;
  uptime_in_millis?: number;
}

export interface JvmClasses {
  current_loaded_count?: number;
  total_loaded_count?: number;
  total_unloaded_count?: number;
}

export interface JvmMemoryStats {
  heap_committed_in_bytes?: number;
  heap_max_in_bytes?: number;
  heap_used_in_bytes?: number;
  heap_used_percent?: number;
  non_heap_committed_in_bytes?: number;
  non_heap_used_in_bytes?: number;
  pools?: Record<string, Pool>;
}

export interface JvmThreads {
  count?: number;
  peak_count?: number;
}

export interface KeyedProcessor {
  stats?: Processor;
  type?: string;
}

export interface LastGcStats {
  max_in_bytes?: number;
  usage_percent?: number;
  used_in_bytes?: number;
}

export interface MemoryStats {
  adjusted_total_in_bytes?: number;
  free_in_bytes?: number;
  resident?: string;
  resident_in_bytes?: number;
  share?: string;
  share_in_bytes?: number;
  total_in_bytes?: number;
  total_virtual?: string;
  total_virtual_in_bytes?: number;
  used_in_bytes?: number;
}

export interface NodeBufferPool {
  count?: number;
  total_capacity?: string;
  total_capacity_in_bytes?: number;
  used?: string;
  used_in_bytes?: number;
}

export interface NodeReloadError {
  name: Common.Name;
  reload_exception?: Common.ErrorCause;
}

export type NodeReloadResult = Stats | NodeReloadError

export interface NodesResponseBase {
  _nodes?: Common.NodeStatistics;
}

export interface OperatingSystem {
  cgroup?: Cgroup;
  cpu?: Cpu;
  mem?: ExtendedMemoryStats;
  swap?: MemoryStats;
  timestamp?: number;
}

export interface Pool {
  last_gc_stats?: LastGcStats;
  max_in_bytes?: number;
  peak_max_in_bytes?: number;
  peak_used_in_bytes?: number;
  used_in_bytes?: number;
}

export interface PressureMemory {
  all?: Common.ByteSize;
  all_in_bytes?: number;
  combined_coordinating_and_primary?: Common.ByteSize;
  combined_coordinating_and_primary_in_bytes?: number;
  coordinating?: Common.ByteSize;
  coordinating_in_bytes?: number;
  coordinating_rejections?: number;
  primary?: Common.ByteSize;
  primary_in_bytes?: number;
  primary_rejections?: number;
  replica?: Common.ByteSize;
  replica_in_bytes?: number;
  replica_rejections?: number;
}

export interface Process {
  cpu?: Cpu;
  max_file_descriptors?: number;
  mem?: MemoryStats;
  open_file_descriptors?: number;
  timestamp?: number;
}

export interface Processor {
  count?: number;
  current?: number;
  failed?: number;
  time_in_millis?: Common.DurationValueUnitMillis;
}

export interface PublishedClusterStates {
  compatible_diffs?: number;
  full_states?: number;
  incompatible_diffs?: number;
}

export interface Recording {
  cumulative_execution_count?: number;
  cumulative_execution_time?: Common.Duration;
  cumulative_execution_time_millis?: Common.DurationValueUnitMillis;
  name?: string;
}

export type SampleType = 'block' | 'cpu' | 'wait'

export interface ScriptCache {
  cache_evictions?: number;
  compilation_limit_triggered?: number;
  compilations?: number;
  context?: string;
}

export interface Scripting {
  cache_evictions?: number;
  compilation_limit_triggered?: number;
  compilations?: number;
  compilations_history?: Record<string, number>;
  contexts?: Context[];
}

export interface SerializedClusterState {
  diffs?: SerializedClusterStateDetail;
  full_states?: SerializedClusterStateDetail;
}

export interface SerializedClusterStateDetail {
  compressed_size?: string;
  compressed_size_in_bytes?: number;
  count?: number;
  uncompressed_size?: string;
  uncompressed_size_in_bytes?: number;
}

export interface ShardAdmissionControlStats {
  global_cpu_usage?: UsageStats;
  global_io_usage?: UsageStats;
}

export type ShardCachesStats = Record<string, ShardCacheStats>

export interface ShardCacheStats {
  evictions?: number;
  hit_count?: number;
  item_count?: number;
  miss_count?: number;
  size_in_bytes?: number;
  store_name?: string;
}

export interface ShardClusterManagerThrottlingStats {
  stats?: ShardClusterManagerThrottlingStatsDetail;
}

export interface ShardClusterManagerThrottlingStatsDetail {
  throttled_tasks_per_task_type?: Record<string, any>;
  total_throttled_tasks?: number;
}

export interface ShardIndexingPressureStats {
  enabled?: boolean;
  enforced?: boolean;
  stats?: Record<string, any>;
  total_rejections_breakup_shadow_mode?: TotalRejectionsBreakupShadowMode;
}

export type ShardRepositoriesStats = any[]

export type ShardResourceUsageStats = Record<string, ShardResourceUsageStatsDetail>

export interface ShardResourceUsageStatsDetail {
  cpu_utilization_percent?: Common.Percentage;
  io_usage_stats?: ShardResourceUsageStatsIoUsageStats;
  memory_utilization_percent?: Common.Percentage;
  timestamp?: number;
}

export interface ShardResourceUsageStatsIoUsageStats {
  max_io_utilization_percent?: Common.Percentage;
}

export type ShardSearchBackpressureMode = 'disabled' | 'enforced' | 'monitor_only'

export interface ShardSearchBackpressureStats {
  mode?: ShardSearchBackpressureMode;
  search_shard_task?: ShardSearchBackpressureTaskStats;
  search_task?: ShardSearchBackpressureTaskStats;
}

export interface ShardSearchBackpressureTaskCancellationStats {
  cancellation_count?: number;
  cancellation_limit_reached_count?: number;
}

export interface ShardSearchBackpressureTaskResourceTrackerCpuUsageTrackerStats {
  cancellation_count?: number;
  current_avg_millis?: Common.DurationValueUnitMillis;
  current_max_millis?: Common.DurationValueUnitMillis;
}

export interface ShardSearchBackpressureTaskResourceTrackerElapsedTimeTrackerStats {
  cancellation_count?: number;
  current_avg_millis?: Common.DurationValueUnitMillis;
  current_max_millis?: Common.DurationValueUnitMillis;
}

export interface ShardSearchBackpressureTaskResourceTrackerHeapUsageTrackerStats {
  cancellation_count?: number;
  current_avg_bytes?: number;
  current_max_bytes?: number;
  rolling_avg_bytes?: number;
}

export interface ShardSearchBackpressureTaskResourceTrackerStats {
  cpu_usage_tracker?: ShardSearchBackpressureTaskResourceTrackerCpuUsageTrackerStats;
  elapsed_time_tracker?: ShardSearchBackpressureTaskResourceTrackerElapsedTimeTrackerStats;
  heap_usage_tracker?: ShardSearchBackpressureTaskResourceTrackerHeapUsageTrackerStats;
}

export interface ShardSearchBackpressureTaskStats {
  cancellation_stats?: ShardSearchBackpressureTaskCancellationStats;
  completion_count?: number;
  resource_tracker_stats?: ShardSearchBackpressureTaskResourceTrackerStats;
}

export interface ShardSearchPipelineStats {
  pipelines?: Record<string, any>;
  total_request?: ShardSearchPipelineTotalStats;
  total_response?: ShardSearchPipelineTotalStats;
}

export interface ShardSearchPipelineTotalStats {
  count?: number;
  current?: number;
  failed?: number;
  time_in_millis?: Common.DurationValueUnitMillis;
}

export interface ShardSegmentReplicationBackpressureStats {
  total_rejected_requests?: number;
}

export interface ShardTaskCancellationStats {
  search_shard_task?: ShardTaskCancellationStatsDetail;
}

export interface ShardTaskCancellationStatsDetail {
  current_count_post_cancel?: number;
  total_count_post_cancel?: number;
}

export interface ShardWeightedRoutingStats {
  stats?: ShardWeightedRoutingStatsDetail;
}

export interface ShardWeightedRoutingStatsDetail {
  fail_open_count?: number;
}

export interface Stats {
  adaptive_selection?: Record<string, AdaptiveSelection>;
  admission_control?: ShardAdmissionControlStats;
  attributes?: Record<string, string>;
  breakers?: Record<string, Breaker>;
  caches?: ShardCachesStats;
  cluster_manager_throttling?: ShardClusterManagerThrottlingStats;
  discovery?: Discovery;
  fs?: FileSystem;
  host?: Common.Host;
  http?: Http;
  indexing_pressure?: IndexingPressure;
  indices?: Indices_Stats.ShardStats;
  ingest?: Ingest;
  ip?: Common.Ip | Common.Ip[];
  jvm?: Jvm;
  name?: Common.Name;
  os?: OperatingSystem;
  process?: Process;
  repositories?: ShardRepositoriesStats;
  resource_usage_stats?: ShardResourceUsageStats;
  roles?: Common.NodeRoles;
  script?: Scripting;
  script_cache?: Record<string, ScriptCache | ScriptCache[]>;
  search_backpressure?: ShardSearchBackpressureStats;
  search_pipeline?: ShardSearchPipelineStats;
  segment_replication_backpressure?: ShardSegmentReplicationBackpressureStats;
  shard_indexing_pressure?: ShardIndexingPressureStats;
  task_cancellation?: ShardTaskCancellationStats;
  thread_pool?: Record<string, ThreadCount>;
  timestamp?: number;
  transport?: Transport;
  transport_address?: Common.TransportAddress;
  weighted_routing?: ShardWeightedRoutingStats;
}

export interface ThreadCount {
  active?: number;
  completed?: number;
  largest?: number;
  queue?: number;
  rejected?: number;
  threads?: number;
  total_wait_time_in_nanos?: number;
}

export interface TotalRejectionsBreakupShadowMode {
  no_successful_request_limits?: number;
  node_limits?: number;
  throughput_degradation_limits?: number;
}

export interface Transport {
  inbound_handling_time_histogram?: TransportHistogram[];
  outbound_handling_time_histogram?: TransportHistogram[];
  rx_count?: number;
  rx_size?: string;
  rx_size_in_bytes?: number;
  server_open?: number;
  total_outbound_connections?: number;
  tx_count?: number;
  tx_size?: string;
  tx_size_in_bytes?: number;
}

export interface TransportHistogram {
  count?: number;
  ge_millis?: number;
  lt_millis?: number;
}

export interface TransportUsageStats {
  rejection_count?: Record<string, any>;
}

export interface UsageStats {
  transport?: TransportUsageStats;
}


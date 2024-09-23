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
  estimated_size?: Common.HumanReadableByteCount;
  estimated_size_in_bytes?: Common.ByteCount;
  limit_size?: Common.HumanReadableByteCount;
  limit_size_in_bytes?: Common.ByteCount;
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
  request_size_bytes?: Common.ByteCount;
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
  percent?: Common.PercentageNumber;
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
  available?: Common.HumanReadableByteCount;
  available_in_bytes?: Common.ByteCount;
  cache_reserved?: Common.HumanReadableByteCount;
  cache_reserved_in_bytes?: Common.ByteCount;
  disk_queue?: string;
  disk_read_size?: Common.HumanReadableByteCount;
  disk_read_size_in_bytes?: Common.ByteCount;
  disk_reads?: number;
  disk_write_size?: Common.HumanReadableByteCount;
  disk_write_size_in_bytes?: Common.ByteCount;
  disk_writes?: number;
  free?: Common.HumanReadableByteCount;
  free_in_bytes?: Common.ByteCount;
  mount?: string;
  path?: string;
  total?: Common.HumanReadableByteCount;
  total_in_bytes?: Common.ByteCount;
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
  free_percent?: Common.PercentageNumber;
  used_percent?: Common.PercentageNumber;
}

export interface FileSystem {
  data?: DataPathStats[];
  io_stats?: IoStats;
  timestamp?: number;
  total?: FileSystemTotal;
}

export interface FileSystemTotal {
  available?: Common.HumanReadableByteCount;
  available_in_bytes?: Common.ByteCount;
  cache_reserved?: Common.HumanReadableByteCount;
  cache_reserved_in_bytes?: Common.ByteCount;
  free?: Common.HumanReadableByteCount;
  free_in_bytes?: Common.ByteCount;
  total?: Common.HumanReadableByteCount;
  total_in_bytes?: Common.ByteCount;
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
  limit?: Common.HumanReadableByteCount;
  limit_in_bytes?: Common.ByteCount;
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
  time?: Common.Duration;
  time_in_millis?: Common.DurationValueUnitMillis;
}

export interface IoStatDevice {
  device_name?: string;
  io_time_in_millis?: Common.DurationValueUnitMillis;
  operations?: number;
  queue_size?: number;
  read_kilobytes?: number;
  read_operations?: number;
  read_time?: number;
  write_kilobytes?: number;
  write_operations?: number;
  write_time?: number;
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
  heap_committed?: Common.HumanReadableByteCount;
  heap_committed_in_bytes?: Common.ByteCount;
  heap_max?: Common.HumanReadableByteCount;
  heap_max_in_bytes?: Common.ByteCount;
  heap_used?: Common.HumanReadableByteCount;
  heap_used_in_bytes?: Common.ByteCount;
  heap_used_percent?: Common.PercentageNumber;
  non_heap_committed?: Common.HumanReadableByteCount;
  non_heap_committed_in_bytes?: Common.ByteCount;
  non_heap_used?: Common.HumanReadableByteCount;
  non_heap_used_in_bytes?: Common.ByteCount;
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
  max?: Common.HumanReadableByteCount;
  max_in_bytes?: Common.ByteCount;
  usage_percent?: Common.PercentageNumber;
  used?: Common.HumanReadableByteCount;
  used_in_bytes?: Common.ByteCount;
}

export interface MemoryStats {
  adjusted_total_in_bytes?: Common.ByteCount;
  free?: Common.HumanReadableByteCount;
  free_in_bytes?: Common.ByteCount;
  resident?: Common.HumanReadableByteCount;
  resident_in_bytes?: Common.ByteCount;
  share?: Common.HumanReadableByteCount;
  share_in_bytes?: Common.ByteCount;
  total?: Common.HumanReadableByteCount;
  total_in_bytes?: Common.ByteCount;
  total_virtual?: Common.HumanReadableByteCount;
  total_virtual_in_bytes?: Common.ByteCount;
  used?: Common.HumanReadableByteCount;
  used_in_bytes?: Common.ByteCount;
}

export interface NodeBufferPool {
  count?: number;
  total_capacity?: Common.HumanReadableByteCount;
  total_capacity_in_bytes?: Common.ByteCount;
  used?: Common.HumanReadableByteCount;
  used_in_bytes?: Common.ByteCount;
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
  max?: Common.HumanReadableByteCount;
  max_in_bytes?: Common.ByteCount;
  peak_max?: Common.HumanReadableByteCount;
  peak_max_in_bytes?: Common.ByteCount;
  peak_used?: Common.HumanReadableByteCount;
  peak_used_in_bytes?: Common.ByteCount;
  used?: Common.HumanReadableByteCount;
  used_in_bytes?: Common.ByteCount;
}

export interface PressureMemory {
  all?: Common.HumanReadableByteCount;
  all_in_bytes?: Common.ByteCount;
  combined_coordinating_and_primary?: Common.HumanReadableByteCount;
  combined_coordinating_and_primary_in_bytes?: Common.ByteCount;
  coordinating?: Common.HumanReadableByteCount;
  coordinating_in_bytes?: Common.ByteCount;
  coordinating_rejections?: number;
  primary?: Common.HumanReadableByteCount;
  primary_in_bytes?: Common.ByteCount;
  primary_rejections?: number;
  replica?: Common.HumanReadableByteCount;
  replica_in_bytes?: Common.ByteCount;
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
  time?: Common.Duration;
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
  compressed_size?: Common.HumanReadableByteCount;
  compressed_size_in_bytes?: Common.ByteCount;
  count?: number;
  uncompressed_size?: Common.HumanReadableByteCount;
  uncompressed_size_in_bytes?: Common.ByteCount;
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
  size?: Common.HumanReadableByteCount;
  size_in_bytes?: Common.ByteCount;
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
  total_rejections_breakup?: TotalRejectionsBreakup;
  total_rejections_breakup_shadow_mode?: TotalRejectionsBreakup;
}

export type ShardRepositoriesStats = any[]

export type ShardResourceUsageStats = Record<string, ShardResourceUsageStatsDetail>

export interface ShardResourceUsageStatsDetail {
  cpu_utilization_percent?: Common.PercentageString;
  io_usage_stats?: ShardResourceUsageStatsIoUsageStats;
  memory_utilization_percent?: Common.PercentageString;
  timestamp?: number;
}

export interface ShardResourceUsageStatsIoUsageStats {
  max_io_utilization_percent?: Common.PercentageString;
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
  cancelled_task_percentage?: Common.PercentageNumber;
  current_cancellation_eligible_tasks_count?: number;
}

export interface ShardSearchBackpressureTaskResourceTrackerCpuUsageTrackerStats {
  cancellation_count?: number;
  current_avg?: Common.Duration;
  current_avg_millis?: Common.DurationValueUnitMillis;
  current_max?: Common.Duration;
  current_max_millis?: Common.DurationValueUnitMillis;
}

export interface ShardSearchBackpressureTaskResourceTrackerElapsedTimeTrackerStats {
  cancellation_count?: number;
  current_avg?: Common.Duration;
  current_avg_millis?: Common.DurationValueUnitMillis;
  current_max?: Common.Duration;
  current_max_millis?: Common.DurationValueUnitMillis;
}

export interface ShardSearchBackpressureTaskResourceTrackerHeapUsageTrackerStats {
  cancellation_count?: number;
  current_avg?: Common.HumanReadableByteCount;
  current_avg_bytes?: Common.ByteCount;
  current_max?: Common.HumanReadableByteCount;
  current_max_bytes?: Common.ByteCount;
  rolling_avg?: Common.HumanReadableByteCount;
  rolling_avg_bytes?: Common.ByteCount;
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
  time?: Common.Duration;
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
  indices?: Indices_Stats.IndexShardStats;
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
  total_wait_time?: Common.Duration;
  total_wait_time_in_nanos?: number;
}

export interface TotalRejectionsBreakup {
  no_successful_request_limits?: number;
  node_limits?: number;
  throughput_degradation_limits?: number;
}

export interface Transport {
  inbound_handling_time_histogram?: TransportHistogram[];
  outbound_handling_time_histogram?: TransportHistogram[];
  rx_count?: number;
  rx_size?: Common.HumanReadableByteCount;
  rx_size_in_bytes?: Common.ByteCount;
  server_open?: number;
  total_outbound_connections?: number;
  tx_count?: number;
  tx_size?: Common.HumanReadableByteCount;
  tx_size_in_bytes?: Common.ByteCount;
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


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

export interface AllocationDecision {
  decider: string;
  decision: AllocationExplainDecision;
  explanation: string;
}

export type AllocationExplainDecision = 'ALWAYS' | 'NO' | 'THROTTLE' | 'YES'

export interface AllocationStore {
  allocation_id: string;
  found: boolean;
  in_sync: boolean;
  matching_size_in_bytes: Common.Bytes;
  matching_sync_id: boolean;
  store_exception: string;
}

export interface ClusterInfo {
  nodes: Record<string, NodeDiskUsage>;
  reserved_sizes: ReservedSize[];
  shard_data_set_sizes?: Record<string, string>;
  shard_paths: Record<string, string>;
  shard_sizes: Record<string, Common.Bytes | Common.StorageSize>;
}

export interface CurrentNode {
  attributes: Record<string, string>;
  id: Common.Id;
  name: Common.Name;
  transport_address: Common.TransportAddress;
  weight_ranking: number;
}

export type Decision = 'allocation_delayed' | 'awaiting_info' | 'no' | 'no_attempt' | 'no_valid_shard_copy' | 'throttled' | 'worse_balance' | 'yes'

export interface DiskUsage {
  free?: Common.StorageSize;
  free_bytes: Common.Bytes;
  free_disk_percent: number;
  path: string;
  total?: Common.StorageSize;
  total_bytes: Common.Bytes;
  used?: Common.StorageSize;
  used_bytes: Common.Bytes;
  used_disk_percent: number;
}

export interface NodeAllocationExplanation {
  deciders: AllocationDecision[];
  node_attributes: Record<string, string>;
  node_decision: Decision;
  node_id: Common.Id;
  node_name: Common.Name;
  store?: AllocationStore;
  transport_address: Common.TransportAddress;
  weight_ranking: number;
}

export interface NodeDiskUsage {
  least_available: DiskUsage;
  most_available: DiskUsage;
  node_name: Common.Name;
}

export interface ReservedSize {
  node_id: Common.Id;
  path: string;
  shards: string[];
  total: number;
}

export interface UnassignedInformation {
  allocation_status?: string;
  at: Common.DateTime;
  delayed?: boolean;
  details?: string;
  failed_allocation_attempts?: number;
  last_allocation_status?: string;
  reason: UnassignedInformationReason;
}

export type UnassignedInformationReason = 'ALLOCATION_FAILED' | 'CLUSTER_RECOVERED' | 'DANGLING_INDEX_IMPORTED' | 'EXISTING_INDEX_RESTORED' | 'FORCED_EMPTY_PRIMARY' | 'INDEX_CREATED' | 'INDEX_REOPENED' | 'MANUAL_ALLOCATION' | 'NEW_INDEX_RESTORED' | 'NODE_LEFT' | 'PRIMARY_FAILED' | 'REALLOCATED_REPLICA' | 'REINITIALIZED' | 'REPLICA_ADDED' | 'REROUTE_CANCELLED'


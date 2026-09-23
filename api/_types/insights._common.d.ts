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


export type GroupingType = 'NONE' | 'SIMILARITY' | 'none' | 'similarity'

export type Measurement = {
  aggregationType?: string;
  count?: number;
  number?: number;
}

export type Measurements = {
  cpu?: Measurement;
  latency?: Measurement;
  memory?: Measurement;
}

export type MetricType = 'cpu' | 'latency' | 'memory'

export type TaskResourceUsage = {
  cpu_time_in_nanos?: number;
  memory_in_bytes?: number;
}

export type TaskResourceUsages = {
  action?: string;
  nodeId?: string;
  parentTaskId?: number;
  taskId?: number;
  taskResourceUsage?: TaskResourceUsage;
}

export type TopQueriesResponse = {
  top_queries: TopQuery[];
}

export type TopQuery = {
  backend_roles?: string[];
  failed?: boolean;
  group_by?: GroupingType;
  id?: string;
  indices?: string[];
  labels?: Record<string, any>;
  measurements?: Measurements;
  node_id?: string;
  phase_latency_map?: Record<string, any>;
  query_hashcode?: string;
  search_type?: string;
  source?: string;
  source_truncated?: boolean;
  task_resource_usages?: TaskResourceUsages[];
  timestamp?: number;
  total_shards?: number;
  user_roles?: string[];
  username?: string;
  wlm_group_id?: string;
}


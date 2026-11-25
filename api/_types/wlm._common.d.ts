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

export type NodeWlmStats = {
  query_groups?: Record<string, WorkloadGroupStats>;
  workload_groups?: Record<string, WorkloadGroupStats>;
}

export type QueryGroupCreate = {
  name: string;
  resiliency_mode: ResiliencyMode;
  resource_limits: {
  cpu?: number;
  memory: number;
} | {
  cpu: number;
  memory?: number;
};
}

export type QueryGroupResponse = {
  _id: string;
  name: string;
  resiliency_mode: ResiliencyMode;
  resource_limits: {
  cpu?: number;
  memory: number;
} | {
  cpu: number;
  memory?: number;
};
  updated_at: number;
}

export type QueryGroupUpdate = {
  resiliency_mode?: ResiliencyMode;
  resource_limits?: ResourceLimitsSchema;
}

export type ResiliencyMode = 'enforced' | 'monitor' | 'soft'

export type ResourceLimitsSchema = {
  cpu?: number;
  memory?: number;
}

export type WlmResourceStats = {
  cancellations?: number;
  current_usage?: number;
  rejections?: number;
}

export type WlmStatsListResponse = WlmStatsRecord[] | {
  next_token?: undefined | string;
  wlm_stats?: WlmStatsRecord[];
}

export type WlmStatsRecord = {
  CPU_USAGE?: string;
  MEMORY_USAGE?: string;
  NODE_ID?: string;
  TOTAL_CANCELLATIONS?: string;
  TOTAL_COMPLETIONS?: string;
  TOTAL_REJECTIONS?: string;
  WORKLOAD_GROUP_ID?: string;
  [key: string]: any | string;
}

export type WlmStatsResponse = {
  _nodes?: Common.NodeStatistics;
  cluster_name?: Common.Name;
  [key: string]: any | NodeWlmStats;
}

export type WlmStatsSortBy = 'node_id' | 'workload_group'

export type WorkloadGroupCreate = {
  name: string;
  resiliency_mode: ResiliencyMode;
  resource_limits: WorkloadGroupResourceLimits;
  settings?: WorkloadGroupSettings;
}

export type WorkloadGroupId = string

export type WorkloadGroupIds = WorkloadGroupId | WorkloadGroupId[]

export type WorkloadGroupResourceLimits = ResourceLimitsSchema & Record<string, any>

export type WorkloadGroupResponse = {
  _id: string;
  name: string;
  resiliency_mode: ResiliencyMode;
  resource_limits: WorkloadGroupResourceLimits;
  settings?: WorkloadGroupSettings;
  updated_at: number;
}

export type WorkloadGroupSettings = Record<string, string>

export type WorkloadGroupStats = {
  cpu?: WlmResourceStats;
  memory?: WlmResourceStats;
  total_cancellations?: number;
  total_completions?: number;
  total_rejections?: number;
}

export type WorkloadGroupUpdate = {
  resiliency_mode?: ResiliencyMode;
  resource_limits?: ResourceLimitsSchema;
  settings?: WorkloadGroupSettings;
}


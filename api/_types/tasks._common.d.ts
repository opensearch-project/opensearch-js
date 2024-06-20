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

export type GroupBy = 'nodes' | 'none' | 'parents'

export interface NodeTasks {
  attributes?: Record<string, string>;
  host?: Common.Host;
  ip?: Common.Ip;
  name?: Common.NodeId;
  roles?: string[];
  tasks: Record<string, TaskInfo>;
  transport_address?: Common.TransportAddress;
}

export interface ParentTaskInfo extends TaskInfo {
  children?: TaskInfo[];
}

export interface TaskInfo {
  action: string;
  cancellable: boolean;
  cancelled?: boolean;
  description?: string;
  headers: Record<string, string>;
  id: number;
  node: Common.NodeId;
  parent_task_id?: Common.TaskId;
  running_time?: Common.Duration;
  running_time_in_nanos: Common.DurationValueUnitNanos;
  start_time_in_millis: Common.EpochTimeUnitMillis;
  status?: Record<string, any>;
  type: string;
}

export type TaskInfos = TaskInfo[] | Record<string, ParentTaskInfo>

export interface TaskListResponseBase {
  node_failures?: Common.ErrorCause[];
  nodes?: Record<string, NodeTasks>;
  task_failures?: Common.TaskFailure[];
  tasks?: TaskInfos;
}


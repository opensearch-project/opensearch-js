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

export type GroupBy = 'nodes' | 'none' | 'parents'

export interface PersistentTaskStatus {
  state: string;
}

export type RawTaskStatus = Record<string, Record<string, any>>

export interface ReplicationTaskStatus {
  phase: string;
}

export type Status = ReplicationTaskStatus | Common.BulkByScrollTaskStatus | PersistentTaskStatus | RawTaskStatus

export interface TaskExecutingNode extends Common.BaseNode {
  tasks: Record<string, TaskInfo>;
}

export interface TaskGroup extends TaskInfo {
  children?: TaskGroup[];
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
  status?: Status;
  type: string;
}

export type TaskInfos = TaskInfo[] | Record<string, TaskGroup>

export interface TaskListResponseBase {
  node_failures?: Common.ErrorCause[];
  nodes?: Record<string, TaskExecutingNode>;
  task_failures?: Common.TaskFailure[];
  tasks?: TaskInfos;
}

export type TaskResponse = Common.BulkByScrollResponseBase


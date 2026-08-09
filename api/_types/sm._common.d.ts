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


export type CreateUpdatePolicyRequest = {
  creation: CreationConfig;
  deletion?: DeletionConfig;
  description?: string;
  enabled?: boolean;
  notification?: NotificationConfig;
  snapshot_config: SnapshotConfig;
}

export type CreationConfig = {
  schedule: CronSchedule;
  time_limit?: string;
}

export type CronExpression = {
  expression: string;
  timezone: string;
}

export type CronSchedule = {
  cron?: CronExpression;
}

export type DeletionCondition = {
  max_age?: string;
  max_count?: number;
  min_count?: number;
}

export type DeletionConfig = {
  condition?: DeletionCondition;
  schedule?: CronSchedule;
  time_limit?: string;
}

export type ExecutionInfo = {
  cause?: string;
  message?: string;
}

export type ExecutionMetadata = {
  info?: ExecutionInfo;
}

export type ExplainedPolicy = {
  creation?: StateMetadata;
  deletion?: StateMetadata;
  enabled?: boolean;
  name?: string;
  policy_primary_term?: number;
  policy_seq_no?: number;
}

export type GetPoliciesResponse = {
  policies: ListedPolicy[];
  total_policies: number;
}

export type IntervalConfig = {
  period: number;
  start_time: number;
  unit: IntervalUnit;
}

export type IntervalSchedule = {
  interval?: IntervalConfig;
}

export type IntervalUnit = 'Days' | 'Hours' | 'Minutes'

export type ListedPolicy = {
  _id: string;
  _primary_term?: number;
  _seq_no?: number;
  sm_policy: SMPolicy;
}

export type NotificationChannel = {
  id: string;
}

export type NotificationConditions = {
  creation?: boolean;
  deletion?: boolean;
  failure?: boolean;
  time_limit_exceeded?: boolean;
}

export type NotificationConfig = {
  channel?: NotificationChannel;
  conditions?: NotificationConditions;
}

export type PolicyExplanation = {
  policies?: ExplainedPolicy[];
}

export type PolicyResponse = {
  _id: string;
  _primary_term: number;
  _seq_no: number;
  _version: number;
  sm_policy: SMPolicy;
}

export type RetryMetadata = {
  count?: number;
}

export type SMPolicy = {
  creation: CreationConfig;
  deletion?: DeletionConfig;
  description: string;
  enabled?: boolean;
  enabled_time?: number;
  last_updated_time?: number;
  name: string;
  notification?: NotificationConfig;
  schedule?: IntervalSchedule;
  schema_version?: number;
  snapshot_config: SnapshotConfig;
}

export type SnapshotConfig = {
  date_format?: string;
  ignore_unavailable?: boolean;
  include_global_state?: boolean;
  indices?: string;
  metadata?: Record<string, string>;
  partial?: boolean;
  repository: string;
  timezone?: string;
}

export type StateMetadata = {
  current_state?: string;
  latest_execution?: ExecutionMetadata;
  retry?: RetryMetadata;
  trigger?: TriggerMetadata;
}

export type TriggerMetadata = {
  time?: number;
}


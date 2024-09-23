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

export interface Action {
  alias?: ActionAlias;
  allocation?: ActionAllocation;
  close?: ActionClose;
  custom?: ActionCustom;
  delete?: ActionDelete;
  force_merge?: ActionForceMerge;
  index_priority?: ActionIndexPriority;
  notification?: ActionNotification;
  open?: ActionOpen;
  read_only?: ActionReadOnly;
  read_write?: ActionReadWrite;
  replica_count?: ActionReplicaCount;
  retry?: ActionRetry;
  rollover?: ActionRollover;
  rollup?: ActionRollup;
  shrink?: ActionShrink;
  snapshot?: ActionSnapshot;
  timeout?: ActionTimeout;
  transform?: ActionTransform;
}

export interface ActionAlias {
  actions?: Record<string, any>;
}

export interface ActionAllocation {
  exclude?: Record<string, any>;
  include?: Record<string, any>;
  require?: Record<string, any>;
  wait_for?: boolean;
}

export type ActionClose = Record<string, any>

export type ActionCustom = Record<string, any>

export type ActionDelete = Record<string, any>

export interface ActionForceMerge {
  max_num_segments?: number;
}

export interface ActionIndexPriority {
  priority?: number;
}

export type ActionNotification = Record<string, any>

export type ActionOpen = Record<string, any>

export type ActionReadOnly = Record<string, any>

export type ActionReadWrite = Record<string, any>

export interface ActionReplicaCount {
  number_of_replicas?: number;
}

export interface ActionRetry {
  backoff?: string;
  count?: number;
  delay?: string;
}

export interface ActionRollover {
  copy_alias?: boolean;
  min_doc_count?: number;
  min_index_age?: number;
  min_primary_shard_size?: number;
  min_size?: number;
}

export type ActionRollup = Record<string, any>

export type ActionShrink = Record<string, any>

export interface ActionSnapshot {
  include_global_state?: boolean;
  repository?: string;
  snapshot?: string;
}

export interface ActionTimeout {
  timeout?: Record<string, any>;
}

export type ActionTransform = Record<string, any>

export interface AddPolicyRequest {
  policy_id: string;
}

export type AddPolicyResponse = ChangePolicyResponse

export interface ChangePolicyRequest {
  include?: IncludeState[];
  policy_id: string;
  state?: string;
}

export type ChangePolicyResponse = ChangeResponse

export interface ChangeResponse {
  failed_indices?: FailedIndex[];
  failures?: boolean;
  updated_indices?: number;
}

export interface Channel {
  id?: string;
}

export type DeletePolicyResponse = Common.WriteResponseBase

export interface ErrorNotification {
  channel?: Channel;
  destination?: ErrorNotificationDestination;
  message_template?: Record<string, any>;
}

export interface ErrorNotificationChime {
  url?: string;
}

export interface ErrorNotificationDestination {
  last_update_time?: number;
  name?: string;
  [key: string]: any | ErrorNotificationChime | ErrorNotificationSlack;
}

export interface ErrorNotificationSlack {
  custom_webhook?: SlackCustomWebhook;
  url?: string;
}

export interface ExplainIndexResponse {
  total_managed_indices?: number;
  [key: string]: any | ExplainPolicy;
}

export interface ExplainPolicy {
  enabled?: boolean | undefined;
  'index.opendistro.index_state_management.policy_id'?: undefined | string;
  'index.plugins.index_state_management.policy_id'?: undefined | string;
}

export interface FailedIndex {
  index_name?: string;
  index_uuid?: string;
  reason?: string;
}

export interface GetPoliciesResponse {
  policies?: PolicyWithMetadata[];
  total_policies?: number;
}

export type GetPolicyResponse = PolicyWithMetadata

export interface IncludeState {
  state?: string;
}

export interface IsmTemplate {
  index_patterns?: string[];
  last_updated_time?: number;
  priority?: number;
}

export interface Metadata {
  _id?: Common.Id;
  _primary_term?: number;
  _seq_no?: Common.SequenceNumber;
  _version?: Common.VersionNumber;
}

export interface Policy {
  default_state?: string;
  description?: string;
  error_notification?: ErrorNotification | undefined;
  ism_template?: IsmTemplate | undefined | IsmTemplate[];
  last_updated_time?: number;
  policy_id?: string;
  schema_version?: number;
  states?: States[];
}

export interface PolicyEnvelope {
  policy?: Policy;
}

export type PolicyWithMetadata = Metadata & PolicyEnvelope

export type PutPolicyRequest = PolicyEnvelope

export interface PutPolicyResponse extends Metadata {
  policy?: PolicyEnvelope;
}

export interface RefreshSearchAnalyzersResponse {
  _shards?: Common.ShardStatistics;
  successful_refresh_details?: RefreshSearchAnalyzersResponseDetails[];
}

export interface RefreshSearchAnalyzersResponseDetails {
  index?: string;
  refreshed_analyzers?: string[];
}

export type RemovePolicyResponse = ChangePolicyResponse

export interface RetryIndexRequest {
  state: string;
}

export type RetryIndexResponse = ChangeResponse

export interface SlackCustomWebhook {
  header_params?: Record<string, any>;
  host?: string;
  password?: string;
  path?: string;
  port?: number;
  query_params?: Record<string, any>;
  scheme?: string;
  url?: string;
  username?: string;
}

export interface States {
  actions?: Action[];
  name?: string;
  transitions?: Transition[];
}

export interface Transition {
  conditions?: Record<string, any>;
  state_name?: string;
}


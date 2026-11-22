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
import * as Common_QueryDsl from './_common.query_dsl'
import * as Indices_Common from './indices._common'
import * as Rollups_Common from './rollups._common'

export type Action = {
  alias?: ActionAlias;
  allocation?: ActionAllocation;
  close?: ActionClose;
  convert_index_to_remote?: ActionConvertIndexToRemote;
  custom?: ActionCustom;
  delete?: ActionDelete;
  force_merge?: ActionForceMerge;
  index_priority?: ActionIndexPriority;
  notification?: ActionNotification;
  open?: ActionOpen;
  publish_field_domains?: ActionPublishFieldDomains;
  read_only?: ActionReadOnly;
  read_write?: ActionReadWrite;
  replica_count?: ActionReplicaCount;
  retry?: ActionRetry;
  rollover?: ActionRollover;
  rollup?: ActionRollup;
  search_only?: ActionSearchOnly;
  shrink?: ActionShrink;
  snapshot?: ActionSnapshot;
  stop_replication?: ActionStopReplication;
  timeout?: Common.Duration;
  transform?: ActionTransform;
}

export type ActionAlias = {
  actions: ActionAliasAction[];
}

export type ActionAliasAction = {
  add?: ActionAliasAdd;
  remove?: ActionAliasRemove;
}

export type ActionAliasAdd = {
  alias?: Common.IndexAlias;
  aliases?: ActionAliasNames;
  filter?: Common_QueryDsl.QueryContainer;
  index_routing?: Common.Routing;
  is_hidden?: boolean;
  is_write_index?: boolean;
  routing?: Common.Routing;
  search_routing?: Common.Routing;
}

export type ActionAliasNames = Common.IndexAlias | Common.IndexAlias[]

export type ActionAliasRemove = {
  alias?: Common.IndexAlias;
  aliases?: ActionAliasNames;
  must_exist?: boolean;
}

export type ActionAllocation = {
  exclude?: Record<string, any>;
  include?: Record<string, any>;
  require?: Record<string, any>;
  wait_for?: boolean;
}

export type ActionClose = Record<string, any>

export type ActionConvertIndexToRemote = {
  delete_original_index?: boolean;
  ignore_index_settings?: string;
  include_aliases?: boolean;
  number_of_replicas?: number;
  rename_pattern?: string;
  repository: string;
  snapshot: string;
}

export type ActionCustom = Record<string, any>

export type ActionDelete = Record<string, any>

export type ActionForceMerge = {
  max_num_segments: number;
}

export type ActionIndexPriority = {
  priority: number;
}

export type ActionNotification = {
  channel?: Channel;
  destination?: ErrorNotificationDestination;
  message_template: Common.Script;
}

export type ActionOpen = Record<string, any>

export type ActionPublishFieldDomains = {
  fields: FieldDomain[];
}

export type ActionReadOnly = Record<string, any>

export type ActionReadWrite = Record<string, any>

export type ActionReplicaCount = {
  number_of_replicas: number;
}

export type ActionRetry = {
  backoff?: ActionRetryBackoff;
  count: number;
  delay?: Common.Duration;
}

export type ActionRetryBackoff = 'constant' | 'exponential' | 'linear'

export type ActionRollover = {
  copy_alias?: boolean;
  min_doc_count?: number;
  min_index_age?: string;
  min_primary_shard_size?: string;
  min_size?: string;
}

export type ActionRollup = {
  ism_rollup: Record<string, any>;
}

export type ActionSearchOnly = Record<string, any>

export type ActionShrink = {
  aliases?: Record<string, Indices_Common.Alias>[];
  force_unsafe?: boolean;
  max_shard_size?: Common.HumanReadableByteCount;
  num_new_shards?: number;
  percentage_of_source_shards?: number;
  switch_aliases?: boolean;
  target_index_name_template?: Common.Script;
}

export type ActionSnapshot = {
  repository: string;
  snapshot: string;
}

export type ActionStopReplication = Record<string, any>

export type ActionTransform = {
  ism_transform: Record<string, any>;
}

export type AddPolicyRequest = {
  policy_id: string;
}

export type AddPolicyResponse = ChangePolicyResponse

export type ChangePolicyRequest = {
  include?: IncludeState[];
  policy_id: string;
  state?: string;
}

export type ChangePolicyResponse = ChangeResponse

export type ChangeResponse = {
  failed_indices?: FailedIndex[];
  failures?: boolean;
  updated_indices?: number;
}

export type Channel = {
  id: string;
}

export type DeletePolicyResponse = Common.WriteResponseBase

export type ErrorNotification = {
  channel?: Channel;
  destination?: ErrorNotificationDestination;
  message_template: Common.Script;
}

export type ErrorNotificationChime = {
  url: string;
}

export type ErrorNotificationCustomWebhook = {
  header_params?: Record<string, string>;
  host?: undefined | string;
  password?: undefined | string;
  path?: undefined | string;
  port?: number;
  query_params?: Record<string, string>;
  scheme?: undefined | string;
  url?: undefined | string;
  username?: undefined | string;
}

export type ErrorNotificationDestination = {
  chime?: ErrorNotificationChime;
  custom_webhook?: ErrorNotificationCustomWebhook;
  slack?: ErrorNotificationSlack;
}

export type ErrorNotificationSlack = {
  url: string;
}

export type ExplainActionMetadata = {
  action_properties?: Record<string, any>;
  consumed_retries?: number;
  failed?: boolean;
  index?: number;
  last_retry_time?: Common.EpochTimeUnitMillis | undefined;
  name?: string;
  start_time?: Common.EpochTimeUnitMillis | undefined;
}

export type ExplainFilter = {
  action_type?: string;
  failed?: boolean;
  policy_id?: string;
  state?: string;
}

export type ExplainIndexResponse = {
  total_managed_indices?: number;
  [key: string]: any | ExplainPolicy;
}

export type ExplainPolicy = {
  action?: ExplainActionMetadata;
  enabled?: boolean | undefined;
  index?: string;
  index_creation_date?: Common.EpochTimeUnitMillis;
  index_uuid?: string;
  'index.opendistro.index_state_management.policy_id'?: undefined | string;
  'index.plugins.index_state_management.policy_id'?: undefined | string;
  info?: Record<string, any>;
  policy?: Policy;
  policy_completed?: boolean;
  policy_id?: string;
  policy_primary_term?: number;
  policy_seq_no?: Common.SequenceNumber;
  retry_info?: ExplainRetryInfo;
  rolled_over?: boolean | undefined;
  rolled_over_index_name?: string;
  state?: ExplainStateMetadata;
  step?: ExplainStepMetadata;
  transition_to?: string;
  validate?: ExplainValidationResult;
}

export type ExplainPolicyRequest = {
  filter?: ExplainFilter;
}

export type ExplainRetryInfo = {
  consumed_retries?: number;
  failed?: boolean;
}

export type ExplainStateMetadata = {
  name?: string;
  start_time?: Common.EpochTimeUnitMillis;
}

export type ExplainStepMetadata = {
  name?: string;
  start_time?: Common.EpochTimeUnitMillis;
  step_status?: StepStatus;
}

export type ExplainValidationResult = {
  validation_message?: string;
  validation_status?: ValidationStatus;
}

export type FailedIndex = {
  index_name?: string;
  index_uuid?: string;
  reason?: string;
}

export type FieldDomain = {
  field: string;
  type: FieldDomainType;
}

export type FieldDomainType = 'date_range'

export type GetPoliciesResponse = {
  policies?: PolicyWithMetadata[];
  total_policies?: number;
}

export type GetPolicyResponse = PolicyWithMetadata

export type IncludeState = {
  state: string;
}

export type IsmTemplate = {
  index_patterns?: string[];
  last_updated_time?: Common.EpochTimeUnitMillis;
  priority?: number;
}

export type Metadata = {
  _id?: Common.Id;
  _primary_term?: number;
  _seq_no?: Common.SequenceNumber;
  _version?: Common.VersionNumber;
}

export type Policy = {
  default_state: string;
  description: string;
  error_notification?: ErrorNotification | undefined;
  ism_template?: IsmTemplate | undefined | IsmTemplate[];
  last_updated_time?: Common.EpochTimeUnitMillis;
  policy_id?: string;
  schema_version?: number;
  states: States[];
}

export type PolicyEnvelope = {
  policy?: Policy;
}

export type PolicyWithMetadata = Metadata & PolicyEnvelope

export type PutPolicyRequest = PolicyEnvelope

export type PutPolicyResponse = Metadata & {
  policy?: PolicyEnvelope;
}

export type RefreshSearchAnalyzersResponse = {
  _shards?: Common.ShardStatistics;
  successful_refresh_details?: RefreshSearchAnalyzersResponseDetails[];
}

export type RefreshSearchAnalyzersResponseDetails = {
  index?: string;
  refreshed_analyzers?: string[];
}

export type RemovePolicyResponse = ChangePolicyResponse

export type RetryIndexRequest = {
  state?: string;
}

export type RetryIndexResponse = ChangeResponse

export type States = {
  actions?: Action[];
  name: string;
  transitions?: Transition[];
}

export type StepStatus = 'completed' | 'condition_not_met' | 'failed' | 'starting' | 'timed_out'

export type Transition = {
  conditions?: TransitionConditions;
  state_name: string;
}

export type TransitionConditions = {
  cron?: TransitionCron;
  min_doc_count?: number;
  min_index_age?: Common.Duration;
  min_rollover_age?: Common.Duration;
  min_size?: Common.HumanReadableByteCount;
  min_state_age?: Common.Duration;
  no_alias?: boolean;
}

export type TransitionCron = {
  cron: Rollups_Common.Cron;
}

export type ValidationStatus = 'failed' | 'passed' | 're_validating'


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

export type Action = {
  action_type?: string;
  headers?: Headers;
  method?: string;
  post_process_function?: string;
  pre_process_function?: string;
  request_body?: string;
  url?: string;
}

export type ClientConfig = {
  connection_timeout?: number;
  max_connection?: number;
  max_retry_times?: number;
  read_timeout?: number;
  retry_backoff_millis?: number;
  retry_backoff_policy?: string;
  retry_timeout_seconds?: number;
}

export type CreateConnectorRequest = {
  actions: Action[];
  client_config?: ClientConfig;
  credential: Credential;
  description: string;
  name: string;
  parameters: Parameters;
  protocol: string;
  version: number;
}

export type Credential = {
  access_key?: string;
  secret_key?: string;
  session_token?: string;
  [key: string]: any;
}

export type Headers = {
  content_type?: string;
  [key: string]: any;
}

export type HitsTotal = {
  relation: string;
  value: number;
}

export type LLM = {
  model_id?: string;
  parameters?: Parameters;
}

export type Memory = {
  type?: string;
}

export type ModelConfig = {
  all_config?: string;
  embedding_dimension?: number;
  framework_type?: string;
  model_type?: string;
}

export type ModelGroup = {
  access: string;
  created_time?: number;
  description: string;
  last_updated_time?: number;
  latest_version: number;
  name: string;
}

export type ModelGroupRegistration = {
  model_group_id: string;
  status: string;
}

export type Parameters = Record<string, any>

export type RegisterAgentsRequest = {
  app_type?: string;
  description?: string;
  llm?: LLM;
  memory?: Memory;
  name: string;
  parameters?: Parameters;
  tools?: ToolItems[];
  type: string;
}

export type SearchModelsHits = {
  hits: SearchModelsHitsHit[];
  max_score?: number;
  total: HitsTotal;
}

export type SearchModelsHitsHit = {
  _id?: Common.Id;
  _index?: Common.IndexName;
  _primary_term?: number;
  _score: number;
  _seq_no?: Common.SequenceNumber;
  _source?: Source;
  _version?: Common.VersionNumber;
  model_id?: Common.Name;
}

export type SearchModelsQuery = {
  query: Record<string, any>;
  size: number;
}

export type SearchModelsResponse = {
  _shards?: Common.ShardStatistics;
  hits: SearchModelsHits;
  timed_out?: boolean;
  took?: number;
}

export type Source = {
  algorithm?: string;
  auto_redeploy_retry_times?: number;
  chunk_number?: number;
  connector_id?: string;
  created_time?: number;
  current_worker_node_count?: number;
  deploy_to_all_nodes?: boolean;
  description?: string;
  is_hidden?: boolean;
  last_deployed_time?: number;
  last_registered_time?: number;
  last_updated_time?: number;
  model_config?: ModelConfig;
  model_content_hash_value?: string;
  model_content_size_in_bytes?: number;
  model_format?: string;
  model_group_id?: string;
  model_id?: Common.Name;
  model_state?: 'DEPLOYED' | 'DEPLOYING' | 'DEPLOY_FAILED' | 'PARTIALLY_DEPLOYED' | 'REGISTERED' | 'REGISTERING';
  model_task_type?: string;
  model_version?: string;
  name?: string;
  planning_worker_node_count?: number;
  planning_worker_nodes?: Common.NodeIds[];
  total_chunks?: number;
  url?: string;
  version?: Common.VersionString;
}

export type Task = {
  create_time?: number;
  error?: string;
  function_name?: string;
  is_async?: boolean;
  last_update_time?: number;
  model_id?: string;
  state: 'CANCELLED' | 'COMPLETED' | 'COMPLETED_WITH_ERROR' | 'CREATED' | 'FAILED' | 'RUNNING';
  task_id?: string;
  task_type?: 'DEPLOY_MODEL' | 'REGISTER_MODEL';
  worker_node?: Common.NodeIds[];
}

export type ToolItems = {
  name?: string;
  parameters?: Parameters;
  type?: string;
  [key: string]: any;
}

export type UndeployModelNode = {
  stats?: UndeployModelNodeStats;
}

export type UndeployModelNodeStats = Record<string, any>

export type UndeployModelResponse = Record<string, UndeployModelNode>


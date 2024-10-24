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
  total: HitsTotal;
}

export type SearchModelsHitsHit = {
  _id: string;
  _index?: string;
  model_id: string;
}

export type SearchModelsQuery = {
  query: Record<string, any>;
  size: number;
}

export type SearchModelsResponse = {
  hits: SearchModelsHits;
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


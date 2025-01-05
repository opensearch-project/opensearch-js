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

export type Algorithm = {
  value?: 'AD_LIBSVM' | 'AGENT' | 'ANOMALY_LOCALIZATION' | 'BATCH_RCF' | 'CONNECTOR' | 'FIT_RCF' | 'KMEANS' | 'LINEAR_REGRESSION' | 'LOCAL_SAMPLE_CALCULATOR' | 'LOGISTIC_REGRESSION' | 'METRICS_CORRELATION' | 'QUESTION_ANSWERING' | 'RCF_SUMMARIZE' | 'REMOTE' | 'SAMPLE_ALGO' | 'SPARSE_ENCODING' | 'SPARSE_TOKENIZE' | 'TEXT_EMBEDDING' | 'TEXT_SIMILARITY';
}

export type BoolQuery = {
  filter?: Filter[];
  must?: Filter[];
  must_not?: Filter;
  should?: Filter[];
}

export type ByteBuffer = {
  array?: string;
  order?: 'BIG_ENDIAN' | 'LITTLE_ENDIAN';
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

export type ColumnMeta = {
  column_type?: 'BOOLEAN' | 'DOUBLE' | 'INTEGER' | 'STRING';
  name?: Common.Name;
}

export type Credential = {
  access_key?: string;
  secret_key?: string;
  session_token?: string;
  [key: string]: any;
}

export type Exists = {
  field?: Common.Field;
}

export type Filter = {
  exists?: Exists;
  match?: Match;
  nested?: Nested;
  range?: Range;
  term?: Term;
  terms?: Term;
}

export type GetConnectorResponse = {
  actions?: Action[];
  created_time?: number;
  description?: string;
  last_updated_time?: number;
  name?: Common.Name;
  parameters?: Parameters;
  protocol?: 'aws_sigv4' | 'http';
  version?: Common.VersionString;
}

export type Headers = {
  content_type?: string;
  [key: string]: any;
}

export type HitsTotal = {
  relation: string;
  value: number;
}

export type InferenceResults = {
  output?: Output[];
}

export type InputQuery = {
  _source?: string[];
  query?: Query;
  size?: number;
}

export type Key = {
  gt?: number;
  gte?: number;
  lt?: number;
  lte?: number;
}

export type LLM = {
  model_id?: string;
  parameters?: Parameters;
}

export type Match = {
  description?: string;
}

export type MatchAllQuery = Record<string, any>

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
  access: 'private' | 'public' | 'restricted';
  created_time?: number;
  description: string;
  last_updated_time?: number;
  latest_version: number;
  name: string;
  owner?: Owner;
}

export type ModelGroupRegistration = {
  model_group_id: string;
  status: string;
}

export type Nested = {
  boost?: number;
  ignore_unmapped?: boolean;
  path?: Common.Field;
  query?: Query;
  score_mode?: 'avg' | 'max' | 'min' | 'none' | 'sum';
}

export type Output = {
  byte_buffer?: ByteBuffer;
  data: number[];
  data_type?: 'BOOLEAN' | 'FLOAT16' | 'FLOAT32' | 'FLOAT64' | 'INT32' | 'INT64' | 'INT8' | 'STRING' | 'UINT8' | 'UNKNOWN';
  name?: string;
  shape?: number[];
}

export type Owner = {
  backend_roles?: string[];
  custom_attribute_names?: string[];
  name: Common.Name;
  roles?: string[];
  user_requested_tenant?: undefined | string;
}

export type OwnerNameKeyword = {
  boost?: number;
  value?: Common.FieldValue;
}

export type Parameters = Record<string, any>

export type PredictionResult = {
  column_metas?: ColumnMeta[];
  rows?: Rows[];
}

export type PredictResponse = {
  inference_results?: InferenceResults[];
  prediction_result?: PredictionResult;
  status?: Status;
}

export type Query = {
  bool?: BoolQuery;
  match_all?: MatchAllQuery;
  term?: Term;
}

export type Range = {
  k1?: Key;
  k2?: Key;
  k3?: Key;
}

export type Rows = {
  values?: Values[];
}

export type SearchConnectorsResponse = SearchResponse

export type SearchHits = {
  hits: SearchHitsHit[];
  max_score?: number;
  total: HitsTotal;
}

export type SearchHitsHit = {
  _id?: Common.Id;
  _index?: Common.IndexName;
  _primary_term?: number;
  _score: number;
  _seq_no?: Common.SequenceNumber;
  _source?: Source;
  _version?: Common.VersionNumber;
  model_id?: Common.Name;
}

export type SearchModelGroupsResponse = SearchResponse

export type SearchModelsResponse = SearchResponse

export type SearchResponse = {
  _shards?: Common.ShardStatistics;
  hits: SearchHits;
  timed_out?: boolean;
  took?: number;
}

export type Sort = {
  _id?: SortOrder;
  _index?: SortOrder;
  _score?: SortOrder;
  _seq_no?: SortOrder;
  algorithm?: SortOrder;
  auto_redeploy_retry_times?: SortOrder;
  chunk_number?: SortOrder;
  created_time?: SortOrder;
  current_worker_node_count?: SortOrder;
  deploy_to_all_nodes?: SortOrder;
  is_hidden?: SortOrder;
  last_registered_time?: SortOrder;
  last_updated_time?: SortOrder;
  model_content_hash_value?: SortOrder;
  model_content_size_in_bytes?: SortOrder;
  model_format?: SortOrder;
  model_group_id?: SortOrder;
  model_state?: SortOrder;
  model_version?: SortOrder;
  planning_worker_node_count?: SortOrder;
  planning_worker_nodes?: SortOrder;
  total_chunks?: SortOrder;
}

export type SortOrder = {
  order?: 'asc' | 'desc';
}

export type Source = {
  access?: 'private' | 'public' | 'restricted';
  actions?: Action[];
  algorithm?: string;
  auto_redeploy_retry_times?: number;
  backend_roles?: string[];
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
  latest_version?: number;
  model_config?: ModelConfig;
  model_content_hash_value?: string;
  model_content_size_in_bytes?: number;
  model_format?: string;
  model_group_id?: string;
  model_id?: Common.Name;
  model_state?: 'DEPLOYED' | 'DEPLOYING' | 'DEPLOY_FAILED' | 'PARTIALLY_DEPLOYED' | 'REGISTERED' | 'REGISTERING' | 'UNDEPLOYED';
  model_task_type?: string;
  model_version?: string;
  name?: string;
  owner?: Owner;
  parameters?: Parameters;
  planning_worker_node_count?: number;
  planning_worker_nodes?: Common.NodeIds[];
  protocol?: 'aws_sigv4' | 'http';
  total_chunks?: number;
  url?: string;
  version?: Common.VersionString;
}

export type Status = 'CANCELLED' | 'COMPLETED' | 'COMPLETED_WITH_ERROR' | 'CREATED' | 'FAILED' | 'RUNNING'

export type Task = {
  create_time?: number;
  error?: string;
  function_name?: string;
  is_async?: boolean;
  last_update_time?: number;
  model_id?: string;
  state: 'CANCELLED' | 'CANCELLING' | 'COMPLETED' | 'COMPLETED_WITH_ERROR' | 'CREATED' | 'EXPIRED' | 'FAILED' | 'RUNNING';
  task_id?: string;
  task_type?: 'DEPLOY_MODEL' | 'REGISTER_MODEL';
  worker_node?: Common.NodeIds[];
}

export type Term = {
  _id?: Common.Id[];
  algorithm?: Algorithm;
  model_id?: Common.Name;
  'owner.name.keyword'?: OwnerNameKeyword;
}

export type ToolItems = {
  name?: string;
  parameters?: Parameters;
  type?: string;
  [key: string]: any;
}

export type TrainParameters = {
  centroids?: number;
  distance_type?: 'COSINE' | 'EUCLIDEAN' | 'L1';
  iterations?: number;
}

export type TrainPredictResponse = {
  prediction_result?: PredictionResult;
  status: Status;
}

export type TrainResponse = {
  model_id?: Common.Name;
  status: Status;
}

export type UndeployModelNode = {
  stats?: UndeployModelNodeStats;
}

export type UndeployModelNodeStats = Record<string, any>

export type UndeployModelResponse = Record<string, UndeployModelNode>

export type UpdateModelGroupResponse = {
  status?: string;
}

export type Values = {
  column_type?: 'BOOLEAN' | 'DOUBLE' | 'INTEGER' | 'STRING';
  value?: number;
}


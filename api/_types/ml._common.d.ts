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
import * as Common_Analysis from './_common.analysis'
import * as Common_QueryDsl from './_common.query_dsl'

export type Action = {
  action_type?: string;
  headers?: Headers;
  method?: string;
  post_process_function?: string;
  pre_process_function?: string;
  request_body?: string;
  url?: string;
}

export type AdditionalConfig = {
  space_type?: string;
}

export type AdditionalInfo = Record<string, any>

export type AgentType = 'conversational' | 'conversational_flow' | 'flow'

export type Aggregation = {
  field?: string;
  max?: Aggregation;
  sum?: Aggregation;
  [key: string]: any;
}

export type AlgorithmOperations = {
  deploy?: ModelStats;
  execute?: ModelStats;
  predict?: ModelStats;
  register?: ModelStats;
  train?: ModelStats;
  train_predict?: ModelStats;
  undeploy?: ModelStats;
}

export type Algorithms = Record<string, AlgorithmOperations>

export type Buckets = {
  end_time?: number;
  entities?: Entity[];
  overall_aggregate_value?: number;
  start_time?: number;
}

export type ByteBuffer = {
  array?: string;
  order?: ByteOrder;
}

export type ByteOrder = 'BIG_ENDIAN' | 'LITTLE_ENDIAN'

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
  column_type?: ColumnType;
  name?: Common.Name;
}

export type ColumnType = 'BOOLEAN' | 'DOUBLE' | 'INTEGER' | 'STRING'

export type ConnectorProtocol = 'aws_sigv4' | 'http'

export type Credential = {
  access_key?: string;
  secret_key?: string;
  session_token?: string;
  [key: string]: any;
}

export type Entity = {
  base_value?: number;
  contribution_value?: number;
  key?: string[];
  new_value?: number;
}

export type ExecuteAlgorithmResponse = ExecuteLocalSampleCalculatorResponse | {
  results?: ExecuteAnomalyLocalizationResponse[];
}

export type ExecuteAnomalyLocalizationResponse = {
  name?: string;
  result?: Result;
}

export type ExecuteLocalSampleCalculatorResponse = {
  result?: number;
}

export type FunctionName = 'AD_LIBSVM' | 'ad_libsvm' | 'AGENT' | 'agent' | 'ANOMALY_LOCALIZATION' | 'anomaly_localization' | 'BATCH_RCF' | 'batch_rcf' | 'CONNECTOR' | 'connector' | 'FIT_RCF' | 'fit_rcf' | 'KMEANS' | 'kmeans' | 'LINEAR_REGRESSION' | 'linear_regression' | 'LOCAL_SAMPLE_CALCULATOR' | 'local_sample_calculator' | 'LOGISTIC_REGRESSION' | 'logistic_regression' | 'METRICS_CORRELATION' | 'metrics_correlation' | 'QUESTION_ANSWERING' | 'question_answering' | 'RCF_SUMMARIZE' | 'rcf_summarize' | 'REMOTE' | 'remote' | 'SAMPLE_ALGO' | 'sample_algo' | 'SPARSE_ENCODING' | 'sparse_encoding' | 'SPARSE_TOKENIZE' | 'sparse_tokenize' | 'TEXT_EMBEDDING' | 'text_embedding' | 'TEXT_SIMILARITY' | 'text_similarity'

export type GetAgentResponse = {
  created_time?: number;
  description?: string;
  is_hidden?: boolean;
  last_updated_time?: number;
  name?: Common.Name;
  tools?: ToolItems[];
  type?: AgentType;
}

export type GetConnectorResponse = {
  actions?: Action[];
  created_time?: number;
  description?: string;
  last_updated_time?: number;
  name?: Common.Name;
  parameters?: Parameters;
  protocol?: ConnectorProtocol;
  version?: Common.VersionString;
}

export type GetProfileResponse = {
  nodes?: Nodes;
}

export type GetStatsResponse = {
  ml_config_index_status?: MlIndexStatus;
  ml_connector_count?: number;
  ml_connector_index_status?: MlIndexStatus;
  ml_controller_index_status?: MlIndexStatus;
  ml_model_count?: number;
  ml_model_index_status?: MlIndexStatus;
  ml_task_index_status?: MlIndexStatus;
  nodes?: NodeStats;
}

export type Guardrails = {
  index_name?: Common.IndexName;
  input_guardrail?: GuardrailsInputOutput;
  model_id?: string;
  output_guardrail?: GuardrailsInputOutput;
  regex?: Record<string, any>;
  response_filter?: string;
  response_validation_regex?: string;
  source_fields?: Common.Fields;
  stop_words?: Common_Analysis.StopWords;
  type?: GuardrailsType;
}

export type GuardrailsInputOutput = {
  model_id?: string;
  response_validation_regex?: string;
}

export type GuardrailsType = 'local_regex' | 'model'

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
  query?: Common_QueryDsl.QueryContainer;
  size?: number;
}

export type KMeansDistanceType = 'COSINE' | 'EUCLIDEAN' | 'L1'

export type LLM = {
  model_id?: string;
  parameters?: Parameters;
}

export type LocalSampleCalculatorOperation = 'max' | 'min' | 'sum'

export type Memory = {
  additional_info?: AdditionalInfo;
  create_time?: string;
  memory_id?: Common.Name;
  name?: Common.Name;
  type?: string;
  updated_time?: string;
  user?: string;
}

export type Message = {
  additional_info?: AdditionalInfo;
  create_time?: string;
  input?: undefined | string;
  memory_id?: Common.Name;
  message_id?: Common.Name;
  origin?: undefined | string;
  parent_message_id?: undefined | string;
  prompt_template?: undefined | string;
  response?: undefined | string;
  trace_number?: number;
}

export type MlIndexStatus = 'green' | 'non-existent' | 'red' | 'yellow'

export type MlInputDataType = 'DATA_FRAME' | 'QUESTION_ANSWERING' | 'REMOTE' | 'SEARCH_QUERY' | 'TEXT_DOCS' | 'TEXT_SIMILARITY'

export type MlResultDataType = 'BOOLEAN' | 'FLOAT16' | 'FLOAT32' | 'FLOAT64' | 'INT32' | 'INT64' | 'INT8' | 'STRING' | 'UINT8' | 'UNKNOWN'

export type MlStatName = 'ml_config_index_status' | 'ml_connector_count' | 'ml_connector_index_status' | 'ml_controller_index_status' | 'ml_model_count' | 'ml_model_index_status' | 'ml_task_index_status'

export type MlTaskType = 'BATCH_INGEST' | 'BATCH_PREDICTION' | 'DEPLOY_MODEL' | 'EXECUTION' | 'PREDICTION' | 'REGISTER_MODEL' | 'TRAINING' | 'TRAINING_AND_PREDICTION'

export type Model = {
  algorithm?: string;
  created_time?: number;
  is_hidden?: boolean;
  last_registered_time?: number;
  last_updated_time?: number;
  model_config?: ModelConfig;
  model_content_hash_value?: string;
  model_content_size_in_bytes?: number;
  model_format?: ModelFormat;
  model_group_id?: string;
  model_state: ModelState;
  model_version?: string;
  name?: string;
  total_chunks?: number;
}

export type ModelConfig = {
  additional_config?: AdditionalConfig;
  all_config?: string;
  embedding_dimension?: number;
  framework_type?: string;
  model_type?: string;
}

export type ModelFormat = 'ONNX' | 'TORCH_SCRIPT'

export type ModelGroup = {
  access: ModelGroupAccessMode;
  created_time?: number;
  description: string;
  last_updated_time?: number;
  latest_version: number;
  name: string;
  owner?: Owner;
}

export type ModelGroupAccessMode = 'private' | 'public' | 'restricted'

export type ModelGroupRegistration = {
  model_group_id: string;
  status: string;
}

export type ModelProfile = {
  deploy?: ModelStats;
  execute?: ModelStats;
  memory_size_estimation_cpu?: number;
  memory_size_estimation_gpu?: number;
  model_state?: ModelState;
  predict?: ModelStats;
  predict_request_stats?: PredictRequestStats;
  predictor?: string;
  register?: ModelStats;
  target_worker_nodes?: Common.NodeIds[];
  train?: ModelStats;
  train_predict?: ModelStats;
  undeploy?: ModelStats;
  worker_nodes?: Common.NodeIds[];
}

export type Models = Record<string, ModelProfile>

export type ModelState = 'DEPLOYED' | 'DEPLOYING' | 'DEPLOY_FAILED' | 'PARTIALLY_DEPLOYED' | 'REGISTERED' | 'REGISTERING' | 'UNDEPLOYED'

export type ModelStats = {
  ml_action_failure_count?: number;
  ml_action_request_count?: number;
  ml_executing_task_count?: number;
}

export type Node = {
  models?: Models;
  tasks?: Tasks;
}

export type Nodes = Record<string, Node>

export type NodeStats = Record<string, NodeStatsDetails>

export type NodeStatsDetails = {
  algorithms?: Algorithms;
  ml_circuit_breaker_trigger_count?: number;
  ml_deployed_model_count?: number;
  ml_executing_task_count?: number;
  ml_failure_count?: number;
  ml_jvm_heap_usage?: number;
  ml_request_count?: number;
  models?: Models;
}

export type Output = {
  byte_buffer?: ByteBuffer;
  data: number[];
  data_type?: MlResultDataType;
  name?: string;
  result?: string;
  shape?: number[];
}

export type Owner = {
  backend_roles?: string[];
  custom_attribute_names?: string[];
  name: Common.Name;
  roles?: string[];
  user_requested_tenant?: undefined | string;
}

export type Parameters = Record<string, any>

export type PredictionResult = {
  column_metas?: ColumnMeta[];
  rows?: Rows[];
}

export type PredictModelOutput = {
  byte_buffer?: ByteBuffer;
  data: number[];
  data_type?: MlResultDataType;
  name?: string;
  shape?: number[];
}

export type PredictModelResponse = {
  inference_results?: PredictModelResult[];
}

export type PredictModelResult = {
  output?: PredictModelOutput[];
}

export type PredictRequestStats = {
  average?: number;
  count?: number;
  max?: number;
  min?: number;
  p50?: number;
  p90?: number;
  p99?: number;
}

export type PredictResponse = {
  inference_results?: InferenceResults[];
  prediction_result?: PredictionResult;
  status?: Status;
}

export type ProfileRequest = {
  model_ids?: Common.Id[];
  node_ids?: Common.Id[];
  return_all_models?: boolean;
  return_all_tasks?: boolean;
  task_ids?: Common.Id[];
}

export type RateLimiter = {
  limit: Common.StringifiedDouble;
  unit: RateLimiterUnit;
}

export type RateLimiterUnit = 'DAYS' | 'HOURS' | 'MICROSECONDS' | 'MILLISECONDS' | 'MINUTES' | 'NANOSECONDS' | 'SECONDS'

export type Result = {
  buckets?: Buckets[];
}

export type Rows = {
  values?: Values[];
}

export type SearchAgentsResponse = SearchResponse

export type SearchConnectorsResponse = SearchResponse

export type SearchHits = {
  hits: SearchHitsHit[];
  max_score?: undefined | number;
  total: HitsTotal;
}

export type SearchHitsHit = {
  _id?: Common.Id;
  _index?: Common.IndexName;
  _primary_term?: number;
  _score: undefined | number;
  _seq_no?: Common.SequenceNumber;
  _source?: Source;
  _version?: Common.VersionNumber;
  model_id?: Common.Name;
  sort?: number[];
}

export type SearchMemoryResponse = SearchResponse

export type SearchMessageResponse = SearchResponse

export type SearchModelGroupsResponse = SearchResponse

export type SearchModelsResponse = SearchResponse

export type SearchResponse = {
  _shards?: Common.ShardStatistics;
  hits: SearchHits;
  timed_out?: boolean;
  took?: number;
}

export type SearchTasksResponse = SearchResponse

export type Source = {
  access?: ModelGroupAccessMode;
  actions?: Action[];
  additional_info?: AdditionalInfo;
  algorithm?: string;
  app_type?: string;
  application_type?: undefined | string;
  auto_redeploy_retry_times?: number;
  backend_roles?: string[];
  chunk_number?: number;
  connector_id?: string;
  create_time?: string | number;
  created_time?: number;
  current_worker_node_count?: number;
  deploy_to_all_nodes?: boolean;
  description?: string;
  error?: string;
  function_name?: FunctionName;
  input?: undefined | string;
  input_type?: MlInputDataType;
  is_async?: boolean;
  is_hidden?: boolean;
  last_deployed_time?: number;
  last_registered_time?: number;
  last_update_time?: number;
  last_updated_time?: number;
  latest_version?: number;
  memory?: Memory;
  memory_id?: Common.Name;
  model_config?: ModelConfig;
  model_content_hash_value?: string;
  model_content_size_in_bytes?: number;
  model_format?: ModelFormat;
  model_group_id?: string;
  model_id?: Common.Name;
  model_state?: ModelState;
  model_task_type?: string;
  model_version?: string;
  name?: Common.Name;
  origin?: undefined | string;
  owner?: Owner;
  parameters?: Parameters;
  parent_message_id?: undefined | string;
  planning_worker_node_count?: number;
  planning_worker_nodes?: Common.NodeIds[];
  prompt_template?: undefined | string;
  protocol?: ConnectorProtocol;
  response?: undefined | string;
  state?: Status;
  task_type?: MlTaskType;
  tools?: ToolItems[];
  total_chunks?: number;
  trace_number?: undefined | string;
  type?: AgentType;
  updated_time?: string;
  url?: string;
  user?: string;
  version?: Common.VersionString;
  worker_node?: Common.NodeIds[];
}

export type Status = 'CANCELLED' | 'COMPLETED' | 'COMPLETED_WITH_ERROR' | 'CREATED' | 'FAILED' | 'RUNNING'

export type Task = {
  create_time?: number;
  error?: string;
  function_name?: FunctionName;
  is_async?: boolean;
  last_update_time?: number;
  model_id?: string;
  state: TaskState;
  task_id?: string;
  task_type?: MlTaskType;
  worker_node?: Common.NodeIds[];
}

export type Tasks = Record<string, Task>

export type TaskState = 'CANCELLED' | 'CANCELLING' | 'COMPLETED' | 'COMPLETED_WITH_ERROR' | 'CREATED' | 'EXPIRED' | 'FAILED' | 'RUNNING'

export type Tool = {
  attributes?: ToolAttributes;
  description?: string;
  name?: Common.Name;
  type?: string;
  version?: Common.VersionString;
}

export type ToolAttributes = {
  input_schema?: string;
  strict?: boolean;
  [key: string]: any | Record<string, any>;
}

export type ToolItems = {
  attributes?: ToolAttributes;
  description?: string;
  include_output_in_agent_response?: boolean;
  name?: string;
  parameters?: Parameters;
  type?: string;
  [key: string]: any;
}

export type ToolName = 'AgentTool' | 'CatIndexTool' | 'ConnectorTool' | 'CreateAnomalyDetectorTool' | 'IndexMappingTool' | 'ListIndexTool' | 'LogPatternTool' | 'MLModelTool' | 'NeuralSparseSearchTool' | 'PPLTool' | 'RAGTool' | 'SearchAlertsTool' | 'SearchAnomalyDetectorsTool' | 'SearchAnomalyResultsTool' | 'SearchIndexTool' | 'SearchMonitorsTool' | 'VectorDBTool' | 'VisualizationTool'

export type TrainParameters = {
  centroids?: number;
  distance_type?: KMeansDistanceType;
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

export type UnloadModelNode = {
  stats?: UnloadModelNodeStats;
}

export type UnloadModelNodeStats = Record<string, any>

export type UnloadModelResponse = Record<string, UnloadModelNode>

export type UpdateModelGroupResponse = {
  status?: string;
}

export type Values = {
  column_type?: ColumnType;
  value?: number;
}


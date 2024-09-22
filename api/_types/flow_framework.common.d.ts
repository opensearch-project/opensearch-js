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


export type All = boolean

export type AllowDelete = string

export interface FlowFrameworkCreate {
  description?: string;
  name: string;
  use_case?: string;
  version?: version;
  workflows?: Record<string, any>;
}

export interface FlowFrameworkDeleteResponse {
  _id?: string;
  _index?: string;
  _primary_term?: number;
  _seq_no?: number;
  _shards?: shards;
  _version?: number;
  result?: 'deleted' | 'not_found';
}

export interface FlowFrameworkGetResponse {
  created_time?: number;
  description?: string;
  last_updated_time?: number;
  name?: string;
  use_case?: string;
  user?: user;
  workflows?: Record<string, any>;
}

export interface FlowFrameworkUpdate {
  description?: string;
  name?: string;
  use_case?: string;
  version?: version;
  workflows?: Record<string, any>;
}

export interface hits {
  hits?: itemsObject[];
  max_score?: number;
  total?: total;
}

export interface itemsObject {
  _id?: string;
  _index?: string;
  _primary_term?: number;
  _score?: number;
  _seq_no?: number;
  _source?: FlowFrameworkGetResponse;
  _version?: number;
}

export type Provision = boolean

export interface query {
  match?: Record<string, any>;
  match_all?: Record<string, any>;
}

export type Reprovision = boolean

export interface SearchStateResponse {
  provisioning_progress?: string;
  state?: string;
  user?: user;
  workflow_id?: string;
}

export interface SearchWorkflowRequest {
  query?: query;
}

export interface shards {
  failed?: number;
  successful?: number;
  total?: number;
}

export interface StateHits {
  hits?: StateItems[];
  max_score?: number;
  total?: total;
}

export interface StateItems {
  _id?: string;
  _index?: string;
  _primary_term?: number;
  _score?: number;
  _seq_no?: number;
  _source?: SearchStateResponse;
  _version?: number;
}

export interface total {
  relation?: string;
  value?: number;
}

export type UpdateFields = boolean

export type UseCase = string

export interface user {
  backend_roles?: string[];
  custom_attribute_names?: string[];
  name?: string;
  roles?: string[];
  user_requested_tenant?: string;
}

export type UserProvidedSubstitutionExpressions = Record<string, string>

export type Validation = string

export interface version {
  compatibility?: string[];
  template?: string;
}

export type WorkflowID = string

export interface WorkflowSearchResponse {
  _shards?: shards;
  hits?: hits;
  timed_out?: boolean;
  took?: number;
}

export interface WorkflowSearchStateResponse {
  _shards?: shards;
  hits?: StateHits;
  timed_out?: boolean;
  took?: number;
}

export interface WorkFlowStatusDefaultResponse {
  error?: string;
  resources_created?: string[];
  state?: string;
  workflow_id?: string;
}

export interface WorkFlowStatusFullResponse {
  error?: string;
  provision_end_time?: string;
  provision_start_time?: string;
  provisioning_progress?: string;
  resources_created?: string[];
  state?: 'COMPLETED' | 'FAILED' | 'NOT_STARTED' | 'PROVISIONING';
  user?: user;
  user_outputs?: string[];
  workflow_id?: string;
}

export interface WorkflowStep {
  inputs?: string[];
  outputs?: string[];
  required_plugins?: string[];
}

export type WorkflowStepName = string


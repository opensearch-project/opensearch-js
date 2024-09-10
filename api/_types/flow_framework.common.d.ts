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
}

export interface shards {
  failed?: number;
  successful?: number;
  total?: number;
}

export interface user {
  backend_roles?: string[];
  custom_attribute_names?: string[];
  name?: string;
  roles?: string[];
  user_requested_tenant?: string;
}

export interface version {
  compatibility?: string[];
  template?: string;
}


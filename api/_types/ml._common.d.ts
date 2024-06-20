/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

import * as Common from './_common'

export interface HitsTotal {
  relation: string;
  value: number;
}

export interface ModelGroup {
  access: string;
  created_time?: number;
  description: string;
  last_updated_time?: number;
  latest_version: number;
  name: string;
}

export interface ModelGroupRegistration {
  model_group_id: string;
  status: string;
}

export interface SearchModelsHits {
  hits: SearchModelsHitsHit[];
  total: HitsTotal;
}

export interface SearchModelsHitsHit {
  _id: string;
  _index?: string;
  model_id: string;
}

export interface SearchModelsQuery {
  query: Record<string, any>;
  size: number;
}

export interface SearchModelsResponse {
  hits: SearchModelsHits;
}

export interface Task {
  create_time?: number;
  function_name?: string;
  is_async?: boolean;
  last_update_time?: number;
  model_id?: string;
  state: 'CANCELLED' | 'COMPLETED' | 'COMPLETED_WITH_ERROR' | 'CREATED' | 'FAILED' | 'RUNNING';
  task_type?: 'DEPLOY_MODEL';
  worker_node?: Common.NodeIds[];
}


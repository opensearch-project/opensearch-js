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

import { ApiResponse } from '../../lib/Transport'
import * as Global from '../_types/_global'
import * as Common from '../_types/_common'
import * as Indices_Common from '../_types/indices._common'

export interface Indices_Clone_Request extends Global.Params {
  body?: Indices_Clone_RequestBody;
  cluster_manager_timeout?: Common.Duration;
  index: Common.IndexName;
  master_timeout?: Common.Duration;
  target: Common.Name;
  task_execution_timeout?: Common.Duration;
  timeout?: Common.Duration;
  wait_for_active_shards?: Common.WaitForActiveShards;
  wait_for_completion?: boolean;
}

export interface Indices_Clone_RequestBody {
  aliases?: Record<string, Indices_Common.Alias>;
  settings?: Record<string, Record<string, any>>;
}

export interface Indices_Clone_Response extends ApiResponse {
  body: Indices_Clone_ResponseBody;
}

export interface Indices_Clone_ResponseBody {
  acknowledged: boolean;
  index: Common.IndexName;
  shards_acknowledged: boolean;
}


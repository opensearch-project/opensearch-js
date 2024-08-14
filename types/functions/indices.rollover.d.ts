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

import { ApiResponse } from '../../lib/Transport'
import * as Global from '../components/_global'
import * as Common from '../components/_common'
import * as Indices_Common from '../components/indices._common'
import * as Indices_Rollover from '../components/indices.rollover'
import * as Common_Mapping from '../components/_common.mapping'

export interface Request extends Global.Params {
  alias: Common.IndexAlias;
  body?: RequestBody;
  cluster_manager_timeout?: Common.Duration;
  dry_run?: boolean;
  master_timeout?: Common.Duration;
  new_index?: Common.IndexName;
  timeout?: Common.Duration;
  wait_for_active_shards?: Common.WaitForActiveShards;
}

export interface ResponseBody {
  acknowledged: boolean;
  conditions: Record<string, boolean>;
  dry_run: boolean;
  new_index: string;
  old_index: string;
  rolled_over: boolean;
  shards_acknowledged: boolean;
}

export interface RequestBody {
  aliases?: Record<string, Indices_Common.Alias>;
  conditions?: Indices_Rollover.RolloverConditions;
  mappings?: Common_Mapping.TypeMapping;
  settings?: Record<string, Record<string, any>>;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

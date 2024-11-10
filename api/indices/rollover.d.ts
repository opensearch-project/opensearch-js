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
import * as Common_MappingTypeMapping from '../_types/_common.mapping___TypeMapping'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonIndexAlias from '../_types/_common___IndexAlias'
import * as CommonIndexName from '../_types/_common___IndexName'
import * as CommonWaitForActiveShards from '../_types/_common___WaitForActiveShards'
import * as Global from '../_types/_global'
import * as Indices_CommonAlias from '../_types/indices._common___Alias'
import * as Indices_RolloverRolloverConditions from '../_types/indices.rollover___RolloverConditions'

export type Indices_Rollover_Request = Global.Params & {
  alias: CommonIndexAlias.undefined;
  body?: Indices_Rollover_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  dry_run?: boolean;
  master_timeout?: CommonDuration.undefined;
  new_index?: CommonIndexName.undefined;
  timeout?: CommonDuration.undefined;
  wait_for_active_shards?: CommonWaitForActiveShards.undefined;
}

export type Indices_Rollover_RequestBody = {
  aliases?: Record<string, Indices_CommonAlias.undefined>;
  conditions?: Indices_RolloverRolloverConditions.undefined;
  mappings?: Common_MappingTypeMapping.undefined;
  settings?: Record<string, Record<string, any>>;
}

export type Indices_Rollover_Response = ApiResponse & {
  body: Indices_Rollover_ResponseBody;
}

export type Indices_Rollover_ResponseBody = {
  acknowledged: boolean;
  conditions: Record<string, boolean>;
  dry_run: boolean;
  new_index: string;
  old_index: string;
  rolled_over: boolean;
  shards_acknowledged: boolean;
}


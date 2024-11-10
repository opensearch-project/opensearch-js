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
import * as CommonIndexName from '../_types/_common___IndexName'
import * as CommonWaitForActiveShards from '../_types/_common___WaitForActiveShards'
import * as Global from '../_types/_global'
import * as Indices_CommonAlias from '../_types/indices._common___Alias'
import * as Indices_CommonIndexSettings from '../_types/indices._common___IndexSettings'

export type Indices_Create_Request = Global.Params & {
  body?: Indices_Create_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  index: CommonIndexName.undefined;
  master_timeout?: CommonDuration.undefined;
  timeout?: CommonDuration.undefined;
  wait_for_active_shards?: CommonWaitForActiveShards.undefined;
}

export type Indices_Create_RequestBody = {
  aliases?: Record<string, Indices_CommonAlias.undefined>;
  mappings?: Common_MappingTypeMapping.undefined;
  settings?: Indices_CommonIndexSettings.undefined;
}

export type Indices_Create_Response = ApiResponse & {
  body: Indices_Create_ResponseBody;
}

export type Indices_Create_ResponseBody = {
  acknowledged: boolean;
  index: CommonIndexName.undefined;
  shards_acknowledged: boolean;
}


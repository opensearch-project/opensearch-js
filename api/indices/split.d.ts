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
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonIndexName from '../_types/_common___IndexName'
import * as CommonWaitForActiveShards from '../_types/_common___WaitForActiveShards'
import * as Global from '../_types/_global'
import * as Indices_CommonAlias from '../_types/indices._common___Alias'

export type Indices_Split_Request = Global.Params & {
  body?: Indices_Split_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  copy_settings?: boolean;
  index: CommonIndexName.undefined;
  master_timeout?: CommonDuration.undefined;
  target: CommonIndexName.undefined;
  task_execution_timeout?: CommonDuration.undefined;
  timeout?: CommonDuration.undefined;
  wait_for_active_shards?: CommonWaitForActiveShards.undefined;
  wait_for_completion?: boolean;
}

export type Indices_Split_RequestBody = {
  aliases?: Record<string, Indices_CommonAlias.undefined>;
  settings?: {
};
}

export type Indices_Split_Response = ApiResponse & {
  body: Indices_Split_ResponseBody;
}

export type Indices_Split_ResponseBody = {
  acknowledged: boolean;
  index: CommonIndexName.undefined;
  shards_acknowledged: boolean;
}


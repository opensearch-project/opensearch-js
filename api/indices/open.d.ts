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
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonTaskId from '../_types/_common___TaskId'
import * as CommonWaitForActiveShards from '../_types/_common___WaitForActiveShards'
import * as Global from '../_types/_global'

export type Indices_Open_Request = Global.Params & {
  allow_no_indices?: boolean;
  cluster_manager_timeout?: CommonDuration.undefined;
  expand_wildcards?: CommonExpandWildcards.undefined;
  ignore_unavailable?: boolean;
  index: CommonIndices.undefined;
  master_timeout?: CommonDuration.undefined;
  task_execution_timeout?: CommonDuration.undefined;
  timeout?: CommonDuration.undefined;
  wait_for_active_shards?: CommonWaitForActiveShards.undefined;
  wait_for_completion?: boolean;
}

export type Indices_Open_Response = ApiResponse & {
  body: Indices_Open_ResponseBody;
}

export type Indices_Open_ResponseBody = {
  task?: CommonTaskId.undefined;
} | {
  acknowledged: boolean;
  shards_acknowledged: boolean;
}


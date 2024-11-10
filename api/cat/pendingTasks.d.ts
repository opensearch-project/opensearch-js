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
import * as Cat_PendingTasksPendingTasksRecord from '../_types/cat.pending_tasks___PendingTasksRecord'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonTimeUnit from '../_types/_common___TimeUnit'
import * as Global from '../_types/_global'

export type Cat_PendingTasks_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  format?: string;
  h?: string[];
  help?: boolean;
  local?: boolean;
  master_timeout?: CommonDuration.undefined;
  s?: string[];
  time?: CommonTimeUnit.undefined;
  v?: boolean;
}

export type Cat_PendingTasks_Response = ApiResponse & {
  body: Cat_PendingTasks_ResponseBody;
}

export type Cat_PendingTasks_ResponseBody = Cat_PendingTasksPendingTasksRecord.undefined[]


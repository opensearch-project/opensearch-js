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
import * as CommonTaskId from '../_types/_common___TaskId'
import * as Global from '../_types/_global'
import * as Tasks_CommonTaskListResponseBase from '../_types/tasks._common___TaskListResponseBase'

export type Tasks_Cancel_Request = Global.Params & {
  actions?: string | string[];
  nodes?: string[];
  parent_task_id?: string;
  task_id?: CommonTaskId.undefined;
  wait_for_completion?: boolean;
}

export type Tasks_Cancel_Response = ApiResponse & {
  body: Tasks_Cancel_ResponseBody;
}

export type Tasks_Cancel_ResponseBody = Tasks_CommonTaskListResponseBase.undefined


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
import * as Common from '../_types/_common'
import * as Global from '../_types/_global'
import * as Tasks_Common from '../_types/tasks._common'

export type Tasks_List_Request = Global.Params & {
  actions?: string | string[];
  detailed?: boolean;
  group_by?: Tasks_Common.GroupBy;
  nodes?: string[];
  parent_task_id?: Common.Id;
  timeout?: Common.Duration;
  wait_for_completion?: boolean;
}

export type Tasks_List_Response = ApiResponse & {
  body: Tasks_List_ResponseBody;
}

export type Tasks_List_ResponseBody = Tasks_Common.TaskListResponseBase


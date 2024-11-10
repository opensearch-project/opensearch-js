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
import * as CommonErrorCause from '../_types/_common___ErrorCause'
import * as CommonId from '../_types/_common___Id'
import * as Global from '../_types/_global'
import * as Tasks_CommonTaskInfo from '../_types/tasks._common___TaskInfo'
import * as Tasks_CommonTaskResponse from '../_types/tasks._common___TaskResponse'

export type Tasks_Get_Request = Global.Params & {
  task_id: CommonId.undefined;
  timeout?: CommonDuration.undefined;
  wait_for_completion?: boolean;
}

export type Tasks_Get_Response = ApiResponse & {
  body: Tasks_Get_ResponseBody;
}

export type Tasks_Get_ResponseBody = {
  completed: boolean;
  error?: CommonErrorCause.undefined;
  response?: Tasks_CommonTaskResponse.undefined;
  task: Tasks_CommonTaskInfo.undefined;
}


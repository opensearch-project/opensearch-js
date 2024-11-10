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
import * as Cat_TasksTasksRecord from '../_types/cat.tasks___TasksRecord'
import * as CommonTimeUnit from '../_types/_common___TimeUnit'
import * as Global from '../_types/_global'

export type Cat_Tasks_Request = Global.Params & {
  actions?: string[];
  detailed?: boolean;
  format?: string;
  h?: string[];
  help?: boolean;
  nodes?: string[];
  parent_task_id?: string;
  s?: string[];
  time?: CommonTimeUnit.undefined;
  v?: boolean;
}

export type Cat_Tasks_Response = ApiResponse & {
  body: Cat_Tasks_ResponseBody;
}

export type Cat_Tasks_ResponseBody = Cat_TasksTasksRecord.undefined[]


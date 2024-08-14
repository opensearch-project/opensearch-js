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
import * as Cat_Tasks from '../components/cat.tasks'

export interface Request extends Global.Params {
  actions?: string[];
  detailed?: boolean;
  format?: string;
  h?: string[];
  help?: boolean;
  nodes?: string[];
  parent_task_id?: string;
  s?: string[];
  time?: Common.TimeUnit;
  v?: boolean;
}

export type ResponseBody = Cat_Tasks.TasksRecord[]

export interface Response extends ApiResponse {
  body: ResponseBody
}

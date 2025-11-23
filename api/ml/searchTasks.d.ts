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
import * as Common_QueryDsl from '../_types/_common.query_dsl'
import * as Global from '../_types/_global'
import * as Ml_Common from '../_types/ml._common'

export interface Ml_SearchTasks_Request extends Global.Params {
  body?: Ml_SearchTasks_RequestBody;
}

export type Ml_SearchTasks_RequestBody = {
  query?: Common_QueryDsl.QueryContainer;
  size?: number;
  sort?: Common.Sort;
}

export interface Ml_SearchTasks_Response extends ApiResponse {
  body: Ml_SearchTasks_ResponseBody;
}

export type Ml_SearchTasks_ResponseBody = Ml_Common.SearchTasksResponse


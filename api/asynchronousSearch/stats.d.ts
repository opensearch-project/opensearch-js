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
import * as AsynchronousSearch_CommonStatsResponse from '../_types/asynchronous_search._common___StatsResponse'
import * as Global from '../_types/_global'

export type AsynchronousSearch_Stats_Request = Global.Params & Record<string, any>

export type AsynchronousSearch_Stats_Response = ApiResponse & {
  body: AsynchronousSearch_Stats_ResponseBody;
}

export type AsynchronousSearch_Stats_ResponseBody = AsynchronousSearch_CommonStatsResponse.undefined


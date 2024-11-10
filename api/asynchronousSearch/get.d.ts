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
import * as AsynchronousSearch_CommonResponseBody from '../_types/asynchronous_search._common___ResponseBody'
import * as Global from '../_types/_global'

export type AsynchronousSearch_Get_Request = Global.Params & {
  id: string;
}

export type AsynchronousSearch_Get_Response = ApiResponse & {
  body: AsynchronousSearch_Get_ResponseBody;
}

export type AsynchronousSearch_Get_ResponseBody = AsynchronousSearch_CommonResponseBody.undefined


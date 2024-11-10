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
import * as CommonAcknowledgedResponseBase from '../_types/_common___AcknowledgedResponseBase'
import * as CommonDataStreamName from '../_types/_common___DataStreamName'
import * as Global from '../_types/_global'

export type Indices_CreateDataStream_Request = Global.Params & {
  body?: Indices_CreateDataStream_RequestBody;
  name: CommonDataStreamName.undefined;
}

export type Indices_CreateDataStream_RequestBody = Record<string, any>

export type Indices_CreateDataStream_Response = ApiResponse & {
  body: Indices_CreateDataStream_ResponseBody;
}

export type Indices_CreateDataStream_ResponseBody = CommonAcknowledgedResponseBase.undefined


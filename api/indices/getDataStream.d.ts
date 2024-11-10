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
import * as CommonDataStreamNames from '../_types/_common___DataStreamNames'
import * as Global from '../_types/_global'
import * as Indices_CommonDataStream from '../_types/indices._common___DataStream'

export type Indices_GetDataStream_Request = Global.Params & {
  name?: CommonDataStreamNames.undefined;
}

export type Indices_GetDataStream_Response = ApiResponse & {
  body: Indices_GetDataStream_ResponseBody;
}

export type Indices_GetDataStream_ResponseBody = {
  data_streams: Indices_CommonDataStream.undefined[];
}


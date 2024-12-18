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

export interface Indices_DeleteDataStream_Request extends Global.Params {
  name: Common.DataStreamNames;
}

export interface Indices_DeleteDataStream_Response extends ApiResponse {
  body: Indices_DeleteDataStream_ResponseBody;
}

export type Indices_DeleteDataStream_ResponseBody = Common.AcknowledgedResponseBase


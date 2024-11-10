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
import * as CommonIndexName from '../_types/_common___IndexName'
import * as Global from '../_types/_global'
import * as Ism_CommonRetryIndexRequest from '../_types/ism._common___RetryIndexRequest'
import * as Ism_CommonRetryIndexResponse from '../_types/ism._common___RetryIndexResponse'

export type Ism_RetryIndex_Request = Global.Params & {
  body?: Ism_CommonRetryIndexRequest.undefined;
  index?: CommonIndexName.undefined;
}

export type Ism_RetryIndex_Response = ApiResponse & {
  body: Ism_RetryIndex_ResponseBody;
}

export type Ism_RetryIndex_ResponseBody = Ism_CommonRetryIndexResponse.undefined


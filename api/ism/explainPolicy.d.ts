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
import * as Ism_CommonExplainIndexResponse from '../_types/ism._common___ExplainIndexResponse'

export type Ism_ExplainPolicy_Request = Global.Params & {
  body?: Ism_ExplainPolicy_RequestBody;
  index?: CommonIndexName.undefined;
}

export type Ism_ExplainPolicy_RequestBody = any

export type Ism_ExplainPolicy_Response = ApiResponse & {
  body: Ism_ExplainPolicy_ResponseBody;
}

export type Ism_ExplainPolicy_ResponseBody = Ism_CommonExplainIndexResponse.undefined


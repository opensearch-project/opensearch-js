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
import * as Global from '../_types/_global'
import * as Ism_CommonGetPolicyResponse from '../_types/ism._common___GetPolicyResponse'

export type Ism_GetPolicy_Request = Global.Params & {
  policy_id: string;
}

export type Ism_GetPolicy_Response = ApiResponse & {
  body: Ism_GetPolicy_ResponseBody;
}

export type Ism_GetPolicy_ResponseBody = Ism_CommonGetPolicyResponse.undefined


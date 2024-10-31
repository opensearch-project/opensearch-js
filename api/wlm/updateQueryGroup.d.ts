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
import * as Wlm_Common from '../_types/wlm._common'

export type Wlm_UpdateQueryGroup_Request = Global.Params & {
  body: Wlm_Common.QueryGroupUpdate;
  name: string;
}

export type Wlm_UpdateQueryGroup_Response = ApiResponse & {
  body: Wlm_UpdateQueryGroup_ResponseBody;
}

export type Wlm_UpdateQueryGroup_ResponseBody = Wlm_Common.QueryGroupResponse


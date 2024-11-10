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
import * as CommonId from '../_types/_common___Id'
import * as Global from '../_types/_global'

export type Transforms_Start_Request = Global.Params & {
  id: CommonId.undefined;
}

export type Transforms_Start_Response = ApiResponse & {
  body: Transforms_Start_ResponseBody;
}

export type Transforms_Start_ResponseBody = CommonAcknowledgedResponseBase.undefined


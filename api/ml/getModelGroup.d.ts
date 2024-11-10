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
import * as Ml_CommonModelGroup from '../_types/ml._common___ModelGroup'

export type Ml_GetModelGroup_Request = Global.Params & {
  model_group_id: string;
}

export type Ml_GetModelGroup_Response = ApiResponse & {
  body: Ml_GetModelGroup_ResponseBody;
}

export type Ml_GetModelGroup_ResponseBody = Ml_CommonModelGroup.undefined


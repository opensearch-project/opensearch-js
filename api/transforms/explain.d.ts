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
import * as CommonId from '../_types/_common___Id'
import * as Global from '../_types/_global'
import * as Transforms_CommonExplainResponse from '../_types/transforms._common___ExplainResponse'

export type Transforms_Explain_Request = Global.Params & {
  id: CommonId.undefined;
}

export type Transforms_Explain_Response = ApiResponse & {
  body: Transforms_Explain_ResponseBody;
}

export type Transforms_Explain_ResponseBody = Transforms_CommonExplainResponse.undefined


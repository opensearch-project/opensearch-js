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
import * as Rollups_CommonExplainEntities from '../_types/rollups._common___ExplainEntities'

export type Rollups_Explain_Request = Global.Params & {
  id: CommonId.undefined;
}

export type Rollups_Explain_Response = ApiResponse & {
  body: Rollups_Explain_ResponseBody;
}

export type Rollups_Explain_ResponseBody = Rollups_CommonExplainEntities.undefined


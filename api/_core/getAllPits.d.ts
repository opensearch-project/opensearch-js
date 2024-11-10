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
import * as Core_CommonPitDetail from '../_types/_core._common___PitDetail'
import * as Global from '../_types/_global'

export type GetAllPits_Request = Global.Params & Record<string, any>

export type GetAllPits_Response = ApiResponse & {
  body: GetAllPits_ResponseBody;
}

export type GetAllPits_ResponseBody = {
  pits?: Core_CommonPitDetail.undefined[];
}


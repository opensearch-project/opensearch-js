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
import * as Core_Common from '../_types/_core._common'

export type DeleteAllPits_Request = Global.Params & Record<string, any>

export interface DeleteAllPits_Response extends ApiResponse {
  body: DeleteAllPits_ResponseBody;
}

export interface DeleteAllPits_ResponseBody {
  pits?: Core_Common.PitsDetailsDeleteAll[];
}


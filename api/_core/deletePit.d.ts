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
import * as Core_CommonDeletedPit from '../_types/_core._common___DeletedPit'
import * as Global from '../_types/_global'

export type DeletePit_Request = Global.Params & {
  body?: DeletePit_RequestBody;
}

export type DeletePit_RequestBody = {
  pit_id: string[];
}

export type DeletePit_Response = ApiResponse & {
  body: DeletePit_ResponseBody;
}

export type DeletePit_ResponseBody = {
  pits?: Core_CommonDeletedPit.undefined[];
}


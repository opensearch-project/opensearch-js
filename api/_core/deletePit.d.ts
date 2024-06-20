/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

import { ApiResponse } from '../../lib/Transport'
import * as Global from '../_types/_global'
import * as Core_Common from '../_types/_core._common'

export interface DeletePit_Request extends Global.Params {
  body?: DeletePit_RequestBody;
}

export interface DeletePit_RequestBody {
  pit_id: string[];
}

export interface DeletePit_Response extends ApiResponse {
  body: DeletePit_ResponseBody;
}

export interface DeletePit_ResponseBody {
  pits?: Core_Common.DeletedPit[];
}


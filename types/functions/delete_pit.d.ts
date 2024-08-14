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
import * as Global from '../components/_global'
import * as Core_Common from '../components/_core._common'

export interface Request extends Global.Params {
  body?: RequestBody;
}

export interface ResponseBody {
  pits?: Core_Common.DeletedPit[];
}

export interface RequestBody {
  pit_id: string[];
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

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
import * as Common from '../_types/_common'
import * as Global from '../_types/_global'
import * as Ism_Common from '../_types/ism._common'

export interface Ism_GetPolicies_Request extends Global.Params {
  from?: number;
  queryString?: string;
  size?: number;
  sortField?: string;
  sortOrder?: Common.SortOrder;
}

export interface Ism_GetPolicies_Response extends ApiResponse {
  body: Ism_GetPolicies_ResponseBody;
}

export type Ism_GetPolicies_ResponseBody = Ism_Common.GetPoliciesResponse


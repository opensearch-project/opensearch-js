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

export interface Wlm_DeleteQueryGroup_Request extends Global.Params {
  name: string;
}

export interface Wlm_DeleteQueryGroup_Response extends ApiResponse {
  body: Wlm_DeleteQueryGroup_ResponseBody;
}

export type Wlm_DeleteQueryGroup_ResponseBody = {
  acknowledged?: boolean;
}


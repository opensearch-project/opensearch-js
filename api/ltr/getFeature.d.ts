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

export interface Ltr_GetFeature_Request extends Global.Params {
  id: string;
  store?: string;
}

export interface Ltr_GetFeature_Response extends ApiResponse {
  body: Ltr_GetFeature_ResponseBody;
}

export type Ltr_GetFeature_ResponseBody = Record<string, any>


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

export interface Knn_GetModel_Request extends Global.Params {
  model_id: string;
}

export interface Knn_GetModel_Response extends ApiResponse {
  body: Knn_GetModel_ResponseBody;
}

export type Knn_GetModel_ResponseBody = Record<string, any>


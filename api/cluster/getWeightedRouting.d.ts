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

export interface Cluster_GetWeightedRouting_Request extends Global.Params {
  attribute: string;
}

export interface Cluster_GetWeightedRouting_Response extends ApiResponse {
  body: Cluster_GetWeightedRouting_ResponseBody;
}

export type Cluster_GetWeightedRouting_ResponseBody = Record<string, any>


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

export interface Cluster_DeleteWeightedRouting_Request extends Global.Params {
  body?: Cluster_DeleteWeightedRouting_RequestBody;
}

export type Cluster_DeleteWeightedRouting_RequestBody = {
  _version?: Common.VersionNumber;
}

export interface Cluster_DeleteWeightedRouting_Response extends ApiResponse {
  body: Cluster_DeleteWeightedRouting_ResponseBody;
}

export type Cluster_DeleteWeightedRouting_ResponseBody = Common.AcknowledgedResponseBase


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
import * as Cluster_WeightedRoutingWeightsBase from '../_types/cluster.weighted_routing___WeightsBase'
import * as CommonAcknowledgedResponseBase from '../_types/_common___AcknowledgedResponseBase'
import * as Global from '../_types/_global'

export type Cluster_DeleteWeightedRouting_Request = Global.Params & {
  body?: Cluster_WeightedRoutingWeightsBase.undefined;
}

export type Cluster_DeleteWeightedRouting_Response = ApiResponse & {
  body: Cluster_DeleteWeightedRouting_ResponseBody;
}

export type Cluster_DeleteWeightedRouting_ResponseBody = CommonAcknowledgedResponseBase.undefined


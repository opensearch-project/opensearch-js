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
import * as Wlm_Common from '../_types/wlm._common'

export interface Wlm_Stats_Request extends Global.Params {
  breach?: boolean;
  node_id?: Common.NodeIds;
  workload_group_id?: Wlm_Common.WorkloadGroupIds;
}

export interface Wlm_Stats_Response extends ApiResponse {
  body: Wlm_Stats_ResponseBody;
}

export type Wlm_Stats_ResponseBody = Wlm_Common.WlmStatsResponse


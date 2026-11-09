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
import * as List_Common from '../_types/list._common'
import * as Wlm_Common from '../_types/wlm._common'

export interface List_WlmStats_Request extends Global.Params {
  breach?: boolean;
  format?: List_Common.ResponseFormat;
  next_token?: undefined | string;
  node_id?: Common.NodeIds;
  order?: Common.SortOrder;
  size?: number;
  sort?: Wlm_Common.WlmStatsSortBy;
  v?: boolean;
  workload_group_id?: Wlm_Common.WorkloadGroupIds;
}

export interface List_WlmStats_Response extends ApiResponse {
  body: List_WlmStats_ResponseBody;
}

export type List_WlmStats_ResponseBody = Wlm_Common.WlmStatsListResponse


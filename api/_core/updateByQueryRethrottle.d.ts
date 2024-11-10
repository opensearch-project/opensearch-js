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
import * as CommonId from '../_types/_common___Id'
import * as Core_UpdateByQueryRethrottleUpdateByQueryRethrottleNode from '../_types/_core.update_by_query_rethrottle___UpdateByQueryRethrottleNode'
import * as Global from '../_types/_global'

export type UpdateByQueryRethrottle_Request = Global.Params & {
  requests_per_second?: number;
  task_id: CommonId.undefined;
}

export type UpdateByQueryRethrottle_Response = ApiResponse & {
  body: UpdateByQueryRethrottle_ResponseBody;
}

export type UpdateByQueryRethrottle_ResponseBody = {
  nodes: Record<string, Core_UpdateByQueryRethrottleUpdateByQueryRethrottleNode.undefined>;
}


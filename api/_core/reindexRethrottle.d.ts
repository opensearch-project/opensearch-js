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
import * as Core_ReindexRethrottleReindexNode from '../_types/_core.reindex_rethrottle___ReindexNode'
import * as Global from '../_types/_global'

export type ReindexRethrottle_Request = Global.Params & {
  requests_per_second?: number;
  task_id: CommonId.undefined;
}

export type ReindexRethrottle_Response = ApiResponse & {
  body: ReindexRethrottle_ResponseBody;
}

export type ReindexRethrottle_ResponseBody = {
  nodes: Record<string, Core_ReindexRethrottleReindexNode.undefined>;
}


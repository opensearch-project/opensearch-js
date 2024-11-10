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
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonNodeIds from '../_types/_common___NodeIds'
import * as Global from '../_types/_global'
import * as Nodes_UsageMetric from '../_types/nodes.usage___Metric'
import * as Nodes_UsageResponseBase from '../_types/nodes.usage___ResponseBase'

export type Nodes_Usage_Request = Global.Params & {
  metric?: Nodes_UsageMetric.undefined[];
  node_id?: CommonNodeIds.undefined;
  timeout?: CommonDuration.undefined;
}

export type Nodes_Usage_Response = ApiResponse & {
  body: Nodes_Usage_ResponseBody;
}

export type Nodes_Usage_ResponseBody = Nodes_UsageResponseBase.undefined


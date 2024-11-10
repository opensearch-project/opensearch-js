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
import * as Nodes_InfoMetric from '../_types/nodes.info___Metric'
import * as Nodes_InfoResponseBase from '../_types/nodes.info___ResponseBase'

export type Nodes_Info_Request = Global.Params & {
  flat_settings?: boolean;
  metric?: Nodes_InfoMetric.undefined[];
  node_id?: CommonNodeIds.undefined;
  timeout?: CommonDuration.undefined;
}

export type Nodes_Info_Response = ApiResponse & {
  body: Nodes_Info_ResponseBody;
}

export type Nodes_Info_ResponseBody = Nodes_InfoResponseBase.undefined


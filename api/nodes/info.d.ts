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
import * as Global from '../_types/_global'
import * as Nodes_Info from '../_types/nodes.info'
import * as Common from '../_types/_common'

export interface Nodes_Info_Request extends Global.Params {
  flat_settings?: boolean;
  metric?: Nodes_Info.Metric[];
  node_id?: Common.NodeIds;
  timeout?: Common.Duration;
}

export interface Nodes_Info_Response extends ApiResponse {
  body: Nodes_Info_ResponseBody;
}

export type Nodes_Info_ResponseBody = Nodes_Info.ResponseBase


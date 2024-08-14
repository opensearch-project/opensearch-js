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
import * as Global from '../components/_global'
import * as Nodes_Info from '../components/nodes.info'
import * as Common from '../components/_common'

export interface Request extends Global.Params {
  flat_settings?: boolean;
  metric?: Nodes_Info.Metric[];
  node_id?: Common.NodeIds;
  timeout?: Common.Duration;
}

export type ResponseBody = Nodes_Info.ResponseBase

export interface Response extends ApiResponse {
  body: ResponseBody
}

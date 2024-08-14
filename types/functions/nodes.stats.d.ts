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
import * as Common from '../components/_common'
import * as Nodes_Stats from '../components/nodes.stats'

export interface Request extends Global.Params {
  completion_fields?: Common.Fields;
  fielddata_fields?: Common.Fields;
  fields?: Common.Fields;
  groups?: string[];
  include_segment_file_sizes?: boolean;
  index_metric?: Nodes_Stats.IndexMetric[];
  level?: Common.Level;
  metric?: Nodes_Stats.Metric[];
  node_id?: Common.NodeIds;
  timeout?: Common.Duration;
  types?: string[];
}

export type ResponseBody = Nodes_Stats.ResponseBase

export interface Response extends ApiResponse {
  body: ResponseBody
}

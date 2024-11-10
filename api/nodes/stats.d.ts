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
import * as CommonFields from '../_types/_common___Fields'
import * as CommonLevel from '../_types/_common___Level'
import * as CommonNodeIds from '../_types/_common___NodeIds'
import * as Global from '../_types/_global'
import * as Nodes_StatsIndexMetric from '../_types/nodes.stats___IndexMetric'
import * as Nodes_StatsMetric from '../_types/nodes.stats___Metric'
import * as Nodes_StatsResponseBase from '../_types/nodes.stats___ResponseBase'

export type Nodes_Stats_Request = Global.Params & {
  completion_fields?: CommonFields.undefined;
  fielddata_fields?: CommonFields.undefined;
  fields?: CommonFields.undefined;
  groups?: string[];
  include_segment_file_sizes?: boolean;
  index_metric?: Nodes_StatsIndexMetric.undefined[];
  level?: CommonLevel.undefined;
  metric?: Nodes_StatsMetric.undefined[];
  node_id?: CommonNodeIds.undefined;
  timeout?: CommonDuration.undefined;
  types?: string[];
}

export type Nodes_Stats_Response = ApiResponse & {
  body: Nodes_Stats_ResponseBody;
}

export type Nodes_Stats_ResponseBody = Nodes_StatsResponseBase.undefined


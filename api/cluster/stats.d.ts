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
import * as Cluster_Stats from '../_types/cluster.stats'
import * as Common from '../_types/_common'
import * as Global from '../_types/_global'

export type Cluster_Stats_Request = Global.Params & {
  flat_settings?: boolean;
  index_metric?: Cluster_Stats.IndexMetric[];
  metric?: Cluster_Stats.Metric[];
  node_id?: Common.NodeIds;
  timeout?: Common.Duration;
}

export type Cluster_Stats_Response = ApiResponse & {
  body: Cluster_Stats_ResponseBody;
}

export type Cluster_Stats_ResponseBody = Cluster_Stats.StatsResponseBase


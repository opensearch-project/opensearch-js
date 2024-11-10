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
import * as Cluster_RerouteCommand from '../_types/cluster.reroute___Command'
import * as Cluster_RerouteMetric from '../_types/cluster.reroute___Metric'
import * as Cluster_RerouteRerouteExplanation from '../_types/cluster.reroute___RerouteExplanation'
import * as CommonDuration from '../_types/_common___Duration'
import * as Global from '../_types/_global'

export type Cluster_Reroute_Request = Global.Params & {
  body?: Cluster_Reroute_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  dry_run?: boolean;
  explain?: boolean;
  master_timeout?: CommonDuration.undefined;
  metric?: Cluster_RerouteMetric.undefined | Cluster_RerouteMetric.undefined[];
  retry_failed?: boolean;
  timeout?: CommonDuration.undefined;
}

export type Cluster_Reroute_RequestBody = {
  commands?: Cluster_RerouteCommand.undefined[];
}

export type Cluster_Reroute_Response = ApiResponse & {
  body: Cluster_Reroute_ResponseBody;
}

export type Cluster_Reroute_ResponseBody = {
  acknowledged: boolean;
  explanations?: Cluster_RerouteRerouteExplanation.undefined[];
  state?: Record<string, any>;
}


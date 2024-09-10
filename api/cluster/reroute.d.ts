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
import * as Common from '../_types/_common'
import * as Cluster_Reroute from '../_types/cluster.reroute'

export interface Cluster_Reroute_Request extends Global.Params {
  body?: Cluster_Reroute_RequestBody;
  cluster_manager_timeout?: Common.Duration;
  dry_run?: boolean;
  explain?: boolean;
  master_timeout?: Common.Duration;
  metric?: Common.Metrics;
  retry_failed?: boolean;
  timeout?: Common.Duration;
}

export interface Cluster_Reroute_RequestBody {
  commands?: Cluster_Reroute.Command[];
}

export interface Cluster_Reroute_Response extends ApiResponse {
  body: Cluster_Reroute_ResponseBody;
}

export interface Cluster_Reroute_ResponseBody {
  acknowledged: boolean;
  explanations?: Cluster_Reroute.RerouteExplanation[];
  state?: Record<string, any>;
}


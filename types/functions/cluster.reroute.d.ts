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
import * as Cluster_Reroute from '../components/cluster.reroute'
import * as Global from '../components/_global'
import * as Common from '../components/_common'

export interface Cluster_Reroute_RequestBody {
  commands?: Cluster_Reroute.Command[];
}

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

export interface Cluster_Reroute_ResponseBody {
  acknowledged: boolean;
  explanations?: Cluster_Reroute.RerouteExplanation[];
  state?: Record<string, any>;
}

export interface Cluster_Reroute_Response extends ApiResponse {
  body: Cluster_Reroute_ResponseBody
}

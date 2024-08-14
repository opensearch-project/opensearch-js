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
import * as Cluster_Reroute from '../components/cluster.reroute'

export interface Request extends Global.Params {
  body?: RequestBody;
  cluster_manager_timeout?: Common.Duration;
  dry_run?: boolean;
  explain?: boolean;
  master_timeout?: Common.Duration;
  metric?: Common.Metrics;
  retry_failed?: boolean;
  timeout?: Common.Duration;
}

export interface ResponseBody {
  acknowledged: boolean;
  explanations?: Cluster_Reroute.RerouteExplanation[];
  state?: Record<string, any>;
}

export interface RequestBody {
  commands?: Cluster_Reroute.Command[];
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

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
import * as Cluster_Health from '../components/cluster.health'

export interface Request extends Global.Params {
  awareness_attribute?: string;
  cluster_manager_timeout?: Common.Duration;
  expand_wildcards?: Common.ExpandWildcards;
  index?: Common.Indices;
  level?: Cluster_Health.Level;
  local?: boolean;
  master_timeout?: Common.Duration;
  timeout?: Common.Duration;
  wait_for_active_shards?: Common.WaitForActiveShards;
  wait_for_events?: Common.WaitForEvents;
  wait_for_no_initializing_shards?: boolean;
  wait_for_no_relocating_shards?: boolean;
  wait_for_nodes?: string | number;
  wait_for_status?: Common.HealthStatus;
}

export type ResponseBody = Cluster_Health.HealthResponseBody

export interface Response extends ApiResponse {
  body: ResponseBody
}

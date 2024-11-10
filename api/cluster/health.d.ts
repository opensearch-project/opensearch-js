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
import * as Cluster_HealthHealthResponseBody from '../_types/cluster.health___HealthResponseBody'
import * as Cluster_HealthLevel from '../_types/cluster.health___Level'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonHealthStatus from '../_types/_common___HealthStatus'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonWaitForActiveShards from '../_types/_common___WaitForActiveShards'
import * as CommonWaitForEvents from '../_types/_common___WaitForEvents'
import * as Global from '../_types/_global'

export type Cluster_Health_Request = Global.Params & {
  awareness_attribute?: string;
  cluster_manager_timeout?: CommonDuration.undefined;
  expand_wildcards?: CommonExpandWildcards.undefined;
  index?: CommonIndices.undefined;
  level?: Cluster_HealthLevel.undefined;
  local?: boolean;
  master_timeout?: CommonDuration.undefined;
  timeout?: CommonDuration.undefined;
  wait_for_active_shards?: CommonWaitForActiveShards.undefined;
  wait_for_events?: CommonWaitForEvents.undefined;
  wait_for_no_initializing_shards?: boolean;
  wait_for_no_relocating_shards?: boolean;
  wait_for_nodes?: string | number;
  wait_for_status?: CommonHealthStatus.undefined;
}

export type Cluster_Health_Response = ApiResponse & {
  body: Cluster_Health_ResponseBody;
}

export type Cluster_Health_ResponseBody = Cluster_HealthHealthResponseBody.undefined


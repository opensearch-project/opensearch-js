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

import * as Cluster_HealthAwarenessAttributeStats from './cluster.health___AwarenessAttributeStats'
import * as Cluster_HealthIndexHealthStats from './cluster.health___IndexHealthStats'
import * as CommonDuration from './_common___Duration'
import * as CommonDurationValueUnitMillis from './_common___DurationValueUnitMillis'
import * as CommonHealthStatus from './_common___HealthStatus'
import * as CommonName from './_common___Name'
import * as CommonPercentageNumber from './_common___PercentageNumber'
import * as CommonPercentageString from './_common___PercentageString'

export type undefined = {
  active_primary_shards: number;
  active_shards: number;
  active_shards_percent?: CommonPercentageString.undefined;
  active_shards_percent_as_number: CommonPercentageNumber.undefined;
  awareness_attributes?: Record<string, Cluster_HealthAwarenessAttributeStats.undefined>;
  cluster_name: CommonName.undefined;
  delayed_unassigned_shards: number;
  discovered_cluster_manager?: boolean;
  discovered_master?: boolean;
  indices?: Record<string, Cluster_HealthIndexHealthStats.undefined>;
  initializing_shards: number;
  number_of_data_nodes: number;
  number_of_in_flight_fetch: number;
  number_of_nodes: number;
  number_of_pending_tasks: number;
  relocating_shards: number;
  status: CommonHealthStatus.undefined;
  task_max_waiting_in_queue?: CommonDuration.undefined;
  task_max_waiting_in_queue_millis: CommonDurationValueUnitMillis.undefined;
  timed_out: boolean;
  unassigned_shards: number;
}


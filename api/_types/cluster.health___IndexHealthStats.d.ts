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

import * as Cluster_HealthShardHealthStats from './cluster.health___ShardHealthStats'
import * as CommonHealthStatus from './_common___HealthStatus'

export type undefined = {
  active_primary_shards: number;
  active_shards: number;
  initializing_shards: number;
  number_of_replicas: number;
  number_of_shards: number;
  relocating_shards: number;
  shards?: Record<string, Cluster_HealthShardHealthStats.undefined>;
  status: CommonHealthStatus.undefined;
  unassigned_shards: number;
}


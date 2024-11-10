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

import * as Cluster_StatsClusterJvmMemory from './cluster.stats___ClusterJvmMemory'
import * as Cluster_StatsClusterJvmVersion from './cluster.stats___ClusterJvmVersion'
import * as CommonDuration from './_common___Duration'
import * as CommonDurationValueUnitMillis from './_common___DurationValueUnitMillis'

export type undefined = {
  max_uptime?: CommonDuration.undefined;
  max_uptime_in_millis: CommonDurationValueUnitMillis.undefined;
  mem: Cluster_StatsClusterJvmMemory.undefined;
  threads: number;
  versions: Cluster_StatsClusterJvmVersion.undefined[];
}


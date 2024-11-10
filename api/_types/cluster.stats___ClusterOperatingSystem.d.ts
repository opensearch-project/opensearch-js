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

import * as Cluster_StatsClusterOperatingSystemArchitecture from './cluster.stats___ClusterOperatingSystemArchitecture'
import * as Cluster_StatsClusterOperatingSystemName from './cluster.stats___ClusterOperatingSystemName'
import * as Cluster_StatsClusterOperatingSystemPrettyName from './cluster.stats___ClusterOperatingSystemPrettyName'
import * as Cluster_StatsOperatingSystemMemoryInfo from './cluster.stats___OperatingSystemMemoryInfo'

export type undefined = {
  allocated_processors: number;
  architectures?: Cluster_StatsClusterOperatingSystemArchitecture.undefined[];
  available_processors: number;
  mem: Cluster_StatsOperatingSystemMemoryInfo.undefined;
  names: Cluster_StatsClusterOperatingSystemName.undefined[];
  pretty_names: Cluster_StatsClusterOperatingSystemPrettyName.undefined[];
}


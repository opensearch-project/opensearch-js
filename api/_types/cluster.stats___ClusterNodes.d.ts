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

import * as Cluster_StatsClusterFileSystem from './cluster.stats___ClusterFileSystem'
import * as Cluster_StatsClusterIngest from './cluster.stats___ClusterIngest'
import * as Cluster_StatsClusterJvm from './cluster.stats___ClusterJvm'
import * as Cluster_StatsClusterNetworkTypes from './cluster.stats___ClusterNetworkTypes'
import * as Cluster_StatsClusterNodeCount from './cluster.stats___ClusterNodeCount'
import * as Cluster_StatsClusterOperatingSystem from './cluster.stats___ClusterOperatingSystem'
import * as Cluster_StatsClusterProcess from './cluster.stats___ClusterProcess'
import * as Cluster_StatsIndexingPressure from './cluster.stats___IndexingPressure'
import * as Cluster_StatsNodePackagingType from './cluster.stats___NodePackagingType'
import * as CommonPluginStats from './_common___PluginStats'
import * as CommonVersionString from './_common___VersionString'

export type undefined = {
  count: Cluster_StatsClusterNodeCount.undefined;
  discovery_types: Record<string, number>;
  fs: Cluster_StatsClusterFileSystem.undefined;
  indexing_pressure?: Cluster_StatsIndexingPressure.undefined;
  ingest: Cluster_StatsClusterIngest.undefined;
  jvm: Cluster_StatsClusterJvm.undefined;
  network_types: Cluster_StatsClusterNetworkTypes.undefined;
  os: Cluster_StatsClusterOperatingSystem.undefined;
  packaging_types: Cluster_StatsNodePackagingType.undefined[];
  plugins: CommonPluginStats.undefined[];
  process: Cluster_StatsClusterProcess.undefined;
  versions: CommonVersionString.undefined[];
}


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

import * as Cluster_StatsCharFilterTypes from './cluster.stats___CharFilterTypes'
import * as Cluster_StatsClusterIndicesShards from './cluster.stats___ClusterIndicesShards'
import * as Cluster_StatsFieldTypesMappings from './cluster.stats___FieldTypesMappings'
import * as Cluster_StatsIndicesVersions from './cluster.stats___IndicesVersions'
import * as CommonCompletionStats from './_common___CompletionStats'
import * as CommonDocStats from './_common___DocStats'
import * as CommonFielddataStats from './_common___FielddataStats'
import * as CommonQueryCacheStats from './_common___QueryCacheStats'
import * as CommonSegmentsStats from './_common___SegmentsStats'
import * as CommonStoreStats from './_common___StoreStats'

export type undefined = {
  analysis: Cluster_StatsCharFilterTypes.undefined;
  completion: CommonCompletionStats.undefined;
  count: number;
  docs: CommonDocStats.undefined;
  fielddata: CommonFielddataStats.undefined;
  mappings: Cluster_StatsFieldTypesMappings.undefined;
  query_cache: CommonQueryCacheStats.undefined;
  segments: CommonSegmentsStats.undefined;
  shards: Cluster_StatsClusterIndicesShards.undefined;
  store: CommonStoreStats.undefined;
  versions?: Cluster_StatsIndicesVersions.undefined[];
}


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

import * as Common from './_common'

export type AcknowledgedResponse = {
  acknowledged?: boolean;
  index?: string;
  shards_acknowledged?: boolean;
}

export type CacheAllStats = {
  features?: CacheItemStats;
  featuresets?: CacheItemStats;
  models?: CacheItemStats;
  total?: CacheItemStats;
}

export type CacheItemStats = {
  count?: number;
  ram?: number;
}

export type CacheStat = {
  entry_count?: number;
  eviction_count?: number;
  hit_count?: number;
  memory_usage_in_bytes?: number;
  miss_count?: number;
}

export type CacheStats = {
  feature?: CacheStat;
  featureset?: CacheStat;
  model?: CacheStat;
}

export type CacheStatsResponse = {
  _nodes?: Common.NodeStatistics;
  all?: CacheAllStats;
  cluster_name?: Common.Name;
  nodes?: Record<string, NodeDetails>;
  stores?: Record<string, any>;
}

export type ListStoresResponse = {
  stores: Record<string, StoreDetails>;
}

export type NodeDetails = {
  hostname?: string;
  name?: string;
  stats?: NodeStatsDetails;
}

export type NodeStats = {
  cache?: CacheStats;
  request_error_count?: number;
  request_total_count?: number;
}

export type NodeStatsDetails = {
  features?: CacheItemStats;
  featuresets?: CacheItemStats;
  models?: CacheItemStats;
  total?: CacheItemStats;
}

export type Stats = {
  _nodes?: Common.NodeStatistics;
  cluster_name?: Common.Name;
  nodes?: Record<string, NodeStats>;
  status?: string;
  stores?: StoreStats;
}

export type StoreDetails = {
  counts?: Record<string, any>;
  index?: string;
  store?: string;
  version?: number;
}

export type StoreExistsResponse = {
  exists?: boolean;
}

export type StoreStat = {
  feature_count?: number;
  featureset_count?: number;
  model_count?: number;
  status?: string;
}

export type StoreStats = Record<string, StoreStat>


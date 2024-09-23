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
import * as Nodes_Common from './nodes._common'

export type IndexMetric = '_all' | 'completion' | 'docs' | 'fielddata' | 'flush' | 'get' | 'indexing' | 'merge' | 'query_cache' | 'recovery' | 'refresh' | 'request_cache' | 'search' | 'segments' | 'store' | 'suggest' | 'translog' | 'warmer'

export type Metric = '_all' | 'adaptive_selection' | 'admission_control' | 'breaker' | 'caches' | 'cluster_manager_throttling' | 'discovery' | 'file_cache' | 'fs' | 'http' | 'indexing_pressure' | 'indices' | 'ingest' | 'jvm' | 'os' | 'process' | 'repositories' | 'resource_usage_stats' | 'script' | 'script_cache' | 'search_backpressure' | 'search_pipeline' | 'segment_replication_backpressure' | 'shard_indexing_pressure' | 'task_cancellation' | 'thread_pool' | 'transport' | 'weighted_routing'

export interface ResponseBase extends Nodes_Common.NodesResponseBase {
  cluster_name?: Common.Name;
  nodes: Record<string, Nodes_Common.Stats>;
}


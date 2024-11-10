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

import * as Cluster_AllocationExplainNodeDiskUsage from './cluster.allocation_explain___NodeDiskUsage'
import * as Cluster_AllocationExplainReservedSize from './cluster.allocation_explain___ReservedSize'
import * as CommonByteCount from './_common___ByteCount'
import * as CommonHumanReadableByteCount from './_common___HumanReadableByteCount'

export type undefined = {
  nodes: Record<string, Cluster_AllocationExplainNodeDiskUsage.undefined>;
  reserved_sizes: Cluster_AllocationExplainReservedSize.undefined[];
  shard_data_set_sizes?: Record<string, string>;
  shard_paths: Record<string, string>;
  shard_sizes: Record<string, CommonByteCount.undefined | CommonHumanReadableByteCount.undefined>;
}


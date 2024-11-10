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

import * as Indices_StatsIndexStatsBase from './indices.stats___IndexStatsBase'
import * as Indices_StatsShardCommit from './indices.stats___ShardCommit'
import * as Indices_StatsShardPath from './indices.stats___ShardPath'
import * as Indices_StatsShardRetentionLeases from './indices.stats___ShardRetentionLeases'
import * as Indices_StatsShardRouting from './indices.stats___ShardRouting'
import * as Indices_StatsShardSequenceNumber from './indices.stats___ShardSequenceNumber'

export type undefined = Indices_StatsIndexStatsBase.undefined & {
  commit?: Indices_StatsShardCommit.undefined;
  retention_leases?: Indices_StatsShardRetentionLeases.undefined;
  routing?: Indices_StatsShardRouting.undefined;
  seq_no?: Indices_StatsShardSequenceNumber.undefined;
  shard_path?: Indices_StatsShardPath.undefined;
}


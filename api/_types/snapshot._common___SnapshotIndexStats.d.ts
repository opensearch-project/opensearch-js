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

import * as Snapshot_CommonShardsStats from './snapshot._common___ShardsStats'
import * as Snapshot_CommonSnapshotShardsStatus from './snapshot._common___SnapshotShardsStatus'
import * as Snapshot_CommonSnapshotStats from './snapshot._common___SnapshotStats'

export type undefined = {
  shards: Record<string, Snapshot_CommonSnapshotShardsStatus.undefined>;
  shards_stats: Snapshot_CommonShardsStats.undefined;
  stats: Snapshot_CommonSnapshotStats.undefined;
}


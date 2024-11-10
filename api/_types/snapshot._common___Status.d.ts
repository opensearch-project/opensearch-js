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

import * as CommonUuid from './_common___Uuid'
import * as Snapshot_CommonShardsStats from './snapshot._common___ShardsStats'
import * as Snapshot_CommonSnapshotIndexStats from './snapshot._common___SnapshotIndexStats'
import * as Snapshot_CommonSnapshotStats from './snapshot._common___SnapshotStats'

export type undefined = {
  include_global_state: boolean;
  indices: Record<string, Snapshot_CommonSnapshotIndexStats.undefined>;
  repository: string;
  shards_stats: Snapshot_CommonShardsStats.undefined;
  snapshot: string;
  state: string;
  stats: Snapshot_CommonSnapshotStats.undefined;
  uuid: CommonUuid.undefined;
}


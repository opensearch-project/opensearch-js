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
import * as Indices_StatsIndexShardStats from './indices.stats___IndexShardStats'
import * as Indices_StatsIndexStats from './indices.stats___IndexStats'

export type undefined = {
  primaries: Indices_StatsIndexStats.undefined;
  shards?: Record<string, Indices_StatsIndexShardStats.undefined[]>;
  total: Indices_StatsIndexStats.undefined;
  uuid: CommonUuid.undefined;
}


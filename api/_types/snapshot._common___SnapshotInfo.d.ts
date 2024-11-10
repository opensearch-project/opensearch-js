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

import * as CommonDateTime from './_common___DateTime'
import * as CommonDuration from './_common___Duration'
import * as CommonDurationValueUnitMillis from './_common___DurationValueUnitMillis'
import * as CommonEpochTimeUnitMillis from './_common___EpochTimeUnitMillis'
import * as CommonIndexName from './_common___IndexName'
import * as CommonMetadata from './_common___Metadata'
import * as CommonName from './_common___Name'
import * as CommonShardStatistics from './_common___ShardStatistics'
import * as CommonUuid from './_common___Uuid'
import * as CommonVersionNumber from './_common___VersionNumber'
import * as CommonVersionString from './_common___VersionString'
import * as Snapshot_CommonSnapshotShardFailure from './snapshot._common___SnapshotShardFailure'

export type undefined = {
  data_streams: string[];
  duration?: CommonDuration.undefined;
  duration_in_millis?: CommonDurationValueUnitMillis.undefined;
  end_time?: CommonDateTime.undefined;
  end_time_in_millis?: CommonEpochTimeUnitMillis.undefined;
  failures?: Snapshot_CommonSnapshotShardFailure.undefined[];
  include_global_state?: boolean;
  indices?: CommonIndexName.undefined[];
  metadata?: CommonMetadata.undefined;
  pinned_timestamp?: CommonEpochTimeUnitMillis.undefined;
  reason?: string;
  remote_store_index_shallow_copy?: boolean;
  shards?: CommonShardStatistics.undefined;
  snapshot: CommonName.undefined;
  start_time?: CommonDateTime.undefined;
  start_time_in_millis?: CommonEpochTimeUnitMillis.undefined;
  state?: string;
  uuid: CommonUuid.undefined;
  version?: CommonVersionString.undefined;
  version_id?: CommonVersionNumber.undefined;
}


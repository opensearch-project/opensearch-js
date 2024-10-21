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

export interface FileDetails {
  length: number;
  name: string;
  recovered: number;
}

export interface RecoveryBytes {
  percent: Common.PercentageString;
  recovered?: Common.HumanReadableByteCount;
  recovered_from_snapshot?: Common.HumanReadableByteCount;
  recovered_from_snapshot_in_bytes?: Common.ByteCount;
  recovered_in_bytes: Common.ByteCount;
  reused?: Common.HumanReadableByteCount;
  reused_in_bytes: Common.ByteCount;
  total?: Common.HumanReadableByteCount;
  total_in_bytes: Common.ByteCount;
}

export interface RecoveryFiles {
  details?: FileDetails[];
  percent: Common.PercentageString;
  recovered: number;
  reused: number;
  total: number;
}

export interface RecoveryIndexStatus {
  bytes?: RecoveryBytes;
  files: RecoveryFiles;
  size: RecoveryBytes;
  source_throttle_time?: Common.Duration;
  source_throttle_time_in_millis: Common.DurationValueUnitMillis;
  target_throttle_time?: Common.Duration;
  target_throttle_time_in_millis: Common.DurationValueUnitMillis;
  total_time?: Common.Duration;
  total_time_in_millis: Common.DurationValueUnitMillis;
}

export interface RecoveryOrigin {
  bootstrap_new_history_uuid?: boolean;
  host?: Common.Host;
  hostname?: string;
  id?: Common.Id;
  index?: Common.IndexName;
  ip?: Common.Ip;
  isSearchableSnapshot?: boolean;
  name?: Common.Name;
  remoteStoreIndexShallowCopy?: boolean;
  repository?: Common.Name;
  restoreUUID?: Common.Uuid;
  snapshot?: Common.Name;
  sourceRemoteStoreRepository?: undefined | string;
  sourceRemoteTranslogRepository?: undefined | string;
  transport_address?: Common.TransportAddress;
  version?: Common.VersionString;
}

export interface RecoveryStartStatus {
  check_index_time?: Common.Duration;
  check_index_time_in_millis: Common.DurationValueUnitMillis;
  total_time?: Common.Duration;
  total_time_in_millis: Common.DurationValueUnitMillis;
}

export interface RecoveryStatus {
  shards: ShardRecovery[];
}

export interface ShardRecovery {
  id: number;
  index: RecoveryIndexStatus;
  primary: boolean;
  source: RecoveryOrigin;
  stage: string;
  start?: RecoveryStartStatus;
  start_time?: Common.DateTime;
  start_time_in_millis: Common.EpochTimeUnitMillis;
  stop_time?: Common.DateTime;
  stop_time_in_millis?: Common.EpochTimeUnitMillis;
  target: RecoveryOrigin;
  total_time?: Common.Duration;
  total_time_in_millis: Common.DurationValueUnitMillis;
  translog: TranslogStatus;
  type: string;
  verify_index: VerifyIndex;
}

export interface TranslogStatus {
  percent: Common.PercentageString;
  recovered: number;
  total: number;
  total_on_start: number;
  total_time?: Common.Duration;
  total_time_in_millis: Common.DurationValueUnitMillis;
}

export interface VerifyIndex {
  check_index_time?: Common.Duration;
  check_index_time_in_millis: Common.DurationValueUnitMillis;
  total_time?: Common.Duration;
  total_time_in_millis: Common.DurationValueUnitMillis;
}


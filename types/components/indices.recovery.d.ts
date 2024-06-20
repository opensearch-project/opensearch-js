/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

import * as Common from './_common'

export interface FileDetails {
  length: number;
  name: string;
  recovered: number;
}

export interface RecoveryBytes {
  percent: Common.Percentage;
  recovered?: Common.ByteSize;
  recovered_from_snapshot?: Common.ByteSize;
  recovered_from_snapshot_in_bytes?: Common.ByteSize;
  recovered_in_bytes: Common.ByteSize;
  reused?: Common.ByteSize;
  reused_in_bytes: Common.ByteSize;
  total?: Common.ByteSize;
  total_in_bytes: Common.ByteSize;
}

export interface RecoveryFiles {
  details?: FileDetails[];
  percent: Common.Percentage;
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
  name?: Common.Name;
  repository?: Common.Name;
  restoreUUID?: Common.Uuid;
  snapshot?: Common.Name;
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
  percent: Common.Percentage;
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


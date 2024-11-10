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
import * as Indices_RecoveryRecoveryIndexStatus from './indices.recovery___RecoveryIndexStatus'
import * as Indices_RecoveryRecoveryOrigin from './indices.recovery___RecoveryOrigin'
import * as Indices_RecoveryRecoveryStartStatus from './indices.recovery___RecoveryStartStatus'
import * as Indices_RecoveryTranslogStatus from './indices.recovery___TranslogStatus'
import * as Indices_RecoveryVerifyIndex from './indices.recovery___VerifyIndex'

export type undefined = {
  id: number;
  index: Indices_RecoveryRecoveryIndexStatus.undefined;
  primary: boolean;
  source: Indices_RecoveryRecoveryOrigin.undefined;
  stage: string;
  start?: Indices_RecoveryRecoveryStartStatus.undefined;
  start_time?: CommonDateTime.undefined;
  start_time_in_millis: CommonEpochTimeUnitMillis.undefined;
  stop_time?: CommonDateTime.undefined;
  stop_time_in_millis?: CommonEpochTimeUnitMillis.undefined;
  target: Indices_RecoveryRecoveryOrigin.undefined;
  total_time?: CommonDuration.undefined;
  total_time_in_millis: CommonDurationValueUnitMillis.undefined;
  translog: Indices_RecoveryTranslogStatus.undefined;
  type: string;
  verify_index: Indices_RecoveryVerifyIndex.undefined;
}


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

import * as CommonDuration from './_common___Duration'
import * as CommonDurationValueUnitMillis from './_common___DurationValueUnitMillis'
import * as Indices_RecoveryRecoveryBytes from './indices.recovery___RecoveryBytes'
import * as Indices_RecoveryRecoveryFiles from './indices.recovery___RecoveryFiles'

export type undefined = {
  bytes?: Indices_RecoveryRecoveryBytes.undefined;
  files: Indices_RecoveryRecoveryFiles.undefined;
  size: Indices_RecoveryRecoveryBytes.undefined;
  source_throttle_time?: CommonDuration.undefined;
  source_throttle_time_in_millis: CommonDurationValueUnitMillis.undefined;
  target_throttle_time?: CommonDuration.undefined;
  target_throttle_time_in_millis: CommonDurationValueUnitMillis.undefined;
  total_time?: CommonDuration.undefined;
  total_time_in_millis: CommonDurationValueUnitMillis.undefined;
}


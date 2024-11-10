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

import * as CommonByteCount from './_common___ByteCount'
import * as CommonDuration from './_common___Duration'
import * as CommonDurationValueUnitMillis from './_common___DurationValueUnitMillis'
import * as CommonHumanReadableByteCount from './_common___HumanReadableByteCount'

export type undefined = {
  current: number;
  current_docs: number;
  current_size?: CommonHumanReadableByteCount.undefined;
  current_size_in_bytes: CommonByteCount.undefined;
  total: number;
  total_auto_throttle?: CommonHumanReadableByteCount.undefined;
  total_auto_throttle_in_bytes: CommonByteCount.undefined;
  total_docs: number;
  total_size?: CommonHumanReadableByteCount.undefined;
  total_size_in_bytes: CommonByteCount.undefined;
  total_stopped_time?: CommonDuration.undefined;
  total_stopped_time_in_millis: CommonDurationValueUnitMillis.undefined;
  total_throttled_time?: CommonDuration.undefined;
  total_throttled_time_in_millis: CommonDurationValueUnitMillis.undefined;
  total_time?: CommonDuration.undefined;
  total_time_in_millis: CommonDurationValueUnitMillis.undefined;
  unreferenced_file_cleanups_performed?: number;
}


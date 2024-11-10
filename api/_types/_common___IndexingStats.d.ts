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

import * as CommonDocStatus from './_common___DocStatus'
import * as CommonDuration from './_common___Duration'
import * as CommonDurationValueUnitMillis from './_common___DurationValueUnitMillis'

export type undefined = {
  delete_current: number;
  delete_time?: CommonDuration.undefined;
  delete_time_in_millis: CommonDurationValueUnitMillis.undefined;
  delete_total: number;
  doc_status?: CommonDocStatus.undefined;
  index_current: number;
  index_failed: number;
  index_time?: CommonDuration.undefined;
  index_time_in_millis: CommonDurationValueUnitMillis.undefined;
  index_total: number;
  is_throttled: boolean;
  noop_update_total: number;
  throttle_time?: CommonDuration.undefined;
  throttle_time_in_millis: CommonDurationValueUnitMillis.undefined;
  types?: Record<string, undefined>;
}


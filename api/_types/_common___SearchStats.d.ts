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
import * as CommonRequestStats from './_common___RequestStats'

export type undefined = {
  concurrent_avg_slice_count?: number;
  concurrent_query_current?: number;
  concurrent_query_time?: CommonDuration.undefined;
  concurrent_query_time_in_millis?: CommonDurationValueUnitMillis.undefined;
  concurrent_query_total?: number;
  fetch_current: number;
  fetch_time?: CommonDuration.undefined;
  fetch_time_in_millis: CommonDurationValueUnitMillis.undefined;
  fetch_total: number;
  groups?: Record<string, undefined>;
  open_contexts?: number;
  point_in_time_current?: number;
  point_in_time_time?: CommonDuration.undefined;
  point_in_time_time_in_millis?: CommonDurationValueUnitMillis.undefined;
  point_in_time_total?: number;
  query_current: number;
  query_time?: CommonDuration.undefined;
  query_time_in_millis: CommonDurationValueUnitMillis.undefined;
  query_total: number;
  request?: Record<string, CommonRequestStats.undefined>;
  scroll_current: number;
  scroll_time?: CommonDuration.undefined;
  scroll_time_in_millis: CommonDurationValueUnitMillis.undefined;
  scroll_total: number;
  search_idle_reactivate_count_total?: number;
  suggest_current: number;
  suggest_time?: CommonDuration.undefined;
  suggest_time_in_millis: CommonDurationValueUnitMillis.undefined;
  suggest_total: number;
}


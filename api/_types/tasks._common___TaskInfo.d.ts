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
import * as CommonDurationValueUnitNanos from './_common___DurationValueUnitNanos'
import * as CommonEpochTimeUnitMillis from './_common___EpochTimeUnitMillis'
import * as CommonNodeId from './_common___NodeId'
import * as CommonTaskId from './_common___TaskId'
import * as Tasks_CommonStatus from './tasks._common___Status'

export type undefined = {
  action: string;
  cancellable: boolean;
  cancelled?: boolean;
  description?: string;
  headers: Record<string, string>;
  id: number;
  node: CommonNodeId.undefined;
  parent_task_id?: CommonTaskId.undefined;
  running_time?: CommonDuration.undefined;
  running_time_in_nanos: CommonDurationValueUnitNanos.undefined;
  start_time_in_millis: CommonEpochTimeUnitMillis.undefined;
  status?: Tasks_CommonStatus.undefined;
  type: string;
}


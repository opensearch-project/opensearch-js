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

export interface SnapshotsRecord {
  duration?: Common.Duration;
  end_epoch?: Common.StringifiedEpochTimeUnitSeconds;
  end_time?: Common.TimeOfDay;
  failed_shards?: string;
  id?: string;
  indices?: string;
  reason?: string;
  repository?: string;
  start_epoch?: Common.StringifiedEpochTimeUnitSeconds;
  start_time?: Common.ScheduleTimeOfDay;
  status?: string;
  successful_shards?: string;
  total_shards?: string;
}


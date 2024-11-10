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
import * as CommonScheduleTimeOfDay from './_common___ScheduleTimeOfDay'
import * as CommonStringifiedEpochTimeUnitSeconds from './_common___StringifiedEpochTimeUnitSeconds'
import * as CommonTimeOfDay from './_common___TimeOfDay'

export type undefined = {
  duration?: CommonDuration.undefined;
  end_epoch?: CommonStringifiedEpochTimeUnitSeconds.undefined;
  end_time?: CommonTimeOfDay.undefined;
  failed_shards?: string;
  id?: string;
  indices?: string;
  reason?: string;
  repository?: string;
  start_epoch?: CommonStringifiedEpochTimeUnitSeconds.undefined;
  start_time?: CommonScheduleTimeOfDay.undefined;
  status?: string;
  successful_shards?: string;
  total_shards?: string;
}


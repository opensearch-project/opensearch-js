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

import * as CommonPercentageString from './_common___PercentageString'
import * as CommonStringifiedEpochTimeUnitSeconds from './_common___StringifiedEpochTimeUnitSeconds'
import * as CommonTimeOfDay from './_common___TimeOfDay'

export type undefined = {
  active_shards_percent?: CommonPercentageString.undefined;
  cluster?: string;
  discovered_cluster_manager?: string;
  discovered_master?: string;
  epoch?: CommonStringifiedEpochTimeUnitSeconds.undefined;
  init?: string;
  max_task_wait_time?: string;
  'node.data'?: string;
  'node.total'?: string;
  pending_tasks?: string;
  pri?: string;
  relo?: string;
  shards?: string;
  status?: string;
  timestamp?: CommonTimeOfDay.undefined;
  unassign?: string;
}


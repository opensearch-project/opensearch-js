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

export interface HealthRecord {
  active_shards_percent?: string;
  cluster?: string;
  discovered_cluster_manager?: string;
  discovered_master?: string;
  epoch?: Common.StringifiedEpochTimeUnitSeconds;
  init?: string;
  max_task_wait_time?: string;
  'node.data'?: string;
  'node.total'?: string;
  pending_tasks?: string;
  pri?: string;
  relo?: string;
  shards?: string;
  status?: string;
  timestamp?: Common.TimeOfDay;
  unassign?: string;
}


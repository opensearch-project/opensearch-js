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

export interface ReindexNode extends Common.BaseNode {
  tasks: Record<string, ReindexTask>;
}

export interface ReindexStatus {
  batches: number;
  created: number;
  deleted: number;
  noops: number;
  requests_per_second: number;
  retries: Common.Retries;
  throttled?: Common.Duration;
  throttled_millis: Common.DurationValueUnitMillis;
  throttled_until?: Common.Duration;
  throttled_until_millis: Common.DurationValueUnitMillis;
  total: number;
  updated: number;
  version_conflicts: number;
}

export interface ReindexTask {
  action: string;
  cancellable: boolean;
  description: string;
  headers: Common.HttpHeaders;
  id: number;
  node: Common.Name;
  running_time_in_nanos: Common.DurationValueUnitNanos;
  start_time_in_millis: Common.EpochTimeUnitMillis;
  status: ReindexStatus;
  type: string;
}


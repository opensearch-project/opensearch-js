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

export interface RecoveryRecord {
  bytes?: string;
  bytes_percent?: Common.Percentage;
  bytes_recovered?: string;
  bytes_total?: string;
  files?: string;
  files_percent?: Common.Percentage;
  files_recovered?: string;
  files_total?: string;
  index?: Common.IndexName;
  repository?: string;
  shard?: string;
  snapshot?: string;
  source_host?: string;
  source_node?: string;
  stage?: string;
  start_time?: Common.DateTime;
  start_time_millis?: Common.EpochTimeUnitMillis;
  stop_time?: Common.DateTime;
  stop_time_millis?: Common.EpochTimeUnitMillis;
  target_host?: string;
  target_node?: string;
  time?: Common.Duration;
  translog_ops?: string;
  translog_ops_percent?: Common.Percentage;
  translog_ops_recovered?: string;
  type?: string;
}


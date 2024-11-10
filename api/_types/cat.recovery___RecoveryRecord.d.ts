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

import * as CommonDateTime from './_common___DateTime'
import * as CommonDuration from './_common___Duration'
import * as CommonIndexName from './_common___IndexName'
import * as CommonPercentageString from './_common___PercentageString'
import * as CommonStringifiedEpochTimeUnitMillis from './_common___StringifiedEpochTimeUnitMillis'

export type undefined = {
  bytes?: string;
  bytes_percent?: CommonPercentageString.undefined;
  bytes_recovered?: string;
  bytes_total?: string;
  files?: string;
  files_percent?: CommonPercentageString.undefined;
  files_recovered?: string;
  files_total?: string;
  index?: CommonIndexName.undefined;
  repository?: string;
  shard?: string;
  snapshot?: string;
  source_host?: string;
  source_node?: string;
  stage?: string;
  start_time?: CommonDateTime.undefined;
  start_time_millis?: CommonStringifiedEpochTimeUnitMillis.undefined;
  stop_time?: CommonDateTime.undefined;
  stop_time_millis?: CommonStringifiedEpochTimeUnitMillis.undefined;
  target_host?: string;
  target_node?: string;
  time?: CommonDuration.undefined;
  translog_ops?: string;
  translog_ops_percent?: CommonPercentageString.undefined;
  translog_ops_recovered?: string;
  type?: string;
}


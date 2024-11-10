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

import * as CommonDurationValueUnitNanos from './_common___DurationValueUnitNanos'
import * as CommonEpochTimeUnitMillis from './_common___EpochTimeUnitMillis'
import * as CommonHttpHeaders from './_common___HttpHeaders'
import * as CommonName from './_common___Name'
import * as Core_ReindexRethrottleReindexStatus from './_core.reindex_rethrottle___ReindexStatus'

export type undefined = {
  action: string;
  cancellable: boolean;
  description: string;
  headers: CommonHttpHeaders.undefined;
  id: number;
  node: CommonName.undefined;
  running_time_in_nanos: CommonDurationValueUnitNanos.undefined;
  start_time_in_millis: CommonEpochTimeUnitMillis.undefined;
  status: Core_ReindexRethrottleReindexStatus.undefined;
  type: string;
}


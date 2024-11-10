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
import * as CommonRetries from './_common___Retries'

export type undefined = {
  batches: number;
  created: number;
  deleted: number;
  noops: number;
  requests_per_second: number;
  retries: CommonRetries.undefined;
  throttled?: CommonDuration.undefined;
  throttled_millis: CommonDurationValueUnitMillis.undefined;
  throttled_until?: CommonDuration.undefined;
  throttled_until_millis: CommonDurationValueUnitMillis.undefined;
  total: number;
  updated: number;
  version_conflicts: number;
}


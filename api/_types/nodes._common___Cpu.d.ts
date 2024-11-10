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
import * as CommonPercentageNumber from './_common___PercentageNumber'

export type undefined = {
  load_average?: Record<string, number>;
  percent?: CommonPercentageNumber.undefined;
  sys?: CommonDuration.undefined;
  sys_in_millis?: CommonDurationValueUnitMillis.undefined;
  total?: CommonDuration.undefined;
  total_in_millis?: CommonDurationValueUnitMillis.undefined;
  user?: CommonDuration.undefined;
  user_in_millis?: CommonDurationValueUnitMillis.undefined;
}


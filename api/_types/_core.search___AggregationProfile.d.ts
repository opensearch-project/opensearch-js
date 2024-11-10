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
import * as Core_SearchAggregationBreakdown from './_core.search___AggregationBreakdown'
import * as Core_SearchAggregationProfileDebug from './_core.search___AggregationProfileDebug'

export type undefined = {
  breakdown: Core_SearchAggregationBreakdown.undefined;
  children?: undefined[];
  debug?: Core_SearchAggregationProfileDebug.undefined;
  description: string;
  time_in_nanos: CommonDurationValueUnitNanos.undefined;
  type: string;
}


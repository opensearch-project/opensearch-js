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

import * as Common_AggregationsCompositeAggregationBase from './_common.aggregations___CompositeAggregationBase'
import * as CommonDuration from './_common___Duration'
import * as CommonDurationLarge from './_common___DurationLarge'
import * as CommonTimeZone from './_common___TimeZone'

export type undefined = Common_AggregationsCompositeAggregationBase.undefined & {
  calendar_interval?: CommonDurationLarge.undefined;
  fixed_interval?: CommonDurationLarge.undefined;
  format?: string;
  offset?: CommonDuration.undefined;
  time_zone?: CommonTimeZone.undefined;
}


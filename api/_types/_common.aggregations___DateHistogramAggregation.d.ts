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

import * as Common_AggregationsAggregateOrder from './_common.aggregations___AggregateOrder'
import * as Common_AggregationsBucketAggregationBase from './_common.aggregations___BucketAggregationBase'
import * as Common_AggregationsCalendarInterval from './_common.aggregations___CalendarInterval'
import * as Common_AggregationsExtendedBoundsFieldDateMath from './_common.aggregations___ExtendedBoundsFieldDateMath'
import * as CommonDateTime from './_common___DateTime'
import * as CommonDuration from './_common___Duration'
import * as CommonField from './_common___Field'
import * as CommonScript from './_common___Script'
import * as CommonTimeZone from './_common___TimeZone'

export type undefined = Common_AggregationsBucketAggregationBase.undefined & {
  calendar_interval?: Common_AggregationsCalendarInterval.undefined;
  extended_bounds?: Common_AggregationsExtendedBoundsFieldDateMath.undefined;
  field?: CommonField.undefined;
  fixed_interval?: CommonDuration.undefined;
  format?: string;
  hard_bounds?: Common_AggregationsExtendedBoundsFieldDateMath.undefined;
  interval?: CommonDuration.undefined;
  keyed?: boolean;
  min_doc_count?: number;
  missing?: CommonDateTime.undefined;
  offset?: CommonDuration.undefined;
  order?: Common_AggregationsAggregateOrder.undefined;
  params?: Record<string, Record<string, any>>;
  script?: CommonScript.undefined;
  time_zone?: CommonTimeZone.undefined;
}


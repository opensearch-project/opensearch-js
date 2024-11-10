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

import * as Common_AggregationsBucketAggregationBase from './_common.aggregations___BucketAggregationBase'
import * as Common_AggregationsMinimumInterval from './_common.aggregations___MinimumInterval'
import * as CommonDateTime from './_common___DateTime'
import * as CommonField from './_common___Field'
import * as CommonScript from './_common___Script'
import * as CommonTimeZone from './_common___TimeZone'

export type undefined = Common_AggregationsBucketAggregationBase.undefined & {
  buckets?: number;
  field?: CommonField.undefined;
  format?: string;
  minimum_interval?: Common_AggregationsMinimumInterval.undefined;
  missing?: CommonDateTime.undefined;
  offset?: string;
  params?: Record<string, Record<string, any>>;
  script?: CommonScript.undefined;
  time_zone?: CommonTimeZone.undefined;
}


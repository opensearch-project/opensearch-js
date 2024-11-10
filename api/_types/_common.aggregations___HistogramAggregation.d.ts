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
import * as Common_AggregationsExtendedBoundsdouble from './_common.aggregations___ExtendedBoundsdouble'
import * as CommonField from './_common___Field'
import * as CommonScript from './_common___Script'

export type undefined = Common_AggregationsBucketAggregationBase.undefined & {
  extended_bounds?: Common_AggregationsExtendedBoundsdouble.undefined;
  field?: CommonField.undefined;
  format?: string;
  hard_bounds?: Common_AggregationsExtendedBoundsdouble.undefined;
  interval?: number;
  keyed?: boolean;
  min_doc_count?: number;
  missing?: number;
  offset?: number;
  order?: Common_AggregationsAggregateOrder.undefined;
  script?: CommonScript.undefined;
}


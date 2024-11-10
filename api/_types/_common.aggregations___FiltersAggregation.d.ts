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
import * as Common_AggregationsBucketsQueryContainer from './_common.aggregations___BucketsQueryContainer'

export type undefined = Common_AggregationsBucketAggregationBase.undefined & {
  filters?: Common_AggregationsBucketsQueryContainer.undefined;
  keyed?: boolean;
  other_bucket?: boolean;
  other_bucket_key?: string;
}


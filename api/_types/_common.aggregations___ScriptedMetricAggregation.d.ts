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

import * as Common_AggregationsMetricAggregationBase from './_common.aggregations___MetricAggregationBase'
import * as CommonScript from './_common___Script'

export type undefined = Common_AggregationsMetricAggregationBase.undefined & {
  combine_script?: CommonScript.undefined;
  init_script?: CommonScript.undefined;
  map_script?: CommonScript.undefined;
  params?: Record<string, Record<string, any>>;
  reduce_script?: CommonScript.undefined;
}


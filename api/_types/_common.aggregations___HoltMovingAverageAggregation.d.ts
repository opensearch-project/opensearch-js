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

import * as Common_AggregationsHoltLinearModelSettings from './_common.aggregations___HoltLinearModelSettings'
import * as Common_AggregationsMovingAverageAggregationBase from './_common.aggregations___MovingAverageAggregationBase'

export type undefined = Common_AggregationsMovingAverageAggregationBase.undefined & {
  model: 'holt';
  settings: Common_AggregationsHoltLinearModelSettings.undefined;
}


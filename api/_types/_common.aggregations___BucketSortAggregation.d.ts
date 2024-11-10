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

import * as Common_AggregationsAggregation from './_common.aggregations___Aggregation'
import * as Common_AggregationsGapPolicy from './_common.aggregations___GapPolicy'
import * as CommonSort from './_common___Sort'

export type undefined = Common_AggregationsAggregation.undefined & {
  from?: number;
  gap_policy?: Common_AggregationsGapPolicy.undefined;
  size?: number;
  sort?: CommonSort.undefined;
}


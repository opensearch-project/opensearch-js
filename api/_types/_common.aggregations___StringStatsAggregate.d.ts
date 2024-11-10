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

import * as Common_AggregationsAggregateBase from './_common.aggregations___AggregateBase'

export type undefined = Common_AggregationsAggregateBase.undefined & {
  avg_length: undefined | number | string;
  avg_length_as_string?: string;
  count: number;
  distribution?: undefined | Record<string, number> | string;
  entropy: undefined | number | string;
  max_length: undefined | number | string;
  max_length_as_string?: string;
  min_length: undefined | number | string;
  min_length_as_string?: string;
}


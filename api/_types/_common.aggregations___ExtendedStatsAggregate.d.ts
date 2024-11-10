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

import * as Common_AggregationsStandardDeviationBounds from './_common.aggregations___StandardDeviationBounds'
import * as Common_AggregationsStandardDeviationBoundsAsString from './_common.aggregations___StandardDeviationBoundsAsString'
import * as Common_AggregationsStatsAggregate from './_common.aggregations___StatsAggregate'

export type undefined = Common_AggregationsStatsAggregate.undefined & {
  std_deviation: undefined | number | string;
  std_deviation_as_string?: string;
  std_deviation_bounds?: Common_AggregationsStandardDeviationBounds.undefined;
  std_deviation_bounds_as_string?: Common_AggregationsStandardDeviationBoundsAsString.undefined;
  std_deviation_population: undefined | number | string;
  std_deviation_sampling: undefined | number | string;
  sum_of_squares: undefined | number | string;
  sum_of_squares_as_string?: string;
  variance: undefined | number | string;
  variance_as_string?: string;
  variance_population: undefined | number | string;
  variance_population_as_string?: string;
  variance_sampling: undefined | number | string;
  variance_sampling_as_string?: string;
}


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

import * as Common_AggregationsGeoLinePoint from './_common.aggregations___GeoLinePoint'
import * as Common_AggregationsGeoLineSort from './_common.aggregations___GeoLineSort'
import * as CommonSortOrder from './_common___SortOrder'

export type undefined = {
  include_sort?: boolean;
  point: Common_AggregationsGeoLinePoint.undefined;
  size?: number;
  sort: Common_AggregationsGeoLineSort.undefined;
  sort_order?: CommonSortOrder.undefined;
}


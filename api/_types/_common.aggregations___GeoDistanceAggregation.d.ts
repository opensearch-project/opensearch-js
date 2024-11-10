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

import * as Common_AggregationsAggregationRange from './_common.aggregations___AggregationRange'
import * as Common_AggregationsBucketAggregationBase from './_common.aggregations___BucketAggregationBase'
import * as CommonDistanceUnit from './_common___DistanceUnit'
import * as CommonField from './_common___Field'
import * as CommonGeoDistanceType from './_common___GeoDistanceType'
import * as CommonGeoLocation from './_common___GeoLocation'

export type undefined = Common_AggregationsBucketAggregationBase.undefined & {
  distance_type?: CommonGeoDistanceType.undefined;
  field?: CommonField.undefined;
  origin?: CommonGeoLocation.undefined;
  ranges?: Common_AggregationsAggregationRange.undefined[];
  unit?: CommonDistanceUnit.undefined;
}


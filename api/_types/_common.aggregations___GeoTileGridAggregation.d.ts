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
import * as CommonField from './_common___Field'
import * as CommonGeoBounds from './_common___GeoBounds'
import * as CommonGeoTilePrecision from './_common___GeoTilePrecision'

export type undefined = Common_AggregationsBucketAggregationBase.undefined & {
  bounds?: CommonGeoBounds.undefined;
  field?: CommonField.undefined;
  precision?: CommonGeoTilePrecision.undefined;
  shard_size?: number;
  size?: number;
}


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
import * as CommonGeoLine from './_common___GeoLine'

export type undefined = Common_AggregationsAggregateBase.undefined & {
  geometry: CommonGeoLine.undefined;
  properties: Record<string, any>;
  type: string;
}


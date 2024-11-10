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

import * as Common_QueryDslGeoExecution from './_common.query_dsl___GeoExecution'
import * as Common_QueryDslGeoValidationMethod from './_common.query_dsl___GeoValidationMethod'
import * as Common_QueryDslIgnoreUnmapped from './_common.query_dsl___IgnoreUnmapped'
import * as Common_QueryDslQueryBase from './_common.query_dsl___QueryBase'
import * as CommonGeoBounds from './_common___GeoBounds'

export type undefined = Common_QueryDslQueryBase.undefined & {
  ignore_unmapped?: Common_QueryDslIgnoreUnmapped.undefined;
  type?: Common_QueryDslGeoExecution.undefined;
  validation_method?: Common_QueryDslGeoValidationMethod.undefined;
  [key: string]: any | CommonGeoBounds.undefined;
}


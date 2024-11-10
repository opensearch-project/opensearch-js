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

import * as Common_MappingDocValuesPropertyBase from './_common.mapping___DocValuesPropertyBase'
import * as Common_MappingGeoOrientation from './_common.mapping___GeoOrientation'

export type undefined = Common_MappingDocValuesPropertyBase.undefined & {
  coerce?: boolean;
  ignore_malformed?: boolean;
  ignore_z_value?: boolean;
  orientation?: Common_MappingGeoOrientation.undefined;
  type: 'xy_shape';
}


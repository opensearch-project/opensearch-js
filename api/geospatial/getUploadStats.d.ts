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

import { ApiResponse } from '../../lib/Transport'
import * as Geospatial_Common from '../_types/geospatial._common'
import * as Global from '../_types/_global'

export type Geospatial_GetUploadStats_Request = Global.Params & Record<string, any>

export interface Geospatial_GetUploadStats_Response extends ApiResponse {
  body: Geospatial_GetUploadStats_ResponseBody;
}

export type Geospatial_GetUploadStats_ResponseBody = Geospatial_Common.GeoSpatialUploadStats


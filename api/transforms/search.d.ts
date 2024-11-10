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
import * as Global from '../_types/_global'
import * as Transforms_CommonTransformsResponse from '../_types/transforms._common___TransformsResponse'

export type Transforms_Search_Request = Global.Params & {
  from?: number;
  search?: string;
  size?: number;
  sortDirection?: string;
  sortField?: string;
}

export type Transforms_Search_Response = ApiResponse & {
  body: Transforms_Search_ResponseBody;
}

export type Transforms_Search_ResponseBody = Transforms_CommonTransformsResponse.undefined


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
import * as Core_Search from '../_types/_core.search'
import * as Global from '../_types/_global'

export interface Ltr_SearchFeatures_Request extends Global.Params {
  from?: number;
  prefix?: string;
  size?: number;
  store?: string;
}

export interface Ltr_SearchFeatures_Response extends ApiResponse {
  body: Ltr_SearchFeatures_ResponseBody;
}

export type Ltr_SearchFeatures_ResponseBody = Core_Search.SearchResultJsonValue & Record<string, any>


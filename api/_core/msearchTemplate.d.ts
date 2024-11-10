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
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonSearchType from '../_types/_common___SearchType'
import * as Core_MsearchMultiSearchResult from '../_types/_core.msearch___MultiSearchResult'
import * as Core_MsearchTemplateRequestItem from '../_types/_core.msearch_template___RequestItem'
import * as Global from '../_types/_global'

export type MsearchTemplate_Request = Global.Params & {
  body: MsearchTemplate_RequestBody;
  ccs_minimize_roundtrips?: boolean;
  index?: CommonIndices.undefined;
  max_concurrent_searches?: number;
  rest_total_hits_as_int?: boolean;
  search_type?: CommonSearchType.undefined;
  typed_keys?: boolean;
}

export type MsearchTemplate_RequestBody = Core_MsearchTemplateRequestItem.undefined[]

export type MsearchTemplate_Response = ApiResponse & {
  body: MsearchTemplate_ResponseBody;
}

export type MsearchTemplate_ResponseBody = Core_MsearchMultiSearchResult.undefined


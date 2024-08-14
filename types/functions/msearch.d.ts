/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

import { ApiResponse } from '../../lib/Transport'
import * as Global from '../components/_global'
import * as Common from '../components/_common'
import * as Core_Msearch from '../components/_core.msearch'

export interface Request extends Global.Params {
  body: RequestBody;
  ccs_minimize_roundtrips?: boolean;
  index?: Common.Indices;
  max_concurrent_searches?: number;
  max_concurrent_shard_requests?: number;
  pre_filter_shard_size?: number;
  rest_total_hits_as_int?: boolean;
  search_type?: Common.SearchType;
  typed_keys?: boolean;
}

export type ResponseBody = Core_Msearch.MultiSearchResult

export type RequestBody = Core_Msearch.RequestItem[]

export interface Response extends ApiResponse {
  body: ResponseBody
}

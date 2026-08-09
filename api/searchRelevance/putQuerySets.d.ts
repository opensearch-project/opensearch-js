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

export interface SearchRelevance_PutQuerySets_Request extends Global.Params {
  body?: SearchRelevance_PutQuerySets_RequestBody;
}

export type SearchRelevance_PutQuerySets_RequestBody = {
  description?: string;
  name?: string;
  querySetQueries?: Record<string, any>[];
  sampling?: string;
}

export interface SearchRelevance_PutQuerySets_Response extends ApiResponse {
  body: SearchRelevance_PutQuerySets_ResponseBody;
}

export type SearchRelevance_PutQuerySets_ResponseBody = {
  query_set_id?: string;
  query_set_result?: string;
}


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

export interface SearchRelevance_PostQuerySets_Request extends Global.Params {
  body?: SearchRelevance_PostQuerySets_RequestBody;
}

export type SearchRelevance_PostQuerySets_RequestBody = {
  description?: string;
  name?: string;
  querySetSize?: number;
  sampling?: string;
}

export interface SearchRelevance_PostQuerySets_Response extends ApiResponse {
  body: SearchRelevance_PostQuerySets_ResponseBody;
}

export type SearchRelevance_PostQuerySets_ResponseBody = {
  query_set_id?: string;
  query_set_result?: string;
}


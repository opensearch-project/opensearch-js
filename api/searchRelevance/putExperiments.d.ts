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

export interface SearchRelevance_PutExperiments_Request extends Global.Params {
  body?: SearchRelevance_PutExperiments_RequestBody;
}

export type SearchRelevance_PutExperiments_RequestBody = {
  judgmentList?: string[];
  querySetId?: string;
  searchConfigurationList?: string[];
  size?: number;
  type?: string;
} | {
  querySetId?: string;
  searchConfigurationList?: string[];
  size?: number;
  type?: string;
}

export interface SearchRelevance_PutExperiments_Response extends ApiResponse {
  body: SearchRelevance_PutExperiments_ResponseBody;
}

export type SearchRelevance_PutExperiments_ResponseBody = Record<string, any>


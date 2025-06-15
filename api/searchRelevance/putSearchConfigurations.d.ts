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

export interface SearchRelevance_PutSearchConfigurations_Request extends Global.Params {
  body?: SearchRelevance_PutSearchConfigurations_RequestBody;
}

export type SearchRelevance_PutSearchConfigurations_RequestBody = {
  index?: string;
  name?: string;
  query?: string;
}

export interface SearchRelevance_PutSearchConfigurations_Response extends ApiResponse {
  body: SearchRelevance_PutSearchConfigurations_ResponseBody;
}

export type SearchRelevance_PutSearchConfigurations_ResponseBody = {
  search_configuration_id?: string;
  search_configuration_result?: string;
}


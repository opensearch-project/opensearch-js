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

export interface SearchRelevance_GetStats_Request extends Global.Params {
  flat_stat_paths?: string;
  include_all_nodes?: string;
  include_individual_nodes?: string;
  include_info?: string;
  include_metadata?: string;
  stat?: string;
}

export interface SearchRelevance_GetStats_Response extends ApiResponse {
  body: SearchRelevance_GetStats_ResponseBody;
}

export type SearchRelevance_GetStats_ResponseBody = Record<string, any>


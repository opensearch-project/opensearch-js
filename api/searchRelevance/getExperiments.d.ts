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
import * as SearchRelevance_Common from '../_types/search_relevance._common'

export interface SearchRelevance_GetExperiments_Request extends Global.Params {
  experiment_id?: string;
}

export interface SearchRelevance_GetExperiments_Response extends ApiResponse {
  body: SearchRelevance_GetExperiments_ResponseBody;
}

export type SearchRelevance_GetExperiments_ResponseBody = SearchRelevance_Common.Experiment | SearchRelevance_Common.GenericObject


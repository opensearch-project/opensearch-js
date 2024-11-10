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
import * as CommonDuration from '../_types/_common___Duration'
import * as Global from '../_types/_global'
import * as SearchPipeline_CommonSearchPipelineStructure from '../_types/search_pipeline._common___SearchPipelineStructure'

export type SearchPipeline_Put_Request = Global.Params & {
  body: SearchPipeline_CommonSearchPipelineStructure.undefined;
  cluster_manager_timeout?: CommonDuration.undefined;
  id: string;
  timeout?: CommonDuration.undefined;
}

export type SearchPipeline_Put_Response = ApiResponse & {
  body: SearchPipeline_Put_ResponseBody;
}

export type SearchPipeline_Put_ResponseBody = {
  acknowledged?: boolean;
}


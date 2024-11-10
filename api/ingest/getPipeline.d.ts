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
import * as CommonId from '../_types/_common___Id'
import * as Global from '../_types/_global'
import * as Ingest_CommonPipeline from '../_types/ingest._common___Pipeline'

export type Ingest_GetPipeline_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  id?: CommonId.undefined;
  master_timeout?: CommonDuration.undefined;
}

export type Ingest_GetPipeline_Response = ApiResponse & {
  body: Ingest_GetPipeline_ResponseBody;
}

export type Ingest_GetPipeline_ResponseBody = Record<string, Ingest_CommonPipeline.undefined>


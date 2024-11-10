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
import * as CommonAcknowledgedResponseBase from '../_types/_common___AcknowledgedResponseBase'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonId from '../_types/_common___Id'
import * as CommonMetadata from '../_types/_common___Metadata'
import * as CommonVersionNumber from '../_types/_common___VersionNumber'
import * as Global from '../_types/_global'
import * as Ingest_CommonProcessorContainer from '../_types/ingest._common___ProcessorContainer'

export type Ingest_PutPipeline_Request = Global.Params & {
  body: Ingest_PutPipeline_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  id: CommonId.undefined;
  master_timeout?: CommonDuration.undefined;
  timeout?: CommonDuration.undefined;
}

export type Ingest_PutPipeline_RequestBody = {
  _meta?: CommonMetadata.undefined;
  description?: string;
  on_failure?: Ingest_CommonProcessorContainer.undefined[];
  processors?: Ingest_CommonProcessorContainer.undefined[];
  version?: CommonVersionNumber.undefined;
}

export type Ingest_PutPipeline_Response = ApiResponse & {
  body: Ingest_PutPipeline_ResponseBody;
}

export type Ingest_PutPipeline_ResponseBody = CommonAcknowledgedResponseBase.undefined


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
import * as CommonId from '../_types/_common___Id'
import * as Global from '../_types/_global'
import * as Ingest_CommonPipeline from '../_types/ingest._common___Pipeline'
import * as Ingest_SimulateDocument from '../_types/ingest.simulate___Document'
import * as Ingest_SimulatePipelineSimulation from '../_types/ingest.simulate___PipelineSimulation'

export type Ingest_Simulate_Request = Global.Params & {
  body: Ingest_Simulate_RequestBody;
  id?: CommonId.undefined;
  verbose?: boolean;
}

export type Ingest_Simulate_RequestBody = {
  docs?: Ingest_SimulateDocument.undefined[];
  pipeline?: Ingest_CommonPipeline.undefined;
}

export type Ingest_Simulate_Response = ApiResponse & {
  body: Ingest_Simulate_ResponseBody;
}

export type Ingest_Simulate_ResponseBody = {
  docs: Ingest_SimulatePipelineSimulation.undefined[];
}


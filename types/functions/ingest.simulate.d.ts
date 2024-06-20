/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

import { ApiResponse } from '../../lib/Transport'
import * as Ingest_Simulate from '../components/ingest.simulate'
import * as Ingest_Common from '../components/ingest._common'
import * as Global from '../components/_global'
import * as Common from '../components/_common'

export interface Ingest_Simulate_RequestBody {
  docs?: Ingest_Simulate.Document[];
  pipeline?: Ingest_Common.Pipeline;
}

export interface Ingest_Simulate_Request extends Global.Params {
  body: Ingest_Simulate_RequestBody;
  id?: Common.Id;
  verbose?: boolean;
}

export interface Ingest_Simulate_ResponseBody {
  docs: Ingest_Simulate.PipelineSimulation[];
}

export interface Ingest_Simulate_Response extends ApiResponse {
  body: Ingest_Simulate_ResponseBody
}

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
import * as Global from '../components/_global'
import * as Common from '../components/_common'
import * as Ingest_Simulate from '../components/ingest.simulate'
import * as Ingest_Common from '../components/ingest._common'

export interface Request extends Global.Params {
  body: RequestBody;
  id?: Common.Id;
  verbose?: boolean;
}

export interface ResponseBody {
  docs: Ingest_Simulate.PipelineSimulation[];
}

export interface RequestBody {
  docs?: Ingest_Simulate.Document[];
  pipeline?: Ingest_Common.Pipeline;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

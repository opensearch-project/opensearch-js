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

export type Ingest_ProcessorGrok_Request = Global.Params & Record<string, any>

export interface Ingest_ProcessorGrok_Response extends ApiResponse {
  body: Ingest_ProcessorGrok_ResponseBody;
}

export interface Ingest_ProcessorGrok_ResponseBody {
  patterns: Record<string, string>;
}


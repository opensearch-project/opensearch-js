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
import * as Common from '../_types/_common'
import * as Global from '../_types/_global'
import * as Ingestion_Common from '../_types/ingestion._common'

export interface Ingestion_GetState_Request extends Global.Params {
  index: string;
  next_token?: string;
  size?: number;
  timeout?: Common.Duration;
}

export interface Ingestion_GetState_Response extends ApiResponse {
  body: Ingestion_GetState_ResponseBody;
}

export type Ingestion_GetState_ResponseBody = Ingestion_Common.GetIngestionStateResponse


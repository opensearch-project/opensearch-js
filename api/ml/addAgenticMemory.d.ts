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
import * as Ml_Common from '../_types/ml._common'

export interface Ml_AddAgenticMemory_Request extends Global.Params {
  body?: Ml_AddAgenticMemory_RequestBody;
  memory_container_id: string;
}

export type Ml_AddAgenticMemory_RequestBody = {
  binary_data?: string;
  infer?: boolean;
  messages?: Ml_Common.Message[];
  metadata?: Ml_Common.Metadata;
  namespace?: Ml_Common.Namespace;
  payload_type?: string;
  structured_data?: Record<string, any>;
  tags?: Record<string, any>;
}

export interface Ml_AddAgenticMemory_Response extends ApiResponse {
  body: Ml_AddAgenticMemory_ResponseBody;
}

export type Ml_AddAgenticMemory_ResponseBody = {
  session_id?: string;
  working_memory_id?: string;
}


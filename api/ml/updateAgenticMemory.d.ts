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
import * as Ml_Common from '../_types/ml._common'

export interface Ml_UpdateAgenticMemory_Request extends Global.Params {
  body?: Ml_UpdateAgenticMemory_RequestBody;
  id: string;
  memory_container_id: string;
  type: Ml_Common.MemoryType;
}

export type Ml_UpdateAgenticMemory_RequestBody = {
  additional_info?: Ml_Common.AdditionalInfo;
  agents?: Record<string, any>;
  binary_data?: Record<string, any>;
  memory?: string;
  messages?: Ml_Common.Message[];
  metadata?: Ml_Common.Metadata;
  structured_data?: Record<string, any>;
  summary?: string;
  tags?: Record<string, any>;
}

export interface Ml_UpdateAgenticMemory_Response extends ApiResponse {
  body: Ml_UpdateAgenticMemory_ResponseBody;
}

export type Ml_UpdateAgenticMemory_ResponseBody = Common.WriteResponseBase


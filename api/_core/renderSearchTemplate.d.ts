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
import * as Common from '../_types/_common'

export interface RenderSearchTemplate_Request extends Global.Params {
  body?: RenderSearchTemplate_RequestBody;
  id?: Common.Id;
}

export interface RenderSearchTemplate_RequestBody {
  file?: string;
  params?: Record<string, Record<string, any>>;
  source?: string;
}

export interface RenderSearchTemplate_Response extends ApiResponse {
  body: RenderSearchTemplate_ResponseBody;
}

export interface RenderSearchTemplate_ResponseBody {
  template_output: Record<string, Record<string, any>>;
}


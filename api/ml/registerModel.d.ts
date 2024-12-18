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

export interface Ml_RegisterModel_Request extends Global.Params {
  body?: Ml_RegisterModel_RequestBody;
}

export type Ml_RegisterModel_RequestBody = {
  description?: string;
  model_format: 'ONNX' | 'TORCH_SCRIPT';
  model_group_id?: string;
  name: string;
  version: string;
}

export interface Ml_RegisterModel_Response extends ApiResponse {
  body: Ml_RegisterModel_ResponseBody;
}

export type Ml_RegisterModel_ResponseBody = {
  status: string;
  task_id: string;
}


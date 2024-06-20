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
import * as Ml_Common from '../components/ml._common'

export interface Ml_RegisterModel_RequestBody {
  description?: string;
  model_format: 'ONNX' | 'TORCH_SCRIPT';
  model_group_id?: string;
  name: string;
  version: string;
}

export interface Ml_RegisterModel_Request extends Global.Params {
  body?: Ml_RegisterModel_RequestBody;
}

export type Ml_RegisterModel_ResponseBody = Ml_Common.Task

export interface Ml_RegisterModel_Response extends ApiResponse {
  body: Ml_RegisterModel_ResponseBody
}

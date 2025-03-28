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
import * as Observability_Common from '../_types/observability._common'

export interface Observability_CreateObject_Request extends Global.Params {
  body?: Observability_Common.ObservabilityObject;
}

export interface Observability_CreateObject_Response extends ApiResponse {
  body: Observability_CreateObject_ResponseBody;
}

export type Observability_CreateObject_ResponseBody = {
  objectId?: string;
}


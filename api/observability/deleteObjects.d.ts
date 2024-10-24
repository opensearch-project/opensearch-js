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

export type Observability_DeleteObjects_Request = Global.Params & {
  objectId?: string;
  objectIdList?: string;
}

export type Observability_DeleteObjects_Response = ApiResponse & {
  body: Observability_DeleteObjects_ResponseBody;
}

export type Observability_DeleteObjects_ResponseBody = {
  deleteResponseList?: Record<string, string>;
}


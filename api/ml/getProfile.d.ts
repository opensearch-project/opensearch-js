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

export interface Ml_GetProfile_Request extends Global.Params {
  body?: Ml_Common.ProfileRequest;
}

export interface Ml_GetProfile_Response extends ApiResponse {
  body: Ml_GetProfile_ResponseBody;
}

export type Ml_GetProfile_ResponseBody = Ml_Common.GetProfileResponse


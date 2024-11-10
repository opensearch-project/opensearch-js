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
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonShardsOperationResponseBase from '../_types/_common___ShardsOperationResponseBase'
import * as Global from '../_types/_global'

export type Indices_Refresh_Request = Global.Params & {
  allow_no_indices?: boolean;
  expand_wildcards?: CommonExpandWildcards.undefined;
  ignore_unavailable?: boolean;
  index?: CommonIndices.undefined;
}

export type Indices_Refresh_Response = ApiResponse & {
  body: Indices_Refresh_ResponseBody;
}

export type Indices_Refresh_ResponseBody = CommonShardsOperationResponseBase.undefined


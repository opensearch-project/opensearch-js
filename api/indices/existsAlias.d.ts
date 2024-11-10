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
import * as CommonNames from '../_types/_common___Names'
import * as Global from '../_types/_global'

export type Indices_ExistsAlias_Request = Global.Params & {
  allow_no_indices?: boolean;
  expand_wildcards?: CommonExpandWildcards.undefined;
  ignore_unavailable?: boolean;
  index?: CommonIndices.undefined;
  local?: boolean;
  name: CommonNames.undefined;
}

export type Indices_ExistsAlias_Response = ApiResponse & {
  body: Indices_ExistsAlias_ResponseBody;
}

export type Indices_ExistsAlias_ResponseBody = Record<string, any>


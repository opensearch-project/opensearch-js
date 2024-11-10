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
import * as Common_QueryDslQueryContainer from '../_types/_common.query_dsl___QueryContainer'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonFields from '../_types/_common___Fields'
import * as CommonIndices from '../_types/_common___Indices'
import * as Core_FieldCapsFieldCapability from '../_types/_core.field_caps___FieldCapability'
import * as Global from '../_types/_global'

export type FieldCaps_Request = Global.Params & {
  allow_no_indices?: boolean;
  body?: FieldCaps_RequestBody;
  expand_wildcards?: CommonExpandWildcards.undefined;
  fields?: CommonFields.undefined;
  ignore_unavailable?: boolean;
  include_unmapped?: boolean;
  index?: CommonIndices.undefined;
}

export type FieldCaps_RequestBody = {
  fields?: CommonFields.undefined;
  index_filter?: Common_QueryDslQueryContainer.undefined;
}

export type FieldCaps_Response = ApiResponse & {
  body: FieldCaps_ResponseBody;
}

export type FieldCaps_ResponseBody = {
  fields: Record<string, Record<string, Core_FieldCapsFieldCapability.undefined>>;
  indices: CommonIndices.undefined;
}


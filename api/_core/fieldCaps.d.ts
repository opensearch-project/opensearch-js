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
import * as Common_QueryDsl from '../_types/_common.query_dsl'
import * as Common_Mapping from '../_types/_common.mapping'
import * as Core_FieldCaps from '../_types/_core.field_caps'

export interface FieldCaps_Request extends Global.Params {
  allow_no_indices?: boolean;
  body?: FieldCaps_RequestBody;
  expand_wildcards?: Common.ExpandWildcards;
  fields?: Common.Fields;
  ignore_unavailable?: boolean;
  include_unmapped?: boolean;
  index?: Common.Indices;
}

export interface FieldCaps_RequestBody {
  fields?: Common.Fields;
  index_filter?: Common_QueryDsl.QueryContainer;
  runtime_mappings?: Common_Mapping.RuntimeFields;
}

export interface FieldCaps_Response extends ApiResponse {
  body: FieldCaps_ResponseBody;
}

export interface FieldCaps_ResponseBody {
  fields: Record<string, Record<string, Core_FieldCaps.FieldCapability>>;
  indices: Common.Indices;
}


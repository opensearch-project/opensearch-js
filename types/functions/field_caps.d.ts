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
import * as Common from '../components/_common'
import * as Core_FieldCaps from '../components/_core.field_caps'
import * as Common_QueryDsl from '../components/_common.query_dsl'
import * as Common_Mapping from '../components/_common.mapping'

export interface Request extends Global.Params {
  allow_no_indices?: boolean;
  body?: RequestBody;
  expand_wildcards?: Common.ExpandWildcards;
  fields?: Common.Fields;
  ignore_unavailable?: boolean;
  include_unmapped?: boolean;
  index?: Common.Indices;
}

export interface ResponseBody {
  fields: Record<string, Record<string, Core_FieldCaps.FieldCapability>>;
  indices: Common.Indices;
}

export interface RequestBody {
  fields?: Common.Fields;
  index_filter?: Common_QueryDsl.QueryContainer;
  runtime_mappings?: Common_Mapping.RuntimeFields;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

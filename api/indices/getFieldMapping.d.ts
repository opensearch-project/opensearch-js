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
import * as CommonFields from '../_types/_common___Fields'
import * as CommonIndices from '../_types/_common___Indices'
import * as Global from '../_types/_global'
import * as Indices_GetFieldMappingTypeFieldMappings from '../_types/indices.get_field_mapping___TypeFieldMappings'

export type Indices_GetFieldMapping_Request = Global.Params & {
  allow_no_indices?: boolean;
  expand_wildcards?: CommonExpandWildcards.undefined;
  fields: CommonFields.undefined;
  ignore_unavailable?: boolean;
  include_defaults?: boolean;
  index?: CommonIndices.undefined;
  local?: boolean;
}

export type Indices_GetFieldMapping_Response = ApiResponse & {
  body: Indices_GetFieldMapping_ResponseBody;
}

export type Indices_GetFieldMapping_ResponseBody = Record<string, Indices_GetFieldMappingTypeFieldMappings.undefined>


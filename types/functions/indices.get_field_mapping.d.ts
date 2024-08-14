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
import * as Indices_GetFieldMapping from '../components/indices.get_field_mapping'

export interface Request extends Global.Params {
  allow_no_indices?: boolean;
  expand_wildcards?: Common.ExpandWildcards;
  fields: Common.Fields;
  ignore_unavailable?: boolean;
  include_defaults?: boolean;
  index?: Common.Indices;
  local?: boolean;
}

export type ResponseBody = Record<string, Indices_GetFieldMapping.TypeFieldMappings>

export interface Response extends ApiResponse {
  body: ResponseBody
}

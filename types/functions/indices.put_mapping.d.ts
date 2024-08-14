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
import * as Common_Mapping from '../components/_common.mapping'

export interface Request extends Global.Params {
  allow_no_indices?: boolean;
  body: RequestBody;
  cluster_manager_timeout?: Common.Duration;
  expand_wildcards?: Common.ExpandWildcards;
  ignore_unavailable?: boolean;
  index: Common.Indices;
  master_timeout?: Common.Duration;
  timeout?: Common.Duration;
  write_index_only?: boolean;
}

export type ResponseBody = Common.IndicesResponseBase

export interface RequestBody {
  _field_names?: Common_Mapping.FieldNamesField;
  _meta?: Common.Metadata;
  _routing?: Common_Mapping.RoutingField;
  _source?: Common_Mapping.SourceField;
  date_detection?: boolean;
  dynamic?: Common_Mapping.DynamicMapping;
  dynamic_date_formats?: string[];
  dynamic_templates?: Record<string, Common_Mapping.DynamicTemplate> | Record<string, Common_Mapping.DynamicTemplate>[];
  numeric_detection?: boolean;
  properties?: Record<string, Common_Mapping.Property>;
  runtime?: Common_Mapping.RuntimeFields;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

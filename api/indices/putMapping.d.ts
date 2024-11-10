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
import * as Common_MappingDynamicMapping from '../_types/_common.mapping___DynamicMapping'
import * as Common_MappingDynamicTemplate from '../_types/_common.mapping___DynamicTemplate'
import * as Common_MappingFieldNamesField from '../_types/_common.mapping___FieldNamesField'
import * as Common_MappingProperty from '../_types/_common.mapping___Property'
import * as Common_MappingRoutingField from '../_types/_common.mapping___RoutingField'
import * as Common_MappingSourceField from '../_types/_common.mapping___SourceField'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonIndicesResponseBase from '../_types/_common___IndicesResponseBase'
import * as CommonMetadata from '../_types/_common___Metadata'
import * as Global from '../_types/_global'

export type Indices_PutMapping_Request = Global.Params & {
  allow_no_indices?: boolean;
  body: Indices_PutMapping_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  expand_wildcards?: CommonExpandWildcards.undefined;
  ignore_unavailable?: boolean;
  index: CommonIndices.undefined;
  master_timeout?: CommonDuration.undefined;
  timeout?: CommonDuration.undefined;
  write_index_only?: boolean;
}

export type Indices_PutMapping_RequestBody = {
  _field_names?: Common_MappingFieldNamesField.undefined;
  _meta?: CommonMetadata.undefined;
  _routing?: Common_MappingRoutingField.undefined;
  _source?: Common_MappingSourceField.undefined;
  date_detection?: boolean;
  dynamic?: Common_MappingDynamicMapping.undefined;
  dynamic_date_formats?: string[];
  dynamic_templates?: Record<string, Common_MappingDynamicTemplate.undefined> | Record<string, Common_MappingDynamicTemplate.undefined>[];
  numeric_detection?: boolean;
  properties?: Record<string, Common_MappingProperty.undefined>;
}

export type Indices_PutMapping_Response = ApiResponse & {
  body: Indices_PutMapping_ResponseBody;
}

export type Indices_PutMapping_ResponseBody = CommonIndicesResponseBase.undefined


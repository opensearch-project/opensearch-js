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
import * as Common_MappingTypeMapping from '../_types/_common.mapping___TypeMapping'
import * as CommonAcknowledgedResponseBase from '../_types/_common___AcknowledgedResponseBase'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonName from '../_types/_common___Name'
import * as CommonVersionNumber from '../_types/_common___VersionNumber'
import * as Global from '../_types/_global'
import * as Indices_CommonAlias from '../_types/indices._common___Alias'

export type Indices_PutTemplate_Request = Global.Params & {
  body: Indices_PutTemplate_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  create?: boolean;
  master_timeout?: CommonDuration.undefined;
  name: CommonName.undefined;
  order?: number;
}

export type Indices_PutTemplate_RequestBody = {
  aliases?: Record<string, Indices_CommonAlias.undefined>;
  index_patterns?: string | string[];
  mappings?: Common_MappingTypeMapping.undefined;
  order?: number;
  settings?: Record<string, Record<string, any>>;
  version?: CommonVersionNumber.undefined;
}

export type Indices_PutTemplate_Response = ApiResponse & {
  body: Indices_PutTemplate_ResponseBody;
}

export type Indices_PutTemplate_ResponseBody = CommonAcknowledgedResponseBase.undefined


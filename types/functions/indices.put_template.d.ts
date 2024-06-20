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
import * as Indices_Common from '../components/indices._common'
import * as Common_Mapping from '../components/_common.mapping'
import * as Common from '../components/_common'
import * as Global from '../components/_global'

export interface Indices_PutTemplate_RequestBody {
  aliases?: Record<string, Indices_Common.Alias>;
  index_patterns?: string | string[];
  mappings?: Common_Mapping.TypeMapping;
  order?: number;
  settings?: Record<string, Record<string, any>>;
  version?: Common.VersionNumber;
}

export interface Indices_PutTemplate_Request extends Global.Params {
  body: Indices_PutTemplate_RequestBody;
  cluster_manager_timeout?: Common.Duration;
  create?: boolean;
  master_timeout?: Common.Duration;
  name: Common.Name;
  order?: number;
}

export type Indices_PutTemplate_ResponseBody = Common.AcknowledgedResponseBase

export interface Indices_PutTemplate_Response extends ApiResponse {
  body: Indices_PutTemplate_ResponseBody
}

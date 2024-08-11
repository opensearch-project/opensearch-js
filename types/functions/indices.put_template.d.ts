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

import * as Global from '../components/_global'
import * as Common from '../components/_common'
import * as Indices_Common from '../components/indices._common'
import * as Common_Mapping from '../components/_common.mapping'

export interface Request extends Global.Params {
  body: RequestBody;
  cluster_manager_timeout?: Common.Duration;
  create?: boolean;
  master_timeout?: Common.Duration;
  name: Common.Name;
  order?: number;
}

export type Response = Common.AcknowledgedResponseBase

export interface RequestBody {
  aliases?: Record<string, Indices_Common.Alias>;
  index_patterns?: string | string[];
  mappings?: Common_Mapping.TypeMapping;
  order?: number;
  settings?: Record<string, Record<string, any>>;
  version?: Common.VersionNumber;
}


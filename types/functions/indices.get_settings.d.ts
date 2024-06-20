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
import * as Indices_Common from '../components/indices._common'

export interface Indices_GetSettings_Request extends Global.Params {
  allow_no_indices?: boolean;
  cluster_manager_timeout?: Common.Duration;
  expand_wildcards?: Common.ExpandWildcards;
  flat_settings?: boolean;
  ignore_unavailable?: boolean;
  include_defaults?: boolean;
  index?: Common.Indices;
  local?: boolean;
  master_timeout?: Common.Duration;
  name?: Common.Names;
}

export type Indices_GetSettings_ResponseBody = Record<string, Indices_Common.IndexState>

export interface Indices_GetSettings_Response extends ApiResponse {
  body: Indices_GetSettings_ResponseBody
}

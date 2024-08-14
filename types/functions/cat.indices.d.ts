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
import * as Cat_Indices from '../components/cat.indices'

export interface Request extends Global.Params {
  bytes?: Common.Bytes;
  cluster_manager_timeout?: Common.Duration;
  expand_wildcards?: Common.ExpandWildcards;
  format?: string;
  h?: string[];
  health?: Common.HealthStatus;
  help?: boolean;
  include_unloaded_segments?: boolean;
  index?: Common.Indices;
  local?: boolean;
  master_timeout?: Common.Duration;
  pri?: boolean;
  s?: string[];
  time?: Common.TimeUnit;
  v?: boolean;
}

export type ResponseBody = Cat_Indices.IndicesRecord[]

export interface Response extends ApiResponse {
  body: ResponseBody
}

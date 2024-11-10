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
import * as Cat_IndicesIndicesRecord from '../_types/cat.indices___IndicesRecord'
import * as CommonByteUnit from '../_types/_common___ByteUnit'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonHealthStatus from '../_types/_common___HealthStatus'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonTimeUnit from '../_types/_common___TimeUnit'
import * as Global from '../_types/_global'

export type Cat_Indices_Request = Global.Params & {
  bytes?: CommonByteUnit.undefined;
  cluster_manager_timeout?: CommonDuration.undefined;
  expand_wildcards?: CommonExpandWildcards.undefined;
  format?: string;
  h?: string[];
  health?: CommonHealthStatus.undefined;
  help?: boolean;
  include_unloaded_segments?: boolean;
  index?: CommonIndices.undefined;
  local?: boolean;
  master_timeout?: CommonDuration.undefined;
  pri?: boolean;
  s?: string[];
  time?: CommonTimeUnit.undefined;
  v?: boolean;
}

export type Cat_Indices_Response = ApiResponse & {
  body: Cat_Indices_ResponseBody;
}

export type Cat_Indices_ResponseBody = Cat_IndicesIndicesRecord.undefined[]


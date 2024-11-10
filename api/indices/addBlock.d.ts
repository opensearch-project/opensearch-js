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
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonIndices from '../_types/_common___Indices'
import * as Global from '../_types/_global'
import * as Indices_AddBlockIndicesBlockOptions from '../_types/indices.add_block___IndicesBlockOptions'
import * as Indices_AddBlockIndicesBlockStatus from '../_types/indices.add_block___IndicesBlockStatus'

export type Indices_AddBlock_Request = Global.Params & {
  allow_no_indices?: boolean;
  block: Indices_AddBlockIndicesBlockOptions.undefined;
  cluster_manager_timeout?: CommonDuration.undefined;
  expand_wildcards?: CommonExpandWildcards.undefined;
  ignore_unavailable?: boolean;
  index: CommonIndices.undefined;
  master_timeout?: CommonDuration.undefined;
  timeout?: CommonDuration.undefined;
}

export type Indices_AddBlock_Response = ApiResponse & {
  body: Indices_AddBlock_ResponseBody;
}

export type Indices_AddBlock_ResponseBody = {
  acknowledged: boolean;
  indices: Indices_AddBlockIndicesBlockStatus.undefined[];
  shards_acknowledged: boolean;
}


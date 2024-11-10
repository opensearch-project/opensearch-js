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
import * as Common_QueryDslQueryContainer from '../_types/_common.query_dsl___QueryContainer'
import * as CommonAcknowledgedResponseBase from '../_types/_common___AcknowledgedResponseBase'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonName from '../_types/_common___Name'
import * as CommonRouting from '../_types/_common___Routing'
import * as Global from '../_types/_global'

export type Indices_PutAlias_Request = Global.Params & {
  body?: Indices_PutAlias_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  index?: CommonIndices.undefined;
  master_timeout?: CommonDuration.undefined;
  name?: CommonName.undefined;
  timeout?: CommonDuration.undefined;
}

export type Indices_PutAlias_RequestBody = {
  alias?: string;
  filter?: Common_QueryDslQueryContainer.undefined;
  index?: string;
  index_routing?: CommonRouting.undefined;
  is_hidden?: boolean;
  is_write_index?: boolean;
  routing?: CommonRouting.undefined;
  search_routing?: CommonRouting.undefined;
}

export type Indices_PutAlias_Response = ApiResponse & {
  body: Indices_PutAlias_ResponseBody;
}

export type Indices_PutAlias_ResponseBody = CommonAcknowledgedResponseBase.undefined


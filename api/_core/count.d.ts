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
import * as Common_QueryDslOperator from '../_types/_common.query_dsl___Operator'
import * as Common_QueryDslQueryContainer from '../_types/_common.query_dsl___QueryContainer'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as CommonShardStatistics from '../_types/_common___ShardStatistics'
import * as Global from '../_types/_global'

export type Count_Request = Global.Params & {
  allow_no_indices?: boolean;
  analyze_wildcard?: boolean;
  analyzer?: string;
  body?: Count_RequestBody;
  default_operator?: Common_QueryDslOperator.undefined;
  df?: string;
  expand_wildcards?: CommonExpandWildcards.undefined;
  ignore_throttled?: boolean;
  ignore_unavailable?: boolean;
  index?: CommonIndices.undefined;
  lenient?: boolean;
  min_score?: number;
  preference?: string;
  q?: string;
  routing?: CommonRoutingInQueryString.undefined;
  terminate_after?: number;
}

export type Count_RequestBody = {
  query?: Common_QueryDslQueryContainer.undefined;
}

export type Count_Response = ApiResponse & {
  body: Count_ResponseBody;
}

export type Count_ResponseBody = {
  _shards: CommonShardStatistics.undefined;
  count: number;
  terminated_early?: boolean;
}


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
import * as Global from '../_types/_global'
import * as Common_QueryDsl from '../_types/_common.query_dsl'
import * as Common from '../_types/_common'

export interface Count_Request extends Global.Params {
  allow_no_indices?: boolean;
  analyze_wildcard?: boolean;
  analyzer?: string;
  body?: Count_RequestBody;
  default_operator?: Common_QueryDsl.Operator;
  df?: string;
  expand_wildcards?: Common.ExpandWildcards;
  ignore_throttled?: boolean;
  ignore_unavailable?: boolean;
  index?: Common.Indices;
  lenient?: boolean;
  min_score?: number;
  preference?: string;
  q?: string;
  routing?: Common.Routing;
  terminate_after?: number;
}

export interface Count_RequestBody {
  query?: Common_QueryDsl.QueryContainer;
}

export interface Count_Response extends ApiResponse {
  body: Count_ResponseBody;
}

export interface Count_ResponseBody {
  _shards: Common.ShardStatistics;
  count: number;
}


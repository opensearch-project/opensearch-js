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
import * as Common_QueryDsl from '../components/_common.query_dsl'
import * as Common from '../components/_common'

export interface Request extends Global.Params {
  allow_no_indices?: boolean;
  analyze_wildcard?: boolean;
  analyzer?: string;
  body?: RequestBody;
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

export interface ResponseBody {
  _shards: Common.ShardStatistics;
  count: number;
}

export interface RequestBody {
  query?: Common_QueryDsl.QueryContainer;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

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
import * as Common from '../_types/_common'
import * as Common_QueryDsl from '../_types/_common.query_dsl'
import * as Global from '../_types/_global'

export type DeleteByQuery_Request = Global.Params & {
  _source?: string[];
  _source_excludes?: string[];
  _source_includes?: string[];
  allow_no_indices?: boolean;
  analyze_wildcard?: boolean;
  analyzer?: string;
  body: DeleteByQuery_RequestBody;
  conflicts?: Common.Conflicts;
  default_operator?: Common_QueryDsl.Operator;
  df?: string;
  expand_wildcards?: Common.ExpandWildcards;
  from?: number;
  ignore_unavailable?: boolean;
  index: Common.Indices;
  lenient?: boolean;
  max_docs?: number;
  preference?: string;
  q?: string;
  refresh?: boolean;
  request_cache?: boolean;
  requests_per_second?: number;
  routing?: Common.RoutingInQueryString;
  scroll?: Common.Duration;
  scroll_size?: number;
  search_timeout?: Common.Duration;
  search_type?: Common.SearchType;
  size?: number;
  slices?: Common.Slices;
  sort?: string[];
  stats?: string[];
  terminate_after?: number;
  timeout?: Common.Duration;
  version?: boolean;
  wait_for_active_shards?: Common.WaitForActiveShards;
  wait_for_completion?: boolean;
}

export type DeleteByQuery_RequestBody = {
  max_docs?: number;
  query?: Common_QueryDsl.QueryContainer;
  slice?: Common.SlicedScroll;
}

export type DeleteByQuery_Response = ApiResponse & {
  body: DeleteByQuery_ResponseBody;
}

export type DeleteByQuery_ResponseBody = Common.BulkByScrollResponseBase | {
  task?: Common.TaskId;
}


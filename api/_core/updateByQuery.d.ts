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
import * as CommonBulkByScrollResponseBase from '../_types/_common___BulkByScrollResponseBase'
import * as CommonConflicts from '../_types/_common___Conflicts'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as CommonScript from '../_types/_common___Script'
import * as CommonSearchType from '../_types/_common___SearchType'
import * as CommonSlicedScroll from '../_types/_common___SlicedScroll'
import * as CommonSlices from '../_types/_common___Slices'
import * as CommonTaskId from '../_types/_common___TaskId'
import * as CommonWaitForActiveShards from '../_types/_common___WaitForActiveShards'
import * as Global from '../_types/_global'

export type UpdateByQuery_Request = Global.Params & {
  _source?: string[];
  _source_excludes?: string[];
  _source_includes?: string[];
  allow_no_indices?: boolean;
  analyze_wildcard?: boolean;
  analyzer?: string;
  body?: UpdateByQuery_RequestBody;
  conflicts?: CommonConflicts.undefined;
  default_operator?: Common_QueryDslOperator.undefined;
  df?: string;
  expand_wildcards?: CommonExpandWildcards.undefined;
  from?: number;
  ignore_unavailable?: boolean;
  index: CommonIndices.undefined;
  lenient?: boolean;
  max_docs?: number;
  pipeline?: string;
  preference?: string;
  q?: string;
  refresh?: boolean;
  request_cache?: boolean;
  requests_per_second?: number;
  routing?: CommonRoutingInQueryString.undefined;
  scroll?: CommonDuration.undefined;
  scroll_size?: number;
  search_timeout?: CommonDuration.undefined;
  search_type?: CommonSearchType.undefined;
  size?: number;
  slices?: CommonSlices.undefined;
  sort?: string[];
  stats?: string[];
  terminate_after?: number;
  timeout?: CommonDuration.undefined;
  version?: boolean;
  wait_for_active_shards?: CommonWaitForActiveShards.undefined;
  wait_for_completion?: boolean;
}

export type UpdateByQuery_RequestBody = {
  conflicts?: CommonConflicts.undefined;
  max_docs?: number;
  query?: Common_QueryDslQueryContainer.undefined;
  script?: CommonScript.undefined;
  slice?: CommonSlicedScroll.undefined;
}

export type UpdateByQuery_Response = ApiResponse & {
  body: UpdateByQuery_ResponseBody;
}

export type UpdateByQuery_ResponseBody = CommonBulkByScrollResponseBase.undefined | {
  task?: CommonTaskId.undefined;
}


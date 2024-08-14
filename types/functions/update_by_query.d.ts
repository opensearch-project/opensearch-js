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
import * as Common_QueryDsl from '../components/_common.query_dsl'

export interface Request extends Global.Params {
  _source?: string[];
  _source_excludes?: string[];
  _source_includes?: string[];
  allow_no_indices?: boolean;
  analyze_wildcard?: boolean;
  analyzer?: string;
  body?: RequestBody;
  conflicts?: Common.Conflicts;
  default_operator?: Common_QueryDsl.Operator;
  df?: string;
  expand_wildcards?: Common.ExpandWildcards;
  from?: number;
  ignore_unavailable?: boolean;
  index: Common.Indices;
  lenient?: boolean;
  max_docs?: number;
  pipeline?: string;
  preference?: string;
  q?: string;
  refresh?: boolean;
  request_cache?: boolean;
  requests_per_second?: number;
  routing?: Common.Routing;
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

export interface ResponseBody {
  batches?: number;
  deleted?: number;
  failures?: Common.BulkIndexByScrollFailure[];
  noops?: number;
  requests_per_second?: number;
  retries?: Common.Retries;
  task?: Common.TaskId;
  throttled?: Common.Duration;
  throttled_millis?: Common.DurationValueUnitMillis;
  throttled_until?: Common.Duration;
  throttled_until_millis?: Common.DurationValueUnitMillis;
  timed_out?: boolean;
  took?: Common.DurationValueUnitMillis;
  total?: number;
  updated?: number;
  version_conflicts?: number;
}

export interface RequestBody {
  conflicts?: Common.Conflicts;
  max_docs?: number;
  query?: Common_QueryDsl.QueryContainer;
  script?: Common.Script;
  slice?: Common.SlicedScroll;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

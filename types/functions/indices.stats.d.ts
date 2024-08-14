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
import * as Indices_Stats from '../components/indices.stats'

export interface Request extends Global.Params {
  completion_fields?: Common.Fields;
  expand_wildcards?: Common.ExpandWildcards;
  fielddata_fields?: Common.Fields;
  fields?: Common.Fields;
  forbid_closed_indices?: boolean;
  groups?: string | string[];
  include_segment_file_sizes?: boolean;
  include_unloaded_segments?: boolean;
  index?: Common.Indices;
  level?: Common.Level;
  metric?: Common.Metrics;
}

export interface ResponseBody {
  _all: Indices_Stats.IndicesStats;
  _shards: Common.ShardStatistics;
  indices?: Record<string, Indices_Stats.IndicesStats>;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

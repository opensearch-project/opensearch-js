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
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonFields from '../_types/_common___Fields'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonLevel from '../_types/_common___Level'
import * as CommonShardStatistics from '../_types/_common___ShardStatistics'
import * as Global from '../_types/_global'
import * as Indices_StatsAllIndicesStats from '../_types/indices.stats___AllIndicesStats'
import * as Indices_StatsIndicesStats from '../_types/indices.stats___IndicesStats'
import * as Indices_StatsMetric from '../_types/indices.stats___Metric'

export type Indices_Stats_Request = Global.Params & {
  completion_fields?: CommonFields.undefined;
  expand_wildcards?: CommonExpandWildcards.undefined;
  fielddata_fields?: CommonFields.undefined;
  fields?: CommonFields.undefined;
  forbid_closed_indices?: boolean;
  groups?: string | string[];
  include_segment_file_sizes?: boolean;
  include_unloaded_segments?: boolean;
  index?: CommonIndices.undefined;
  level?: CommonLevel.undefined;
  metric?: Indices_StatsMetric.undefined | Indices_StatsMetric.undefined[];
}

export type Indices_Stats_Response = ApiResponse & {
  body: Indices_Stats_ResponseBody;
}

export type Indices_Stats_ResponseBody = {
  _all: Indices_StatsAllIndicesStats.undefined;
  _shards: CommonShardStatistics.undefined;
  indices?: Record<string, Indices_StatsIndicesStats.undefined>;
}


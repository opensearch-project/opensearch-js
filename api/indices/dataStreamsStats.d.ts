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
import * as CommonByteCount from '../_types/_common___ByteCount'
import * as CommonHumanReadableByteCount from '../_types/_common___HumanReadableByteCount'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonShardStatistics from '../_types/_common___ShardStatistics'
import * as Global from '../_types/_global'
import * as Indices_DataStreamsStatsDataStreamsStatsItem from '../_types/indices.data_streams_stats___DataStreamsStatsItem'

export type Indices_DataStreamsStats_Request = Global.Params & {
  name?: CommonIndices.undefined;
}

export type Indices_DataStreamsStats_Response = ApiResponse & {
  body: Indices_DataStreamsStats_ResponseBody;
}

export type Indices_DataStreamsStats_ResponseBody = {
  _shards: CommonShardStatistics.undefined;
  backing_indices: number;
  data_stream_count: number;
  data_streams: Indices_DataStreamsStatsDataStreamsStatsItem.undefined[];
  total_store_size_bytes: CommonByteCount.undefined;
  total_store_sizes?: CommonHumanReadableByteCount.undefined;
}


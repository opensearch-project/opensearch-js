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
import * as Indices_DataStreamsStats from '../components/indices.data_streams_stats'

export interface Request extends Global.Params {
  name?: Common.Indices;
}

export interface ResponseBody {
  _shards: Common.ShardStatistics;
  backing_indices: number;
  data_stream_count: number;
  data_streams: Indices_DataStreamsStats.DataStreamsStatsItem[];
  total_store_size_bytes: number;
  total_store_sizes?: Common.ByteSize;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

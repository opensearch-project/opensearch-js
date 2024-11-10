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
import * as CommonDuration from '../_types/_common___Duration'
import * as Global from '../_types/_global'

export type Knn_Stats_Request = Global.Params & {
  node_id?: string[];
  stat?: 'cache_capacity_reached' | 'circuit_breaker_triggered' | 'eviction_count' | 'faiss_initialized' | 'graph_index_errors' | 'graph_index_requests' | 'graph_memory_usage' | 'graph_memory_usage_percentage' | 'graph_query_errors' | 'graph_query_requests' | 'hit_count' | 'indexing_from_model_degraded' | 'indices_in_cache' | 'knn_query_requests' | 'load_exception_count' | 'load_success_count' | 'miss_count' | 'model_index_status' | 'nmslib_initialized' | 'script_compilation_errors' | 'script_compilations' | 'script_query_errors' | 'script_query_requests' | 'total_load_time' | 'training_errors' | 'training_memory_usage' | 'training_memory_usage_percentage' | 'training_requests'[];
  timeout?: CommonDuration.undefined;
}

export type Knn_Stats_Response = ApiResponse & {
  body: Knn_Stats_ResponseBody;
}

export type Knn_Stats_ResponseBody = Record<string, any>


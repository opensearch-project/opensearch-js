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
import * as Global from '../_types/_global'
import * as Neural_Common from '../_types/neural._common'

export interface Neural_Stats_Request extends Global.Params {
  flat_stat_paths?: boolean;
  include_all_nodes?: boolean;
  include_individual_nodes?: boolean;
  include_info?: boolean;
  include_metadata?: boolean;
  node_id?: string;
  stat?: 'cluster_version' | 'comb_arithmetic_executions' | 'comb_arithmetic_processors' | 'comb_geometric_executions' | 'comb_geometric_processors' | 'comb_harmonic_executions' | 'comb_harmonic_processors' | 'comb_rrf_executions' | 'comb_rrf_processors' | 'hybrid_query_requests' | 'hybrid_query_with_filter_requests' | 'hybrid_query_with_inner_hits_requests' | 'hybrid_query_with_pagination_requests' | 'neural_query_against_knn_requests' | 'neural_query_against_semantic_dense_requests' | 'neural_query_against_semantic_sparse_requests' | 'neural_query_enricher_executions' | 'neural_query_enricher_processors' | 'neural_query_requests' | 'neural_sparse_query_requests' | 'neural_sparse_two_phase_executions' | 'neural_sparse_two_phase_processors' | 'norm_l2_executions' | 'norm_l2_processors' | 'norm_minmax_executions' | 'norm_minmax_processors' | 'norm_zscore_executions' | 'norm_zscore_processors' | 'normalization_processor_executions' | 'normalization_processors' | 'rank_based_normalization_processor_executions' | 'rank_based_normalization_processors' | 'rerank_by_field_executions' | 'rerank_by_field_processors' | 'rerank_ml_executions' | 'rerank_ml_processors' | 'semantic_field_chunking_executions' | 'semantic_field_executions' | 'semantic_highlighting_request_count' | 'skip_existing_executions' | 'skip_existing_processors' | 'sparse_encoding_executions' | 'sparse_encoding_processors' | 'text_chunking_delimiter_executions' | 'text_chunking_delimiter_processors' | 'text_chunking_executions' | 'text_chunking_fixed_char_length_executions' | 'text_chunking_fixed_char_length_processors' | 'text_chunking_fixed_token_length_executions' | 'text_chunking_fixed_token_length_processors' | 'text_chunking_processors' | 'text_embedding_executions' | 'text_embedding_processors_in_pipelines' | 'text_image_embedding_executions' | 'text_image_embedding_processors';
}

export interface Neural_Stats_Response extends ApiResponse {
  body: Neural_Stats_ResponseBody;
}

export type Neural_Stats_ResponseBody = Neural_Common.NeuralStats


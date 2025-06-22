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

import * as Nodes_Common from './nodes._common'

export type FlatNeuralInfoStats = {
  cluster_version?: InfoStringStat;
  'processors.ingest.skip_existing_processors'?: InfoCounterStat;
  'processors.ingest.sparse_encoding_processors'?: InfoCounterStat;
  'processors.ingest.text_chunking_delimiter_processors'?: InfoCounterStat;
  'processors.ingest.text_chunking_fixed_char_length_processors'?: InfoCounterStat;
  'processors.ingest.text_chunking_fixed_token_length_processors'?: InfoCounterStat;
  'processors.ingest.text_chunking_processors'?: InfoCounterStat;
  'processors.ingest.text_embedding_processors_in_pipelines'?: InfoCounterStat;
  'processors.ingest.text_image_embedding_processors'?: InfoCounterStat;
  'processors.search.hybrid.comb_arithmetic_processors'?: InfoCounterStat;
  'processors.search.hybrid.comb_geometric_processors'?: InfoCounterStat;
  'processors.search.hybrid.comb_harmonic_processors'?: InfoCounterStat;
  'processors.search.hybrid.comb_rrf_processors'?: InfoCounterStat;
  'processors.search.hybrid.norm_l2_processors'?: InfoCounterStat;
  'processors.search.hybrid.norm_minmax_processors'?: InfoCounterStat;
  'processors.search.hybrid.norm_zscore_processors'?: InfoCounterStat;
  'processors.search.hybrid.normalization_processors'?: InfoCounterStat;
  'processors.search.hybrid.rank_based_normalization_processors'?: InfoCounterStat;
  'processors.search.neural_query_enricher_processors'?: InfoCounterStat;
  'processors.search.neural_sparse_two_phase_processors'?: InfoCounterStat;
  'processors.search.rerank_by_field_processors'?: InfoCounterStat;
  'processors.search.rerank_ml_processors'?: InfoCounterStat;
}

export type FlatNeuralNodeStats = {
  'processors.ingest.semantic_field_chunking_executions'?: TimestampedEventCounterStat;
  'processors.ingest.semantic_field_executions'?: TimestampedEventCounterStat;
  'processors.ingest.skip_existing_executions'?: TimestampedEventCounterStat;
  'processors.ingest.sparse_encoding_executions'?: TimestampedEventCounterStat;
  'processors.ingest.text_chunking_delimiter_executions'?: TimestampedEventCounterStat;
  'processors.ingest.text_chunking_executions'?: TimestampedEventCounterStat;
  'processors.ingest.text_chunking_fixed_char_length_executions'?: TimestampedEventCounterStat;
  'processors.ingest.text_chunking_fixed_token_length_executions'?: TimestampedEventCounterStat;
  'processors.ingest.text_embedding_executions'?: TimestampedEventCounterStat;
  'processors.ingest.text_image_embedding_executions'?: TimestampedEventCounterStat;
  'processors.search.hybrid.comb_arithmetic_executions'?: TimestampedEventCounterStat;
  'processors.search.hybrid.comb_geometric_executions'?: TimestampedEventCounterStat;
  'processors.search.hybrid.comb_harmonic_executions'?: TimestampedEventCounterStat;
  'processors.search.hybrid.comb_rrf_executions'?: TimestampedEventCounterStat;
  'processors.search.hybrid.norm_l2_executions'?: TimestampedEventCounterStat;
  'processors.search.hybrid.norm_minmax_executions'?: TimestampedEventCounterStat;
  'processors.search.hybrid.norm_zscore_executions'?: TimestampedEventCounterStat;
  'processors.search.hybrid.normalization_processor_executions'?: TimestampedEventCounterStat;
  'processors.search.hybrid.rank_based_normalization_processor_executions'?: TimestampedEventCounterStat;
  'processors.search.neural_query_enricher_executions'?: TimestampedEventCounterStat;
  'processors.search.neural_sparse_two_phase_executions'?: TimestampedEventCounterStat;
  'processors.search.rerank_by_field_executions'?: TimestampedEventCounterStat;
  'processors.search.rerank_ml_executions'?: TimestampedEventCounterStat;
  'query.hybrid.hybrid_query_requests'?: TimestampedEventCounterStat;
  'query.hybrid.hybrid_query_with_filter_requests'?: TimestampedEventCounterStat;
  'query.hybrid.hybrid_query_with_inner_hits_requests'?: TimestampedEventCounterStat;
  'query.hybrid.hybrid_query_with_pagination_requests'?: TimestampedEventCounterStat;
  'query.neural_sparse.neural_sparse_query_requests'?: TimestampedEventCounterStat;
  'query.neural.neural_query_against_knn_requests'?: TimestampedEventCounterStat;
  'query.neural.neural_query_against_semantic_dense_requests'?: TimestampedEventCounterStat;
  'query.neural.neural_query_against_semantic_sparse_requests'?: TimestampedEventCounterStat;
  'query.neural.neural_query_requests'?: TimestampedEventCounterStat;
  'semantic_highlighting.semantic_highlighting_request_count'?: TimestampedEventCounterStat;
}

export type FlatNeuralStats = Nodes_Common.NodesResponseBase & {
  all_nodes?: FlatNeuralNodeStats;
  cluster_name?: string;
  info?: FlatNeuralInfoStats;
  nodes?: Record<string, FlatNeuralNodeStats>;
}

export type InfoCounterStat = number | (StatMetadata & {
  stat_type?: 'info_counter';
})

export type InfoStringStat = string | (StatMetadata & {
  stat_type?: 'info_string';
})

export type NestedNeuralInfoStats = {
  cluster_version?: InfoStringStat;
  processors?: NestedNeuralInfoStatsProcessors;
}

export type NestedNeuralInfoStatsProcessors = {
  ingest?: NestedNeuralInfoStatsProcessorsIngest;
  search?: NestedNeuralInfoStatsProcessorsSearch;
}

export type NestedNeuralInfoStatsProcessorsIngest = {
  skip_existing_processors?: InfoCounterStat;
  sparse_encoding_processors?: InfoCounterStat;
  text_chunking_delimiter_processors?: InfoCounterStat;
  text_chunking_fixed_char_length_processors?: InfoCounterStat;
  text_chunking_fixed_token_length_processors?: InfoCounterStat;
  text_chunking_processors?: InfoCounterStat;
  text_embedding_processors_in_pipelines?: InfoCounterStat;
  text_image_embedding_processors?: InfoCounterStat;
}

export type NestedNeuralInfoStatsProcessorsSearch = {
  hybrid?: NestedNeuralInfoStatsProcessorsSearchHybrid;
  neural_query_enricher_processors?: InfoCounterStat;
  neural_sparse_two_phase_processors?: InfoCounterStat;
  rerank_by_field_processors?: InfoCounterStat;
  rerank_ml_processors?: InfoCounterStat;
}

export type NestedNeuralInfoStatsProcessorsSearchHybrid = {
  comb_arithmetic_processors?: InfoCounterStat;
  comb_geometric_processors?: InfoCounterStat;
  comb_harmonic_processors?: InfoCounterStat;
  comb_rrf_processors?: InfoCounterStat;
  norm_l2_processors?: InfoCounterStat;
  norm_minmax_processors?: InfoCounterStat;
  norm_zscore_processors?: InfoCounterStat;
  normalization_processors?: InfoCounterStat;
  rank_based_normalization_processors?: InfoCounterStat;
}

export type NestedNeuralNodeStats = {
  processors?: NestedNeuralNodeStatsProcessors;
  query?: NestedNeuralNodeStatsQuery;
  semantic_highlighting?: NestedNeuralNodeStatsSemanticHighlighting;
}

export type NestedNeuralNodeStatsProcessors = {
  ingest?: NestedNeuralNodeStatsProcessorsIngest;
  search?: NestedNeuralNodeStatsProcessorsSearch;
}

export type NestedNeuralNodeStatsProcessorsIngest = {
  semantic_field_chunking_executions?: TimestampedEventCounterStat;
  semantic_field_executions?: TimestampedEventCounterStat;
  skip_existing_executions?: TimestampedEventCounterStat;
  sparse_encoding_executions?: TimestampedEventCounterStat;
  text_chunking_delimiter_executions?: TimestampedEventCounterStat;
  text_chunking_executions?: TimestampedEventCounterStat;
  text_chunking_fixed_char_length_executions?: TimestampedEventCounterStat;
  text_chunking_fixed_token_length_executions?: TimestampedEventCounterStat;
  text_embedding_executions?: TimestampedEventCounterStat;
  text_image_embedding_executions?: TimestampedEventCounterStat;
}

export type NestedNeuralNodeStatsProcessorsSearch = {
  hybrid?: NestedNeuralNodeStatsProcessorsSearchHybrid;
  neural_query_enricher_executions?: TimestampedEventCounterStat;
  neural_sparse_two_phase_executions?: TimestampedEventCounterStat;
  rerank_by_field_executions?: TimestampedEventCounterStat;
  rerank_ml_executions?: TimestampedEventCounterStat;
}

export type NestedNeuralNodeStatsProcessorsSearchHybrid = {
  comb_arithmetic_executions?: TimestampedEventCounterStat;
  comb_geometric_executions?: TimestampedEventCounterStat;
  comb_harmonic_executions?: TimestampedEventCounterStat;
  comb_rrf_executions?: TimestampedEventCounterStat;
  norm_l2_executions?: TimestampedEventCounterStat;
  norm_minmax_executions?: TimestampedEventCounterStat;
  norm_zscore_executions?: TimestampedEventCounterStat;
  normalization_processor_executions?: TimestampedEventCounterStat;
  rank_based_normalization_processor_executions?: TimestampedEventCounterStat;
}

export type NestedNeuralNodeStatsQuery = {
  hybrid?: NestedNeuralNodeStatsQueryHybrid;
  neural?: NestedNeuralNodeStatsQueryNeural;
  neural_sparse?: NestedNeuralNodeStatsQueryNeuralSparse;
}

export type NestedNeuralNodeStatsQueryHybrid = {
  hybrid_query_requests?: TimestampedEventCounterStat;
  hybrid_query_with_filter_requests?: TimestampedEventCounterStat;
  hybrid_query_with_inner_hits_requests?: TimestampedEventCounterStat;
  hybrid_query_with_pagination_requests?: TimestampedEventCounterStat;
}

export type NestedNeuralNodeStatsQueryNeural = {
  neural_query_against_knn_requests?: TimestampedEventCounterStat;
  neural_query_against_semantic_dense_requests?: TimestampedEventCounterStat;
  neural_query_against_semantic_sparse_requests?: TimestampedEventCounterStat;
  neural_query_requests?: TimestampedEventCounterStat;
}

export type NestedNeuralNodeStatsQueryNeuralSparse = {
  neural_sparse_query_requests?: TimestampedEventCounterStat;
}

export type NestedNeuralNodeStatsSemanticHighlighting = {
  semantic_highlighting_request_count?: TimestampedEventCounterStat;
}

export type NestedNeuralStats = Nodes_Common.NodesResponseBase & {
  all_nodes?: NestedNeuralNodeStats;
  cluster_name?: string;
  info?: NestedNeuralInfoStats;
  nodes?: Record<string, NestedNeuralNodeStats>;
}

export type NeuralStats = NestedNeuralStats | FlatNeuralStats

export type StatMetadata = {
  stat_type: 'info_counter' | 'info_string' | 'timestamped_event_counter';
  value: number | string;
}

export type TimestampedEventCounterStat = number | (StatMetadata & {
  minutes_since_last_event?: number;
  stat_type?: 'timestamped_event_counter';
  trailing_interval_value?: number;
})


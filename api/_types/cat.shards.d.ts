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


export interface ShardsRecord {
  'bulk.avg_size_in_bytes'?: string;
  'bulk.avg_time'?: string;
  'bulk.total_operations'?: string;
  'bulk.total_size_in_bytes'?: string;
  'bulk.total_time'?: string;
  'completion.size'?: string;
  docs?: undefined | string;
  'fielddata.evictions'?: string;
  'fielddata.memory_size'?: string;
  'flush.total'?: string;
  'flush.total_time'?: string;
  'get.current'?: string;
  'get.exists_time'?: string;
  'get.exists_total'?: string;
  'get.missing_time'?: string;
  'get.missing_total'?: string;
  'get.time'?: string;
  'get.total'?: string;
  id?: string;
  index?: string;
  'indexing.delete_current'?: string;
  'indexing.delete_time'?: string;
  'indexing.delete_total'?: string;
  'indexing.index_current'?: string;
  'indexing.index_failed'?: string;
  'indexing.index_time'?: string;
  'indexing.index_total'?: string;
  ip?: undefined | string;
  'merges.current'?: string;
  'merges.current_docs'?: string;
  'merges.current_size'?: string;
  'merges.total'?: string;
  'merges.total_docs'?: string;
  'merges.total_size'?: string;
  'merges.total_time'?: string;
  node?: undefined | string;
  'path.data'?: string;
  'path.state'?: string;
  prirep?: string;
  'query_cache.evictions'?: string;
  'query_cache.memory_size'?: string;
  'recoverysource.type'?: string;
  'refresh.external_time'?: string;
  'refresh.external_total'?: string;
  'refresh.listeners'?: string;
  'refresh.time'?: string;
  'refresh.total'?: string;
  'search.fetch_current'?: string;
  'search.fetch_time'?: string;
  'search.fetch_total'?: string;
  'search.open_contexts'?: string;
  'search.query_current'?: string;
  'search.query_time'?: string;
  'search.query_total'?: string;
  'search.scroll_current'?: string;
  'search.scroll_time'?: string;
  'search.scroll_total'?: string;
  'segments.count'?: string;
  'segments.fixed_bitset_memory'?: string;
  'segments.index_writer_memory'?: string;
  'segments.memory'?: string;
  'segments.version_map_memory'?: string;
  'seq_no.global_checkpoint'?: string;
  'seq_no.local_checkpoint'?: string;
  'seq_no.max'?: string;
  shard?: string;
  state?: string;
  store?: undefined | string;
  sync_id?: string;
  'unassigned.at'?: string;
  'unassigned.details'?: string;
  'unassigned.for'?: string;
  'unassigned.reason'?: string;
  'warmer.current'?: string;
  'warmer.total'?: string;
  'warmer.total_time'?: string;
}


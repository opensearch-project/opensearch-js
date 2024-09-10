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


export interface IndicesRecord {
  'bulk.avg_size_in_bytes'?: string;
  'bulk.avg_time'?: string;
  'bulk.total_operations'?: string;
  'bulk.total_size_in_bytes'?: string;
  'bulk.total_time'?: string;
  'completion.size'?: string;
  'creation.date'?: string;
  'creation.date.string'?: string;
  'docs.count'?: undefined | string;
  'docs.deleted'?: undefined | string;
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
  health?: string;
  index?: string;
  'indexing.delete_current'?: string;
  'indexing.delete_time'?: string;
  'indexing.delete_total'?: string;
  'indexing.index_current'?: string;
  'indexing.index_failed'?: string;
  'indexing.index_time'?: string;
  'indexing.index_total'?: string;
  'memory.total'?: string;
  'merges.current'?: string;
  'merges.current_docs'?: string;
  'merges.current_size'?: string;
  'merges.total'?: string;
  'merges.total_docs'?: string;
  'merges.total_size'?: string;
  'merges.total_time'?: string;
  pri?: string;
  'pri.bulk.avg_size_in_bytes'?: string;
  'pri.bulk.avg_time'?: string;
  'pri.bulk.total_operations'?: string;
  'pri.bulk.total_size_in_bytes'?: string;
  'pri.bulk.total_time'?: string;
  'pri.completion.size'?: string;
  'pri.fielddata.evictions'?: string;
  'pri.fielddata.memory_size'?: string;
  'pri.flush.total'?: string;
  'pri.flush.total_time'?: string;
  'pri.get.current'?: string;
  'pri.get.exists_time'?: string;
  'pri.get.exists_total'?: string;
  'pri.get.missing_time'?: string;
  'pri.get.missing_total'?: string;
  'pri.get.time'?: string;
  'pri.get.total'?: string;
  'pri.indexing.delete_current'?: string;
  'pri.indexing.delete_time'?: string;
  'pri.indexing.delete_total'?: string;
  'pri.indexing.index_current'?: string;
  'pri.indexing.index_failed'?: string;
  'pri.indexing.index_time'?: string;
  'pri.indexing.index_total'?: string;
  'pri.memory.total'?: string;
  'pri.merges.current'?: string;
  'pri.merges.current_docs'?: string;
  'pri.merges.current_size'?: string;
  'pri.merges.total'?: string;
  'pri.merges.total_docs'?: string;
  'pri.merges.total_size'?: string;
  'pri.merges.total_time'?: string;
  'pri.query_cache.evictions'?: string;
  'pri.query_cache.memory_size'?: string;
  'pri.refresh.external_time'?: string;
  'pri.refresh.external_total'?: string;
  'pri.refresh.listeners'?: string;
  'pri.refresh.time'?: string;
  'pri.refresh.total'?: string;
  'pri.request_cache.evictions'?: string;
  'pri.request_cache.hit_count'?: string;
  'pri.request_cache.memory_size'?: string;
  'pri.request_cache.miss_count'?: string;
  'pri.search.fetch_current'?: string;
  'pri.search.fetch_time'?: string;
  'pri.search.fetch_total'?: string;
  'pri.search.open_contexts'?: string;
  'pri.search.query_current'?: string;
  'pri.search.query_time'?: string;
  'pri.search.query_total'?: string;
  'pri.search.scroll_current'?: string;
  'pri.search.scroll_time'?: string;
  'pri.search.scroll_total'?: string;
  'pri.segments.count'?: string;
  'pri.segments.fixed_bitset_memory'?: string;
  'pri.segments.index_writer_memory'?: string;
  'pri.segments.memory'?: string;
  'pri.segments.version_map_memory'?: string;
  'pri.store.size'?: undefined | string;
  'pri.suggest.current'?: string;
  'pri.suggest.time'?: string;
  'pri.suggest.total'?: string;
  'pri.warmer.current'?: string;
  'pri.warmer.total'?: string;
  'pri.warmer.total_time'?: string;
  'query_cache.evictions'?: string;
  'query_cache.memory_size'?: string;
  'refresh.external_time'?: string;
  'refresh.external_total'?: string;
  'refresh.listeners'?: string;
  'refresh.time'?: string;
  'refresh.total'?: string;
  rep?: string;
  'request_cache.evictions'?: string;
  'request_cache.hit_count'?: string;
  'request_cache.memory_size'?: string;
  'request_cache.miss_count'?: string;
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
  'search.throttled'?: string;
  'segments.count'?: string;
  'segments.fixed_bitset_memory'?: string;
  'segments.index_writer_memory'?: string;
  'segments.memory'?: string;
  'segments.version_map_memory'?: string;
  status?: string;
  'store.size'?: undefined | string;
  'suggest.current'?: string;
  'suggest.time'?: string;
  'suggest.total'?: string;
  uuid?: string;
  'warmer.current'?: string;
  'warmer.total'?: string;
  'warmer.total_time'?: string;
}


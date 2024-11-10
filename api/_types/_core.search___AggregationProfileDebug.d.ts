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

import * as Core_SearchAggregationProfileDelegateDebugFilter from './_core.search___AggregationProfileDelegateDebugFilter'

export type undefined = {
  built_buckets?: number;
  chars_fetched?: number;
  collect_analyzed_count?: number;
  collect_analyzed_ns?: number;
  collection_strategy?: string;
  deferred_aggregators?: string[];
  delegate?: string;
  delegate_debug?: ;
  empty_collectors_used?: number;
  extract_count?: number;
  extract_ns?: number;
  filters?: Core_SearchAggregationProfileDelegateDebugFilter.undefined[];
  has_filter?: boolean;
  map_reducer?: string;
  numeric_collectors_used?: number;
  ordinals_collectors_overhead_too_high?: number;
  ordinals_collectors_used?: number;
  result_strategy?: string;
  segments_collected?: number;
  segments_counted?: number;
  segments_with_deleted_docs?: number;
  segments_with_doc_count_field?: number;
  segments_with_multi_valued_ords?: number;
  segments_with_single_valued_ords?: number;
  string_hashing_collectors_used?: number;
  surviving_buckets?: number;
  total_buckets?: number;
  values_fetched?: number;
}


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

import * as Common_AggregationsAggregation from './_common.aggregations___Aggregation'
import * as Common_AggregationsCategorizeTextAnalyzer from './_common.aggregations___CategorizeTextAnalyzer'
import * as CommonField from './_common___Field'

export type undefined = Common_AggregationsAggregation.undefined & {
  categorization_analyzer?: Common_AggregationsCategorizeTextAnalyzer.undefined;
  categorization_filters?: string[];
  field: CommonField.undefined;
  max_matched_tokens?: number;
  max_unique_tokens?: number;
  min_doc_count?: number;
  shard_min_doc_count?: number;
  shard_size?: number;
  similarity_threshold?: number;
  size?: number;
}


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

import * as Common_AggregationsAggregateOrder from './_common.aggregations___AggregateOrder'
import * as Common_AggregationsBucketAggregationBase from './_common.aggregations___BucketAggregationBase'
import * as Common_AggregationsMultiTermLookup from './_common.aggregations___MultiTermLookup'
import * as Common_AggregationsTermsAggregationCollectMode from './_common.aggregations___TermsAggregationCollectMode'

export type undefined = Common_AggregationsBucketAggregationBase.undefined & {
  collect_mode?: Common_AggregationsTermsAggregationCollectMode.undefined;
  min_doc_count?: number;
  order?: Common_AggregationsAggregateOrder.undefined;
  shard_min_doc_count?: number;
  shard_size?: number;
  show_term_doc_count_error?: boolean;
  size?: number;
  terms: Common_AggregationsMultiTermLookup.undefined[];
}


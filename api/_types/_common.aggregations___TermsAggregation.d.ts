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
import * as Common_AggregationsMissing from './_common.aggregations___Missing'
import * as Common_AggregationsMissingOrder from './_common.aggregations___MissingOrder'
import * as Common_AggregationsTermsAggregationCollectMode from './_common.aggregations___TermsAggregationCollectMode'
import * as Common_AggregationsTermsAggregationExecutionHint from './_common.aggregations___TermsAggregationExecutionHint'
import * as Common_AggregationsTermsExclude from './_common.aggregations___TermsExclude'
import * as Common_AggregationsTermsInclude from './_common.aggregations___TermsInclude'
import * as CommonField from './_common___Field'
import * as CommonScript from './_common___Script'

export type undefined = Common_AggregationsBucketAggregationBase.undefined & {
  collect_mode?: Common_AggregationsTermsAggregationCollectMode.undefined;
  exclude?: Common_AggregationsTermsExclude.undefined;
  execution_hint?: Common_AggregationsTermsAggregationExecutionHint.undefined;
  field?: CommonField.undefined;
  format?: string;
  include?: Common_AggregationsTermsInclude.undefined;
  min_doc_count?: number;
  missing?: Common_AggregationsMissing.undefined;
  missing_bucket?: boolean;
  missing_order?: Common_AggregationsMissingOrder.undefined;
  order?: Common_AggregationsAggregateOrder.undefined;
  script?: CommonScript.undefined;
  shard_size?: number;
  show_term_doc_count_error?: boolean;
  size?: number;
  value_type?: string;
}


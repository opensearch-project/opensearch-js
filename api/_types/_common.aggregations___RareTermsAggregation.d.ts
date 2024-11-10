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

import * as Common_AggregationsBucketAggregationBase from './_common.aggregations___BucketAggregationBase'
import * as Common_AggregationsMissing from './_common.aggregations___Missing'
import * as Common_AggregationsTermsExclude from './_common.aggregations___TermsExclude'
import * as Common_AggregationsTermsInclude from './_common.aggregations___TermsInclude'
import * as CommonField from './_common___Field'

export type undefined = Common_AggregationsBucketAggregationBase.undefined & {
  exclude?: Common_AggregationsTermsExclude.undefined;
  field?: CommonField.undefined;
  include?: Common_AggregationsTermsInclude.undefined;
  max_doc_count?: number;
  missing?: Common_AggregationsMissing.undefined;
  precision?: number;
  value_type?: string;
}


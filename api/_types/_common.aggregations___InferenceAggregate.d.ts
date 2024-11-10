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

import * as Common_AggregationsAggregateBase from './_common.aggregations___AggregateBase'
import * as Common_AggregationsInferenceFeatureImportance from './_common.aggregations___InferenceFeatureImportance'
import * as Common_AggregationsInferenceTopClassEntry from './_common.aggregations___InferenceTopClassEntry'
import * as CommonFieldValue from './_common___FieldValue'

export type undefined = Common_AggregationsAggregateBase.undefined & {
  feature_importance?: Common_AggregationsInferenceFeatureImportance.undefined[];
  top_classes?: Common_AggregationsInferenceTopClassEntry.undefined[];
  value?: CommonFieldValue.undefined;
  warning?: string;
}


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
import * as Common_AggregationsSamplerAggregationExecutionHint from './_common.aggregations___SamplerAggregationExecutionHint'
import * as CommonField from './_common___Field'
import * as CommonScript from './_common___Script'

export type undefined = Common_AggregationsBucketAggregationBase.undefined & {
  execution_hint?: Common_AggregationsSamplerAggregationExecutionHint.undefined;
  field?: CommonField.undefined;
  max_docs_per_value?: number;
  script?: CommonScript.undefined;
  shard_size?: number;
}


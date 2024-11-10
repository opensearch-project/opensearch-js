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

import * as Common_AggregationsMetricAggregationBase from './_common.aggregations___MetricAggregationBase'
import * as CommonFields from './_common___Fields'
import * as CommonScriptField from './_common___ScriptField'
import * as CommonSort from './_common___Sort'
import * as Core_SearchHighlight from './_core.search___Highlight'
import * as Core_SearchSourceConfig from './_core.search___SourceConfig'

export type undefined = Common_AggregationsMetricAggregationBase.undefined & {
  _source?: Core_SearchSourceConfig.undefined;
  docvalue_fields?: CommonFields.undefined;
  explain?: boolean;
  from?: number;
  highlight?: Core_SearchHighlight.undefined;
  script_fields?: Record<string, CommonScriptField.undefined>;
  seq_no_primary_term?: boolean;
  size?: number;
  sort?: CommonSort.undefined;
  stored_fields?: CommonFields.undefined;
  track_scores?: boolean;
  version?: boolean;
}


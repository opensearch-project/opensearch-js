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

import * as Common_AggregationsAggregationContainer from './_common.aggregations___AggregationContainer'
import * as Common_QueryDslFieldAndFormat from './_common.query_dsl___FieldAndFormat'
import * as Common_QueryDslKnnQuery from './_common.query_dsl___KnnQuery'
import * as Common_QueryDslQueryContainer from './_common.query_dsl___QueryContainer'
import * as CommonFields from './_common___Fields'
import * as CommonScriptField from './_common___ScriptField'
import * as CommonSort from './_common___Sort'
import * as CommonSortResults from './_common___SortResults'
import * as Core_SearchFieldCollapse from './_core.search___FieldCollapse'
import * as Core_SearchHighlight from './_core.search___Highlight'
import * as Core_SearchPointInTimeReference from './_core.search___PointInTimeReference'
import * as Core_SearchRescore from './_core.search___Rescore'
import * as Core_SearchSourceConfig from './_core.search___SourceConfig'
import * as Core_SearchSuggester from './_core.search___Suggester'
import * as Core_SearchTrackHits from './_core.search___TrackHits'

export type undefined = {
  _source?: Core_SearchSourceConfig.undefined;
  aggregations?: Record<string, Common_AggregationsAggregationContainer.undefined>;
  collapse?: Core_SearchFieldCollapse.undefined;
  docvalue_fields?: Common_QueryDslFieldAndFormat.undefined[];
  explain?: boolean;
  ext?: Record<string, Record<string, any>>;
  fields?: Common_QueryDslFieldAndFormat.undefined[];
  from?: number;
  highlight?: Core_SearchHighlight.undefined;
  indices_boost?: Record<string, number>[];
  knn?: Common_QueryDslKnnQuery.undefined | Common_QueryDslKnnQuery.undefined[];
  min_score?: number;
  pit?: Core_SearchPointInTimeReference.undefined;
  post_filter?: Common_QueryDslQueryContainer.undefined;
  profile?: boolean;
  query?: Common_QueryDslQueryContainer.undefined;
  rescore?: Core_SearchRescore.undefined | Core_SearchRescore.undefined[];
  script_fields?: Record<string, CommonScriptField.undefined>;
  search_after?: CommonSortResults.undefined;
  seq_no_primary_term?: boolean;
  size?: number;
  sort?: CommonSort.undefined;
  stats?: string[];
  stored_fields?: CommonFields.undefined;
  suggest?: Core_SearchSuggester.undefined;
  terminate_after?: number;
  timeout?: string;
  track_scores?: boolean;
  track_total_hits?: Core_SearchTrackHits.undefined;
  version?: boolean;
}


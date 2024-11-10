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

import * as Common_AggregationsAggregate from './_common.aggregations___Aggregate'
import * as CommonClusterStatistics from './_common___ClusterStatistics'
import * as CommonId from './_common___Id'
import * as CommonPhaseTook from './_common___PhaseTook'
import * as CommonScrollId from './_common___ScrollId'
import * as CommonShardStatistics from './_common___ShardStatistics'
import * as Core_SearchHitsMetadata from './_core.search___HitsMetadata'
import * as Core_SearchProfile from './_core.search___Profile'
import * as Core_SearchSuggest from './_core.search___Suggest'

export type undefined = {
  _clusters?: CommonClusterStatistics.undefined;
  _scroll_id?: CommonScrollId.undefined;
  _shards: CommonShardStatistics.undefined;
  aggregations?: Record<string, Common_AggregationsAggregate.undefined>;
  fields?: Record<string, Record<string, any>>;
  hits: Core_SearchHitsMetadata.undefined;
  max_score?: number;
  num_reduce_phases?: number;
  phase_took?: CommonPhaseTook.undefined;
  pit_id?: CommonId.undefined;
  profile?: Core_SearchProfile.undefined;
  suggest?: Record<string, Core_SearchSuggest.undefined[]>;
  terminated_early?: boolean;
  timed_out: boolean;
  took: number;
}


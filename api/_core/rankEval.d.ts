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

import { ApiResponse } from '../../lib/Transport'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonSearchType from '../_types/_common___SearchType'
import * as Core_RankEvalRankEvalMetric from '../_types/_core.rank_eval___RankEvalMetric'
import * as Core_RankEvalRankEvalMetricDetail from '../_types/_core.rank_eval___RankEvalMetricDetail'
import * as Core_RankEvalRankEvalRequestItem from '../_types/_core.rank_eval___RankEvalRequestItem'
import * as Global from '../_types/_global'

export type RankEval_Request = Global.Params & {
  allow_no_indices?: boolean;
  body: RankEval_RequestBody;
  expand_wildcards?: CommonExpandWildcards.undefined;
  ignore_unavailable?: boolean;
  index?: CommonIndices.undefined;
  search_type?: CommonSearchType.undefined;
}

export type RankEval_RequestBody = {
  metric?: Core_RankEvalRankEvalMetric.undefined;
  requests: Core_RankEvalRankEvalRequestItem.undefined[];
}

export type RankEval_Response = ApiResponse & {
  body: RankEval_ResponseBody;
}

export type RankEval_ResponseBody = {
  details: Record<string, Core_RankEvalRankEvalMetricDetail.undefined>;
  failures: Record<string, Record<string, any>>;
  metric_score: number;
}


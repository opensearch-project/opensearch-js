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
import * as Common_QueryDslOperator from '../_types/_common.query_dsl___Operator'
import * as Common_QueryDslQueryContainer from '../_types/_common.query_dsl___QueryContainer'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonShardStatistics from '../_types/_common___ShardStatistics'
import * as Global from '../_types/_global'
import * as Indices_ValidateQueryIndicesValidationExplanation from '../_types/indices.validate_query___IndicesValidationExplanation'

export type Indices_ValidateQuery_Request = Global.Params & {
  all_shards?: boolean;
  allow_no_indices?: boolean;
  analyze_wildcard?: boolean;
  analyzer?: string;
  body?: Indices_ValidateQuery_RequestBody;
  default_operator?: Common_QueryDslOperator.undefined;
  df?: string;
  expand_wildcards?: CommonExpandWildcards.undefined;
  explain?: boolean;
  ignore_unavailable?: boolean;
  index?: CommonIndices.undefined;
  lenient?: boolean;
  q?: string;
  rewrite?: boolean;
}

export type Indices_ValidateQuery_RequestBody = {
  query?: Common_QueryDslQueryContainer.undefined;
}

export type Indices_ValidateQuery_Response = ApiResponse & {
  body: Indices_ValidateQuery_ResponseBody;
}

export type Indices_ValidateQuery_ResponseBody = {
  _shards?: CommonShardStatistics.undefined;
  error?: string;
  explanations?: Indices_ValidateQueryIndicesValidationExplanation.undefined[];
  valid: boolean;
}


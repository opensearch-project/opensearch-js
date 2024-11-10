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
import * as CommonFields from '../_types/_common___Fields'
import * as CommonId from '../_types/_common___Id'
import * as CommonIndexName from '../_types/_common___IndexName'
import * as CommonInlineGet from '../_types/_common___InlineGet'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as Core_ExplainExplanationDetail from '../_types/_core.explain___ExplanationDetail'
import * as Core_SearchSourceConfigParam from '../_types/_core.search___SourceConfigParam'
import * as Global from '../_types/_global'

export type Explain_Request = Global.Params & {
  _source?: Core_SearchSourceConfigParam.undefined;
  _source_excludes?: CommonFields.undefined;
  _source_includes?: CommonFields.undefined;
  analyze_wildcard?: boolean;
  analyzer?: string;
  body?: Explain_RequestBody;
  default_operator?: Common_QueryDslOperator.undefined;
  df?: string;
  id: CommonId.undefined;
  index: CommonIndexName.undefined;
  lenient?: boolean;
  preference?: string;
  q?: string;
  routing?: CommonRoutingInQueryString.undefined;
  stored_fields?: CommonFields.undefined;
}

export type Explain_RequestBody = {
  query?: Common_QueryDslQueryContainer.undefined;
}

export type Explain_Response = ApiResponse & {
  body: Explain_ResponseBody;
}

export type Explain_ResponseBody = {
  _id: CommonId.undefined;
  _index: CommonIndexName.undefined;
  explanation?: Core_ExplainExplanationDetail.undefined;
  get?: CommonInlineGet.undefined;
  matched: boolean;
}


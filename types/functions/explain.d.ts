/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

import { ApiResponse } from '../../lib/Transport'
import * as Global from '../components/_global'
import * as Core_Search from '../components/_core.search'
import * as Common from '../components/_common'
import * as Common_QueryDsl from '../components/_common.query_dsl'
import * as Core_Explain from '../components/_core.explain'

export interface Request extends Global.Params {
  _source?: Core_Search.SourceConfigParam;
  _source_excludes?: Common.Fields;
  _source_includes?: Common.Fields;
  analyze_wildcard?: boolean;
  analyzer?: string;
  body?: RequestBody;
  default_operator?: Common_QueryDsl.Operator;
  df?: string;
  id: Common.Id;
  index: Common.IndexName;
  lenient?: boolean;
  preference?: string;
  q?: string;
  routing?: Common.Routing;
  stored_fields?: Common.Fields;
}

export interface ResponseBody {
  _id: Common.Id;
  _index: Common.IndexName;
  explanation?: Core_Explain.ExplanationDetail;
  get?: Common.InlineGet;
  matched: boolean;
}

export interface RequestBody {
  query?: Common_QueryDsl.QueryContainer;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

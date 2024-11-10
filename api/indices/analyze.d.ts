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
import * as Common_AnalysisCharFilter from '../_types/_common.analysis___CharFilter'
import * as Common_AnalysisTokenFilter from '../_types/_common.analysis___TokenFilter'
import * as Common_AnalysisTokenizer from '../_types/_common.analysis___Tokenizer'
import * as CommonField from '../_types/_common___Field'
import * as CommonIndexName from '../_types/_common___IndexName'
import * as Global from '../_types/_global'
import * as Indices_AnalyzeAnalyzeDetail from '../_types/indices.analyze___AnalyzeDetail'
import * as Indices_AnalyzeAnalyzeToken from '../_types/indices.analyze___AnalyzeToken'
import * as Indices_AnalyzeTextToAnalyze from '../_types/indices.analyze___TextToAnalyze'

export type Indices_Analyze_Request = Global.Params & {
  body?: Indices_Analyze_RequestBody;
  index?: CommonIndexName.undefined;
}

export type Indices_Analyze_RequestBody = {
  analyzer?: string;
  attributes?: string[];
  char_filter?: Common_AnalysisCharFilter.undefined[];
  explain?: boolean;
  field?: CommonField.undefined;
  filter?: Common_AnalysisTokenFilter.undefined[];
  normalizer?: string;
  text?: Indices_AnalyzeTextToAnalyze.undefined;
  tokenizer?: Common_AnalysisTokenizer.undefined;
}

export type Indices_Analyze_Response = ApiResponse & {
  body: Indices_Analyze_ResponseBody;
}

export type Indices_Analyze_ResponseBody = {
  detail?: Indices_AnalyzeAnalyzeDetail.undefined;
  tokens?: Indices_AnalyzeAnalyzeToken.undefined[];
}


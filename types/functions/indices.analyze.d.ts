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
import * as Common from '../components/_common'
import * as Indices_Analyze from '../components/indices.analyze'
import * as Common_Analysis from '../components/_common.analysis'

export interface Request extends Global.Params {
  body?: RequestBody;
  index?: Common.IndexName;
}

export interface ResponseBody {
  detail?: Indices_Analyze.AnalyzeDetail;
  tokens?: Indices_Analyze.AnalyzeToken[];
}

export interface RequestBody {
  analyzer?: string;
  attributes?: string[];
  char_filter?: Common_Analysis.CharFilter[];
  explain?: boolean;
  field?: Common.Field;
  filter?: Common_Analysis.TokenFilter[];
  normalizer?: string;
  text?: Indices_Analyze.TextToAnalyze;
  tokenizer?: Common_Analysis.Tokenizer;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

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

import * as Indices_AnalyzeAnalyzerDetail from './indices.analyze___AnalyzerDetail'
import * as Indices_AnalyzeCharFilterDetail from './indices.analyze___CharFilterDetail'
import * as Indices_AnalyzeTokenDetail from './indices.analyze___TokenDetail'

export type undefined = {
  analyzer?: Indices_AnalyzeAnalyzerDetail.undefined;
  charfilters?: Indices_AnalyzeCharFilterDetail.undefined[];
  custom_analyzer: boolean;
  tokenfilters?: Indices_AnalyzeTokenDetail.undefined[];
  tokenizer?: Indices_AnalyzeTokenDetail.undefined;
}


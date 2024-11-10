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

import * as Common_AnalysisAnalyzer from './_common.analysis___Analyzer'
import * as Common_AnalysisCharFilter from './_common.analysis___CharFilter'
import * as Common_AnalysisNormalizer from './_common.analysis___Normalizer'
import * as Common_AnalysisTokenFilter from './_common.analysis___TokenFilter'
import * as Common_AnalysisTokenizer from './_common.analysis___Tokenizer'

export type undefined = {
  analyzer?: Record<string, Common_AnalysisAnalyzer.undefined>;
  char_filter?: Record<string, Common_AnalysisCharFilter.undefined>;
  filter?: Record<string, Common_AnalysisTokenFilter.undefined>;
  normalizer?: Record<string, Common_AnalysisNormalizer.undefined>;
  tokenizer?: Record<string, Common_AnalysisTokenizer.undefined>;
}


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

import * as Common_AnalysisIcuCollationAlternate from './_common.analysis___IcuCollationAlternate'
import * as Common_AnalysisIcuCollationCaseFirst from './_common.analysis___IcuCollationCaseFirst'
import * as Common_AnalysisIcuCollationDecomposition from './_common.analysis___IcuCollationDecomposition'
import * as Common_AnalysisIcuCollationStrength from './_common.analysis___IcuCollationStrength'
import * as Common_AnalysisTokenFilterBase from './_common.analysis___TokenFilterBase'

export type undefined = Common_AnalysisTokenFilterBase.undefined & {
  alternate?: Common_AnalysisIcuCollationAlternate.undefined;
  caseFirst?: Common_AnalysisIcuCollationCaseFirst.undefined;
  caseLevel?: boolean;
  country?: string;
  decomposition?: Common_AnalysisIcuCollationDecomposition.undefined;
  hiraganaQuaternaryMode?: boolean;
  language?: string;
  numeric?: boolean;
  rules?: string;
  strength?: Common_AnalysisIcuCollationStrength.undefined;
  type: 'icu_collation';
  variableTop?: string;
  variant?: string;
}


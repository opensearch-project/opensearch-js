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
import * as CommonFields from './_common___Fields'
import * as Core_SearchHighlightBase from './_core.search___HighlightBase'

export type undefined = Core_SearchHighlightBase.undefined & {
  analyzer?: Common_AnalysisAnalyzer.undefined;
  fragment_offset?: number;
  matched_fields?: CommonFields.undefined;
}


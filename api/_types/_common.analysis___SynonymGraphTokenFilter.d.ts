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

import * as Common_AnalysisSynonymFormat from './_common.analysis___SynonymFormat'
import * as Common_AnalysisTokenFilterBase from './_common.analysis___TokenFilterBase'

export type undefined = Common_AnalysisTokenFilterBase.undefined & {
  expand?: boolean;
  format?: Common_AnalysisSynonymFormat.undefined;
  lenient?: boolean;
  synonyms?: string[];
  synonyms_path?: string;
  tokenizer?: string;
  type: 'synonym_graph';
  updateable?: boolean;
}


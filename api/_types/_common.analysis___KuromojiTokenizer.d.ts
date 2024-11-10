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

import * as Common_AnalysisKuromojiTokenizationMode from './_common.analysis___KuromojiTokenizationMode'
import * as Common_AnalysisTokenizerBase from './_common.analysis___TokenizerBase'

export type undefined = Common_AnalysisTokenizerBase.undefined & {
  discard_compound_token?: boolean;
  discard_punctuation?: boolean;
  mode: Common_AnalysisKuromojiTokenizationMode.undefined;
  nbest_cost?: number;
  nbest_examples?: string;
  type: 'kuromoji_tokenizer';
  user_dictionary?: string;
  user_dictionary_rules?: string[];
}


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

import * as Common_AnalysisTokenFilterBase from './_common.analysis___TokenFilterBase'
import * as CommonStringifiedboolean from './_common___Stringifiedboolean'

export type undefined = Common_AnalysisTokenFilterBase.undefined & {
  adjust_offsets?: boolean;
  catenate_all?: boolean;
  catenate_numbers?: boolean;
  catenate_words?: boolean;
  generate_number_parts?: boolean;
  generate_word_parts?: boolean;
  ignore_keywords?: boolean;
  preserve_original?: CommonStringifiedboolean.undefined;
  protected_words?: string[];
  protected_words_path?: string;
  split_on_case_change?: boolean;
  split_on_numerics?: boolean;
  stem_english_possessive?: boolean;
  type: 'word_delimiter_graph';
  type_table?: string[];
  type_table_path?: string;
}


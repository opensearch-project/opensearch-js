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

export type undefined = Common_AnalysisTokenFilterBase.undefined & {
  filler_token?: string;
  max_shingle_size?: number | string;
  min_shingle_size?: number | string;
  output_unigrams?: boolean;
  output_unigrams_if_no_shingles?: boolean;
  token_separator?: string;
  type: 'shingle';
}


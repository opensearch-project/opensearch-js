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
import * as CommonStringifiedinteger from './_common___Stringifiedinteger'

export type undefined = Common_AnalysisTokenFilterBase.undefined & {
  consume_all_tokens?: boolean;
  max_token_count?: CommonStringifiedinteger.undefined;
  type: 'limit';
}


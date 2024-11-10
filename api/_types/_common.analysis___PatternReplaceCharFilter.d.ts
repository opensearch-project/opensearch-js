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

import * as Common_AnalysisCharFilterBase from './_common.analysis___CharFilterBase'

export type undefined = Common_AnalysisCharFilterBase.undefined & {
  flags?: string;
  pattern: string;
  replacement?: string;
  type: 'pattern_replace';
}


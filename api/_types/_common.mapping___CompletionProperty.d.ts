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

import * as Common_MappingDocValuesPropertyBase from './_common.mapping___DocValuesPropertyBase'
import * as Common_MappingSuggestContext from './_common.mapping___SuggestContext'

export type undefined = Common_MappingDocValuesPropertyBase.undefined & {
  analyzer?: string;
  contexts?: Common_MappingSuggestContext.undefined[];
  max_input_length?: number;
  preserve_position_increments?: boolean;
  preserve_separators?: boolean;
  search_analyzer?: string;
  type: 'completion';
}


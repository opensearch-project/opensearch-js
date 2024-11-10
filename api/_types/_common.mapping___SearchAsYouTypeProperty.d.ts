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

import * as Common_MappingCorePropertyBase from './_common.mapping___CorePropertyBase'
import * as Common_MappingIndexOptions from './_common.mapping___IndexOptions'
import * as Common_MappingTermVectorOption from './_common.mapping___TermVectorOption'

export type undefined = Common_MappingCorePropertyBase.undefined & {
  analyzer?: string;
  index?: boolean;
  index_options?: Common_MappingIndexOptions.undefined;
  max_shingle_size?: number;
  norms?: boolean;
  search_analyzer?: string;
  search_quote_analyzer?: string;
  term_vector?: Common_MappingTermVectorOption.undefined;
  type: 'search_as_you_type';
}


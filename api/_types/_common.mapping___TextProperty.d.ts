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
import * as Common_MappingTextIndexPrefixes from './_common.mapping___TextIndexPrefixes'
import * as Indices_CommonFielddataFrequencyFilter from './indices._common___FielddataFrequencyFilter'

export type undefined = Common_MappingCorePropertyBase.undefined & {
  analyzer?: string;
  boost?: number;
  eager_global_ordinals?: boolean;
  fielddata?: boolean;
  fielddata_frequency_filter?: Indices_CommonFielddataFrequencyFilter.undefined;
  index?: boolean;
  index_options?: Common_MappingIndexOptions.undefined;
  index_phrases?: boolean;
  index_prefixes?: Common_MappingTextIndexPrefixes.undefined;
  norms?: boolean;
  position_increment_gap?: number;
  search_analyzer?: string;
  search_quote_analyzer?: string;
  term_vector?: Common_MappingTermVectorOption.undefined;
  type: 'text';
}


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
import * as Common_MappingIndexOptions from './_common.mapping___IndexOptions'

export type undefined = Common_MappingDocValuesPropertyBase.undefined & {
  boost?: number;
  eager_global_ordinals?: boolean;
  index?: boolean;
  index_options?: Common_MappingIndexOptions.undefined;
  normalizer?: string;
  norms?: boolean;
  null_value?: string;
  split_queries_on_whitespace?: boolean;
  time_series_dimension?: boolean;
  type: 'keyword';
}


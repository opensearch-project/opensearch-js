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

import * as Common_MappingIndexOptions from './_common.mapping___IndexOptions'
import * as Common_MappingPropertyBase from './_common.mapping___PropertyBase'

export type undefined = Common_MappingPropertyBase.undefined & {
  boost?: number;
  depth_limit?: number;
  doc_values?: boolean;
  eager_global_ordinals?: boolean;
  index?: boolean;
  index_options?: Common_MappingIndexOptions.undefined;
  null_value?: string;
  similarity?: string;
  split_queries_on_whitespace?: boolean;
  type: 'flattened';
}


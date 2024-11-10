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
import * as Common_MappingKnnVectorMethod from './_common.mapping___KnnVectorMethod'

export type undefined = Common_MappingDocValuesPropertyBase.undefined & {
  compression_level?: string;
  data_type?: string;
  dimension: number;
  method?: Common_MappingKnnVectorMethod.undefined;
  mode?: string;
  model_id?: string;
  space_type?: string;
  type: 'knn_vector';
}


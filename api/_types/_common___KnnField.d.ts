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

import * as Common_QueryDslQueryContainer from './_common.query_dsl___QueryContainer'
import * as CommonQueryVector from './_common___QueryVector'

export type undefined = {
  boost?: number;
  filter?: Common_QueryDslQueryContainer.undefined | Common_QueryDslQueryContainer.undefined[];
  k?: number;
  max_distance?: number;
  method_parameters?: Record<string, number>;
  min_score?: number;
  rescore?: Record<string, number>;
  vector: CommonQueryVector.undefined;
}


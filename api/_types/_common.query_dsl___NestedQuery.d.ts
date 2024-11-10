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

import * as Common_QueryDslChildScoreMode from './_common.query_dsl___ChildScoreMode'
import * as Common_QueryDslIgnoreUnmapped from './_common.query_dsl___IgnoreUnmapped'
import * as Common_QueryDslQueryBase from './_common.query_dsl___QueryBase'
import * as Common_QueryDslQueryContainer from './_common.query_dsl___QueryContainer'
import * as CommonField from './_common___Field'
import * as Core_SearchInnerHits from './_core.search___InnerHits'

export type undefined = Common_QueryDslQueryBase.undefined & {
  ignore_unmapped?: Common_QueryDslIgnoreUnmapped.undefined;
  inner_hits?: Core_SearchInnerHits.undefined;
  path: CommonField.undefined;
  query: Common_QueryDslQueryContainer.undefined;
  score_mode?: Common_QueryDslChildScoreMode.undefined;
}


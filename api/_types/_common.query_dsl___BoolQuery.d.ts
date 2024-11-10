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

import * as Common_QueryDslQueryBase from './_common.query_dsl___QueryBase'
import * as Common_QueryDslQueryContainer from './_common.query_dsl___QueryContainer'
import * as CommonMinimumShouldMatch from './_common___MinimumShouldMatch'

export type undefined = Common_QueryDslQueryBase.undefined & {
  adjust_pure_negative?: boolean;
  filter?: Common_QueryDslQueryContainer.undefined | Common_QueryDslQueryContainer.undefined[];
  minimum_should_match?: CommonMinimumShouldMatch.undefined;
  must?: Common_QueryDslQueryContainer.undefined | Common_QueryDslQueryContainer.undefined[];
  must_not?: Common_QueryDslQueryContainer.undefined | Common_QueryDslQueryContainer.undefined[];
  should?: Common_QueryDslQueryContainer.undefined | Common_QueryDslQueryContainer.undefined[];
}


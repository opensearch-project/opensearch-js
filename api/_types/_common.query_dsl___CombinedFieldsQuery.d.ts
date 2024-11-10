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

import * as Common_QueryDslCombinedFieldsOperator from './_common.query_dsl___CombinedFieldsOperator'
import * as Common_QueryDslCombinedFieldsZeroTerms from './_common.query_dsl___CombinedFieldsZeroTerms'
import * as Common_QueryDslQueryBase from './_common.query_dsl___QueryBase'
import * as CommonField from './_common___Field'
import * as CommonMinimumShouldMatch from './_common___MinimumShouldMatch'

export type undefined = Common_QueryDslQueryBase.undefined & {
  auto_generate_synonyms_phrase_query?: boolean;
  fields: CommonField.undefined[];
  minimum_should_match?: CommonMinimumShouldMatch.undefined;
  operator?: Common_QueryDslCombinedFieldsOperator.undefined;
  query: string;
  zero_terms_query?: Common_QueryDslCombinedFieldsZeroTerms.undefined;
}


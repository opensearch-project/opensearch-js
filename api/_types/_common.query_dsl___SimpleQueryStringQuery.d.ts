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

import * as Common_QueryDslOperator from './_common.query_dsl___Operator'
import * as Common_QueryDslQueryBase from './_common.query_dsl___QueryBase'
import * as Common_QueryDslSimpleQueryStringFlags from './_common.query_dsl___SimpleQueryStringFlags'
import * as CommonField from './_common___Field'
import * as CommonMinimumShouldMatch from './_common___MinimumShouldMatch'

export type undefined = Common_QueryDslQueryBase.undefined & {
  analyze_wildcard?: boolean;
  analyzer?: string;
  auto_generate_synonyms_phrase_query?: boolean;
  default_operator?: Common_QueryDslOperator.undefined;
  fields?: CommonField.undefined[];
  flags?: Common_QueryDslSimpleQueryStringFlags.undefined;
  fuzzy_max_expansions?: number;
  fuzzy_prefix_length?: number;
  fuzzy_transpositions?: boolean;
  lenient?: boolean;
  minimum_should_match?: CommonMinimumShouldMatch.undefined;
  query: string;
  quote_field_suffix?: string;
}


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
import * as Common_QueryDslTextQueryType from './_common.query_dsl___TextQueryType'
import * as Common_QueryDslZeroTermsQuery from './_common.query_dsl___ZeroTermsQuery'
import * as CommonFields from './_common___Fields'
import * as CommonFuzziness from './_common___Fuzziness'
import * as CommonMinimumShouldMatch from './_common___MinimumShouldMatch'
import * as CommonMultiTermQueryRewrite from './_common___MultiTermQueryRewrite'

export type undefined = Common_QueryDslQueryBase.undefined & {
  analyzer?: string;
  auto_generate_synonyms_phrase_query?: boolean;
  cutoff_frequency?: number;
  fields?: CommonFields.undefined;
  fuzziness?: CommonFuzziness.undefined;
  fuzzy_rewrite?: CommonMultiTermQueryRewrite.undefined;
  fuzzy_transpositions?: boolean;
  lenient?: boolean;
  max_expansions?: number;
  minimum_should_match?: CommonMinimumShouldMatch.undefined;
  operator?: Common_QueryDslOperator.undefined;
  prefix_length?: number;
  query: string;
  slop?: number;
  tie_breaker?: number;
  type?: Common_QueryDslTextQueryType.undefined;
  zero_terms_query?: Common_QueryDslZeroTermsQuery.undefined;
}


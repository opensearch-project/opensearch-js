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
import * as CommonField from './_common___Field'
import * as CommonFuzziness from './_common___Fuzziness'
import * as CommonMinimumShouldMatch from './_common___MinimumShouldMatch'
import * as CommonMultiTermQueryRewrite from './_common___MultiTermQueryRewrite'
import * as CommonTimeZone from './_common___TimeZone'

export type undefined = Common_QueryDslQueryBase.undefined & {
  allow_leading_wildcard?: boolean;
  analyze_wildcard?: boolean;
  analyzer?: string;
  auto_generate_synonyms_phrase_query?: boolean;
  default_field?: CommonField.undefined;
  default_operator?: Common_QueryDslOperator.undefined;
  enable_position_increments?: boolean;
  escape?: boolean;
  fields?: CommonField.undefined[];
  fuzziness?: CommonFuzziness.undefined;
  fuzzy_max_expansions?: number;
  fuzzy_prefix_length?: number;
  fuzzy_rewrite?: CommonMultiTermQueryRewrite.undefined;
  fuzzy_transpositions?: boolean;
  lenient?: boolean;
  max_determinized_states?: number;
  minimum_should_match?: CommonMinimumShouldMatch.undefined;
  phrase_slop?: number;
  query: string;
  quote_analyzer?: string;
  quote_field_suffix?: string;
  rewrite?: CommonMultiTermQueryRewrite.undefined;
  tie_breaker?: number;
  time_zone?: CommonTimeZone.undefined;
  type?: Common_QueryDslTextQueryType.undefined;
}


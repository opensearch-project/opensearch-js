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

import * as Common_AnalysisStopWords from './_common.analysis___StopWords'
import * as Common_QueryDslLike from './_common.query_dsl___Like'
import * as Common_QueryDslQueryBase from './_common.query_dsl___QueryBase'
import * as CommonField from './_common___Field'
import * as CommonMinimumShouldMatch from './_common___MinimumShouldMatch'
import * as CommonRouting from './_common___Routing'
import * as CommonVersionNumber from './_common___VersionNumber'
import * as CommonVersionType from './_common___VersionType'

export type undefined = Common_QueryDslQueryBase.undefined & {
  analyzer?: string;
  boost_terms?: number;
  fail_on_unsupported_field?: boolean;
  fields?: CommonField.undefined[];
  include?: boolean;
  like: Common_QueryDslLike.undefined | Common_QueryDslLike.undefined[];
  max_doc_freq?: number;
  max_query_terms?: number;
  max_word_length?: number;
  min_doc_freq?: number;
  min_term_freq?: number;
  min_word_length?: number;
  minimum_should_match?: CommonMinimumShouldMatch.undefined;
  per_field_analyzer?: Record<string, string>;
  routing?: CommonRouting.undefined;
  stop_words?: Common_AnalysisStopWords.undefined;
  unlike?: Common_QueryDslLike.undefined | Common_QueryDslLike.undefined[];
  version?: CommonVersionNumber.undefined;
  version_type?: CommonVersionType.undefined;
}


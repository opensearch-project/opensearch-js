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

import * as Common_QueryDslDecayFunction from './_common.query_dsl___DecayFunction'
import * as Common_QueryDslFieldValueFactorScoreFunction from './_common.query_dsl___FieldValueFactorScoreFunction'
import * as Common_QueryDslQueryContainer from './_common.query_dsl___QueryContainer'
import * as Common_QueryDslRandomScoreFunction from './_common.query_dsl___RandomScoreFunction'
import * as Common_QueryDslScriptScoreFunction from './_common.query_dsl___ScriptScoreFunction'

export type undefined = {
  exp?: Common_QueryDslDecayFunction.undefined;
  field_value_factor?: Common_QueryDslFieldValueFactorScoreFunction.undefined;
  filter?: Common_QueryDslQueryContainer.undefined;
  gauss?: Common_QueryDslDecayFunction.undefined;
  linear?: Common_QueryDslDecayFunction.undefined;
  random_score?: Common_QueryDslRandomScoreFunction.undefined;
  script_score?: Common_QueryDslScriptScoreFunction.undefined;
  weight?: number;
}


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
import * as Common_QueryDslRankFeatureFunctionLinear from './_common.query_dsl___RankFeatureFunctionLinear'
import * as Common_QueryDslRankFeatureFunctionLogarithm from './_common.query_dsl___RankFeatureFunctionLogarithm'
import * as Common_QueryDslRankFeatureFunctionSaturation from './_common.query_dsl___RankFeatureFunctionSaturation'
import * as Common_QueryDslRankFeatureFunctionSigmoid from './_common.query_dsl___RankFeatureFunctionSigmoid'
import * as CommonField from './_common___Field'

export type undefined = Common_QueryDslQueryBase.undefined & {
  field: CommonField.undefined;
  linear?: Common_QueryDslRankFeatureFunctionLinear.undefined;
  log?: Common_QueryDslRankFeatureFunctionLogarithm.undefined;
  saturation?: Common_QueryDslRankFeatureFunctionSaturation.undefined;
  sigmoid?: Common_QueryDslRankFeatureFunctionSigmoid.undefined;
}


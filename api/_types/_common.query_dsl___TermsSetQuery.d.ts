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
import * as CommonField from './_common___Field'
import * as CommonScript from './_common___Script'

export type undefined = Common_QueryDslQueryBase.undefined & {
  minimum_should_match_field?: CommonField.undefined;
  minimum_should_match_script?: CommonScript.undefined;
  terms: string[];
}


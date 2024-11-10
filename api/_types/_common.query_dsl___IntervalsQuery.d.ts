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

import * as Common_QueryDslIntervalsAllOf from './_common.query_dsl___IntervalsAllOf'
import * as Common_QueryDslIntervalsAnyOf from './_common.query_dsl___IntervalsAnyOf'
import * as Common_QueryDslIntervalsFuzzy from './_common.query_dsl___IntervalsFuzzy'
import * as Common_QueryDslIntervalsMatch from './_common.query_dsl___IntervalsMatch'
import * as Common_QueryDslIntervalsPrefix from './_common.query_dsl___IntervalsPrefix'
import * as Common_QueryDslIntervalsWildcard from './_common.query_dsl___IntervalsWildcard'
import * as Common_QueryDslQueryBase from './_common.query_dsl___QueryBase'

export type undefined = Common_QueryDslQueryBase.undefined & {
  all_of?: Common_QueryDslIntervalsAllOf.undefined;
  any_of?: Common_QueryDslIntervalsAnyOf.undefined;
  fuzzy?: Common_QueryDslIntervalsFuzzy.undefined;
  match?: Common_QueryDslIntervalsMatch.undefined;
  prefix?: Common_QueryDslIntervalsPrefix.undefined;
  wildcard?: Common_QueryDslIntervalsWildcard.undefined;
}


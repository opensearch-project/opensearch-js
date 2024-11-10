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

import * as Common_QueryDslRangeQueryBase from './_common.query_dsl___RangeQueryBase'
import * as CommonDateFormat from './_common___DateFormat'
import * as CommonDateMath from './_common___DateMath'
import * as CommonTimeZone from './_common___TimeZone'

export type undefined = Common_QueryDslRangeQueryBase.undefined & {
  format?: CommonDateFormat.undefined;
  from?: CommonDateMath.undefined | undefined;
  gt?: CommonDateMath.undefined;
  gte?: CommonDateMath.undefined;
  lt?: CommonDateMath.undefined;
  lte?: CommonDateMath.undefined;
  time_zone?: CommonTimeZone.undefined;
  to?: CommonDateMath.undefined | undefined;
}


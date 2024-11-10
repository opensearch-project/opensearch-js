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
import * as CommonId from './_common___Id'
import * as CommonIndexName from './_common___IndexName'
import * as CommonRouting from './_common___Routing'
import * as CommonVersionNumber from './_common___VersionNumber'

export type undefined = Common_QueryDslQueryBase.undefined & {
  document?: Record<string, any>;
  documents?: Record<string, any>[];
  field: CommonField.undefined;
  id?: CommonId.undefined;
  index?: CommonIndexName.undefined;
  name?: string;
  preference?: string;
  routing?: CommonRouting.undefined;
  version?: CommonVersionNumber.undefined;
}


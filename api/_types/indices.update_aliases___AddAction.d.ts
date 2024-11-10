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

import * as Common_QueryDslQueryContainer from './_common.query_dsl___QueryContainer'
import * as CommonIndexAlias from './_common___IndexAlias'
import * as CommonIndexName from './_common___IndexName'
import * as CommonIndices from './_common___Indices'
import * as CommonRouting from './_common___Routing'

export type undefined = {
  alias?: CommonIndexAlias.undefined;
  aliases?: CommonIndexAlias.undefined | CommonIndexAlias.undefined[];
  filter?: Common_QueryDslQueryContainer.undefined;
  index?: CommonIndexName.undefined;
  index_routing?: CommonRouting.undefined;
  indices?: CommonIndices.undefined;
  is_hidden?: boolean;
  is_write_index?: boolean;
  must_exist?: boolean;
  routing?: CommonRouting.undefined;
  search_routing?: CommonRouting.undefined;
}


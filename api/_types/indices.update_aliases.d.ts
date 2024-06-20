/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

import * as Common from './_common'
import * as Common_QueryDsl from './_common.query_dsl'

export interface Action {
  add?: AddAction;
  remove?: RemoveAction;
  remove_index?: RemoveIndexAction;
}

export interface AddAction {
  alias?: Common.IndexAlias;
  aliases?: Common.IndexAlias | Common.IndexAlias[];
  filter?: Common_QueryDsl.QueryContainer;
  index?: Common.IndexName;
  index_routing?: Common.Routing;
  indices?: Common.Indices;
  is_hidden?: boolean;
  is_write_index?: boolean;
  must_exist?: boolean;
  routing?: Common.Routing;
  search_routing?: Common.Routing;
}

export interface RemoveAction {
  alias?: Common.IndexAlias;
  aliases?: Common.IndexAlias | Common.IndexAlias[];
  index?: Common.IndexName;
  indices?: Common.Indices;
  must_exist?: boolean;
}

export interface RemoveIndexAction {
  index?: Common.IndexName;
  indices?: Common.Indices;
  must_exist?: boolean;
}


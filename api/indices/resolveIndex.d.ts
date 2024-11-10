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

import { ApiResponse } from '../../lib/Transport'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonNames from '../_types/_common___Names'
import * as Global from '../_types/_global'
import * as Indices_ResolveIndexResolveIndexAliasItem from '../_types/indices.resolve_index___ResolveIndexAliasItem'
import * as Indices_ResolveIndexResolveIndexDataStreamsItem from '../_types/indices.resolve_index___ResolveIndexDataStreamsItem'
import * as Indices_ResolveIndexResolveIndexItem from '../_types/indices.resolve_index___ResolveIndexItem'

export type Indices_ResolveIndex_Request = Global.Params & {
  expand_wildcards?: CommonExpandWildcards.undefined;
  name: CommonNames.undefined;
}

export type Indices_ResolveIndex_Response = ApiResponse & {
  body: Indices_ResolveIndex_ResponseBody;
}

export type Indices_ResolveIndex_ResponseBody = {
  aliases: Indices_ResolveIndexResolveIndexAliasItem.undefined[];
  data_streams: Indices_ResolveIndexResolveIndexDataStreamsItem.undefined[];
  indices: Indices_ResolveIndexResolveIndexItem.undefined[];
}


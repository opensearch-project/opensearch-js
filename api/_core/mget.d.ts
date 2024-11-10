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
import * as CommonFields from '../_types/_common___Fields'
import * as CommonIds from '../_types/_common___Ids'
import * as CommonIndexName from '../_types/_common___IndexName'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as Core_MgetOperation from '../_types/_core.mget___Operation'
import * as Core_MgetResponseItem from '../_types/_core.mget___ResponseItem'
import * as Core_SearchSourceConfigParam from '../_types/_core.search___SourceConfigParam'
import * as Global from '../_types/_global'

export type Mget_Request = Global.Params & {
  _source?: Core_SearchSourceConfigParam.undefined;
  _source_excludes?: CommonFields.undefined;
  _source_includes?: CommonFields.undefined;
  body: Mget_RequestBody;
  index?: CommonIndexName.undefined;
  preference?: string;
  realtime?: boolean;
  refresh?: boolean;
  routing?: CommonRoutingInQueryString.undefined;
  stored_fields?: CommonFields.undefined;
}

export type Mget_RequestBody = {
  docs?: Core_MgetOperation.undefined[];
  ids?: CommonIds.undefined;
}

export type Mget_Response = ApiResponse & {
  body: Mget_ResponseBody;
}

export type Mget_ResponseBody = {
  docs: Core_MgetResponseItem.undefined[];
}


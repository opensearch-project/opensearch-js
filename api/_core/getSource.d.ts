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
import * as CommonId from '../_types/_common___Id'
import * as CommonIndexName from '../_types/_common___IndexName'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as CommonVersionNumber from '../_types/_common___VersionNumber'
import * as CommonVersionType from '../_types/_common___VersionType'
import * as Core_SearchSourceConfigParam from '../_types/_core.search___SourceConfigParam'
import * as Global from '../_types/_global'

export type GetSource_Request = Global.Params & {
  _source?: Core_SearchSourceConfigParam.undefined;
  _source_excludes?: CommonFields.undefined;
  _source_includes?: CommonFields.undefined;
  id: CommonId.undefined;
  index: CommonIndexName.undefined;
  preference?: string;
  realtime?: boolean;
  refresh?: boolean;
  routing?: CommonRoutingInQueryString.undefined;
  version?: CommonVersionNumber.undefined;
  version_type?: CommonVersionType.undefined;
}

export type GetSource_Response = ApiResponse & {
  body: GetSource_ResponseBody;
}

export type GetSource_ResponseBody = Record<string, any>


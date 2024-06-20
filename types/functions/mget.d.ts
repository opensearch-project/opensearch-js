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

import { ApiResponse } from '../../lib/Transport'
import * as Core_Mget from '../components/_core.mget'
import * as Common from '../components/_common'
import * as Global from '../components/_global'
import * as Core_Search from '../components/_core.search'

export interface Mget_RequestBody {
  docs?: Core_Mget.Operation[];
  ids?: Common.Ids;
}

export interface Mget_Request extends Global.Params {
  _source?: Core_Search.SourceConfigParam;
  _source_excludes?: Common.Fields;
  _source_includes?: Common.Fields;
  body: Mget_RequestBody;
  index?: Common.IndexName;
  preference?: string;
  realtime?: boolean;
  refresh?: boolean;
  routing?: Common.Routing;
  stored_fields?: Common.Fields;
}

export interface Mget_ResponseBody {
  docs: Core_Mget.ResponseItem[];
}

export interface Mget_Response extends ApiResponse {
  body: Mget_ResponseBody
}

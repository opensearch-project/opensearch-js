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
import * as Global from '../components/_global'
import * as Common from '../components/_common'
import * as Common_QueryDsl from '../components/_common.query_dsl'

export interface Request extends Global.Params {
  body?: RequestBody;
  cluster_manager_timeout?: Common.Duration;
  index?: Common.Indices;
  master_timeout?: Common.Duration;
  name?: Common.Name;
  timeout?: Common.Duration;
}

export type ResponseBody = Common.AcknowledgedResponseBase

export interface RequestBody {
  alias?: string;
  filter?: Common_QueryDsl.QueryContainer;
  index?: string;
  index_routing?: Common.Routing;
  is_hidden?: boolean;
  is_write_index?: boolean;
  routing?: Common.Routing;
  search_routing?: Common.Routing;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

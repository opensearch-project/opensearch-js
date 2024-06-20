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
import * as Global from '../_types/_global'
import * as Core_Search from '../_types/_core.search'
import * as Common from '../_types/_common'
import * as Core_Bulk from '../_types/_core.bulk'

export interface Bulk_Request extends Global.Params {
  _source?: Core_Search.SourceConfigParam;
  _source_excludes?: Common.Fields;
  _source_includes?: Common.Fields;
  body: Bulk_RequestBody;
  index?: Common.IndexName;
  pipeline?: string;
  refresh?: Common.Refresh;
  require_alias?: boolean;
  routing?: Common.Routing;
  timeout?: Common.Duration;
  type?: string;
  wait_for_active_shards?: Common.WaitForActiveShards;
}

export type Bulk_RequestBody = Core_Bulk.OperationContainer | Core_Bulk.UpdateAction | Record<string, any>[]

export interface Bulk_Response extends ApiResponse {
  body: Bulk_ResponseBody;
}

export interface Bulk_ResponseBody {
  errors: boolean;
  ingest_took?: number;
  items: Record<string, Core_Bulk.ResponseItem>[];
  took: number;
}


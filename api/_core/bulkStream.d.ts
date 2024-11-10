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
import * as CommonBatchSize from '../_types/_common___BatchSize'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonFields from '../_types/_common___Fields'
import * as CommonIndexName from '../_types/_common___IndexName'
import * as CommonRefresh from '../_types/_common___Refresh'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as CommonWaitForActiveShards from '../_types/_common___WaitForActiveShards'
import * as Core_BulkOperationContainer from '../_types/_core.bulk___OperationContainer'
import * as Core_BulkResponseItem from '../_types/_core.bulk___ResponseItem'
import * as Core_BulkUpdateAction from '../_types/_core.bulk___UpdateAction'
import * as Core_SearchSourceConfigParam from '../_types/_core.search___SourceConfigParam'
import * as Global from '../_types/_global'

export type BulkStream_Request = Global.Params & {
  _source?: Core_SearchSourceConfigParam.undefined;
  _source_excludes?: CommonFields.undefined;
  _source_includes?: CommonFields.undefined;
  batch_interval?: CommonDuration.undefined;
  batch_size?: CommonBatchSize.undefined;
  body: BulkStream_RequestBody;
  index?: CommonIndexName.undefined;
  pipeline?: string;
  refresh?: CommonRefresh.undefined;
  require_alias?: boolean;
  routing?: CommonRoutingInQueryString.undefined;
  timeout?: CommonDuration.undefined;
  type?: string;
  wait_for_active_shards?: CommonWaitForActiveShards.undefined;
}

export type BulkStream_RequestBody = Core_BulkOperationContainer.undefined | Core_BulkUpdateAction.undefined | Record<string, any>[]

export type BulkStream_Response = ApiResponse & {
  body: BulkStream_ResponseBody;
}

export type BulkStream_ResponseBody = {
  errors: boolean;
  ingest_took?: number;
  items: Record<string, Core_BulkResponseItem.undefined>[];
  took: number;
}


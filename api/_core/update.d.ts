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
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonFields from '../_types/_common___Fields'
import * as CommonId from '../_types/_common___Id'
import * as CommonIndexName from '../_types/_common___IndexName'
import * as CommonRefresh from '../_types/_common___Refresh'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as CommonScript from '../_types/_common___Script'
import * as CommonSequenceNumber from '../_types/_common___SequenceNumber'
import * as CommonWaitForActiveShards from '../_types/_common___WaitForActiveShards'
import * as Core_SearchSourceConfig from '../_types/_core.search___SourceConfig'
import * as Core_SearchSourceConfigParam from '../_types/_core.search___SourceConfigParam'
import * as Core_UpdateUpdateWriteResponseBase from '../_types/_core.update___UpdateWriteResponseBase'
import * as Global from '../_types/_global'

export type Update_Request = Global.Params & {
  _source?: Core_SearchSourceConfigParam.undefined;
  _source_excludes?: CommonFields.undefined;
  _source_includes?: CommonFields.undefined;
  body: Update_RequestBody;
  id: CommonId.undefined;
  if_primary_term?: number;
  if_seq_no?: CommonSequenceNumber.undefined;
  index: CommonIndexName.undefined;
  lang?: string;
  refresh?: CommonRefresh.undefined;
  require_alias?: boolean;
  retry_on_conflict?: number;
  routing?: CommonRoutingInQueryString.undefined;
  timeout?: CommonDuration.undefined;
  wait_for_active_shards?: CommonWaitForActiveShards.undefined;
}

export type Update_RequestBody = {
  _source?: Core_SearchSourceConfig.undefined;
  detect_noop?: boolean;
  doc?: Record<string, any>;
  doc_as_upsert?: boolean;
  script?: CommonScript.undefined;
  scripted_upsert?: boolean;
  upsert?: Record<string, any>;
}

export type Update_Response = ApiResponse & {
  body: Update_ResponseBody;
}

export type Update_ResponseBody = Core_UpdateUpdateWriteResponseBase.undefined


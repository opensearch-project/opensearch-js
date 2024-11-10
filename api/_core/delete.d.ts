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
import * as CommonId from '../_types/_common___Id'
import * as CommonIndexName from '../_types/_common___IndexName'
import * as CommonRefresh from '../_types/_common___Refresh'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as CommonSequenceNumber from '../_types/_common___SequenceNumber'
import * as CommonVersionNumber from '../_types/_common___VersionNumber'
import * as CommonVersionType from '../_types/_common___VersionType'
import * as CommonWaitForActiveShards from '../_types/_common___WaitForActiveShards'
import * as CommonWriteResponseBase from '../_types/_common___WriteResponseBase'
import * as Global from '../_types/_global'

export type Delete_Request = Global.Params & {
  id: CommonId.undefined;
  if_primary_term?: number;
  if_seq_no?: CommonSequenceNumber.undefined;
  index: CommonIndexName.undefined;
  refresh?: CommonRefresh.undefined;
  routing?: CommonRoutingInQueryString.undefined;
  timeout?: CommonDuration.undefined;
  version?: CommonVersionNumber.undefined;
  version_type?: CommonVersionType.undefined;
  wait_for_active_shards?: CommonWaitForActiveShards.undefined;
}

export type Delete_Response = ApiResponse & {
  body: Delete_ResponseBody;
}

export type Delete_ResponseBody = CommonWriteResponseBase.undefined


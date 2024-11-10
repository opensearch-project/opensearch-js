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
import * as CommonAcknowledgedResponseBase from '../_types/_common___AcknowledgedResponseBase'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonUuid from '../_types/_common___Uuid'
import * as Global from '../_types/_global'

export type DanglingIndices_ImportDanglingIndex_Request = Global.Params & {
  accept_data_loss: boolean;
  cluster_manager_timeout?: CommonDuration.undefined;
  index_uuid: CommonUuid.undefined;
  master_timeout?: CommonDuration.undefined;
  timeout?: CommonDuration.undefined;
}

export type DanglingIndices_ImportDanglingIndex_Response = ApiResponse & {
  body: DanglingIndices_ImportDanglingIndex_ResponseBody;
}

export type DanglingIndices_ImportDanglingIndex_ResponseBody = CommonAcknowledgedResponseBase.undefined


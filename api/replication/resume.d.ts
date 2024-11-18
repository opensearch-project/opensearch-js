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
import * as Common from '../_types/_common'
import * as Global from '../_types/_global'

export type Replication_Resume_Request = Global.Params & {
  body: Replication_Resume_RequestBody;
  index: Common.IndexName;
}

export type Replication_Resume_RequestBody = Record<string, any>

export type Replication_Resume_Response = ApiResponse & {
  body: Replication_Resume_ResponseBody;
}

export type Replication_Resume_ResponseBody = Common.AcknowledgedResponseBase


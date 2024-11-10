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
import * as CommonId from '../_types/_common___Id'
import * as CommonName from '../_types/_common___Name'
import * as CommonStoredScript from '../_types/_common___StoredScript'
import * as Global from '../_types/_global'

export type PutScript_Request = Global.Params & {
  body: PutScript_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  context?: CommonName.undefined;
  id: CommonId.undefined;
  master_timeout?: CommonDuration.undefined;
  timeout?: CommonDuration.undefined;
}

export type PutScript_RequestBody = {
  script: CommonStoredScript.undefined;
}

export type PutScript_Response = ApiResponse & {
  body: PutScript_ResponseBody;
}

export type PutScript_ResponseBody = CommonAcknowledgedResponseBase.undefined


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
import * as CommonName from '../_types/_common___Name'
import * as Global from '../_types/_global'

export type Cluster_DeleteComponentTemplate_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  master_timeout?: CommonDuration.undefined;
  name: CommonName.undefined;
  timeout?: CommonDuration.undefined;
}

export type Cluster_DeleteComponentTemplate_Response = ApiResponse & {
  body: Cluster_DeleteComponentTemplate_ResponseBody;
}

export type Cluster_DeleteComponentTemplate_ResponseBody = CommonAcknowledgedResponseBase.undefined


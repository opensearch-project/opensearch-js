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
import * as CommonMetadata from '../_types/_common___Metadata'
import * as CommonName from '../_types/_common___Name'
import * as CommonVersionNumber from '../_types/_common___VersionNumber'
import * as Global from '../_types/_global'
import * as Indices_CommonIndexState from '../_types/indices._common___IndexState'

export type Cluster_PutComponentTemplate_Request = Global.Params & {
  body: Cluster_PutComponentTemplate_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  create?: boolean;
  master_timeout?: CommonDuration.undefined;
  name: CommonName.undefined;
  timeout?: CommonDuration.undefined;
}

export type Cluster_PutComponentTemplate_RequestBody = {
  _meta?: CommonMetadata.undefined;
  allow_auto_create?: boolean;
  template: Indices_CommonIndexState.undefined;
  version?: CommonVersionNumber.undefined;
}

export type Cluster_PutComponentTemplate_Response = ApiResponse & {
  body: Cluster_PutComponentTemplate_ResponseBody;
}

export type Cluster_PutComponentTemplate_ResponseBody = CommonAcknowledgedResponseBase.undefined


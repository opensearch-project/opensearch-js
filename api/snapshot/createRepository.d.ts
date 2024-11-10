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
import * as Snapshot_CommonRepository from '../_types/snapshot._common___Repository'
import * as Snapshot_CommonRepositorySettings from '../_types/snapshot._common___RepositorySettings'

export type Snapshot_CreateRepository_Request = Global.Params & {
  body: Snapshot_CreateRepository_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  master_timeout?: CommonDuration.undefined;
  repository: CommonName.undefined;
  timeout?: CommonDuration.undefined;
  verify?: boolean;
}

export type Snapshot_CreateRepository_RequestBody = {
  repository?: Snapshot_CommonRepository.undefined;
  settings: Snapshot_CommonRepositorySettings.undefined;
  type: string;
}

export type Snapshot_CreateRepository_Response = ApiResponse & {
  body: Snapshot_CreateRepository_ResponseBody;
}

export type Snapshot_CreateRepository_ResponseBody = CommonAcknowledgedResponseBase.undefined


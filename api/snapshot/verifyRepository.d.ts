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
import * as CommonName from '../_types/_common___Name'
import * as Global from '../_types/_global'
import * as Snapshot_VerifyRepositoryCompactNodeInfo from '../_types/snapshot.verify_repository___CompactNodeInfo'

export type Snapshot_VerifyRepository_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  master_timeout?: CommonDuration.undefined;
  repository: CommonName.undefined;
  timeout?: CommonDuration.undefined;
}

export type Snapshot_VerifyRepository_Response = ApiResponse & {
  body: Snapshot_VerifyRepository_ResponseBody;
}

export type Snapshot_VerifyRepository_ResponseBody = {
  nodes: Record<string, Snapshot_VerifyRepositoryCompactNodeInfo.undefined>;
}


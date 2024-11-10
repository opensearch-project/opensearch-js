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
import * as CommonNames from '../_types/_common___Names'
import * as Global from '../_types/_global'
import * as Snapshot_CommonSnapshotInfo from '../_types/snapshot._common___SnapshotInfo'

export type Snapshot_Get_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  ignore_unavailable?: boolean;
  master_timeout?: CommonDuration.undefined;
  repository: CommonName.undefined;
  snapshot: CommonNames.undefined;
  verbose?: boolean;
}

export type Snapshot_Get_Response = ApiResponse & {
  body: Snapshot_Get_ResponseBody;
}

export type Snapshot_Get_ResponseBody = {
  snapshots: Snapshot_CommonSnapshotInfo.undefined[];
}


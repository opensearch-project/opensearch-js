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
import * as Global from '../_types/_global'
import * as Common from '../_types/_common'
import * as Snapshot_Get from '../_types/snapshot.get'
import * as Snapshot_Common from '../_types/snapshot._common'

export interface Snapshot_Get_Request extends Global.Params {
  cluster_manager_timeout?: Common.Duration;
  ignore_unavailable?: boolean;
  master_timeout?: Common.Duration;
  repository: Common.Name;
  snapshot: Common.Names;
  verbose?: boolean;
}

export interface Snapshot_Get_Response extends ApiResponse {
  body: Snapshot_Get_ResponseBody;
}

export interface Snapshot_Get_ResponseBody {
  remaining: number;
  responses?: Snapshot_Get.SnapshotResponseItem[];
  snapshots?: Snapshot_Common.SnapshotInfo[];
  total: number;
}


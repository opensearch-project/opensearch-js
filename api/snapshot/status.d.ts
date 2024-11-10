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
import * as Snapshot_CommonStatus from '../_types/snapshot._common___Status'

export type Snapshot_Status_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  ignore_unavailable?: boolean;
  master_timeout?: CommonDuration.undefined;
  repository?: CommonName.undefined;
  snapshot?: CommonNames.undefined;
}

export type Snapshot_Status_Response = ApiResponse & {
  body: Snapshot_Status_ResponseBody;
}

export type Snapshot_Status_ResponseBody = {
  snapshots: Snapshot_CommonStatus.undefined[];
}


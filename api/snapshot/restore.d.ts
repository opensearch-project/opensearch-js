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
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonName from '../_types/_common___Name'
import * as Global from '../_types/_global'
import * as Indices_CommonIndexSettings from '../_types/indices._common___IndexSettings'
import * as Snapshot_RestoreSnapshotRestore from '../_types/snapshot.restore___SnapshotRestore'

export type Snapshot_Restore_Request = Global.Params & {
  body?: Snapshot_Restore_RequestBody;
  cluster_manager_timeout?: CommonDuration.undefined;
  master_timeout?: CommonDuration.undefined;
  repository: CommonName.undefined;
  snapshot: CommonName.undefined;
  wait_for_completion?: boolean;
}

export type Snapshot_Restore_RequestBody = {
  feature_states?: string[];
  ignore_index_settings?: string[];
  ignore_unavailable?: boolean;
  include_aliases?: boolean;
  include_global_state?: boolean;
  index_settings?: Indices_CommonIndexSettings.undefined;
  indices?: CommonIndices.undefined;
  partial?: boolean;
  rename_pattern?: string;
  rename_replacement?: string;
}

export type Snapshot_Restore_Response = ApiResponse & {
  body: Snapshot_Restore_ResponseBody;
}

export type Snapshot_Restore_ResponseBody = {
  accepted?: boolean;
  snapshot?: Snapshot_RestoreSnapshotRestore.undefined;
}


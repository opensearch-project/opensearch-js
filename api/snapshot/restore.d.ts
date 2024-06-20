/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 */

/*
 * This file was generated from OpenSearch API Spec. Do not edit it
 * manually. If you want to make changes, either update the spec or
 * the API generator.
 */

import { ApiResponse } from '../../lib/Transport'
import * as Global from '../_types/_global'
import * as Common from '../_types/_common'
import * as Indices_Common from '../_types/indices._common'
import * as Snapshot_Restore from '../_types/snapshot.restore'

export interface Snapshot_Restore_Request extends Global.Params {
  body?: Snapshot_Restore_RequestBody;
  cluster_manager_timeout?: Common.Duration;
  master_timeout?: Common.Duration;
  repository: Common.Name;
  snapshot: Common.Name;
  wait_for_completion?: boolean;
}

export interface Snapshot_Restore_RequestBody {
  feature_states?: string[];
  ignore_index_settings?: string[];
  ignore_unavailable?: boolean;
  include_aliases?: boolean;
  include_global_state?: boolean;
  index_settings?: Indices_Common.IndexSettings;
  indices?: Common.Indices;
  partial?: boolean;
  rename_pattern?: string;
  rename_replacement?: string;
}

export interface Snapshot_Restore_Response extends ApiResponse {
  body: Snapshot_Restore_ResponseBody;
}

export interface Snapshot_Restore_ResponseBody {
  snapshot: Snapshot_Restore.SnapshotRestore;
}


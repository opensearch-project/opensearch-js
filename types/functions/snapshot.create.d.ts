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

import * as Global from '../components/_global'
import * as Common from '../components/_common'
import * as Snapshot_Common from '../components/snapshot._common'

export interface Request extends Global.Params {
  body?: RequestBody;
  cluster_manager_timeout?: Common.Duration;
  master_timeout?: Common.Duration;
  repository: Common.Name;
  snapshot: Common.Name;
  wait_for_completion?: boolean;
}

export interface Response {
  accepted?: boolean;
  snapshot?: Snapshot_Common.SnapshotInfo;
}

export interface RequestBody {
  feature_states?: string[];
  ignore_unavailable?: boolean;
  include_global_state?: boolean;
  indices?: Common.Indices;
  metadata?: Common.Metadata;
  partial?: boolean;
}


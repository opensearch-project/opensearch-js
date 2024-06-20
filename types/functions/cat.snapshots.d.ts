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
import * as Global from '../components/_global'
import * as Common from '../components/_common'
import * as Cat_Snapshots from '../components/cat.snapshots'

export interface Cat_Snapshots_Request extends Global.Params {
  cluster_manager_timeout?: Common.Duration;
  format?: string;
  h?: string[];
  help?: boolean;
  ignore_unavailable?: boolean;
  master_timeout?: Common.Duration;
  repository?: Common.Names;
  s?: string[];
  time?: Common.TimeUnit;
  v?: boolean;
}

export type Cat_Snapshots_ResponseBody = Cat_Snapshots.SnapshotsRecord[]

export interface Cat_Snapshots_Response extends ApiResponse {
  body: Cat_Snapshots_ResponseBody
}

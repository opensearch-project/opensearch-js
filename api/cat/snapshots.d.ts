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
import * as Cat_SnapshotsSnapshotsRecord from '../_types/cat.snapshots___SnapshotsRecord'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonNames from '../_types/_common___Names'
import * as CommonTimeUnit from '../_types/_common___TimeUnit'
import * as Global from '../_types/_global'

export type Cat_Snapshots_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  format?: string;
  h?: string[];
  help?: boolean;
  ignore_unavailable?: boolean;
  master_timeout?: CommonDuration.undefined;
  repository?: CommonNames.undefined;
  s?: string[];
  time?: CommonTimeUnit.undefined;
  v?: boolean;
}

export type Cat_Snapshots_Response = ApiResponse & {
  body: Cat_Snapshots_ResponseBody;
}

export type Cat_Snapshots_ResponseBody = Cat_SnapshotsSnapshotsRecord.undefined[]


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
import * as CommonBulkByScrollResponseBase from '../_types/_common___BulkByScrollResponseBase'
import * as CommonConflicts from '../_types/_common___Conflicts'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonScript from '../_types/_common___Script'
import * as CommonSlices from '../_types/_common___Slices'
import * as CommonTaskId from '../_types/_common___TaskId'
import * as CommonWaitForActiveShards from '../_types/_common___WaitForActiveShards'
import * as Core_ReindexDestination from '../_types/_core.reindex___Destination'
import * as Core_ReindexSource from '../_types/_core.reindex___Source'
import * as Global from '../_types/_global'

export type Reindex_Request = Global.Params & {
  body: Reindex_RequestBody;
  max_docs?: number;
  refresh?: boolean;
  requests_per_second?: number;
  scroll?: CommonDuration.undefined;
  slices?: CommonSlices.undefined;
  timeout?: CommonDuration.undefined;
  wait_for_active_shards?: CommonWaitForActiveShards.undefined;
  wait_for_completion?: boolean;
}

export type Reindex_RequestBody = {
  conflicts?: CommonConflicts.undefined;
  dest: Core_ReindexDestination.undefined;
  max_docs?: number;
  script?: CommonScript.undefined;
  size?: number;
  source: Core_ReindexSource.undefined;
}

export type Reindex_Response = ApiResponse & {
  body: Reindex_ResponseBody;
}

export type Reindex_ResponseBody = CommonBulkByScrollResponseBase.undefined | {
  task?: CommonTaskId.undefined;
}


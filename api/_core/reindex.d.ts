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
import * as Core_Reindex from '../_types/_core.reindex'

export interface Reindex_Request extends Global.Params {
  body: Reindex_RequestBody;
  max_docs?: number;
  refresh?: boolean;
  requests_per_second?: number;
  scroll?: Common.Duration;
  slices?: Common.Slices;
  timeout?: Common.Duration;
  wait_for_active_shards?: Common.WaitForActiveShards;
  wait_for_completion?: boolean;
}

export interface Reindex_RequestBody {
  conflicts?: Common.Conflicts;
  dest: Core_Reindex.Destination;
  max_docs?: number;
  script?: Common.Script;
  size?: number;
  source: Core_Reindex.Source;
}

export interface Reindex_Response extends ApiResponse {
  body: Reindex_ResponseBody;
}

export interface Reindex_ResponseBody {
  batches?: number;
  created?: number;
  deleted?: number;
  failures?: Common.BulkIndexByScrollFailure[];
  noops?: number;
  requests_per_second?: number;
  retries?: Common.Retries;
  slice_id?: number;
  task?: Common.TaskId;
  throttled_millis?: Common.EpochTimeUnitMillis;
  throttled_until_millis?: Common.EpochTimeUnitMillis;
  timed_out?: boolean;
  took?: Common.DurationValueUnitMillis;
  total?: number;
  updated?: number;
  version_conflicts?: number;
}


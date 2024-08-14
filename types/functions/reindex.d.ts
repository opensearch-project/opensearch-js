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
import * as Core_Reindex from '../components/_core.reindex'

export interface Request extends Global.Params {
  body: RequestBody;
  max_docs?: number;
  refresh?: boolean;
  requests_per_second?: number;
  scroll?: Common.Duration;
  slices?: Common.Slices;
  timeout?: Common.Duration;
  wait_for_active_shards?: Common.WaitForActiveShards;
  wait_for_completion?: boolean;
}

export interface ResponseBody {
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

export interface RequestBody {
  conflicts?: Common.Conflicts;
  dest: Core_Reindex.Destination;
  max_docs?: number;
  script?: Common.Script;
  size?: number;
  source: Core_Reindex.Source;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

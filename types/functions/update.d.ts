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
import * as Core_Search from '../components/_core.search'
import * as Common from '../components/_common'
import * as Core_Update from '../components/_core.update'

export interface Request extends Global.Params {
  _source?: Core_Search.SourceConfigParam;
  _source_excludes?: Common.Fields;
  _source_includes?: Common.Fields;
  body: RequestBody;
  id: Common.Id;
  if_primary_term?: number;
  if_seq_no?: Common.SequenceNumber;
  index: Common.IndexName;
  lang?: string;
  refresh?: Common.Refresh;
  require_alias?: boolean;
  retry_on_conflict?: number;
  routing?: Common.Routing;
  timeout?: Common.Duration;
  wait_for_active_shards?: Common.WaitForActiveShards;
}

export type ResponseBody = Core_Update.UpdateWriteResponseBase

export interface RequestBody {
  _source?: Core_Search.SourceConfig;
  detect_noop?: boolean;
  doc?: Record<string, any>;
  doc_as_upsert?: boolean;
  script?: Common.Script;
  scripted_upsert?: boolean;
  upsert?: Record<string, any>;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

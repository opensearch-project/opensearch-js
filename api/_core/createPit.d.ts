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
import * as Core_Common from '../_types/_core._common'

export interface CreatePit_Request extends Global.Params {
  allow_partial_pit_creation?: boolean;
  expand_wildcards?: Common.ExpandWildcards;
  index: string[];
  keep_alive?: Common.Duration;
  preference?: string;
  routing?: string[];
}

export interface CreatePit_Response extends ApiResponse {
  body: CreatePit_ResponseBody;
}

export interface CreatePit_ResponseBody {
  _shards?: Core_Common.ShardStatistics;
  creation_time?: number;
  pit_id?: string;
}


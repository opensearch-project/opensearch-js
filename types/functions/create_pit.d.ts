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
import * as Core_Common from '../components/_core._common'

export interface Request extends Global.Params {
  allow_partial_pit_creation?: boolean;
  expand_wildcards?: Common.ExpandWildcards;
  index: string[];
  keep_alive?: Common.Duration;
  preference?: string;
  routing?: string[];
}

export interface ResponseBody {
  _shards?: Core_Common.ShardStatistics;
  creation_time?: number;
  pit_id?: string;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

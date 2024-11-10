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
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as Core_CommonShardStatistics from '../_types/_core._common___ShardStatistics'
import * as Global from '../_types/_global'

export type CreatePit_Request = Global.Params & {
  allow_partial_pit_creation?: boolean;
  expand_wildcards?: CommonExpandWildcards.undefined;
  index: string[];
  keep_alive?: CommonDuration.undefined;
  preference?: string;
  routing?: CommonRoutingInQueryString.undefined;
}

export type CreatePit_Response = ApiResponse & {
  body: CreatePit_ResponseBody;
}

export type CreatePit_ResponseBody = {
  _shards?: Core_CommonShardStatistics.undefined;
  creation_time?: number;
  pit_id?: string;
}


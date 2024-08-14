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
import * as Cat_Common from '../components/cat._common'

export interface Request extends Global.Params {
  active_only?: boolean;
  allow_no_indices?: boolean;
  bytes?: Common.Bytes;
  completed_only?: boolean;
  detailed?: boolean;
  expand_wildcards?: Common.ExpandWildcards;
  format?: string;
  h?: string[];
  help?: boolean;
  ignore_throttled?: boolean;
  ignore_unavailable?: boolean;
  index?: string[];
  s?: string[];
  shards?: string[];
  time?: Common.TimeUnit;
  timeout?: Common.Duration;
  v?: boolean;
}

export type ResponseBody = Cat_Common.CatSegmentReplicationRecord[]

export interface Response extends ApiResponse {
  body: ResponseBody
}

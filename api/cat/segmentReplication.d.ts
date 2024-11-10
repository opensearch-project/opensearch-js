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
import * as Cat_CommonCatSegmentReplicationRecord from '../_types/cat._common___CatSegmentReplicationRecord'
import * as CommonByteUnit from '../_types/_common___ByteUnit'
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonExpandWildcards from '../_types/_common___ExpandWildcards'
import * as CommonTimeUnit from '../_types/_common___TimeUnit'
import * as Global from '../_types/_global'

export type Cat_SegmentReplication_Request = Global.Params & {
  active_only?: boolean;
  allow_no_indices?: boolean;
  bytes?: CommonByteUnit.undefined;
  completed_only?: boolean;
  detailed?: boolean;
  expand_wildcards?: CommonExpandWildcards.undefined;
  format?: string;
  h?: string[];
  help?: boolean;
  ignore_throttled?: boolean;
  ignore_unavailable?: boolean;
  index?: string[];
  s?: string[];
  shards?: string[];
  time?: CommonTimeUnit.undefined;
  timeout?: CommonDuration.undefined;
  v?: boolean;
}

export type Cat_SegmentReplication_Response = ApiResponse & {
  body: Cat_SegmentReplication_ResponseBody;
}

export type Cat_SegmentReplication_ResponseBody = Cat_CommonCatSegmentReplicationRecord.undefined[]


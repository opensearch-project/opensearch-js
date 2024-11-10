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
import * as Cat_CommonCatPitSegmentsRecord from '../_types/cat._common___CatPitSegmentsRecord'
import * as CommonByteUnit from '../_types/_common___ByteUnit'
import * as Global from '../_types/_global'

export type Cat_AllPitSegments_Request = Global.Params & {
  bytes?: CommonByteUnit.undefined;
  format?: string;
  h?: string[];
  help?: boolean;
  s?: string[];
  v?: boolean;
}

export type Cat_AllPitSegments_Response = ApiResponse & {
  body: Cat_AllPitSegments_ResponseBody;
}

export type Cat_AllPitSegments_ResponseBody = Cat_CommonCatPitSegmentsRecord.undefined[]


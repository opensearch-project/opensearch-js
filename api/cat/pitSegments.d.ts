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
import * as Cat_Common from '../_types/cat._common'

export interface Cat_PitSegments_Request extends Global.Params {
  body?: Cat_PitSegments_RequestBody;
  bytes?: Common.Bytes;
  format?: string;
  h?: string[];
  help?: boolean;
  s?: string[];
  v?: boolean;
}

export interface Cat_PitSegments_RequestBody {
  pit_id: string[];
}

export interface Cat_PitSegments_Response extends ApiResponse {
  body: Cat_PitSegments_ResponseBody;
}

export type Cat_PitSegments_ResponseBody = Cat_Common.CatPitSegmentsRecord[]


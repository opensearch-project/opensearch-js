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
import * as Cat_Segments from '../_types/cat.segments'

export interface Cat_Segments_Request extends Global.Params {
  bytes?: Common.Bytes;
  cluster_manager_timeout?: Common.Duration;
  format?: string;
  h?: string[];
  help?: boolean;
  index?: Common.Indices;
  master_timeout?: Common.Duration;
  s?: string[];
  v?: boolean;
}

export interface Cat_Segments_Response extends ApiResponse {
  body: Cat_Segments_ResponseBody;
}

export type Cat_Segments_ResponseBody = Cat_Segments.SegmentsRecord[]


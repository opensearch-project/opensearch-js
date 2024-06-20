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
import * as Common from '../components/_common'
import * as Global from '../components/_global'

export interface ClearScroll_RequestBody {
  scroll_id?: Common.ScrollIds;
}

export interface ClearScroll_Request extends Global.Params {
  body?: ClearScroll_RequestBody;
  scroll_id?: Common.ScrollIds;
}

export interface ClearScroll_ResponseBody {
  num_freed: number;
  succeeded: boolean;
}

export interface ClearScroll_Response extends ApiResponse {
  body: ClearScroll_ResponseBody
}

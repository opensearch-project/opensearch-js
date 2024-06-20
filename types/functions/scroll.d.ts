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
import * as Core_Search from '../components/_core.search'

export interface Scroll_RequestBody {
  scroll?: Common.Duration;
  scroll_id: Common.ScrollId;
}

export interface Scroll_Request extends Global.Params {
  body?: Scroll_RequestBody;
  rest_total_hits_as_int?: boolean;
  scroll?: Common.Duration;
  scroll_id?: Common.ScrollId;
}

export type Scroll_ResponseBody = Core_Search.ResponseBody

export interface Scroll_Response extends ApiResponse {
  body: Scroll_ResponseBody
}

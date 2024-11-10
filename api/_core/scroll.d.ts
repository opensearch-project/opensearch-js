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
import * as CommonScrollId from '../_types/_common___ScrollId'
import * as Core_SearchResponseBody from '../_types/_core.search___ResponseBody'
import * as Global from '../_types/_global'

export type Scroll_Request = Global.Params & {
  body?: Scroll_RequestBody;
  rest_total_hits_as_int?: boolean;
  scroll?: CommonDuration.undefined;
  scroll_id?: CommonScrollId.undefined;
}

export type Scroll_RequestBody = {
  scroll?: CommonDuration.undefined;
  scroll_id: CommonScrollId.undefined;
}

export type Scroll_Response = ApiResponse & {
  body: Scroll_ResponseBody;
}

export type Scroll_ResponseBody = Core_SearchResponseBody.undefined


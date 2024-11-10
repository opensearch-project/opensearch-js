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
import * as CommonNames from '../_types/_common___Names'
import * as Global from '../_types/_global'

export type Indices_ExistsTemplate_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  flat_settings?: boolean;
  local?: boolean;
  master_timeout?: CommonDuration.undefined;
  name: CommonNames.undefined;
}

export type Indices_ExistsTemplate_Response = ApiResponse & {
  body: Indices_ExistsTemplate_ResponseBody;
}

export type Indices_ExistsTemplate_ResponseBody = Record<string, any>


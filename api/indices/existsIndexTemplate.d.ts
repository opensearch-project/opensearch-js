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
import * as CommonName from '../_types/_common___Name'
import * as Global from '../_types/_global'

export type Indices_ExistsIndexTemplate_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  flat_settings?: boolean;
  local?: boolean;
  master_timeout?: CommonDuration.undefined;
  name: CommonName.undefined;
}

export type Indices_ExistsIndexTemplate_Response = ApiResponse & {
  body: Indices_ExistsIndexTemplate_ResponseBody;
}

export type Indices_ExistsIndexTemplate_ResponseBody = Record<string, any>


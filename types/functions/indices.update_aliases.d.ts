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
import * as Indices_UpdateAliases from '../components/indices.update_aliases'
import * as Global from '../components/_global'
import * as Common from '../components/_common'

export interface Indices_UpdateAliases_RequestBody {
  actions?: Indices_UpdateAliases.Action[];
}

export interface Indices_UpdateAliases_Request extends Global.Params {
  body: Indices_UpdateAliases_RequestBody;
  cluster_manager_timeout?: Common.Duration;
  master_timeout?: Common.Duration;
  timeout?: Common.Duration;
}

export type Indices_UpdateAliases_ResponseBody = Common.AcknowledgedResponseBase

export interface Indices_UpdateAliases_Response extends ApiResponse {
  body: Indices_UpdateAliases_ResponseBody
}

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
import * as Global from '../components/_global'
import * as Common from '../components/_common'

export interface GetScript_Request extends Global.Params {
  cluster_manager_timeout?: Common.Duration;
  id: Common.Id;
  master_timeout?: Common.Duration;
}

export interface GetScript_ResponseBody {
  _id: Common.Id;
  found: boolean;
  script?: Common.StoredScript;
}

export interface GetScript_Response extends ApiResponse {
  body: GetScript_ResponseBody
}

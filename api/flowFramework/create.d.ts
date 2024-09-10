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
import * as Global from '../_types/_global'
import * as FlowFramework_Common from '../_types/flow_framework.common'

export interface FlowFramework_Create_Request extends Global.Params {
  body?: FlowFramework_Common.FlowFrameworkCreate;
  provision?: boolean;
  reprovision?: boolean;
  use_case?: string;
  validation?: string;
}

export interface FlowFramework_Create_Response extends ApiResponse {
  body: FlowFramework_Create_ResponseBody;
}

export interface FlowFramework_Create_ResponseBody {
  workflow_id: string;
}


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
import * as FlowFramework_CommonAllowDelete from '../_types/flow_framework.common___AllowDelete'
import * as FlowFramework_CommonWorkflowId from '../_types/flow_framework.common___WorkflowID'
import * as FlowFramework_CommonWorkflowIdResponse from '../_types/flow_framework.common___WorkflowIDResponse'
import * as Global from '../_types/_global'

export type FlowFramework_Deprovision_Request = Global.Params & {
  allow_delete?: FlowFramework_CommonAllowDelete.undefined;
  workflow_id: FlowFramework_CommonWorkflowId.undefined;
}

export type FlowFramework_Deprovision_Response = ApiResponse & {
  body: FlowFramework_Deprovision_ResponseBody;
}

export type FlowFramework_Deprovision_ResponseBody = FlowFramework_CommonWorkflowIdResponse.undefined


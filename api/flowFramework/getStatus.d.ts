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
import * as FlowFramework_CommonAll from '../_types/flow_framework.common___All'
import * as FlowFramework_CommonWorkflowId from '../_types/flow_framework.common___WorkflowID'
import * as FlowFramework_CommonWorkFlowStatusDefaultResponse from '../_types/flow_framework.common___WorkFlowStatusDefaultResponse'
import * as FlowFramework_CommonWorkFlowStatusFullResponse from '../_types/flow_framework.common___WorkFlowStatusFullResponse'
import * as Global from '../_types/_global'

export type FlowFramework_GetStatus_Request = Global.Params & {
  all?: FlowFramework_CommonAll.undefined;
  workflow_id: FlowFramework_CommonWorkflowId.undefined;
}

export type FlowFramework_GetStatus_Response = ApiResponse & {
  body: FlowFramework_GetStatus_ResponseBody;
}

export type FlowFramework_GetStatus_ResponseBody = FlowFramework_CommonWorkFlowStatusFullResponse.undefined | FlowFramework_CommonWorkFlowStatusDefaultResponse.undefined


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
import * as FlowFramework_CommonSearchWorkflowRequest from '../_types/flow_framework.common___SearchWorkflowRequest'
import * as FlowFramework_CommonWorkflowSearchStateResponse from '../_types/flow_framework.common___WorkflowSearchStateResponse'
import * as Global from '../_types/_global'

export type FlowFramework_SearchState_Request = Global.Params & {
  body: FlowFramework_CommonSearchWorkflowRequest.undefined;
}

export type FlowFramework_SearchState_Response = ApiResponse & {
  body: FlowFramework_SearchState_ResponseBody;
}

export type FlowFramework_SearchState_ResponseBody = FlowFramework_CommonWorkflowSearchStateResponse.undefined


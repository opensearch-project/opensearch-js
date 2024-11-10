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
import * as FlowFramework_CommonFlowFrameworkUpdate from '../_types/flow_framework.common___FlowFrameworkUpdate'
import * as FlowFramework_CommonProvision from '../_types/flow_framework.common___Provision'
import * as FlowFramework_CommonReprovision from '../_types/flow_framework.common___Reprovision'
import * as FlowFramework_CommonUpdateFields from '../_types/flow_framework.common___UpdateFields'
import * as FlowFramework_CommonUseCase from '../_types/flow_framework.common___UseCase'
import * as FlowFramework_CommonValidation from '../_types/flow_framework.common___Validation'
import * as FlowFramework_CommonWorkflowId from '../_types/flow_framework.common___WorkflowID'
import * as Global from '../_types/_global'

export type FlowFramework_Update_Request = Global.Params & {
  body?: FlowFramework_CommonFlowFrameworkUpdate.undefined;
  provision?: FlowFramework_CommonProvision.undefined;
  reprovision?: FlowFramework_CommonReprovision.undefined;
  update_fields?: FlowFramework_CommonUpdateFields.undefined;
  use_case?: FlowFramework_CommonUseCase.undefined;
  validation?: FlowFramework_CommonValidation.undefined;
  workflow_id: FlowFramework_CommonWorkflowId.undefined;
}

export type FlowFramework_Update_Response = ApiResponse & {
  body: FlowFramework_Update_ResponseBody;
}

export type FlowFramework_Update_ResponseBody = {
  workflow_id: string;
}


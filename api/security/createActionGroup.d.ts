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
import * as Security_CommonActionGroup from '../_types/security._common___ActionGroup'
import * as Security_CommonOk from '../_types/security._common___Ok'

export type Security_CreateActionGroup_Request = Global.Params & {
  action_group: string;
  body: Security_CommonActionGroup.undefined;
}

export type Security_CreateActionGroup_Response = ApiResponse & {
  body: Security_CreateActionGroup_ResponseBody;
}

export type Security_CreateActionGroup_ResponseBody = Security_CommonOk.undefined


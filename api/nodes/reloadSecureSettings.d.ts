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
import * as CommonNodeIds from '../_types/_common___NodeIds'
import * as CommonPassword from '../_types/_common___Password'
import * as Global from '../_types/_global'
import * as Nodes_ReloadSecureSettingsResponseBase from '../_types/nodes.reload_secure_settings___ResponseBase'

export type Nodes_ReloadSecureSettings_Request = Global.Params & {
  body?: Nodes_ReloadSecureSettings_RequestBody;
  node_id?: CommonNodeIds.undefined;
  timeout?: CommonDuration.undefined;
}

export type Nodes_ReloadSecureSettings_RequestBody = {
  secure_settings_password?: CommonPassword.undefined;
}

export type Nodes_ReloadSecureSettings_Response = ApiResponse & {
  body: Nodes_ReloadSecureSettings_ResponseBody;
}

export type Nodes_ReloadSecureSettings_ResponseBody = Nodes_ReloadSecureSettingsResponseBase.undefined


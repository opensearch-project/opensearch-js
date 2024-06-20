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
import * as Global from '../_types/_global'
import * as Common from '../_types/_common'
import * as Nodes_ReloadSecureSettings from '../_types/nodes.reload_secure_settings'

export interface Nodes_ReloadSecureSettings_Request extends Global.Params {
  body?: Nodes_ReloadSecureSettings_RequestBody;
  node_id?: Common.NodeIds;
  timeout?: Common.Duration;
}

export interface Nodes_ReloadSecureSettings_RequestBody {
  secure_settings_password?: Common.Password;
}

export interface Nodes_ReloadSecureSettings_Response extends ApiResponse {
  body: Nodes_ReloadSecureSettings_ResponseBody;
}

export type Nodes_ReloadSecureSettings_ResponseBody = Nodes_ReloadSecureSettings.ResponseBase


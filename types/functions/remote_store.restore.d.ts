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
import * as RemoteStore_Common from '../components/remote_store._common'

export interface RemoteStore_Restore_RequestBody {
  indices: string[];
}

export interface RemoteStore_Restore_Request extends Global.Params {
  body: RemoteStore_Restore_RequestBody;
  cluster_manager_timeout?: Common.Duration;
  wait_for_completion?: boolean;
}

export interface RemoteStore_Restore_ResponseBody {
  accepted?: boolean;
  remote_store?: RemoteStore_Common.RemoteStoreRestoreInfo;
}

export interface RemoteStore_Restore_Response extends ApiResponse {
  body: RemoteStore_Restore_ResponseBody
}

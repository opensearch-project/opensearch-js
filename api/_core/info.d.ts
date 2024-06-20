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

export type Info_Request = Global.Params & Record<string, any>

export interface Info_Response extends ApiResponse {
  body: Info_ResponseBody;
}

export interface Info_ResponseBody {
  cluster_name: Common.Name;
  cluster_uuid: Common.Uuid;
  name: Common.Name;
  tagline: string;
  version: Common.OpenSearchVersionInfo;
}


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
import * as CommonName from '../_types/_common___Name'
import * as CommonOpenSearchVersionInfo from '../_types/_common___OpenSearchVersionInfo'
import * as CommonUuid from '../_types/_common___Uuid'
import * as Global from '../_types/_global'

export type Info_Request = Global.Params & Record<string, any>

export type Info_Response = ApiResponse & {
  body: Info_ResponseBody;
}

export type Info_ResponseBody = {
  cluster_name: CommonName.undefined;
  cluster_uuid: CommonUuid.undefined;
  name: CommonName.undefined;
  tagline: string;
  version: CommonOpenSearchVersionInfo.undefined;
}


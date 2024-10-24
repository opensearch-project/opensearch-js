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
import * as Security_Common from '../_types/security._common'

export type Security_UpdateDistinguishedName_Request = Global.Params & {
  body?: Security_Common.DistinguishedNames;
  cluster_name: string;
}

export type Security_UpdateDistinguishedName_Response = ApiResponse & {
  body: Security_UpdateDistinguishedName_ResponseBody;
}

export type Security_UpdateDistinguishedName_ResponseBody = Security_Common.Ok


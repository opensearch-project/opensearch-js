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
import * as Security_CommonOk from '../_types/security._common___Ok'
import * as Security_CommonPatchOperation from '../_types/security._common___PatchOperation'

export type Security_PatchDistinguishedName_Request = Global.Params & {
  body?: Security_CommonPatchOperation.undefined;
  cluster_name: string;
}

export type Security_PatchDistinguishedName_Response = ApiResponse & {
  body: Security_PatchDistinguishedName_ResponseBody;
}

export type Security_PatchDistinguishedName_ResponseBody = Security_CommonOk.undefined


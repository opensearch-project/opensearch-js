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
import * as Global from '../_types/_global'
import * as Security_CommonGetCertificatesNew from '../_types/security._common___GetCertificatesNew'

export type Security_GetAllCertificates_Request = Global.Params & {
  cert_type?: string;
  timeout?: CommonDuration.undefined;
}

export type Security_GetAllCertificates_Response = ApiResponse & {
  body: Security_GetAllCertificates_ResponseBody;
}

export type Security_GetAllCertificates_ResponseBody = Security_CommonGetCertificatesNew.undefined


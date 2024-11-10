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
import * as CommonSequenceNumber from '../_types/_common___SequenceNumber'
import * as Global from '../_types/_global'
import * as Ism_CommonPutPolicyRequest from '../_types/ism._common___PutPolicyRequest'
import * as Ism_CommonPutPolicyResponse from '../_types/ism._common___PutPolicyResponse'

export type Ism_PutPolicies_Request = Global.Params & {
  body?: Ism_CommonPutPolicyRequest.undefined;
  if_primary_term?: number;
  if_seq_no?: CommonSequenceNumber.undefined;
  policyID: string;
}

export type Ism_PutPolicies_Response = ApiResponse & {
  body: Ism_PutPolicies_ResponseBody;
}

export type Ism_PutPolicies_ResponseBody = Ism_CommonPutPolicyResponse.undefined


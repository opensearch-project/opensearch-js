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
import * as CommonIndices from '../_types/_common___Indices'
import * as Global from '../_types/_global'
import * as Indices_RecoveryRecoveryStatus from '../_types/indices.recovery___RecoveryStatus'

export type Indices_Recovery_Request = Global.Params & {
  active_only?: boolean;
  detailed?: boolean;
  index?: CommonIndices.undefined;
}

export type Indices_Recovery_Response = ApiResponse & {
  body: Indices_Recovery_ResponseBody;
}

export type Indices_Recovery_ResponseBody = Record<string, Indices_RecoveryRecoveryStatus.undefined>


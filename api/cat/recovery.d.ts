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
import * as Cat_RecoveryRecoveryRecord from '../_types/cat.recovery___RecoveryRecord'
import * as CommonByteUnit from '../_types/_common___ByteUnit'
import * as CommonIndices from '../_types/_common___Indices'
import * as CommonTimeUnit from '../_types/_common___TimeUnit'
import * as Global from '../_types/_global'

export type Cat_Recovery_Request = Global.Params & {
  active_only?: boolean;
  bytes?: CommonByteUnit.undefined;
  detailed?: boolean;
  format?: string;
  h?: string[];
  help?: boolean;
  index?: CommonIndices.undefined;
  s?: string[];
  time?: CommonTimeUnit.undefined;
  v?: boolean;
}

export type Cat_Recovery_Response = ApiResponse & {
  body: Cat_Recovery_ResponseBody;
}

export type Cat_Recovery_ResponseBody = Cat_RecoveryRecoveryRecord.undefined[]


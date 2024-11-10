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
import * as CommonId from '../_types/_common___Id'
import * as CommonSequenceNumber from '../_types/_common___SequenceNumber'
import * as Global from '../_types/_global'
import * as Rollups_CommonRollupEntity from '../_types/rollups._common___RollupEntity'

export type Rollups_Put_Request = Global.Params & {
  body?: Rollups_CommonRollupEntity.undefined;
  id: CommonId.undefined;
  if_primary_term?: number;
  if_seq_no?: CommonSequenceNumber.undefined;
}

export type Rollups_Put_Response = ApiResponse & {
  body: Rollups_Put_ResponseBody;
}

export type Rollups_Put_ResponseBody = Rollups_CommonRollupEntity.undefined


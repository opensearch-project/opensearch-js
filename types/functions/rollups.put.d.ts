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
import * as Rollups_Common from '../components/rollups._common'
import * as Common from '../components/_common'

export interface Request extends Global.Params {
  body?: Rollups_Common.RollupEntity;
  id: Common.Id;
  if_primary_term?: number;
  if_seq_no?: Common.SequenceNumber;
}

export type ResponseBody = Rollups_Common.RollupEntity

export interface Response extends ApiResponse {
  body: ResponseBody
}

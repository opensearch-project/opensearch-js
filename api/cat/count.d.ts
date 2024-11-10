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
import * as Cat_CountCountRecord from '../_types/cat.count___CountRecord'
import * as CommonIndices from '../_types/_common___Indices'
import * as Global from '../_types/_global'

export type Cat_Count_Request = Global.Params & {
  format?: string;
  h?: string[];
  help?: boolean;
  index?: CommonIndices.undefined;
  s?: string[];
  v?: boolean;
}

export type Cat_Count_Response = ApiResponse & {
  body: Cat_Count_ResponseBody;
}

export type Cat_Count_ResponseBody = Cat_CountCountRecord.undefined[]


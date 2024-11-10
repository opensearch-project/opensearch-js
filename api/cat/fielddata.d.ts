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
import * as Cat_FielddataFielddataRecord from '../_types/cat.fielddata___FielddataRecord'
import * as CommonByteUnit from '../_types/_common___ByteUnit'
import * as CommonFields from '../_types/_common___Fields'
import * as Global from '../_types/_global'

export type Cat_Fielddata_Request = Global.Params & {
  bytes?: CommonByteUnit.undefined;
  fields?: CommonFields.undefined;
  format?: string;
  h?: string[];
  help?: boolean;
  s?: string[];
  v?: boolean;
}

export type Cat_Fielddata_Response = ApiResponse & {
  body: Cat_Fielddata_ResponseBody;
}

export type Cat_Fielddata_ResponseBody = Cat_FielddataFielddataRecord.undefined[]


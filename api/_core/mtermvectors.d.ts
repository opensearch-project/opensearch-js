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
import * as CommonFields from '../_types/_common___Fields'
import * as CommonId from '../_types/_common___Id'
import * as CommonIndexName from '../_types/_common___IndexName'
import * as CommonRoutingInQueryString from '../_types/_common___RoutingInQueryString'
import * as CommonVersionNumber from '../_types/_common___VersionNumber'
import * as CommonVersionType from '../_types/_common___VersionType'
import * as Core_MtermvectorsOperation from '../_types/_core.mtermvectors___Operation'
import * as Core_MtermvectorsTermVectorsResult from '../_types/_core.mtermvectors___TermVectorsResult'
import * as Global from '../_types/_global'

export type Mtermvectors_Request = Global.Params & {
  body?: Mtermvectors_RequestBody;
  field_statistics?: boolean;
  fields?: CommonFields.undefined;
  ids?: CommonId.undefined[];
  index?: CommonIndexName.undefined;
  offsets?: boolean;
  payloads?: boolean;
  positions?: boolean;
  preference?: string;
  realtime?: boolean;
  routing?: CommonRoutingInQueryString.undefined;
  term_statistics?: boolean;
  version?: CommonVersionNumber.undefined;
  version_type?: CommonVersionType.undefined;
}

export type Mtermvectors_RequestBody = {
  docs?: Core_MtermvectorsOperation.undefined[];
  ids?: CommonId.undefined[];
}

export type Mtermvectors_Response = ApiResponse & {
  body: Mtermvectors_ResponseBody;
}

export type Mtermvectors_ResponseBody = {
  docs: Core_MtermvectorsTermVectorsResult.undefined[];
}


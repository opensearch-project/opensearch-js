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
import * as Core_TermvectorsFilter from '../_types/_core.termvectors___Filter'
import * as Core_TermvectorsTermVector from '../_types/_core.termvectors___TermVector'
import * as Global from '../_types/_global'

export type Termvectors_Request = Global.Params & {
  body?: Termvectors_RequestBody;
  field_statistics?: boolean;
  fields?: CommonFields.undefined;
  id?: CommonId.undefined;
  index: CommonIndexName.undefined;
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

export type Termvectors_RequestBody = {
  doc?: Record<string, any>;
  filter?: Core_TermvectorsFilter.undefined;
  per_field_analyzer?: Record<string, string>;
}

export type Termvectors_Response = ApiResponse & {
  body: Termvectors_ResponseBody;
}

export type Termvectors_ResponseBody = {
  _id: CommonId.undefined;
  _index: CommonIndexName.undefined;
  _version: CommonVersionNumber.undefined;
  found: boolean;
  term_vectors?: Record<string, Core_TermvectorsTermVector.undefined>;
  took: number;
}


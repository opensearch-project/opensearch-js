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
import * as Common from '../components/_common'
import * as Core_Termvectors from '../components/_core.termvectors'

export interface Request extends Global.Params {
  body?: RequestBody;
  field_statistics?: boolean;
  fields?: Common.Fields;
  id?: Common.Id;
  index: Common.IndexName;
  offsets?: boolean;
  payloads?: boolean;
  positions?: boolean;
  preference?: string;
  realtime?: boolean;
  routing?: Common.Routing;
  term_statistics?: boolean;
  version?: Common.VersionNumber;
  version_type?: Common.VersionType;
}

export interface ResponseBody {
  _id: Common.Id;
  _index: Common.IndexName;
  _version: Common.VersionNumber;
  found: boolean;
  term_vectors?: Record<string, Core_Termvectors.TermVector>;
  took: number;
}

export interface RequestBody {
  doc?: Record<string, any>;
  filter?: Core_Termvectors.Filter;
  per_field_analyzer?: Record<string, string>;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

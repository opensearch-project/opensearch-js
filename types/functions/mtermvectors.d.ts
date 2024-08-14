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
import * as Core_Mtermvectors from '../components/_core.mtermvectors'

export interface Request extends Global.Params {
  body?: RequestBody;
  field_statistics?: boolean;
  fields?: Common.Fields;
  ids?: Common.Id[];
  index?: Common.IndexName;
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
  docs: Core_Mtermvectors.TermVectorsResult[];
}

export interface RequestBody {
  docs?: Core_Mtermvectors.Operation[];
  ids?: Common.Id[];
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

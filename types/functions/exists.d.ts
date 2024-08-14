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
import * as Core_Search from '../components/_core.search'
import * as Common from '../components/_common'

export interface Request extends Global.Params {
  _source?: Core_Search.SourceConfigParam;
  _source_excludes?: Common.Fields;
  _source_includes?: Common.Fields;
  id: Common.Id;
  index: Common.IndexName;
  preference?: string;
  realtime?: boolean;
  refresh?: boolean;
  routing?: Common.Routing;
  stored_fields?: Common.Fields;
  version?: Common.VersionNumber;
  version_type?: Common.VersionType;
}

export type ResponseBody = Record<string, any>

export interface Response extends ApiResponse {
  body: ResponseBody
}

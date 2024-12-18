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
import * as Common from '../_types/_common'
import * as Global from '../_types/_global'
import * as Indices_Common from '../_types/indices._common'

export interface Indices_PutSettings_Request extends Global.Params {
  allow_no_indices?: boolean;
  body: Indices_Common.IndexSettings;
  cluster_manager_timeout?: Common.Duration;
  expand_wildcards?: Common.ExpandWildcards;
  flat_settings?: boolean;
  ignore_unavailable?: boolean;
  index?: Common.Indices;
  master_timeout?: Common.Duration;
  preserve_existing?: boolean;
  timeout?: Common.Duration;
}

export interface Indices_PutSettings_Response extends ApiResponse {
  body: Indices_PutSettings_ResponseBody;
}

export type Indices_PutSettings_ResponseBody = Common.AcknowledgedResponseBase


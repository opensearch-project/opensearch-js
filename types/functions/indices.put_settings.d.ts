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
import * as Indices_Common from '../components/indices._common'
import * as Common from '../components/_common'

export interface Request extends Global.Params {
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

export type ResponseBody = Common.AcknowledgedResponseBase

export interface Response extends ApiResponse {
  body: ResponseBody
}

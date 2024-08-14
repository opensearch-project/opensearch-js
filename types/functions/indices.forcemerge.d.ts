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

export interface Request extends Global.Params {
  allow_no_indices?: boolean;
  expand_wildcards?: Common.ExpandWildcards;
  flush?: boolean;
  ignore_unavailable?: boolean;
  index?: Common.Indices;
  max_num_segments?: number;
  only_expunge_deletes?: boolean;
  primary_only?: boolean;
  wait_for_completion?: boolean;
}

export interface ResponseBody extends Common.ShardsOperationResponseBase {
  task?: string;
}

export interface Response extends ApiResponse {
  body: ResponseBody
}

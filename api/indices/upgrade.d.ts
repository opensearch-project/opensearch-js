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

export type Indices_Upgrade_Request = Global.Params & {
  allow_no_indices?: boolean;
  body?: Indices_Common.UpgradeRequest;
  expand_wildcards?: Common.ExpandWildcards;
  ignore_unavailable?: boolean;
  index?: string[];
  only_ancient_segments?: boolean;
  wait_for_completion?: boolean;
}

export type Indices_Upgrade_Response = ApiResponse & {
  body: Indices_Upgrade_ResponseBody;
}

export type Indices_Upgrade_ResponseBody = Indices_Common.IndexPostUpgradeStatus


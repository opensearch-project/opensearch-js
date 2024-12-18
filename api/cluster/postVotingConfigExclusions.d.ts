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

export interface Cluster_PostVotingConfigExclusions_Request extends Global.Params {
  node_ids?: Common.Ids;
  node_names?: Common.Names;
  timeout?: Common.Duration;
}

export interface Cluster_PostVotingConfigExclusions_Response extends ApiResponse {
  body: Cluster_PostVotingConfigExclusions_ResponseBody;
}

export type Cluster_PostVotingConfigExclusions_ResponseBody = Record<string, any>


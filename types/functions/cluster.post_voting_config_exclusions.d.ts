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

export interface Cluster_PostVotingConfigExclusions_Request extends Global.Params {
  node_ids?: Common.Ids;
  node_names?: Common.Names;
  timeout?: Common.Duration;
}

export type Cluster_PostVotingConfigExclusions_ResponseBody = Record<string, any>

export interface Cluster_PostVotingConfigExclusions_Response extends ApiResponse {
  body: Cluster_PostVotingConfigExclusions_ResponseBody
}

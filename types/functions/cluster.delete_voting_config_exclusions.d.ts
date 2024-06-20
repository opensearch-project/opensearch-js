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

export interface Cluster_DeleteVotingConfigExclusions_Request extends Global.Params {
  wait_for_removal?: boolean;
}

export type Cluster_DeleteVotingConfigExclusions_ResponseBody = Record<string, any>

export interface Cluster_DeleteVotingConfigExclusions_Response extends ApiResponse {
  body: Cluster_DeleteVotingConfigExclusions_ResponseBody
}

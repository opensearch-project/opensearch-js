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
import * as CommonDuration from '../_types/_common___Duration'
import * as CommonIds from '../_types/_common___Ids'
import * as CommonNames from '../_types/_common___Names'
import * as Global from '../_types/_global'

export type Cluster_PostVotingConfigExclusions_Request = Global.Params & {
  node_ids?: CommonIds.undefined;
  node_names?: CommonNames.undefined;
  timeout?: CommonDuration.undefined;
}

export type Cluster_PostVotingConfigExclusions_Response = ApiResponse & {
  body: Cluster_PostVotingConfigExclusions_ResponseBody;
}

export type Cluster_PostVotingConfigExclusions_ResponseBody = Record<string, any>


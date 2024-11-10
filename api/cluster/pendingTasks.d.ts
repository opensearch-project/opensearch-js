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
import * as Cluster_PendingTasksPendingTask from '../_types/cluster.pending_tasks___PendingTask'
import * as CommonDuration from '../_types/_common___Duration'
import * as Global from '../_types/_global'

export type Cluster_PendingTasks_Request = Global.Params & {
  cluster_manager_timeout?: CommonDuration.undefined;
  local?: boolean;
  master_timeout?: CommonDuration.undefined;
}

export type Cluster_PendingTasks_Response = ApiResponse & {
  body: Cluster_PendingTasks_ResponseBody;
}

export type Cluster_PendingTasks_ResponseBody = {
  tasks: Cluster_PendingTasksPendingTask.undefined[];
}


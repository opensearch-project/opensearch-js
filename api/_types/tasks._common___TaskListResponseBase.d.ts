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

import * as CommonErrorCause from './_common___ErrorCause'
import * as CommonTaskFailure from './_common___TaskFailure'
import * as Tasks_CommonTaskExecutingNode from './tasks._common___TaskExecutingNode'
import * as Tasks_CommonTaskInfos from './tasks._common___TaskInfos'

export type undefined = {
  node_failures?: CommonErrorCause.undefined[];
  nodes?: Record<string, Tasks_CommonTaskExecutingNode.undefined>;
  task_failures?: CommonTaskFailure.undefined[];
  tasks?: Tasks_CommonTaskInfos.undefined;
}


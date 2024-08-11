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

import * as Common from './_common'

export interface TasksRecord {
  action?: string;
  description?: string;
  id?: Common.Id;
  ip?: string;
  node?: string;
  node_id?: Common.NodeId;
  parent_task_id?: string;
  port?: string;
  running_time?: string;
  running_time_ns?: string;
  start_time?: string;
  task_id?: Common.Id;
  timestamp?: string;
  type?: string;
  version?: Common.VersionString;
  x_opaque_id?: string;
}


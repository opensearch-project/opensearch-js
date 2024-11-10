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

import * as CommonId from './_common___Id'
import * as CommonNodeId from './_common___NodeId'
import * as CommonVersionString from './_common___VersionString'

export type undefined = {
  action?: string;
  description?: string;
  id?: CommonId.undefined;
  ip?: string;
  node?: string;
  node_id?: CommonNodeId.undefined;
  parent_task_id?: string;
  port?: string;
  running_time?: string;
  running_time_ns?: string;
  start_time?: string;
  task_id?: CommonId.undefined;
  timestamp?: string;
  type?: string;
  version?: CommonVersionString.undefined;
  x_opaque_id?: string;
}


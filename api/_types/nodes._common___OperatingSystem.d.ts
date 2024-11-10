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

import * as Nodes_CommonCgroup from './nodes._common___Cgroup'
import * as Nodes_CommonCpu from './nodes._common___Cpu'
import * as Nodes_CommonExtendedMemoryStats from './nodes._common___ExtendedMemoryStats'
import * as Nodes_CommonMemoryStats from './nodes._common___MemoryStats'

export type undefined = {
  cgroup?: Nodes_CommonCgroup.undefined;
  cpu?: Nodes_CommonCpu.undefined;
  mem?: Nodes_CommonExtendedMemoryStats.undefined;
  swap?: Nodes_CommonMemoryStats.undefined;
  timestamp?: number;
}


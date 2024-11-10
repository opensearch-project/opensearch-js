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

import * as Nodes_CommonGarbageCollector from './nodes._common___GarbageCollector'
import * as Nodes_CommonJvmClasses from './nodes._common___JvmClasses'
import * as Nodes_CommonJvmMemoryStats from './nodes._common___JvmMemoryStats'
import * as Nodes_CommonJvmThreads from './nodes._common___JvmThreads'
import * as Nodes_CommonNodeBufferPool from './nodes._common___NodeBufferPool'

export type undefined = {
  buffer_pools?: Record<string, Nodes_CommonNodeBufferPool.undefined>;
  classes?: Nodes_CommonJvmClasses.undefined;
  gc?: Nodes_CommonGarbageCollector.undefined;
  mem?: Nodes_CommonJvmMemoryStats.undefined;
  threads?: Nodes_CommonJvmThreads.undefined;
  timestamp?: number;
  uptime?: string;
  uptime_in_millis?: number;
}


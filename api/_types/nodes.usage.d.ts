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

import * as Common from './_common'
import * as Nodes_Common from './nodes._common'

export type Metric = '_all' | 'aggregations' | 'rest_actions'

export type NodeUsage = {
  aggregations?: Record<string, Record<string, any>>;
  rest_actions?: Record<string, number>;
  since: Common.EpochTimeUnitMillis;
  timestamp: Common.EpochTimeUnitMillis;
}

export type ResponseBase = Nodes_Common.NodesResponseBase & {
  cluster_name: Common.Name;
  nodes: Record<string, NodeUsage>;
}


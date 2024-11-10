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

import * as AsynchronousSearch_CommonNodesStats from './asynchronous_search._common___NodesStats'
import * as CommonNodeStatistics from './_common___NodeStatistics'

export type undefined = {
  _nodes?: CommonNodeStatistics.undefined;
  cluster_name?: string;
  nodes?: Record<string, AsynchronousSearch_CommonNodesStats.undefined>;
}


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

import * as Insights_CommonMeasurements from './insights._common___Measurements'
import * as Insights_CommonSource from './insights._common___Source'
import * as Insights_CommonTaskResourceUsages from './insights._common___TaskResourceUsages'

export type undefined = {
  indices?: string[];
  labels?: Record<string, any>;
  measurements?: Insights_CommonMeasurements.undefined;
  node_id?: string;
  phase_latency_map?: Record<string, any>;
  query_hashcode?: string;
  search_type?: string;
  source?: Insights_CommonSource.undefined;
  task_resource_usages?: Insights_CommonTaskResourceUsages.undefined[];
  timestamp?: number;
  total_shards?: number;
}


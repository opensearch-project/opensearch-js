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

import * as Common_QueryDslQueryContainer from './_common.query_dsl___QueryContainer'
import * as Transforms_CommonGroupsConfigItem from './transforms._common___GroupsConfigItem'
import * as Transforms_CommonMetricsConfigItem from './transforms._common___MetricsConfigItem'
import * as Transforms_CommonSchedule from './transforms._common___Schedule'

export type undefined = {
  aggregations?: Transforms_CommonMetricsConfigItem.undefined[];
  continuous?: boolean;
  data_selection_query?: Common_QueryDslQueryContainer.undefined;
  description?: string;
  enabled?: boolean;
  enabled_at?: number;
  groups?: Transforms_CommonGroupsConfigItem.undefined[];
  metadata_id?: string;
  page_size?: number;
  roles?: string[];
  schedule?: Transforms_CommonSchedule.undefined;
  schema_version?: number;
  source_index?: string;
  target_index?: string;
  transform_id?: string;
  updated_at?: string;
}


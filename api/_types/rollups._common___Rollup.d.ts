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

import * as Rollups_CommonDimensionsConfigItem from './rollups._common___DimensionsConfigItem'
import * as Rollups_CommonMetricsConfigItem from './rollups._common___MetricsConfigItem'
import * as Rollups_CommonSchedule from './rollups._common___Schedule'

export type undefined = {
  continuous?: boolean;
  delay?: number;
  description?: string;
  dimensions?: Rollups_CommonDimensionsConfigItem.undefined[];
  enabled?: boolean;
  enabled_time?: number;
  error_notification?: string;
  last_updated_time?: number;
  metadata_id?: string;
  metrics?: Rollups_CommonMetricsConfigItem.undefined[];
  page_size?: number;
  rollup_id?: string;
  schedule?: Rollups_CommonSchedule.undefined;
  schema_version?: number;
  source_index?: string;
  target_index?: string;
}


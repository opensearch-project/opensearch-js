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

import * as Common_MappingTimeSeriesMetricType from './_common.mapping___TimeSeriesMetricType'
import * as CommonIndexName from './_common___IndexName'
import * as CommonIndices from './_common___Indices'
import * as CommonMetadata from './_common___Metadata'

export type undefined = {
  aggregatable: boolean;
  indices?: CommonIndices.undefined;
  meta?: CommonMetadata.undefined;
  metadata_field?: boolean;
  metric_conflicts_indices?: CommonIndexName.undefined[];
  non_aggregatable_indices?: CommonIndices.undefined;
  non_dimension_indices?: CommonIndexName.undefined[];
  non_searchable_indices?: CommonIndices.undefined;
  searchable: boolean;
  time_series_dimension?: boolean;
  time_series_metric?: Common_MappingTimeSeriesMetricType.undefined;
  type: string;
}


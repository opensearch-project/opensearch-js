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

import * as Common_QueryDsl from './_common.query_dsl'

export interface ContinuousStats {
  documents_behind?: Record<string, number>;
  last_timestamp?: number;
}

export interface DateHistogramGroup {
  calendar_interval?: string;
  fixed_interval?: string;
  source_field?: string;
  target_field?: string;
  timezone?: string;
}

export interface Explain {
  metadata_id?: string;
  transform_metadata?: TransformMetadata;
}

export type ExplainResponse = Record<string, Explain>

export interface ExplainStats {
  documents_indexed?: number;
  documents_processed?: number;
  index_time_in_millis?: number;
  pages_processed?: number;
  search_time_in_millis?: number;
}

export interface GroupsConfigItem {
  date_histogram?: DateHistogramGroup;
  histogram?: HistogramGroup;
  terms?: TermsGroup;
}

export interface HistogramGroup {
  interval?: string;
  source_field?: string;
  target_field?: string;
}

export interface MetricsConfigItem {
  metrics?: MetricsConfigMetrics[];
  source_field?: string;
  target_field?: string;
}

export interface MetricsConfigMetrics {
  avg?: Record<string, any>;
  max?: Record<string, any>;
  min?: Record<string, any>;
  sum?: Record<string, any>;
  value_count?: Record<string, any>;
}

export interface Preview {
  documents?: Record<string, any>[];
}

export interface Schedule {
  interval: ScheduleInterval;
}

export interface ScheduleInterval {
  period?: number;
  start_time?: number;
  unit?: string;
}

export interface TermsGroup {
  source_field?: string;
  target_field?: string;
}

export interface Transform {
  aggregations?: MetricsConfigItem[];
  continuous?: boolean;
  data_selection_query?: Common_QueryDsl.QueryContainer;
  description?: string;
  enabled?: boolean;
  enabled_at?: number;
  groups?: GroupsConfigItem[];
  metadata_id?: string;
  page_size?: number;
  roles?: string[];
  schedule?: Schedule;
  schema_version?: number;
  source_index?: string;
  target_index?: string;
  transform_id?: string;
  updated_at?: string;
}

export interface TransformEntity {
  _id?: string;
  _primaryTerm?: number;
  _seqNo?: number;
  transform?: Transform;
}

export interface TransformMetadata {
  continuous_stats?: ContinuousStats;
  failure_reason?: string;
  last_updated_at?: number;
  stats?: ExplainStats;
  status?: string;
  transform_id?: string;
}

export interface TransformsResponse {
  total_transforms?: number;
  transforms?: TransformEntity[];
}

